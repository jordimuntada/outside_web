import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t, dir } = useLanguage();
  
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
    <div className='bg-white rounded-lg shadow-md p-6 md:p-8' dir={dir}>
      {formStatus === 'success' ? (
        <div className='text-center py-8'>
          <div className='text-5xl mb-4'>✅</div>
          <h3 className='text-2xl font-bold text-green-600 mb-4'>¡Gracias! Nos pondremos en contacto lo antes posible.</h3>
          <button
            onClick={() => setFormStatus('idle')}
            className='mt-4 bg-[#D4A373] hover:bg-[#C39B6A] active:bg-[#B38E60] text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:ring-offset-2'
          >
            Solicitar presupuesto
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='name' className='block text-gray-800 font-medium mb-2'>
              Nombre *
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#D4A373]'
              }`}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id='name-error' className='text-red-600 text-sm mt-1'>{errors.name}</p>}
          </div>
          
          <div className='mb-6'>
            <label htmlFor='email' className='block text-gray-800 font-medium mb-2'>
              Email *
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#D4A373]'
              }`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id='email-error' className='text-red-600 text-sm mt-1'>{errors.email}</p>}
          </div>
          
          <div className='mb-6'>
            <label htmlFor='message' className='block text-gray-800 font-medium mb-2'>
              Mensaje
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
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
                className='mt-1 h-4 w-4 text-[#D4A373] focus:ring-[#D4A373] border-gray-300 rounded'
                aria-invalid={errors.consent ? 'true' : 'false'}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
              />
              <label htmlFor='consent' className='ml-2 text-gray-800 text-sm'>
                Estoy de acuerdo en que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento. *
              </label>
            </div>
            {errors.consent && <p id='consent-error' className='text-red-600 text-sm mt-1'>{errors.consent}</p>}
          </div>
          
          <p className='text-gray-600 text-sm mb-6'>* Indica los campos obligatorios</p>
          
          <button
            type='submit'
            disabled={formStatus === 'submitting'}
            className={`w-full bg-[#D4A373] hover:bg-[#C39B6A] active:bg-[#B38E60] text-white px-4 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:ring-offset-2 ${
              formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {formStatus === 'submitting' ? '...' : 'Solicitar presupuesto'}
          </button>
          
          {formStatus === 'error' && (
            <p className='text-red-600 text-center mt-4'>Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.</p>
          )}
        </form>
      )}
    </div>
  );
}