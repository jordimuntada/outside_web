<div>
  {formStatus === 'success' ? (
    <div className='text-center py-8' role="status">
      <div className='text-5xl mb-4 text-accent'>✅</div>
      <h3 className='text-2xl font-bold text-primary mb-4'>{t('formSuccess')}</h3>
      <button
        onClick={() => setFormStatus('idle')}
        className='mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90'
      >
        {t('formNewSubmission')}
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} aria-live="polite">
      <div className='mb-6'>
        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
          {t('formName')} *
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-300 focus:ring-primary/50'
          } focus:outline-none focus:ring-2`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          required
        />
        {errors.name && <p id='name-error' className='mt-1 text-sm text-red-600'>{errors.name}</p>}
      </div>
      
      <div className='mb-6'>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
          {t('formEmail')} *
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-300 focus:ring-primary/50'
          } focus:outline-none focus:ring-2`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          required
        />
        {errors.email && <p id='email-error' className='mt-1 text-sm text-red-600'>{errors.email}</p>}
      </div>
      
      <div className='mb-6'>
        <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
          {t('formMessage')}
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
        ></textarea>
      </div>
      
      <div className='mb-6'>
        <div className='flex items-start'>
          <input
            type='checkbox'
            id='consent'
            name='consent'
            checked={formData.consent || false}
            onChange={handleCheckboxChange}
            className='mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded'
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            required
          />
          <label htmlFor='consent' className='ml-2 text-sm text-gray-700'>
            {t('formConsent')} *
          </label>
        </div>
        {errors.consent && <p id='consent-error' className='mt-1 text-sm text-red-600'>{errors.consent}</p>}
      </div>
      
      <p className='text-gray-500 text-sm mb-6'>{t('formRequired')}</p>
      
      <button
        type='submit'
        disabled={formStatus === 'submitting'}
        className='w-full bg-primary text-white px-4 py-3 rounded-md font-medium shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-70'
        aria-busy={formStatus === 'submitting'}
      >
        {formStatus === 'submitting' ? t('formSubmitting') : t('formSubmit')}
      </button>
      
      {formStatus === 'error' && (
        <p className='text-red-600 text-center mt-4' role="alert">{t('formError')}</p>
      )}
    </form>
  )}
</div>