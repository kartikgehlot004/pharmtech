import { LanguageCode } from '../types';

export interface HealthScheme {
  level: string;
  title: string;
  description: string;
  url: string;
}

const SCHEMES_BY_LANG: Record<LanguageCode, HealthScheme[]> = {
  hi: [
    {
      level: 'केंद्र सरकार',
      title: 'Ayushman Bharat PM-JAY',
      description: '₹5 लाख तक सालाना मुफ़्त इलाज, पात्रता जाँचें व कार्ड बनाएँ',
      url: 'https://pmjay.gov.in',
    },
    {
      level: 'केंद्र सरकार',
      title: 'ABHA – डिजिटल हेल्थ आईडी',
      description: 'अपना और परिवार का संपूर्ण हेल्थ रिकॉर्ड डिजिटल व सुरक्षित रखें',
      url: 'https://abha.abdm.gov.in',
    },
    {
      level: 'केंद्र सरकार',
      title: 'Jan Aushadhi (सस्ती दवाइयाँ)',
      description: 'जेनेरिक दवाइयाँ 50-90% सस्ते दाम पर, नज़दीकी केंद्र खोजें',
      url: 'https://janaushadhi.gov.in',
    },
    {
      level: 'केंद्र सरकार',
      title: 'e-Sanjeevani',
      description: 'घर बैठे मोबाइल से मुफ़्त ऑनलाइन सरकारी डॉक्टर परामर्श',
      url: 'https://esanjeevani.mohfw.gov.in',
    },
    {
      level: 'राजस्थान सरकार',
      title: 'राजस्थान स्वास्थ्य विभाग',
      description: 'MAA योजना, मुख्यमंत्री निःशुल्क दवा/जाँच सहित सभी कल्याणकारी योजनाएँ',
      url: 'https://health.rajasthan.gov.in',
    },
    {
      level: 'राजस्थान सरकार',
      title: 'राजस्थान SSO पोर्टल',
      description: 'राज्य की स्वास्थ्य योजनाओं व चिरंजीवी/MAA कार्ड के आवेदन व लॉगिन',
      url: 'https://sso.rajasthan.gov.in',
    },
    {
      level: 'जोधपुर',
      title: 'AIIMS जोधपुर (एम्स)',
      description: 'ऑनलाइन OPD पंजीकरण, डॉक्टर अपॉइंटमेंट व सुपर स्पेशियलिटी सेवाएँ',
      url: 'https://aiimsjodhpur.edu.in',
    },
    {
      level: 'जोधपुर',
      title: 'जोधपुर ज़िला प्रशासन',
      description: 'ज़िले के सभी सरकारी अस्पताल, CHC/PHC व आपातकालीन स्वास्थ्य सेवाएँ',
      url: 'https://jodhpur.rajasthan.gov.in',
    },
  ],

  mwr: [
    {
      level: 'केंद्र सरकार',
      title: 'Ayushman Bharat PM-JAY',
      description: '₹5 लाख तांई हर साल मुफ़्त इलाज, कार्ड बणाओ अर फायदा लेवो',
      url: 'https://pmjay.gov.in',
    },
    {
      level: 'केंद्र सरकार',
      title: 'ABHA – डिजिटल हेल्थ आईडी',
      description: 'थांको अर कुटुम्ब रो सगलो दवाई-पर्ची रेकॉर्ड फोन में महफूज़ राखो',
      url: 'https://abha.abdm.gov.in',
    },
    {
      level: 'केंद्र सरकार',
      title: 'Jan Aushadhi (सस्ती दवाइयाँ)',
      description: 'जेनेरिक दवाई 50-90% सस्ती, नजीक री दुकान खोजो सा',
      url: 'https://janaushadhi.gov.in',
    },
    {
      level: 'केंद्र सरकार',
      title: 'e-Sanjeevani',
      description: 'घरे बैठ्यां फोन पे मुफ़्त सरकारी डॉक्टर सूँ राय लेवो',
      url: 'https://esanjeevani.mohfw.gov.in',
    },
    {
      level: 'राजस्थान सरकार',
      title: 'राजस्थान स्वास्थ्य विभाग',
      description: 'MAA योजना, मुफ़्त दवाई व जाँच री सगली सरकारी योजनावां',
      url: 'https://health.rajasthan.gov.in',
    },
    {
      level: 'राजस्थान सरकार',
      title: 'राजस्थान SSO पोर्टल',
      description: 'राजस्थान री स्वास्थ्य योजनावां अर कार्ड वास्ते फॉर्म भरो',
      url: 'https://sso.rajasthan.gov.in',
    },
    {
      level: 'जोधपुर',
      title: 'AIIMS जोधपुर (एम्स)',
      description: 'ऑनलाइन OPD पर्ची, डॉक्टर रो टेम अर इलाज री सेवावां',
      url: 'https://aiimsjodhpur.edu.in',
    },
    {
      level: 'जोधपुर',
      title: 'जोधपुर ज़िला प्रशासन',
      description: 'जोधपुर ज़िले रा सगला सरकारी अस्पताल, CHC अर PHC री जानकारी',
      url: 'https://jodhpur.rajasthan.gov.in',
    },
  ],

  en: [
    {
      level: 'Central Govt',
      title: 'Ayushman Bharat PM-JAY',
      description: 'Free healthcare coverage up to ₹5 Lakh annually per family',
      url: 'https://pmjay.gov.in',
    },
    {
      level: 'Central Govt',
      title: 'ABHA – Digital Health ID',
      description: 'Manage and share your digital medical records safely',
      url: 'https://abha.abdm.gov.in',
    },
    {
      level: 'Central Govt',
      title: 'Jan Aushadhi (Affordable Medicines)',
      description: 'High-quality generic medicines at 50-90% lower prices',
      url: 'https://janaushadhi.gov.in',
    },
    {
      level: 'Central Govt',
      title: 'e-Sanjeevani Teleconsultation',
      description: 'Free online doctor consultation from the comfort of your home',
      url: 'https://esanjeevani.mohfw.gov.in',
    },
    {
      level: 'Rajasthan Govt',
      title: 'Rajasthan Health Department',
      description: 'MAA Scheme, free medicines, tests, and healthcare initiatives',
      url: 'https://health.rajasthan.gov.in',
    },
    {
      level: 'Rajasthan Govt',
      title: 'Rajasthan SSO Portal',
      description: 'Single sign-on for state welfare cards and citizen health schemes',
      url: 'https://sso.rajasthan.gov.in',
    },
    {
      level: 'Jodhpur',
      title: 'AIIMS Jodhpur',
      description: 'Online OPD registration, specialist appointments, and emergency care',
      url: 'https://aiimsjodhpur.edu.in',
    },
    {
      level: 'Jodhpur',
      title: 'Jodhpur District Administration',
      description: 'Directory of district hospitals, community health centers, and emergency services',
      url: 'https://jodhpur.rajasthan.gov.in',
    },
  ],

  gu: [
    {
      level: 'કેન્દ્ર સરકાર',
      title: 'Ayushman Bharat PM-JAY',
      description: 'વાર્ષિક ₹5 લાખ સુધીની મફત સારવાર, પાત્રતા તપાસો અને કાર્ડ મેળવો',
      url: 'https://pmjay.gov.in',
    },
    {
      level: 'કેન્દ્ર સરકાર',
      title: 'ABHA – ડિજિટલ હેલ્થ આઈડી',
      description: 'તમારો અને પરિવારનો સંપૂર્ણ હેલ્થ રેકોર્ડ ડિજિટલ અને સુરક્ષિત રાખો',
      url: 'https://abha.abdm.gov.in',
    },
    {
      level: 'કેન્દ્ર સરકાર',
      title: 'Jan Aushadhi (સસ્તી દવાઓ)',
      description: 'જેનેરિક દવાઓ 50-90% ઓછા ભાવે, નજીકનું કેન્દ્ર શોધો',
      url: 'https://janaushadhi.gov.in',
    },
    {
      level: 'કેન્દ્ર સરકાર',
      title: 'e-Sanjeevani',
      description: 'ઘરે બેઠા મોબાઇલથી મફત ઓનલાઇન સરકારી ડૉક્ટર પરામર્શ',
      url: 'https://esanjeevani.mohfw.gov.in',
    },
    {
      level: 'રાજ્ય સરકાર',
      title: 'રાજસ્થાન સ્વાસ્થ્ય વિભાગ',
      description: 'MAA યોજના, નિઃશુલ્ક દવા અને તપાસ સહિતની સરકારી યોજનાઓ',
      url: 'https://health.rajasthan.gov.in',
    },
    {
      level: 'રાજ્ય સરકાર',
      title: 'રાજસ્થાન SSO પોર્ટલ',
      description: 'સ્વાસ્થ્ય યોજનાઓ અને લાભાર્થી કાર્ડ માટે ઓનલાઇન અરજી',
      url: 'https://sso.rajasthan.gov.in',
    },
    {
      level: 'જોધપુર',
      title: 'AIIMS જોધપુર (એઇમ્સ)',
      description: 'ઓનલાઇન OPD રજિસ્ટ્રેશન, ડૉક્ટર એપોઇન્ટમેન્ટ અને સારવાર',
      url: 'https://aiimsjodhpur.edu.in',
    },
    {
      level: 'જોધપુર',
      title: 'જોધપુર જિલ્લા પ્રશાસન',
      description: 'જિલ્લાની તમામ સરકારી હોસ્પિટલો અને કટોકટી આરોગ્ય સેવાઓ',
      url: 'https://jodhpur.rajasthan.gov.in',
    },
  ],

  ta: [
    {
      level: 'மத்திய அரசு',
      title: 'Ayushman Bharat PM-JAY',
      description: 'ஆண்டுக்கு ₹5 லட்சம் வரை இலவச மருத்துவ சிகிச்சைக்கான திட்டம்',
      url: 'https://pmjay.gov.in',
    },
    {
      level: 'மத்திய அரசு',
      title: 'ABHA – டிஜிட்டல் சுகாதார அடையாள அட்டை',
      description: 'உங்கள் குடும்பத்தின் மருத்துவ பதிவுகளை டிஜிட்டல் முறையில் பாதுகாக்கவும்',
      url: 'https://abha.abdm.gov.in',
    },
    {
      level: 'மத்திய அரசு',
      title: 'Jan Aushadhi (மலிவு விலை மருந்துகள்)',
      description: '50-90% வரை மலிவான விலையில் தரமான ஜெனரிக் மருந்துகள்',
      url: 'https://janaushadhi.gov.in',
    },
    {
      level: 'மத்திய அரசு',
      title: 'e-Sanjeevani',
      description: 'வீட்டிலிருந்தே மொபைல் மூலம் இலவச அரசு மருத்துவர் ஆலோசனை',
      url: 'https://esanjeevani.mohfw.gov.in',
    },
    {
      level: 'மாநில அரசு',
      title: 'ராஜஸ்தான் சுகாதாரத் துறை',
      description: 'MAA திட்டம் மற்றும் இலவச மருந்து, பரிசோதனை திட்டங்கள்',
      url: 'https://health.rajasthan.gov.in',
    },
    {
      level: 'மாநில அரசு',
      title: 'ராஜஸ்தான் SSO தளம்',
      description: 'அரசு நலத்திட்டங்கள் மற்றும் மருத்துவ அட்டைக்கான பதிவு',
      url: 'https://sso.rajasthan.gov.in',
    },
    {
      level: 'ஜோத்பூர்',
      title: 'AIIMS ஜோத்பூர்',
      description: 'ஆன்லைன் OPD பதிவு மற்றும் உயர் சிறப்பு மருத்துவ சேவைகள்',
      url: 'https://aiimsjodhpur.edu.in',
    },
    {
      level: 'ஜோத்பூர்',
      title: 'ஜோத்பூர் மாவட்ட நிர்வாகம்',
      description: 'மாவட்டத்தின் அரசு மருத்துவமனைகள் மற்றும் அவசர சேவைகள்',
      url: 'https://jodhpur.rajasthan.gov.in',
    },
  ],

  pa: [
    {
      level: 'ਕੇਂਦਰ ਸਰਕਾਰ',
      title: 'Ayushman Bharat PM-JAY',
      description: 'ਸਾਲਾਨਾ ₹5 ਲੱਖ ਤੱਕ ਮੁਫ਼ਤ ਇਲਾਜ, ਯੋਗਤਾ ਜਾਂਚੋ ਅਤੇ ਕਾਰਡ ਬਣਾਓ',
      url: 'https://pmjay.gov.in',
    },
    {
      level: 'ਕੇਂਦਰ ਸਰਕਾਰ',
      title: 'ABHA – ਡਿਜੀਟਲ ਹੈਲਥ ਆਈਡੀ',
      description: 'ਆਪਣਾ ਤੇ ਪਰਿਵਾਰ ਦਾ ਪੂਰਾ ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਡਿਜੀਟਲ ਅਤੇ ਸੁਰੱਖਿਅਤ ਰੱਖੋ',
      url: 'https://abha.abdm.gov.in',
    },
    {
      level: 'ਕੇਂਦਰ ਸਰਕਾਰ',
      title: 'Jan Aushadhi (ਸਸਤੀਆਂ ਦਵਾਈਆਂ)',
      description: 'ਜੈਨੇਰਿਕ ਦਵਾਈਆਂ 50-90% ਸਸਤੇ ਰੇਟ ਤੇ, ਨਜ਼ਦੀਕੀ ਕੇਂਦਰ ਲੱਭੋ',
      url: 'https://janaushadhi.gov.in',
    },
    {
      level: 'ਕੇਂਦਰ ਸਰਕਾਰ',
      title: 'e-Sanjeevani',
      description: 'ਘਰ ਬੈਠੇ ਮੋਬਾਈਲ ਰਾਹੀਂ ਮੁਫ਼ਤ ਆਨਲਾਈਨ ਸਰਕਾਰੀ ਡਾਕਟਰ ਸਲਾਹ',
      url: 'https://esanjeevani.mohfw.gov.in',
    },
    {
      level: 'ਸੂਬਾ ਸਰਕਾਰ',
      title: 'ਰਾਜਸਥਾਨ ਸਿਹਤ ਵਿਭਾਗ',
      description: 'MAA ਯੋਜਨਾ, ਮੁਫ਼ਤ ਦਵਾਈਆਂ ਤੇ ਟੈਸਟਾਂ ਸਮੇਤ ਸਾਰੀਆਂ ਭਲਾਈ ਯੋਜਨਾਵਾਂ',
      url: 'https://health.rajasthan.gov.in',
    },
    {
      level: 'ਸੂਬਾ ਸਰਕਾਰ',
      title: 'ਰਾਜਸਥਾਨ SSO ਪੋਰਟਲ',
      description: 'ਸਿਹਤ ਯੋਜਨਾਵਾਂ ਅਤੇ ਸਰਕਾਰੀ ਕਾਰਡਾਂ ਲਈ ਆਨਲਾਈਨ ਅਰਜ਼ੀ',
      url: 'https://sso.rajasthan.gov.in',
    },
    {
      level: 'ਜੋਧਪੁਰ',
      title: 'AIIMS ਜੋਧਪੁਰ (ਏਮਜ਼)',
      description: 'ਆਨਲਾਈਨ OPD ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਡਾਕਟਰ ਅਪੁਆਇੰਟਮੈਂਟ ਅਤੇ ਇਲਾਜ',
      url: 'https://aiimsjodhpur.edu.in',
    },
    {
      level: 'ਜੋਧਪੁਰ',
      title: 'ਜੋਧਪੁਰ ਜ਼ਿਲ੍ਹਾ ਪ੍ਰਸ਼ਾਸਨ',
      description: 'ਜ਼ਿਲ੍ਹੇ ਦੇ ਸਾਰੇ ਸਰਕਾਰੀ ਹਸਪਤਾਲ, CHC/PHC ਅਤੇ ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ',
      url: 'https://jodhpur.rajasthan.gov.in',
    },
  ],
};

export function getHealthSchemes(lang: LanguageCode): HealthScheme[] {
  return SCHEMES_BY_LANG[lang] || SCHEMES_BY_LANG.hi;
}

export const HEALTH_SCHEMES = SCHEMES_BY_LANG.hi;
