// Translations for the website in multiple languages

export type Language = 'es' | 'ca' | 'en' | 'ar';

export type TranslationKey = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'contact' 
  | 'legal' 
  | 'careers'
  | 'requestQuote'
  | 'expertTitle'
  | 'aboutTitle'
  | 'aboutDescription1'
  | 'aboutDescription2'
  | 'aboutDescription3'
  | 'servicesTitle'
  | 'servicesDescription'
  | 'installationTitle'
  | 'installationDescription'
  | 'repairTitle'
  | 'repairDescription'
  | 'maintenanceTitle'
  | 'maintenanceDescription'
  | 'passionTitle'
  | 'passionDescription'
  | 'contactInfo'
  | 'phone'
  | 'email'
  | 'address'
  | 'schedule'
  | 'formName'
  | 'formTitle'
  | 'formEmail'
  | 'formMessage'
  | 'formConsent'
  | 'formRequired'
  | 'formSubmit'
  | 'formSubmitting'
  | 'formError'
  | 'formSuccess'
  | 'formSubmitAnother'
  | 'formNameRequired'
  | 'formEmailRequired'
  | 'formEmailInvalid'
  | 'formConsentRequired'
  | 'formInvalidEmail'
  | 'formRequiredField'
  | 'copyright'
  | 'careersTitle'
  | 'careersDescription'
  | 'joinOurTeam'
  | 'currentOpenings'
  | 'noOpenings'
  | 'applyNow'
  | 'jobLocation'
  | 'jobType'
  | 'jobRequirements'
  | 'jobResponsibilities'
  | 'fullTime'
  | 'partTime'
  | 'contract'
  | 'workWithUs';

export type Translations = {
  [key in Language]: {
    [key in TranslationKey]: string;
  };
};

export const translations: Translations = {
  // Spanish translations (original content)
  es: {
    home: 'Inicio',
    about: 'Sobre nosotros',
    services: 'Nuestros servicios',
    contact: 'Contacto',
    legal: 'Aviso legal',
    careers: 'Empleo',
    requestQuote: 'Solicita un presupuesto',
    expertTitle: 'EXPERTOS EN INSTALACIONES Y MANTENIMIENTO DE CARPINTERÍA DE MADERA',
    aboutTitle: 'Pasión por un trabajo bien hecho',
    aboutDescription1: 'Somos una empresa con amplia experiencia en el campo de instalaciones y mantenimiento de carpintería de madera, tanto residencial como industrial.',
    aboutDescription2: 'Nuestra principal motivación es la satisfacción de nuestros clientes, por lo que trabajamos cuidando al máximo los detalles y la calidad, adaptándonos a sus necesidades.',
    aboutDescription3: 'Nos avalan muchos años de experiencia en el sector, no dudes en contactarnos.',
    servicesTitle: 'Nuestros servicios',
    servicesDescription: 'Contamos con un equipo de expertos para suplir todas las necesidades de instalación y mantenimiento.',
    installationTitle: 'Instalaciones',
    installationDescription: 'Montaje de todo tipo de carpintería de madera: parquet, puertas, armarios, forrado de paredes, muebles de cocina, etc.',
    repairTitle: 'Reparación',
    repairDescription: 'Reparación de averías relacionadas a carpintería de madera. Ofrecemos una respuesta óptima para resolver cada tipo de incidencia.',
    maintenanceTitle: 'Mantenimiento',
    maintenanceDescription: 'Mantenimiento de carpintería de madera en edificios residenciales, hoteles, edificios corporativos, hospitales, cadenas de retail y edificios industriales.',
    passionTitle: 'Pasión por un trabajo bien hecho',
    passionDescription: 'En Outside Instalaciones, nos dedicamos a ofrecer servicios de carpintería de la más alta calidad. Cada proyecto es abordado con atención meticulosa al detalle, asegurando resultados excepcionales que superan las expectativas de nuestros clientes.',
    contactInfo: 'Información de contacto',
    phone: '+34 93 012 95 73',
    email: 'comercial@oitinstalaciones.com',
    address: 'Carrer Apol·lo 10 - 08228. Terrassa, Barcelona',
    schedule: 'Horario',
    formName: 'Nombre',
    formEmail: 'Email',
    formTitle: 'Solicita un presupuesto',
    formMessage: 'Mensaje',
    formConsent: 'Estoy de acuerdo en que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento.',
    formRequired: '* Indica los campos obligatorios',
    formSubmit: 'Solicitar presupuesto',
    formSubmitting: 'Enviando...',
    formError: 'Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.',
    formSuccess: '¡Gracias! Nos pondremos en contacto lo antes posible.',
    formSubmitAnother: 'Enviar otro mensaje',
    formNameRequired: 'Por favor, introduce tu nombre',
    formEmailRequired: 'Por favor, introduce tu email',
    formEmailInvalid: 'La dirección de correo electrónico no es válida',
    formConsentRequired: 'Debes aceptar los términos para continuar',
    formInvalidEmail: 'La dirección de correo electrónico no es válida',
    formRequiredField: 'Este campo es obligatorio',
    copyright: 'Outside Instalaciones y Técnicos S.L. © Copyright 2021 - Todos los derechos reservados.',
    careersTitle: 'Únete a nuestro equipo',
    careersDescription: 'En Outside Instalaciones estamos siempre buscando talentos para unirse a nuestro equipo. Si eres apasionado, comprometido y buscas crecer profesionalmente en el sector de la carpintería de madera, nos encantaría conocerte.',
    joinOurTeam: 'Únete a nuestro equipo',
    currentOpenings: 'Vacantes actuales',
    noOpenings: 'Actualmente no hay vacantes disponibles. Por favor, vuelve a consultar más adelante o envíanos tu CV para futuras oportunidades.',
    applyNow: 'Aplicar ahora',
    jobLocation: 'Ubicación',
    jobType: 'Tipo',
    jobRequirements: 'Requisitos',
    jobResponsibilities: 'Responsabilidades',
    fullTime: 'Tiempo completo',
    partTime: 'Tiempo parcial',
    contract: 'Contrato',
    workWithUs: 'Trabaja con nosotros'
  },
  
  // Catalan translations
  ca: {
    home: 'Inici',
    about: 'Sobre nosaltres',
    services: 'Els nostres serveis',
    contact: 'Contacte',
    legal: 'Avís legal',
    careers: 'Feina',
    requestQuote: 'Sol·licita un pressupost',
    expertTitle: 'EXPERTS EN INSTAL·LACIONS I MANTENIMENT DE FUSTERIA DE FUSTA',
    aboutTitle: 'Passió per una feina ben feta',
    aboutDescription1: 'Som una empresa amb àmplia experiència en el camp d\'instal·lacions i manteniment de fusteria de fusta, tant residencial com industrial.',
    aboutDescription2: 'La nostra principal motivació és la satisfacció dels nostres clients, per això treballem cuidant al màxim els detalls i la qualitat, adaptant-nos a les seves necessitats.',
    aboutDescription3: 'Ens avalen molts anys d\'experiència en el sector, no dubtis a contactar-nos.',
    servicesTitle: 'Els nostres serveis',
    servicesDescription: 'Comptem amb un equip d\'experts per suplir totes les necessitats d\'instal·lació i manteniment.',
    installationTitle: 'Instal·lacions',
    installationDescription: 'Muntatge de tot tipus de fusteria de fusta: parquet, portes, armaris, folrat de parets, mobles de cuina, etc.',
    repairTitle: 'Reparació',
    repairDescription: 'Reparació d\'avaries relacionades amb fusteria de fusta. Oferim una resposta òptima per resoldre cada tipus d\'incidència.',
    maintenanceTitle: 'Manteniment',
    maintenanceDescription: 'Manteniment de fusteria de fusta en edificis residencials, hotels, edificis corporatius, hospitals, cadenes de retail i edificis industrials.',
    passionTitle: 'Passió per una feina ben feta',
    passionDescription: 'A Outside Instal·lacions, ens dediquem a oferir serveis de fusteria de la més alta qualitat. Cada projecte és abordat amb atenció meticulosa al detall, assegurant resultats excepcionals que superen les expectatives dels nostres clients.',
    contactInfo: 'Informació de contacte',
    phone: '+34 93 012 95 73',
    email: 'comercial@oitinstalaciones.com',
    address: 'Carrer Apol·lo 10 - 08228. Terrassa, Barcelona',
    schedule: 'Horari',
    formName: 'Nom',
    formEmail: 'Email',
    formTitle: 'Sol·licita un pressupost',
    formMessage: 'Missatge',
    formConsent: 'Estic d\'acord que aquestes dades s\'emmagatzemin i processin amb la finalitat d\'establir contacte. Sóc conscient que puc revocar el meu consentiment en qualsevol moment.',
    formRequired: '* Indica els camps obligatoris',
    formSubmit: 'Sol·licitar pressupost',
    formSubmitting: 'Enviant...',
    formError: 'Hi ha hagut un error en enviar el seu missatge. Si us plau, intenti-ho de nou.',
    formSuccess: 'Gràcies! Ens posarem en contacte el més aviat possible.',
    formSubmitAnother: 'Enviar un altre missatge',
    formNameRequired: 'Si us plau, introdueix el teu nom',
    formEmailRequired: 'Si us plau, introdueix el teu email',
    formEmailInvalid: 'L\'adreça de correu electrònic no és vàlida',
    formConsentRequired: 'Has d\'acceptar els termes per continuar',
    formInvalidEmail: 'L\'adreça de correu electrònic no és vàlida',
    formRequiredField: 'Aquest camp és obligatori',
    copyright: 'Outside Instalaciones y Técnicos S.L. © Copyright 2021 - Tots els drets reservats.',
    careersTitle: 'Uneix-te al nostre equip',
    careersDescription: 'A Outside Instal·lacions estem sempre buscant talents per unir-se al nostre equip. Si ets apassionat, compromès i busques créixer professionalment en el sector de la fusteria de fusta, ens encantaria conèixer-te.',
    joinOurTeam: 'Uneix-te al nostre equip',
    currentOpenings: 'Vacants actuals',
    noOpenings: 'Actualment no hi ha vacants disponibles. Si us plau, torna a consultar més endavant o envia\'ns el teu CV per a futures oportunitats.',
    applyNow: 'Aplicar ara',
    jobLocation: 'Ubicació',
    jobType: 'Tipus',
    jobRequirements: 'Requisits',
    jobResponsibilities: 'Responsabilitats',
    fullTime: 'Temps complet',
    partTime: 'Temps parcial',
    contract: 'Contracte',
    workWithUs: 'Treballa amb nosaltres'
  },
  
  // English translations
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Our Services',
    contact: 'Contact',
    legal: 'Legal Notice',
    careers: 'Careers',
    requestQuote: 'Request a Quote',
    expertTitle: 'EXPERTS IN WOODEN CARPENTRY INSTALLATION AND MAINTENANCE',
    aboutTitle: 'Passion for a Job Well Done',
    aboutDescription1: 'We are a company with extensive experience in the field of wooden carpentry installation and maintenance, both residential and industrial.',
    aboutDescription2: 'Our main motivation is the satisfaction of our clients, which is why we work with maximum attention to detail and quality, adapting to their needs.',
    aboutDescription3: 'We are backed by many years of experience in the sector, don\'t hesitate to contact us.',
    servicesTitle: 'Our Services',
    servicesDescription: 'We have a team of experts to meet all installation and maintenance needs.',
    installationTitle: 'Installations',
    installationDescription: 'Assembly of all types of wooden carpentry: parquet, doors, wardrobes, wall cladding, kitchen furniture, etc.',
    repairTitle: 'Repair',
    repairDescription: 'Repair of issues related to wooden carpentry. We offer an optimal response to resolve each type of incident.',
    maintenanceTitle: 'Maintenance',
    maintenanceDescription: 'Maintenance of wooden carpentry in residential buildings, hotels, corporate buildings, hospitals, retail chains, and industrial buildings.',
    passionTitle: 'Passion for a Job Well Done',
    passionDescription: 'At Outside Instalaciones, we are dedicated to offering carpentry services of the highest quality. Each project is approached with meticulous attention to detail, ensuring exceptional results that exceed our clients\' expectations.',
    contactInfo: 'Contact Information',
    phone: '+34 93 012 95 73',
    email: 'comercial@oitinstalaciones.com',
    address: 'Carrer Apol·lo 10 - 08228. Terrassa, Barcelona',
    schedule: 'Schedule',
    formName: 'Name',
    formEmail: 'Email',
    formTitle: 'Request a Quote',
    formMessage: 'Message',
    formConsent: 'I agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.',
    formRequired: '* Indicates required fields',
    formSubmit: 'Request Quote',
    formSubmitting: 'Sending...',
    formError: 'There was an error sending your message. Please try again.',
    formSuccess: 'Thank you! We will contact you as soon as possible.',
    formSubmitAnother: 'Send another message',
    formNameRequired: 'Please enter your name',
    formEmailRequired: 'Please enter your email',
    formEmailInvalid: 'The email address is not valid',
    formConsentRequired: 'You must accept the terms to continue',
    formInvalidEmail: 'The email address is not valid',
    formRequiredField: 'This field is required',
    copyright: 'Outside Instalaciones y Técnicos S.L. © Copyright 2021 - All rights reserved.',
    careersTitle: 'Join Our Team',
    careersDescription: 'At Outside Instalaciones, we are always looking for talented individuals to join our team. If you are passionate, committed, and looking to grow professionally in the wooden carpentry sector, we would love to meet you.',
    joinOurTeam: 'Join Our Team',
    currentOpenings: 'Current Openings',
    noOpenings: 'There are currently no vacancies available. Please check back later or send us your CV for future opportunities.',
    applyNow: 'Apply Now',
    jobLocation: 'Location',
    jobType: 'Type',
    jobRequirements: 'Requirements',
    jobResponsibilities: 'Responsibilities',
    fullTime: 'Full Time',
    partTime: 'Part Time',
    contract: 'Contract',
    workWithUs: 'Work with us'
  },
  
  // Arabic translations
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    contact: 'اتصل بنا',
    legal: 'إشعار قانوني',
    careers: 'وظائف',
    requestQuote: 'اطلب عرض سعر',
    expertTitle: 'خبراء في تركيب وصيانة النجارة الخشبية',
    aboutTitle: 'شغف بالعمل المتقن',
    aboutDescription1: 'نحن شركة ذات خبرة واسعة في مجال تركيب وصيانة النجارة الخشبية، سواء السكنية أو الصناعية.',
    aboutDescription2: 'دافعنا الرئيسي هو رضا عملائنا، ولهذا نعمل مع الاهتمام بأقصى قدر من التفاصيل والجودة، والتكيف مع احتياجاتهم.',
    aboutDescription3: 'نحن مدعومون بسنوات عديدة من الخبرة في القطاع، لا تتردد في الاتصال بنا.',
    servicesTitle: 'خدماتنا',
    servicesDescription: 'لدينا فريق من الخبراء لتلبية جميع احتياجات التركيب والصيانة.',
    installationTitle: 'التركيبات',
    installationDescription: 'تجميع جميع أنواع النجارة الخشبية: الباركيه، الأبواب، الخزائن، كسوة الجدران، أثاث المطبخ، إلخ.',
    repairTitle: 'الإصلاح',
    repairDescription: 'إصلاح المشاكل المتعلقة بالنجارة الخشبية. نقدم استجابة مثالية لحل كل نوع من الحوادث.',
    maintenanceTitle: 'الصيانة',
    maintenanceDescription: 'صيانة النجارة الخشبية في المباني السكنية، الفنادق، المباني التجارية، المستشفيات، سلاسل البيع بالتجزئة، والمباني الصناعية.',
    passionTitle: 'شغف بالعمل المتقن',
    passionDescription: 'في Outside Instalaciones، نحن مكرسون لتقديم خدمات النجارة ذات الجودة العالية. يتم التعامل مع كل مشروع بعناية دقيقة للتفاصيل، مما يضمن نتائج استثنائية تتجاوز توقعات عملائنا.',
    contactInfo: 'معلومات الاتصال',
    phone: '+34 93 012 95 73',
    email: 'comercial@oitinstalaciones.com',
    address: 'Carrer Apol·lo 10 - 08228. Terrassa, Barcelona',
    schedule: 'جدول العمل',
    formName: 'الاسم',
    formEmail: 'البريد الإلكتروني',
    formTitle: 'اطلب عرض سعر',
    formMessage: 'الرسالة',
    formConsent: 'أوافق على تخزين ومعالجة هذه البيانات لغرض إنشاء اتصال. أنا أدرك أنه يمكنني إلغاء موافقتي في أي وقت.',
    formRequired: '* يشير إلى الحقول المطلوبة',
    formSubmit: 'طلب عرض سعر',
    formSubmitting: 'جاري الإرسال...',
    formError: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
    formSuccess: 'شكرا لك! سنتواصل معك في أقرب وقت ممكن.',
    formSubmitAnother: 'إرسال رسالة أخرى',
    formNameRequired: 'الرجاء إدخال اسمك',
    formEmailRequired: 'الرجاء إدخال بريدك الإلكتروني',
    formEmailInvalid: 'عنوان البريد الإلكتروني غير صالح',
    formConsentRequired: 'يجب عليك قبول الشروط للمتابعة',
    formInvalidEmail: 'عنوان البريد الإلكتروني غير صالح',
    formRequiredField: 'هذا الحقل مطلوب',
    copyright: 'Outside Instalaciones y Técnicos S.L. © حقوق النشر 2021 - جميع الحقوق محفوظة.',
    careersTitle: 'انضم إلى فريقنا',
    careersDescription: 'في Outside Instalaciones، نبحث دائمًا عن أفراد موهوبين للانضمام إلى فريقنا. إذا كنت شغوفًا وملتزمًا وتتطلع إلى النمو مهنيًا في قطاع النجارة الخشبية، فنحن نود مقابلتك.',
    joinOurTeam: 'انضم إلى فريقنا',
    currentOpenings: 'الوظائف الشاغرة الحالية',
    noOpenings: 'لا توجد وظائف شاغرة متاحة حاليًا. يرجى التحقق مرة أخرى لاحقًا أو إرسال سيرتك الذاتية للفرص المستقبلية.',
    applyNow: 'تقدم الآن',
    jobLocation: 'الموقع',
    jobType: 'النوع',
    jobRequirements: 'المتطلبات',
    jobResponsibilities: 'المسؤوليات',
    fullTime: 'دوام كامل',
    partTime: 'دوام جزئي',
    contract: 'عقد',
    workWithUs: 'اعمل معنا'
  }
};