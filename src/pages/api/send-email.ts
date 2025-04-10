
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import nodemailer from 'nodemailer';

// Initialize Firebase Admin if not already initialized
if (!getApps().length) {
  const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}'
  );
  
  initializeApp({
    credential: cert(serviceAccount)
  });
}

const db = getFirestore();

type EmailData = {
  nombre: string;
  email: string;
  mensaje?: string;
  consentimiento: boolean;
  timestamp: FirebaseFirestore.Timestamp;
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { id } = req.body;
    
    if (!id) {
      return res.status(400).json({ message: 'Quote request ID is required' });
    }
    
    // Get the quote request from Firestore
    const quoteRequestDoc = await db.collection('quoteRequests').doc(id).get();
    
    if (!quoteRequestDoc.exists) {
      return res.status(404).json({ message: 'Quote request not found' });
    }
    
    const quoteRequestData = quoteRequestDoc.data() as EmailData;
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    // Format date
    const date = quoteRequestData.timestamp 
      ? new Date(quoteRequestData.timestamp.toDate()).toLocaleString('es-ES')
      : new Date().toLocaleString('es-ES');
    
    // Create email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: 'jordi.m@pdvwood.com',
      subject: 'Nueva solicitud de presupuesto',
      html: `
        <h2>Nueva solicitud de presupuesto</h2>
        <p><strong>Nombre:</strong> ${quoteRequestData.nombre}</p>
        <p><strong>Email:</strong> ${quoteRequestData.email}</p>
        <p><strong>Mensaje:</strong> ${quoteRequestData.mensaje || 'No se proporcionó mensaje'}</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Consentimiento:</strong> ${quoteRequestData.consentimiento ? 'Sí' : 'No'}</p>
      `,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Update document to mark email as sent
    await db.collection('quoteRequests').doc(id).update({
      emailSent: true,
      emailSentAt: new Date()
    });
    
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email', error });
  }
}
