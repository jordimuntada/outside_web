
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  consent: boolean;
  date: Date;
}

export interface ContactSubmission extends Omit<ContactFormData, "date"> {
  date: Timestamp;
}

class ContactService {
  private readonly COLLECTION_NAME = "contactSubmissions";
  
  // Submit contact form data to Firestore
  async submitContactForm(data: Omit<ContactFormData, "date">): Promise<boolean> {
    try {
      // Add document to Firestore with current date
      await addDoc(collection(db, this.COLLECTION_NAME), {
        ...data,
        date: Timestamp.now()
      });
      
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
