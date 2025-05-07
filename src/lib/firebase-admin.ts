
  import * as admin from 'firebase-admin';
  //import * as serviceAccount from '../../config/firebase-service-account.json';
  
  //const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);

  // change serviceAccount assignment if all ENV variables are not in a jso format
   const serviceAccount = {
     type: process.env.FIREBASE_TYPE,
     project_id: process.env.FIREBASE_PROJECT_ID,
     private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID, 
     private_key: process.env.FIREBASE_PRIVATE_KEY,
     client_email: process.env.FIREBASE_CLIENT_EMAIL,
     client_id: process.env.FIREBASE_CLIENT_ID,
     auth_uri: process.env.FIREBASE_AUTH_URI,
     token_uri: process.env.FIREBASE_TOKEN_URI,
     auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
     client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
   };




  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
  }
  
  const db = admin.firestore();
  const auth = admin.auth();
  const storage = admin.storage();
  const realTimeDb = admin.database();
  
  export { admin, db, auth, storage, realTimeDb };
  

