
  import * as admin from 'firebase-admin';
  //import * as serviceAccount from '../../config/firebase-service-account.json';
  
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);

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
  

