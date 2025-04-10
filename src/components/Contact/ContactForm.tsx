import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { dir } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
    consent?: string;
  }>({});
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
      newErrors.name = 'Este campo es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Este campo es obligatorio';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'La dirección de correo electrónico no es válida';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'Este campo es obligatorio';
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
    
    setFormStatus('submitting');
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '', consent: false });
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6 md:p-8 card' dir={dir}>
      {formStatus === 'success' ? (
        <div className='text-center py-8'>
          <div className='text-5xl mb-4 text-accent'>✅</div>
          <h3 className='text-2xl font-bold text-primary mb-4'>¡Gracias! Nos pondremos en contacto lo antes posible.</h3>
          <button
            onClick={() => setFormStatus('idle')}
            className='mt-4 btn btn-primary px-6 py-2 rounded-md'
          >
            Solicitar presupuesto
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='name' className='form-label'>
              Nombre *
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${
                errors.name ? 'border-destructive focus:ring-destructive/50' : ''
              }`}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id='name-error' className='form-error'>{errors.name}</p>}
          </div>
          
          <div className='mb-6'>
            <label htmlFor='email' className='form-label'>
              Email *
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${
                errors.email ? 'border-destructive focus:ring-destructive/50' : ''
              }`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id='email-error' className='form-error'>{errors.email}</p>}
          </div>
          
          <div className='mb-6'>
            <label htmlFor='message' className='form-label'>
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className='form-input'
            ></textarea>
          </div>
          
          <div className='mb-6'>
            <div className='flex items-start'>
              <input
                type='checkbox'
                id='consent'
                name='consent'
                checked={formData.consent}
                onChange={handleCheckboxChange}
                className='mt-1 h-4 w-4 text-accent focus:ring-accent border-input rounded'
                aria-invalid={errors.consent ? 'true' : 'false'}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
              />
              <label htmlFor='consent' className='ml-2 text-sm text-foreground/80'>
                Estoy de acuerdo en que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento. *
              </label>
            </div>
            {errors.consent && <p id='consent-error' className='form-error'>{errors.consent}</p>}
          </div>
          
          <p className='text-foreground/60 text-sm mb-6'>* Indica los campos obligatorios</p>
          
          <button
            type='submit'
            disabled={formStatus === 'submitting'}
            className='w-full btn btn-primary px-4 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-300'
            aria-busy={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? '...' : 'Solicitar presupuesto'}
          </button>
          
          {formStatus === 'error' && (
            <p className='text-destructive text-center mt-4'>Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.</p>
          )}
        </form>
      )}
    </div>
  );
}