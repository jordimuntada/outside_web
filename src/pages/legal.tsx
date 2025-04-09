
import React from "react";
import Layout from "@/components/Layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalPage() {
  const { t, dir, language } = useLanguage();

  // Legal content in different languages
  const legalContent = {
    es: (
      <>
        <h2 className="text-xl font-bold mb-4">Aviso Legal</h2>
        <p className="mb-4">
          Outside Instalaciones y Técnicos S.L., con CIF B12345678 y domicilio social en Carrer Apol·lo 10 - 08228. Terrassa, Barcelona, inscrita en el Registro Mercantil de Barcelona, Tomo XXXXX, Folio XXX, Hoja B-XXXXXX, Inscripción X.
        </p>
        <h3 className="text-lg font-bold mb-2">1. Objeto</h3>
        <p className="mb-4">
          El presente aviso legal regula el uso del sitio web www.outsideinstalaciones.com, del que es titular Outside Instalaciones y Técnicos S.L.
        </p>
        <h3 className="text-lg font-bold mb-2">2. Propiedad Intelectual</h3>
        <p className="mb-4">
          Todos los derechos de propiedad intelectual del contenido de esta página web, su diseño gráfico y códigos son titularidad de Outside Instalaciones y Técnicos S.L., quedando prohibida su reproducción, distribución, comunicación pública y transformación, salvo para uso personal y privado.
        </p>
        <h3 className="text-lg font-bold mb-2">3. Condiciones de Uso</h3>
        <p className="mb-4">
          El usuario se compromete a utilizar el portal y sus servicios y contenidos sin contravenir la legislación vigente, la buena fe, los usos generalmente aceptados y el orden público.
        </p>
        <h3 className="text-lg font-bold mb-2">4. Política de Privacidad</h3>
        <p className="mb-4">
          De conformidad con lo establecido en la normativa vigente en Protección de Datos de Carácter Personal, le informamos que sus datos serán incorporados al sistema de tratamiento titularidad de Outside Instalaciones y Técnicos S.L. con la finalidad de atender sus consultas. En cumplimiento con la normativa vigente, Outside Instalaciones y Técnicos S.L. informa que los datos serán conservados durante el plazo estrictamente necesario para cumplir con los preceptos mencionados con anterioridad.
        </p>
        <h3 className="text-lg font-bold mb-2">5. Legislación Aplicable</h3>
        <p className="mb-4">
          El presente Aviso Legal se rige por la ley española.
        </p>
      </>
    ),
    ca: (
      <>
        <h2 className="text-xl font-bold mb-4">Avís Legal</h2>
        <p className="mb-4">
          Outside Instalaciones y Técnicos S.L., amb CIF B12345678 i domicili social a Carrer Apol·lo 10 - 08228. Terrassa, Barcelona, inscrita al Registre Mercantil de Barcelona, Tom XXXXX, Foli XXX, Full B-XXXXXX, Inscripció X.
        </p>
        <h3 className="text-lg font-bold mb-2">1. Objecte</h3>
        <p className="mb-4">
          El present avís legal regula l'ús del lloc web www.outsideinstalaciones.com, del qual és titular Outside Instalaciones y Técnicos S.L.
        </p>
        <h3 className="text-lg font-bold mb-2">2. Propietat Intel·lectual</h3>
        <p className="mb-4">
          Tots els drets de propietat intel·lectual del contingut d'aquesta pàgina web, el seu disseny gràfic i codis són titularitat d'Outside Instalaciones y Técnicos S.L., quedant prohibida la seva reproducció, distribució, comunicació pública i transformació, excepte per a ús personal i privat.
        </p>
        <h3 className="text-lg font-bold mb-2">3. Condicions d'Ús</h3>
        <p className="mb-4">
          L'usuari es compromet a utilitzar el portal i els seus serveis i continguts sense contravenir la legislació vigent, la bona fe, els usos generalment acceptats i l'ordre públic.
        </p>
        <h3 className="text-lg font-bold mb-2">4. Política de Privacitat</h3>
        <p className="mb-4">
          De conformitat amb l'establert a la normativa vigent en Protecció de Dades de Caràcter Personal, l'informem que les seves dades seran incorporades al sistema de tractament titularitat d'Outside Instalaciones y Técnicos S.L. amb la finalitat d'atendre les seves consultes. En compliment amb la normativa vigent, Outside Instalaciones y Técnicos S.L. informa que les dades seran conservades durant el termini estrictament necessari per complir amb els preceptes esmentats anteriorment.
        </p>
        <h3 className="text-lg font-bold mb-2">5. Legislació Aplicable</h3>
        <p className="mb-4">
          El present Avís Legal es regeix per la llei espanyola.
        </p>
      </>
    ),
    en: (
      <>
        <h2 className="text-xl font-bold mb-4">Legal Notice</h2>
        <p className="mb-4">
          Outside Instalaciones y Técnicos S.L., with Tax ID B12345678 and registered office at Carrer Apol·lo 10 - 08228. Terrassa, Barcelona, registered in the Commercial Registry of Barcelona, Volume XXXXX, Folio XXX, Sheet B-XXXXXX, Registration X.
        </p>
        <h3 className="text-lg font-bold mb-2">1. Purpose</h3>
        <p className="mb-4">
          This legal notice regulates the use of the website www.outsideinstalaciones.com, owned by Outside Instalaciones y Técnicos S.L.
        </p>
        <h3 className="text-lg font-bold mb-2">2. Intellectual Property</h3>
        <p className="mb-4">
          All intellectual property rights to the content of this website, its graphic design and codes are owned by Outside Instalaciones y Técnicos S.L., and their reproduction, distribution, public communication and transformation are prohibited, except for personal and private use.
        </p>
        <h3 className="text-lg font-bold mb-2">3. Terms of Use</h3>
        <p className="mb-4">
          The user agrees to use the portal and its services and contents without contravening current legislation, good faith, generally accepted uses and public order.
        </p>
        <h3 className="text-lg font-bold mb-2">4. Privacy Policy</h3>
        <p className="mb-4">
          In accordance with the provisions of the current regulations on Personal Data Protection, we inform you that your data will be incorporated into the processing system owned by Outside Instalaciones y Técnicos S.L. for the purpose of attending to your inquiries. In compliance with current regulations, Outside Instalaciones y Técnicos S.L. informs that the data will be kept for the period strictly necessary to comply with the aforementioned precepts.
        </p>
        <h3 className="text-lg font-bold mb-2">5. Applicable Legislation</h3>
        <p className="mb-4">
          This Legal Notice is governed by Spanish law.
        </p>
      </>
    ),
    ar: (
      <>
        <h2 className="text-xl font-bold mb-4">إشعار قانوني</h2>
        <p className="mb-4">
          Outside Instalaciones y Técnicos S.L.، برقم التعريف الضريبي B12345678 والمكتب المسجل في Carrer Apol·lo 10 - 08228. Terrassa، برشلونة، مسجلة في السجل التجاري لبرشلونة، المجلد XXXXX، ورقة XXX، صفحة B-XXXXXX، التسجيل X.
        </p>
        <h3 className="text-lg font-bold mb-2">1. الغرض</h3>
        <p className="mb-4">
          ينظم هذا الإشعار القانوني استخدام موقع الويب www.outsideinstalaciones.com، المملوك لشركة Outside Instalaciones y Técnicos S.L.
        </p>
        <h3 className="text-lg font-bold mb-2">2. الملكية الفكرية</h3>
        <p className="mb-4">
          جميع حقوق الملكية الفكرية لمحتوى هذا الموقع وتصميمه الجرافيكي ورموزه مملوكة لشركة Outside Instalaciones y Técnicos S.L.، ويحظر نسخها وتوزيعها واتصالها العام وتحويلها، باستثناء الاستخدام الشخصي والخاص.
        </p>
        <h3 className="text-lg font-bold mb-2">3. شروط الاستخدام</h3>
        <p className="mb-4">
          يوافق المستخدم على استخدام البوابة وخدماتها ومحتوياتها دون مخالفة التشريعات الحالية وحسن النية والاستخدامات المقبولة عمومًا والنظام العام.
        </p>
        <h3 className="text-lg font-bold mb-2">4. سياسة الخصوصية</h3>
        <p className="mb-4">
          وفقًا لأحكام اللوائح الحالية بشأن حماية البيانات الشخصية، نعلمك أنه سيتم دمج بياناتك في نظام المعالجة المملوك لشركة Outside Instalaciones y Técnicos S.L. لغرض الاهتمام باستفساراتك. امتثالاً للوائح الحالية، تعلم Outside Instalaciones y Técnicos S.L. أنه سيتم الاحتفاظ بالبيانات للفترة الضرورية للامتثال للمبادئ المذكورة أعلاه.
        </p>
        <h3 className="text-lg font-bold mb-2">5. التشريعات المطبقة</h3>
        <p className="mb-4">
          يخضع هذا الإشعار القانوني للقانون الإسباني.
        </p>
      </>
    )
  };

  return (
    <Layout title={t("legal")} description="Aviso legal y política de privacidad de Outside Instalaciones.">
      <section className="py-12 bg-amber-50" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">{t("legal")}</h1>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {legalContent[language]}
          </div>
        </div>
      </section>
    </Layout>
  );
}
