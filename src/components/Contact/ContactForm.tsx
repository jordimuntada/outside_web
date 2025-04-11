
import React, { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactService } from '@/services/contactService';
import ReCAPTCHA from "react-google-recaptcha";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
  consentimiento: boolean;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  consentimiento?: string;
  recaptcha?: string;
}

const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;

export default function ContactForm() {
  const { t } = useLanguage();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
    consentimiento: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = t("formNameRequired");
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = t("formEmailRequired");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("formEmailInvalid");
      isValid = false;
    }

    // Validate consentimiento
    if (!formData.consentimiento) {
      newErrors.consentimiento = t("formConsentRequired");
      isValid = false;
    }

    // Validate reCAPTCHA
    if (!recaptchaValue) {
      newErrors.recaptcha = t("formRecaptchaRequired") || "Please verify you are not a robot";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
    if (errors.recaptcha) {
      setErrors((prev) => ({ ...prev, recaptcha: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');
    
    try {
      // Use the contactService to submit the form data
      const success = await contactService.submitContactForm({
        name: formData.nombre,
        email: formData.email,
        message: formData.mensaje,
        consent: formData.consentimiento,
        recaptchaToken: recaptchaValue || ""
      });
      
      if (success) {
        setFormStatus('success');
        
        // Reset form
        setFormData({
          nombre: '',
          email: '',
          mensaje: '',
          consentimiento: false,
        });
        setRecaptchaValue(null);
        // Reset reCAPTCHA
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  const resetForm = () => {
    setFormStatus("idle");
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
      consentimiento: false,
    });
    setRecaptchaValue(null);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setErrors({});
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      {formStatus === "success" ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4 text-green-500">✅</div>
          <h3 className="text-2xl font-bold text-primary mb-4">{t("formSuccess")}</h3>
          <button
            onClick={resetForm}
            className="mt-4 bg-primary text-black font-medium px-6 py-2 rounded-md hover:bg-primary/90 transition-all duration-300"
          >
            {t("formSubmitAnother")}
          </button>
        </div>
      ) : (
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              {t("formName")} Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
                errors.nombre ? "border-red-500 focus:ring-red-500/50" : "border-gray-300 focus:ring-primary/50"
              } focus:outline-none focus:ring-2`}
              placeholder={t("formName")}
              aria-invalid={errors.nombre ? "true" : "false"}
              aria-describedby={errors.nombre ? "nombre-error" : undefined}
            />
            {errors.nombre && <p id="nombre-error" className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t("formEmail")} Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
                errors.email ? "border-red-500 focus:ring-red-500/50" : "border-gray-300 focus:ring-primary/50"
              } focus:outline-none focus:ring-2`}
              placeholder={t("formEmail")}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
              {t("formMessage")}
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder={t("formMessage")}
            ></textarea>
          </div>
          
          <div className="mb-6">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consentimiento"
                name="consentimiento"
                checked={formData.consentimiento}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                aria-invalid={errors.consentimiento ? "true" : "false"}
                aria-describedby={errors.consentimiento ? "consentimiento-error" : undefined}
              />
              <label htmlFor="consentimiento" className="ml-2 text-sm text-gray-700">
                {t("formConsent")} Estoy de acuerdo en que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento.

              </label>
            </div>
            {errors.consentimiento && <p id="consentimiento-error" className="mt-1 text-sm text-red-600">{errors.consentimiento}</p>}
          </div>
          
          <div className="mb-6">
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
            </div>
            {errors.recaptcha && <p className="mt-1 text-sm text-red-600 text-center">{errors.recaptcha}</p>}
          </div>
          
          <p className="text-gray-500 text-sm mb-6">{t("formRequired")}</p>
          
          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full bg-primary text-black font-medium px-4 py-3 rounded-md shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-70"
            aria-busy={formStatus === "submitting"}
          >
            {formStatus === "submitting" ? t("formSubmitting") : t("formSubmit")}
            Enviar
          </button>
          
          {formStatus === "error" && (
            <p className="text-red-600 text-center mt-4">{t("formError")}</p>
          )}
        </form>
      )}
    </div>
  );
}
