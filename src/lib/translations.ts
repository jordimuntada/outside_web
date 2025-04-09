// Translations for the website in multiple languages

export type Language = 'es' | 'ca' | 'en' | 'ar';

export type TranslationKey = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'contact' 
  | 'legal' 
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
  | 'formEmail'
  | 'formMessage'
  | 'formConsent'
  | 'formRequired'
  | 'formSubmit'
  | 'formError'
  | 'formSuccess'
  | 'formInvalidEmail'
  | 'formRequiredField'
  | 'copyright';

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
    formMessage: 'Mensaje',
    formConsent: 'Estoy de acuerdo en que estos datos se almacenen y procesen con el fin de establecer contacto. Soy consciente de que puedo revocar mi consentimiento en cualquier momento.',
    formRequired: '* Indica los campos obligatorios',
    formSubmit: 'Solicitar presupuesto',
    formError: 'Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.',
    formSuccess: '¡Gracias! Nos pondremos en contacto lo antes posible.',
    formInvalidEmail: 'La dirección de correo electrónico no es válida',
    formRequiredField: 'Este campo es obligatorio',
    copyright: 'Outside Instalaciones y Técnicos S.L. © Copyright 2021 - Todos los derechos reservados.'
  },
  
  // Catalan translations
  ca: {
    home: 'Inici',
    about: 'Sobre nosaltres',
    services: 'Els nostres serveis',
    contact: 'Contacte',
    legal: 'Avís legal',
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
    formMessage: 'Missatge',
    formConsent: 'Estic d\'acord que aquestes dades s\'emmagatzemin i processin amb la finalitat d\'establir contacte. Sóc conscient que puc revocar el meu consentiment en qualsevol moment.',
    formRequired: '* Indica els camps obligatoris',
    formSubmit: 'Sol·licitar pressupost',
    formError: 'Hi ha hagut un error en enviar el seu missatge. Si us plau, intenti-ho de nou.',
    formSuccess: 'Gràcies! Ens posarem en contacte el més aviat possible.',
    formInvalidEmail: 'L\'adreça de correu electrònic no és vàlida',
    formRequiredField: 'Aquest camp és obligatori',
    copyright: 'Outside Instalaciones y Técnicos S.L. © Copyright 2021 - Tots els drets reservats.'
  },
  
  // English translations
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Our Services',
    contact: 'Contact',
    legal: 'Legal Notice',
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
    formMessage: 'Message',
    formConsent: 'I agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.',
    formRequired: '* Indicates required fields',
    formSubmit: 'Request Quote',
    formError: 'There was an error sending your message. Please try again.',
    formSuccess: 'Thank you! We will contact you as soon as possible.',
    formInvalidEmail: 'The email address is not valid',
    formRequiredField: 'This field is required',
    copyright: 'Outside Instalaciones y Técnicos S.L. © Copyright 2021 - All rights reserved.'
  },
  
  // Arabic translations
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    contact: 'اتصل بنا',
    legal: 'إشعار قانوني',
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
    formMessage: 'الرسالة',
    formConsent: 'أوافق على تخزين ومعالجة هذه البيانات لغرض إنشاء اتصال. أنا أدرك أنه يمكنني إلغاء موافقتي في أي وقت.',
    formRequired: '* يشير إلى الحقول المطلوبة',
    formSubmit: 'طلب عرض سعر',
    formError: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
    formSuccess: 'شكرا لك! سنتواصل معك في أقرب وقت ممكن.',
    formInvalidEmail: 'عنوان البريد الإلكتروني غير صالح',
    formRequiredField: 'هذا الحقل مطلوب',
    copyright: 'Outside Instalaciones y Técnicos S.L. © حقوق النشر 2021 - جميع الحقوق محفوظة.'
  }
};