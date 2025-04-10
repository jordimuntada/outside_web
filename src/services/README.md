
# Services Directory

This directory contains service modules that handle business logic and external API interactions.

## Current Services:

### Contact Service
- `contactService.ts`: Handles contact form submissions
  - Currently implemented as a mock service that stores submissions in memory
  - Will be replaced with Firebase implementation when Firebase is connected

## Firebase Integration (Future)

When Firebase is connected, the following changes will be made:

1. Update `contactService.ts` to use Firestore:
   ```typescript
   import { db } from '@/lib/firebase';
   import { collection, addDoc } from 'firebase/firestore';

   // Submit contact form data
   async submitContactForm(data: Omit<ContactFormData, "date">): Promise<boolean> {
     try {
       const submission: ContactFormData = {
         ...data,
         date: new Date()
       };
       
       await addDoc(collection(db, 'contactSubmissions'), submission);
       return true;
     } catch (error) {
       console.error("Error submitting contact form:", error);
       return false;
     }
   }
   ```

2. Add Firestore security rules in `firestore.rules`:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /contactSubmissions/{submission} {
         allow read: if request.auth != null && request.auth.token.admin == true;
         allow write: if true; // Allow anyone to submit the contact form
       }
       
       // Other collections...
     }
   }
   ```

3. Create an admin interface to view submissions (optional)
