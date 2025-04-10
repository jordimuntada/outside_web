
// Mock service for contact form submissions
// This will be replaced with Firebase implementation when Firebase is connected

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  date: Date;
}

class ContactService {
  // Store submissions in memory (will be replaced with Firebase)
  private submissions: ContactFormData[] = [];

  // Submit contact form data
  async submitContactForm(data: Omit<ContactFormData, "date">): Promise<boolean> {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add submission with current date
      const submission: ContactFormData = {
        ...data,
        date: new Date()
      };
      
      // Store in memory (will be replaced with Firestore)
      this.submissions.push(submission);
      
      // Log submission (for development purposes)
      console.log("Contact form submission:", submission);
      
      return true;
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return false;
    }
  }

  // Get all submissions (for testing purposes)
  getSubmissions(): ContactFormData[] {
    return [...this.submissions];
  }
}

// Export singleton instance
export const contactService = new ContactService();
