
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  consent: boolean;
  recaptchaToken?: string;
  date: Date;
}

export interface ContactSubmission extends Omit<ContactFormData, "date" | "recaptchaToken"> {
  date: Timestamp;
}

class ContactService {
  private readonly COLLECTION_NAME = "contactSubmissions";
  
  // Submit contact form data to Firestore
  async submitContactForm(data: Omit<ContactFormData, "date">): Promise<boolean> {
    try {
      // Verify reCAPTCHA token if provided
      if (data.recaptchaToken) {
        // In a production environment, you would typically verify the token server-side
        // For example, by calling a serverless function or API route
        // This is a simplified implementation
        console.log("reCAPTCHA token received:", data.recaptchaToken);
        
        // Remove the token before storing in Firestore
        const { recaptchaToken, ...formData } = data;
        
        // Add document to Firestore with current date
        await addDoc(collection(db, this.COLLECTION_NAME), {
          ...formData,
          date: Timestamp.now()
        });
      } else {
        // If no token is provided, just store the data
        // This should not happen if form validation is working correctly
        await addDoc(collection(db, this.COLLECTION_NAME), {
          ...data,
          date: Timestamp.now()
        });
      }
      
      return true;
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return false;
    }
  }

  // Get all submissions (for admin purposes)
  async getSubmissions(): Promise<ContactSubmission[]> {
    try {
      const q = query(
        collection(db, this.COLLECTION_NAME),
        orderBy("date", "desc")
      );
      
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data() as ContactSubmission;
        return {
          ...data,
          id: doc.id
        };
      });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return [];
    }
  }
}

// Export singleton instance
export const contactService = new ContactService();
