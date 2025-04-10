
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface QuoteRequestData {
  nombre: string;
  email: string;
  mensaje?: string;
  consentimiento: boolean;
}

class QuoteService {
  private readonly COLLECTION_NAME = "quoteRequests";
  
  // Submit quote request data to Firestore
  async submitQuoteRequest(data: QuoteRequestData): Promise<boolean> {
    try {
      // Add document to Firestore with server timestamp
      await addDoc(collection(db, this.COLLECTION_NAME), {
        ...data,
        timestamp: serverTimestamp()
      });
      
      return true;
    } catch (error) {
      console.error("Error submitting quote request:", error);
      return false;
    }
  }
}

// Export singleton instance
export const quoteService = new QuoteService();
