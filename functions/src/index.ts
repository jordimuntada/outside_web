
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

interface QuoteRequest {
  nombre: string;
  email: string;
  mensaje?: string;
  consentimiento: boolean;
  timestamp: FirebaseFirestore.Timestamp;
}

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: functions.config().smtp.host,
  port: parseInt(functions.config().smtp.port),
  secure: functions.config().smtp.secure === 'true',
  auth: {
    user: functions.config().smtp.user,
    pass: functions.config().smtp.password,
  },
});

// Function to send email when a new quote request is created
export const sendQuoteRequestEmail = functions.firestore
  .document('quoteRequests/{requestId}')
  .onCreate(async (snapshot, context) => {
    const quoteRequestData = snapshot.data() as QuoteRequest;
    const requestId = context.params.requestId;
    
    try {
      // Format date
      const date = quoteRequestData.timestamp 
        ? new Date(quoteRequestData.timestamp.toDate()).toLocaleString('es-ES')
        : new Date().toLocaleString('es-ES');
      
      // Create email content
      const mailOptions = {
        from: functions.config().smtp.from,
        to: 'jordi.m@pdvwood.com',
        subject: 'Nueva solicitud de presupuesto',
        html: `
          <h2>Nueva solicitud de presupuesto</h2>
          <p><strong>Nombre:</strong> ${quoteRequestData.nombre}</p>
          <p><strong>Email:</strong> ${quoteRequestData.email}</p>
          <p><strong>Mensaje:</strong> ${quoteRequestData.mensaje || 'No se proporcionó mensaje'}</p>
          <p><strong>Fecha:</strong> ${date}</p>
          <p><strong>Consentimiento:</strong> ${quoteRequestData.consentimiento ? 'Sí' : 'No'}</p>
          <p><strong>ID de solicitud:</strong> ${requestId}</p>
        `,
      };
      
      // Send email
      await transporter.sendMail(mailOptions);
      
      // Update document to mark email as sent
      await admin.firestore().collection('quoteRequests').doc(requestId).update({
        emailSent: true,
        emailSentAt: admin.firestore.FieldValue.serverTimestamp()
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Update document to mark email as failed
      await admin.firestore().collection('quoteRequests').doc(requestId).update({
        emailError: true,
        emailErrorMessage: error.message
      });
      
      return { error: error.message };
    }
  });
