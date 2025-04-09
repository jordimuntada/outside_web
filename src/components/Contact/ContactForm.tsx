
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t, dir } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
    consent?: string;
  }>({});
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      message?: string;
      consent?: string;
    } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t("formRequiredField");
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t("formRequiredField");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("formInvalidEmail");
    }
    
    if (!formData.consent) {
      newErrors.consent = t("formRequiredField");
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus("submitting");
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "", consent: false });
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8" dir={dir}>
      {formStatus === "success" ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-green-600 mb-4">{t("formSuccess")}</h3>
          <button
            onClick={() => setFormStatus("idle")}
            className="mt-4 bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            {t("formSubmit")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              {t("formName")} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-amber-200"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              {t("formEmail")} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-amber-200"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              {t("formMessage")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
            ></textarea>
          </div>
          
          <div className="mb-6">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                className="mt-1"
              />
              <label htmlFor="consent" className="ml-2 text-gray-700">
                {t("formConsent")} *
              </label>
            </div>
            {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
          </div>
          
          <p className="text-gray-500 text-sm mb-6">{t("formRequired")}</p>
          
          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className={`w-full bg-amber-700 hover:bg-amber-600 text-white px-4 py-3 rounded-md font-medium transition-colors ${
              formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {formStatus === "submitting" ? "..." : t("formSubmit")}
          </button>
          
          {formStatus === "error" && (
            <p className="text-red-500 text-center mt-4">{t("formError")}</p>
          )}
        </form>
      )}
    </div>
  );
}
