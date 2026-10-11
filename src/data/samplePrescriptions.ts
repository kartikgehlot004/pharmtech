import { Prescription, LanguageCode } from '../types';

export const SAMPLE_PRESCRIPTIONS_HI: Prescription[] = [
  {
    id: 'sample_rx_1',
    ts: Date.now() - 86400000 * 2,
    doctor: 'Dr. Ramesh Sharma, MD (Medicine) - Jodhpur Clinic',
    date: '10/10/2026',
    lang: 'hi',
    summary: 'मौसम बदलने के कारण तीव्र वायरल बुखार, सिरदर्द, एसिडिटी और सूखी खांसी के इलाज की पर्ची है।',
    meds: [
      {
        name: 'Tab. Paracetamol 650mg (Dolo)',
        info: 'एंटीपायरेटिक और एनाल्जेसिक (बुखार और बदन दर्द की सुरक्षित व असरदार दवा)',
        purpose: 'तेज़ बुखार और बदन दर्द को तुरंत कम करने के लिए',
        uses: 'वायरल फीवर, सिरदर्द, जोड़ों के दर्द और थकान से राहत पाने के लिए दी गई है।',
        dose: '1 गोली (650mg)',
        times: ['morning', 'night'],
        meal: 'खाने के बाद (After Food)',
        days: 5,
        side_effects: 'अधिक मात्रा में लेने से पेट में जलन, पसीना आना या लिवर पर दबाव पड़ सकता है।',
        food_interactions: 'शराब या नशीले पेय बिल्कुल न लें। खाली पेट लेने से बचें, कुछ खाकर ही लें।',
        drug_interactions: 'अन्य पेरासिटामोल युक्त दर्द निवारक गोलियों (जैसे Combiflam, Nimulid) के साथ दोहराकर न लें।',
        avoid_food: 'शराब, अत्यधिक खट्टा या खाली पेट सेवन',
        avoid_drugs: 'अन्य पेरासिटामोल युक्त दर्द निवारक दवाइयाँ',
      },
      {
        name: 'Cap. Pantoprazole 40mg (Pan-40)',
        info: 'प्रोटॉन पंप इनहिबिटर (पेट में बनने वाले अतिरिक्त एसिड को रोकने वाला कैप्सूल)',
        purpose: 'पेट में एसिडिटी, गैस, जलन और अल्सर से बचाव के लिए',
        uses: 'दर्द निवारक व एंटीबायोटिक दवाओं से पेट में होने वाली जलन और गैस से पेट की रक्षा करता है।',
        dose: '1 कैप्सूल (40mg)',
        times: ['morning'],
        meal: 'सुबह खाली पेट, नाश्ते से 30 मिनट पहले',
        days: 5,
        side_effects: 'हल्का सिरदर्द, पेट में मरोड़ या पेट फूलना (बहुत दुर्लभ)।',
        food_interactions: 'अत्यधिक तीखा, मिर्च-मसाला, तली-भुनी चीज़ें और खाली पेट चाय-कॉफ़ी से परहेज़ रखें।',
        drug_interactions: 'एंटासिड सिरप तुरंत इसके साथ न पिएं, कम से कम 1 घंटे का अंतराल रखें।',
        avoid_food: 'अत्यधिक मिर्च-मसाला और बासी खाना',
        avoid_drugs: 'तुरंत एंटासिड सिरप न लें',
      },
      {
        name: 'Syp. Ascoril-D Cough Syrup',
        info: 'कफ सप्रेसेंट और एंटी-एलर्जिक सिरप (सूखी खांसी और गले की एलर्जी मिटाने वाला)',
        purpose: 'सूखी खांसी और गले की खराश ठीक करने के लिए',
        uses: 'रात में बार-बार आने वाली खांसी, गले में खिचखिच और फेफड़ों की ऐंठन को शांत करता है।',
        dose: '2 चम्मच (10ml)',
        times: ['morning', 'afternoon', 'night'],
        meal: 'गुनगुने पानी के साथ खाने के बाद',
        days: 5,
        side_effects: 'हल्की नींद, मुँह सूखना या सुस्ती आ सकती है। पीने के तुरंत बाद वाहन न चलाएँ।',
        food_interactions: 'ठंडा पानी, आइसक्रीम, कोल्ड ड्रिंक या खट्टी छाछ से पूरी तरह बचें।',
        drug_interactions: 'अन्य नींद की दवाइयों या कफ सिरप के साथ मिलाकर न पिएं।',
        avoid_food: 'ठंडा पानी, बर्फ और खट्टी चीज़ें',
        avoid_drugs: 'अन्य कफ सिरप या सेडेटिव्स',
      },
      {
        name: 'Tab. Azithromycin 500mg (Azithral)',
        info: 'मैक्रोलाइड एंटीबायोटिक (गले और छाती के बैक्टीरिया को नष्ट करने वाली प्रमुख दवा)',
        purpose: 'गले और फेफड़ों के बैक्टीरियल संक्रमण को जड़ से ख़त्म करना',
        uses: 'टॉन्सिलाइटिस, ग्रसनी शोथ (Pharyngitis) और छाती के संक्रमण को दूर करता है।',
        dose: '1 गोली (500mg)',
        times: ['morning'],
        meal: 'खाना खाने के 1 घंटे बाद (रोज़ाना निश्चित समय पर)',
        days: 3,
        side_effects: 'पेट में हल्का दर्द, जी मिचलाना या दस्त (यह दवा खत्म होने पर ठीक हो जाता है)।',
        food_interactions: 'दही या दूध इसके तुरंत साथ न लें। पर्याप्त मात्रा में सादा गुनगुना पानी पिएं।',
        drug_interactions: 'बिना डॉक्टर पूछे कोर्स बीच में न छोड़ें। एंटासिड के साथ एक साथ न लें।',
        avoid_food: 'एंटासिड गोलियाँ या भारी डेयरी तुरंत साथ में',
        avoid_drugs: 'कोर्स अधूरा छोड़ना खतरनाक है',
      },
    ],
    warnings: [
      'एंटीबायोटिक Azithromycin का 3 दिन का पूरा कोर्स खत्म करें, बुखार उतरने पर भी बीच में बंद न करें।',
      'Paracetamol लेते समय शराब से पूरी तरह परहेज़ करें ताकि लिवर सुरक्षित रहे।',
      'अगर 3 दिन में बुखार 102°F से ऊपर रहे तो तुरंत डॉक्टर को दोबारा दिखाएँ।',
    ],
  },
  {
    id: 'sample_rx_2',
    ts: Date.now() - 86400000 * 20,
    doctor: 'Dr. Sunita Mehta, MBBS, DNB - Senior Physician, Jodhpur',
    date: '21/09/2026',
    lang: 'hi',
    summary: 'उच्च रक्तचाप (High BP) और टाइप-2 शुगर (Diabetes) की नियमित नियंत्रण वाली जीवनरक्षक पर्ची।',
    meds: [
      {
        name: 'Tab. Telmisartan 40mg (Telma)',
        info: 'एंजियोटेंसिन रिसेप्टर ब्लॉकर (रक्त वाहिकाओं को शिथिल कर बीपी सामान्य रखने वाली दवा)',
        purpose: 'ब्लड प्रेशर (BP) को सामान्य स्तर पर रखने और हृदय-किडनी की सुरक्षा के लिए',
        uses: 'हाइपरटेंशन, दिल का दौरा और स्ट्रोक के जोखिम को कम करने के लिए दी जाती है।',
        dose: '1 गोली (40mg)',
        times: ['morning'],
        meal: 'सुबह नाश्ते के बाद रोज़ाना एक ही निश्चित समय पर',
        days: 30,
        side_effects: 'शुरुआत में हल्का चक्कर आ सकता है। अचानक बिस्तर से तेजी से न उठें।',
        food_interactions: 'ऊपर से नमक, पापड़, नमकीन, अचार और अत्यधिक सोडियम का पूरी तरह परहेज़ करें।',
        drug_interactions: 'दर्द निवारक गोलियाँ (जैसे Diclofenac/Ibuprofen) बार-बार न लें, ये बीपी बढ़ाती हैं।',
        avoid_food: 'अतिरिक्त नमक, पापड़, अचार',
        avoid_drugs: 'NSAID पेन किलर दवाइयाँ',
      },
      {
        name: 'Tab. Metformin 500mg SR (Glycomet)',
        info: 'बिगुआनाइड ओरल हाइपोग्लाइसेमिक (इंसुलिन संवेदनशीलता बढ़ाने और शुगर घटाने वाली गोली)',
        purpose: 'खून में ग्लूकोज (शुगर) की मात्रा को संतुलित और सामान्य रखने के लिए',
        uses: 'टाइप-2 डायबिटीज में भोजन के बाद शुगर को बढ़ने से रोकता है और वजन संतुलित रखता है।',
        dose: '1 गोली (500mg)',
        times: ['morning', 'night'],
        meal: 'सुबह व रात के मुख्य भोजन के तुरंत बाद',
        days: 30,
        side_effects: 'पेट में गैस, हल्का दस्त या मुंह में धातु जैसा स्वाद (भोजन के साथ लेने पर कम होता है)।',
        food_interactions: 'मीठी चाय, मिठाई, मैदा, सफेद चावल और तली हुई चीज़ों से सख्त परहेज़ रखें।',
        drug_interactions: 'बिना भोजन किए यह गोली न लें, वरना शुगर का स्तर अत्यधिक गिर (Hypoglycemia) सकता है।',
        avoid_food: 'चीनी, मिठाई, मीठे फल और भारी तली चीजें',
        avoid_drugs: 'खाली पेट कभी न लें',
      },
    ],
    warnings: [
      'यह रोज़ाना चलने वाली जीवनरक्षक दवा है, बिना डॉक्टर से पूछे खुराक कभी भी बंद या आधी न करें।',
      'हफ़्ते में एक बार घर पर या नज़दीकी स्वास्थ्य केंद्र पर BP व शुगर की जाँच अवश्य कराएँ।',
    ],
  },
];

export const SAMPLE_PRESCRIPTIONS_MWR: Prescription[] = [
  {
    id: 'sample_rx_1',
    ts: Date.now() - 86400000 * 2,
    doctor: 'Dr. Ramesh Sharma, MD (Medicine) - Jodhpur Clinic',
    date: '10/10/2026',
    lang: 'mwr',
    summary: 'मौसम पलटन सूँ तेज बुखार, माथो दुखण, पेट मे गैस अर खांसी मिटावण री पर्ची है सा।',
    meds: [
      {
        name: 'Tab. Paracetamol 650mg (Dolo)',
        info: 'ताप अर हाडभांग कम करण री असरदार गोली',
        purpose: 'तेज बुखार अर शरीर रो दर्द तुरंत मिटावण सारू',
        uses: 'ताप, माथा दुखण अर अंग-अंग पीड़ मे आराम दिलावेला सा।',
        dose: '1 गोली (650mg)',
        times: ['morning', 'night'],
        meal: 'रोटी खाया पछे (खाणो खा\'र ही लेवणी)',
        days: 5,
        side_effects: 'घणी गोलियाँ खावण सूँ पेट मे बलतरा या भारीपण हो सके सा।',
        food_interactions: 'दारू, तमाखू बिल्कुल नी लेवणो। भूखे पेट कदेई नी खावणी।',
        drug_interactions: 'दूजी दर्द री गोलियाँ सागे कदेई नी मिलावणी।',
        avoid_food: 'शराब अर भूखे पेट लेवण सूँ बचो सा',
        avoid_drugs: 'दूजी दर्द निवारक दवाइयाँ',
      },
      {
        name: 'Cap. Pantoprazole 40mg (Pan-40)',
        info: 'पेट री गैस, खाटी डकार अर छाती री बलतरा मिटावण रो कैप्सूल',
        purpose: 'पेट मे एसिडिटी अर छाला नी होवे ईं सारू',
        uses: 'दवाइयों सूँ पेट मे होवण वाली जलन अर गैस रो बचाव करे सा।',
        dose: '1 कैप्सूल (40mg)',
        times: ['morning'],
        meal: 'तड़के भूखे पेट (कलेवो करण सूँ आधा घंटा पेली)',
        days: 5,
        side_effects: 'हल्को माथो फिरणो या पेट मे मरोड़ (घणो कम)।',
        food_interactions: 'ज्यादा मिरच-मसालो, तळी-भुंजी चीज़ां अर चाय-कॉफी नी पीवणी सा।',
        drug_interactions: 'गैस रो सिरप सागे नी लेवणो, 1 घंटे रो अंतर राखो सा।',
        avoid_food: 'घणी मिरच अर खटाई',
        avoid_drugs: 'गैस रो सिरप तुरंत सागे नी पीवणो',
      },
      {
        name: 'Syp. Ascoril-D Cough Syrup',
        info: 'सूखी खांसी अर गळा री खराश मिटावण रो मीठो सिरप',
        purpose: 'सूखी खांसी अर गळा री खुजली ठीक करण सारू',
        uses: 'रात मे बार-बार उठण वाली खांसी अर छाती री जकड़न शांत करेला सा।',
        dose: '2 चमचा (10ml)',
        times: ['morning', 'afternoon', 'night'],
        meal: 'हळके ताते पाणी साथे रोटी खाया पछे',
        days: 5,
        side_effects: 'हळकी नींद या सुस्ती आवेला सा। पीया पछे गाड़ी नी चलावणी।',
        food_interactions: 'टाढो पाणी, बर्फ, आइसक्रीम अर खाटी छाछ कदेई नी लेवणी।',
        drug_interactions: 'दूजो कफ सिरप सागे नी लेवणो सा।',
        avoid_food: 'टाढो पाणी अर आइसक्रीम',
        avoid_drugs: 'नींद री दूजी दवाइयाँ',
      },
      {
        name: 'Tab. Azithromycin 500mg (Azithral)',
        info: 'गळा अर छाती रो इन्फेक्शन मिटावण री खास एंटीबायोटिक गोली',
        purpose: 'छाती अर गळा रा कीटाणु जड़ां सूँ खत्म करण सारू',
        uses: 'गळा री सूजन, खांसी अर इन्फेक्शन ने जड़ां सूँ मिटावेला सा।',
        dose: '1 गोली (500mg)',
        times: ['morning'],
        meal: 'रोटी खाया रे 1 घंटा पछे (रोजाना एक ही टेम पे)',
        days: 3,
        side_effects: 'पेट मे हळको दर्द या जी मिचलाणो हो सके सा।',
        food_interactions: 'दही अर दूध तुरंत सागे नी लेवणो, ताते पाणी सूँ लेवो सा।',
        drug_interactions: '3 दिनां रो पूरो कोर्स खत्म करणो, बीच मे नी छोड़णी सा।',
        avoid_food: 'दूध-दही तुरंत सागे नी लेवणो',
        avoid_drugs: 'कोर्स अधूरा नी छोड़णो',
      },
    ],
    warnings: [
      'एंटीबायोटिक Azithromycin रो 3 दिनां रो पूरो कोर्स खत्म करजो, ताप उतरया पछे भी बंद मत करजो सा।',
      'Paracetamol लेवता टेम दारू-नशा सूँ पूरो परहेज राखजो सा।',
      '3 दिनां मे बुखार नी उतरे तो तुरत डॉक्टर साब ने पाछो बतावजो सा।',
    ],
  },
  {
    id: 'sample_rx_2',
    ts: Date.now() - 86400000 * 20,
    doctor: 'Dr. Sunita Mehta, MBBS, DNB - Senior Physician, Jodhpur',
    date: '21/09/2026',
    lang: 'mwr',
    summary: 'बीपी अर सुगर ने काबू मे राखण री रोज री पक्की दवाई री पर्ची है सा।',
    meds: [
      {
        name: 'Tab. Telmisartan 40mg (Telma)',
        info: 'बीपी ने सही राखण अर नस-नस ने आराम देण री गोली',
        purpose: 'ब्लड प्रेशर (BP) ने सही राखण अर काळजे री सुरक्षा सारू',
        uses: 'बीपी वधण सूँ बचावे अर दिल रो दौरा पड़ण सूँ रोकेला सा।',
        dose: '1 गोली (40mg)',
        times: ['morning'],
        meal: 'तड़के कलेवो करया पछे रोज एक ही टेम पे',
        days: 30,
        side_effects: 'शुरू मे हळका चक्कर आ सके सा, खाट सूँ एकदमे मत उठजो।',
        food_interactions: 'ऊपर सूँ लूण (नमक), पापड़, आचार अर खारो खाणो कम राखजो सा।',
        drug_interactions: 'दर्द री गोलियाँ (Diclofenac) रोज-रोज नी लेवणी, बीपी वध जावे सा।',
        avoid_food: 'ज्यादा लूण, पापड़ अर आचार',
        avoid_drugs: 'दर्द री गोलियाँ',
      },
      {
        name: 'Tab. Metformin 500mg SR (Glycomet)',
        info: 'लोई मे सुगर री मात्रा ने काबू मे राखण री असरदार गोली',
        purpose: 'खून मे सुगर ने सामान्य अर संतुलित राखण सारू',
        uses: 'रोटी खाया पछे सुगर वधण नी देवे अर तंदुरुस्त राखेला सा।',
        dose: '1 गोली (500mg)',
        times: ['morning', 'night'],
        meal: 'दुपहरी अर रात री रोटी खाया रे तुरत पछे',
        days: 30,
        side_effects: 'पेट मे अफारो या मुंडा रो स्वाद फीको हो सके सा।',
        food_interactions: 'मीठी चाय, गुड़, लापसी, खांड अर घी-तेल कम करजो सा।',
        drug_interactions: 'भूखे पेट कदेई नी खावणी, नी तो सुगर घणी नीचे गिर जावेला सा।',
        avoid_food: 'मीठी चाय, मिठाई अर ज्यादा खांड',
        avoid_drugs: 'भूखे पेट कदेई नी खावणी',
      },
    ],
    warnings: [
      'या रोज चालण वाली पक्की दवाई है, डॉक्टर साब ने पूछे बिना कदेई बंद मत करजो सा।',
      'हफ्ते मे एक फेर बीपी अर सुगर री जांच जरूर करावजो सा।',
    ],
  },
];

export const SAMPLE_PRESCRIPTIONS_EN: Prescription[] = [
  {
    id: 'sample_rx_1',
    ts: Date.now() - 86400000 * 2,
    doctor: 'Dr. Ramesh Sharma, MD (Medicine) - Jodhpur Clinic',
    date: '10/10/2026',
    lang: 'en',
    summary: 'Prescription treating acute viral fever, headache, gastric acidity, and dry irritating cough due to seasonal changes.',
    meds: [
      {
        name: 'Tab. Paracetamol 650mg (Dolo)',
        info: 'Antipyretic & Analgesic (Proven fever reducer and body ache relief tablet)',
        purpose: 'Rapid relief from high fever and severe body aches',
        uses: 'Prescribed for controlling viral fever, headache, joint stiffness, and malaise.',
        dose: '1 tablet (650mg)',
        times: ['morning', 'night'],
        meal: 'After Food (do not take on an empty stomach)',
        days: 5,
        side_effects: 'Nausea, sweating, or gastric irritation if taken in excessive amounts.',
        food_interactions: 'Strictly avoid alcoholic beverages. Take with food or warm water.',
        drug_interactions: 'Do not combine with other Paracetamol-containing analgesics (e.g., Combiflam, Crocin).',
        avoid_food: 'Alcohol, fasting while dosing',
        avoid_drugs: 'Duplicate Paracetamol NSAIDs',
      },
      {
        name: 'Cap. Pantoprazole 40mg (Pan-40)',
        info: 'Proton Pump Inhibitor (Reduces stomach acid and prevents gastric ulcers)',
        purpose: 'Prevents acid reflux, heartburn, and medication-induced gastritis',
        uses: 'Protects the stomach lining from irritation caused by antibiotics and analgesics.',
        dose: '1 capsule (40mg)',
        times: ['morning'],
        meal: 'Empty stomach, 30 minutes before breakfast',
        days: 5,
        side_effects: 'Mild headache or brief stomach cramps (very uncommon).',
        food_interactions: 'Avoid heavily spiced, oily, or fried foods; avoid morning tea/coffee on an empty stomach.',
        drug_interactions: 'Maintain at least a 1-hour interval before taking antacid liquid syrups.',
        avoid_food: 'Excess chili and deep-fried snacks',
        avoid_drugs: 'Immediate antacid suspension co-administration',
      },
      {
        name: 'Syp. Ascoril-D Cough Syrup',
        info: 'Cough Suppressant & Antiallergic Syrup (Relieves dry throat tickle & coughing spells)',
        purpose: 'Soothes stubborn dry cough and throat irritation',
        uses: 'Suppresses nocturnal coughing bouts and relieves bronchial irritation.',
        dose: '2 teaspoons (10ml)',
        times: ['morning', 'afternoon', 'night'],
        meal: 'After meals with lukewarm water',
        days: 5,
        side_effects: 'Mild drowsiness or dry mouth. Avoid driving immediately after intake.',
        food_interactions: 'Strictly avoid ice-cold water, ice cream, refrigerated drinks, and sour curds.',
        drug_interactions: 'Do not mix with other sedatives, antihistamines, or additional cough elixirs.',
        avoid_food: 'Cold water, ice creams, citrus drinks',
        avoid_drugs: 'Other sleeping pills or cough syrups',
      },
      {
        name: 'Tab. Azithromycin 500mg (Azithral)',
        info: 'Macrolide Antibiotic (Eradicates bacterial infections of throat and upper respiratory tract)',
        purpose: 'Clears bacterial throat, tonsillar, and chest infection',
        uses: 'Treats bacterial pharyngitis, sinusitis, and chest congestion.',
        dose: '1 tablet (500mg)',
        times: ['morning'],
        meal: '1 hour after meals at a consistent time each day',
        days: 3,
        side_effects: 'Mild abdominal discomfort, nausea, or loose stools (resolves post course).',
        food_interactions: 'Do not take with heavy milk/dairy immediately; drink plenty of plain water.',
        drug_interactions: 'Must complete the entire 3-day course; never stop early even if fever drops.',
        avoid_food: 'Heavy dairy directly with the pill',
        avoid_drugs: 'Stopping course prematurely',
      },
    ],
    warnings: [
      'Complete the entire 3-day course of Azithromycin antibiotic; do not discontinue early even if fever subsides.',
      'Refrain from alcohol intake while on Paracetamol to protect liver function.',
      'If high fever above 102°F persists past day 3, seek immediate doctor consultation.',
    ],
  },
  {
    id: 'sample_rx_2',
    ts: Date.now() - 86400000 * 20,
    doctor: 'Dr. Sunita Mehta, MBBS, DNB - Senior Physician, Jodhpur',
    date: '21/09/2026',
    lang: 'en',
    summary: 'Maintenance prescription for regular long-term management of Hypertension (High BP) and Type-2 Diabetes.',
    meds: [
      {
        name: 'Tab. Telmisartan 40mg (Telma)',
        info: 'Angiotensin Receptor Blocker (Relaxes blood vessels to maintain healthy blood pressure)',
        purpose: 'Controls High Blood Pressure and shields heart & kidney function',
        uses: 'Significantly lowers the long-term risk of heart attack, stroke, and cardiac complications.',
        dose: '1 tablet (40mg)',
        times: ['morning'],
        meal: 'Morning after breakfast at the same fixed time daily',
        days: 30,
        side_effects: 'Mild postural dizziness initially; do not stand up abruptly from bed.',
        food_interactions: 'Strictly minimize table salt, pickles, papads, and high-sodium processed foods.',
        drug_interactions: 'Avoid frequent intake of NSAID painkillers (e.g. Diclofenac, Ibuprofen) as they spike BP.',
        avoid_food: 'Excess salt, pickles, salty chips',
        avoid_drugs: 'Frequent NSAID pain relievers',
      },
      {
        name: 'Tab. Metformin 500mg SR (Glycomet)',
        info: 'Biguanide Oral Antidiabetic (Improves insulin sensitivity and stabilizes blood sugar)',
        purpose: 'Maintains balanced blood glucose levels throughout the day',
        uses: 'Prevents post-meal sugar spikes in Type-2 Diabetes and aids metabolic health.',
        dose: '1 tablet (500mg)',
        times: ['morning', 'night'],
        meal: 'Immediately after morning and dinner meals',
        days: 30,
        side_effects: 'Mild flatulence or metallic taste (significantly reduced when taken with meals).',
        food_interactions: 'Avoid sugary teas, sweets, refined flours, and deep-fried foods.',
        drug_interactions: 'Never take on an empty stomach without eating, to avoid dangerous hypoglycemia.',
        avoid_food: 'Refined sugar, sweets, deep-fried snacks',
        avoid_drugs: 'Never take while skipping meals',
      },
    ],
    warnings: [
      'This is essential daily maintenance therapy; never stop or alter dosages without doctor supervision.',
      'Check blood pressure and blood sugar at least once weekly at home or your nearest clinic.',
    ],
  },
];

export const SAMPLE_PRESCRIPTIONS_GU: Prescription[] = [
  {
    ...SAMPLE_PRESCRIPTIONS_HI[0],
    id: 'sample_rx_1',
    lang: 'gu',
    summary: 'હવામાન બદલાવાને કારણે વાયરલ તાવ, માથાનો દુખાવો, એસિડિટી અને સૂકી ઉધરસની ચિઠ્ઠી છે.',
    meds: SAMPLE_PRESCRIPTIONS_HI[0].meds.map((m) => ({
      ...m,
      info: m.name.includes('Paracetamol')
        ? 'તાવ અને શરીરનો દુખાવો ઘટાડવાની અસરકારક દવા'
        : m.name.includes('Pantoprazole')
        ? 'પેટમાં એસિડિટી અને ગેસ અટકાવતી કેપ્સ્યુલ'
        : m.name.includes('Ascoril')
        ? 'સૂકી ઉધરસ અને ગળાની ખારાશ મટાડતું સિરપ'
        : 'ગળા અને છાતીના બેક્ટેરિયા દૂર કરતી એન્ટિબાયોટિક દવા',
      purpose: m.name.includes('Paracetamol')
        ? 'તીવ્ર તાવ અને કળતર દૂર કરવા માટે'
        : m.name.includes('Pantoprazole')
        ? 'ગેસ, બળતરા અને અલ્સરથી રક્ષણ મેળવવા માટે'
        : m.name.includes('Ascoril')
        ? 'સૂકી ઉધરસ શાંત કરવા માટે'
        : 'બેક્ટેરિયલ ઇન્ફેક્શન મૂળમાંથી નાબૂદ કરવા માટે',
      uses: m.name.includes('Paracetamol')
        ? 'તાવ, માથાનો દુખાવો અને સાંધાના દુખાવામાં રાહત આપે છે.'
        : m.name.includes('Pantoprazole')
        ? 'દવાઓથી પેટમાં થતી બળતરા અટકાવે છે.'
        : m.name.includes('Ascoril')
        ? 'ગળાની ખંજવાળ અને ખાંસીના હુમલા રોકે છે.'
        : 'ગળા અને છાતીના ચેપનો નાશ કરે છે.',
      meal: m.name.includes('Pantoprazole') ? 'સવારે ભૂખ્યા પેટે નાસ્તા પહેલાં' : 'જમ્યા પછી હુંફાળા પાણી સાથે',
      side_effects: 'સામાન્ય રીતે હળવા લક્ષણો, વધુ માત્રા ન લેવી.',
      food_interactions: 'દારૂ, તીખું-તળેલું અને ઠંડુ પાણી ટાળવું.',
      drug_interactions: 'અન્ય દવાઓ સાથે ભેળવીને ન લેવી, ડૉક્ટરને પૂછવું.',
    })),
    warnings: [
      'એન્ટિબાયોટિકનો 3 દિવસનો કોર્સ પૂરો કરવો, તાવ ઉતરી જાય તો પણ બંધ ન કરવો.',
      'પેરાસીટામોલ સાથે આલ્કોહોલનું સેવન બિલકુલ ન કરવું.',
      '3 દિવસ પછી પણ તાવ રહે તો તરત જ ડૉક્ટરનો સંપર્ક કરવો.',
    ],
  },
  {
    ...SAMPLE_PRESCRIPTIONS_HI[1],
    id: 'sample_rx_2',
    lang: 'gu',
    summary: 'હાઈ બ્લડ પ્રેશર (BP) અને ટાઈપ-2 ડાયાબિટીસને કાબૂમાં રાખવા માટેની નિયમિત દવાઓની ચિઠ્ઠી.',
    meds: SAMPLE_PRESCRIPTIONS_HI[1].meds.map((m) => ({
      ...m,
      info: m.name.includes('Telmisartan')
        ? 'બીપી સામાન્ય રાખવા અને હૃદય-કિડનીની રક્ષા કરતી દવા'
        : 'લોહીમાં સુગરનું પ્રમાણ સંતુલિત રાખતી ગોળી',
      purpose: m.name.includes('Telmisartan')
        ? 'બ્લડ પ્રેશરને નિયંત્રણમાં રાખવા માટે'
        : 'સુગર લેવલ નોર્મલ રાખવા માટે',
      uses: m.name.includes('Telmisartan')
        ? 'હાર્ટ એટેક અને સ્ટ્રોકનું જોખમ ઘટાડે છે.'
        : 'જમ્યા પછી સુગર વધતી અટકાવે છે.',
      meal: m.name.includes('Telmisartan') ? 'સવારે નાસ્તા પછી નિયત સમયે' : 'જમ્યા પછી તરત જ',
      side_effects: 'શરૂઆતમાં હળવા ચક્કર અથવા પેટમાં ગેસ થઈ શકે.',
      food_interactions: 'મીઠું, પાપડ, અથાણું અને મીઠાઈ બંધ રાખવી.',
      drug_interactions: 'દર્દની દવાઓ (પેઇન કિલર) વારંવાર ન લેવી.',
    })),
    warnings: [
      'આ રોજિંદી જીવનરક્ષક દવા છે, ડૉક્ટરને પૂછ્યા વગર ક્યારેય બંધ ન કરવી.',
      'અઠવાડિયામાં એક વાર બીપી અને સુગરની તપાસ અચૂક કરાવવી.',
    ],
  },
];

export const SAMPLE_PRESCRIPTIONS_TA: Prescription[] = [
  {
    ...SAMPLE_PRESCRIPTIONS_HI[0],
    id: 'sample_rx_1',
    lang: 'ta',
    summary: 'பருவநிலை மாற்றத்தால் ஏற்படும் காய்ச்சல், தலைவலி, அசிடிட்டி மற்றும் இருமலுக்கான மருந்துச் சீட்டு.',
    meds: SAMPLE_PRESCRIPTIONS_HI[0].meds.map((m) => ({
      ...m,
      info: m.name.includes('Paracetamol')
        ? 'காய்ச்சல் மற்றும் உடல் வலியைப் போக்கும் மாத்திரை'
        : m.name.includes('Pantoprazole')
        ? 'வயிற்றில் அமிலத்தன்மை மற்றும் வாயுவை தடுக்கும் காப்ஸ்யூல்'
        : m.name.includes('Ascoril')
        ? 'வறட்டு இருமல் மற்றும் தொண்டை எரிச்சலை குணப்படுத்தும் சிரப்'
        : 'தொண்டை மற்றும் மார்பு தொற்றுக்கான ஆன்டிபயாடிக் மாத்திரை',
      purpose: m.name.includes('Paracetamol')
        ? 'காய்ச்சல் மற்றும் வலியை விரைவாகக் குறைக்க'
        : m.name.includes('Pantoprazole')
        ? 'நெஞ்செரிச்சல் மற்றும் வாயுத் தொல்லை வராமல் தடுக்க'
        : m.name.includes('Ascoril')
        ? 'வறட்டு இருமலைத் தணிக்க'
        : 'பாக்டீரியா தொற்றை முழுமையாக அழிக்க',
      uses: m.name.includes('Paracetamol')
        ? 'காய்ச்சல் மற்றும் தலைவலியில் இருந்து நிவாரணம் தருகிறது.'
        : m.name.includes('Pantoprazole')
        ? 'வயிற்றுப் புண் ஏற்படாமல் காக்கிறது.'
        : m.name.includes('Ascoril')
        ? 'தொண்டை கரகரப்பு மற்றும் இருமலை நீக்குகிறது.'
        : 'நுரையீரல் மற்றும் தொண்டை தொற்றை குணப்படுத்துகிறது.',
      meal: m.name.includes('Pantoprazole') ? 'காலை வெறும் வயிற்றில்' : 'உணவுக்குப் பிறகு வெதுவெதுப்பான நீரில்',
      side_effects: 'லேசான தூக்கம் அல்லது தலைவலி ஏற்படலாம்.',
      food_interactions: 'குளிர்ந்த நீர், ஐஸ்கிரீம் மற்றும் மது அருந்துவதை தவிர்க்கவும்.',
      drug_interactions: 'பிற வலி மாத்திரைகளுடன் சேர்க்க வேண்டாம்.',
    })),
    warnings: [
      'Azithromycin ஆன்டிபயாடிக் மருந்தை 3 நாட்கள் முழுமையாக உட்கொள்ளவும்.',
      'பாராசிட்டமால் எடுக்கும் போது மது அருந்தக்கூடாது.',
      'காய்ச்சல் நீடித்தால் மருத்துவரை அணுகவும்.',
    ],
  },
  {
    ...SAMPLE_PRESCRIPTIONS_HI[1],
    id: 'sample_rx_2',
    lang: 'ta',
    summary: 'இரத்த அழுத்தம் (BP) மற்றும் சர்க்கரை நோயைக் கட்டுப்படுத்தும் தினசரி மருந்துச் சீட்டு.',
    meds: SAMPLE_PRESCRIPTIONS_HI[1].meds.map((m) => ({
      ...m,
      info: m.name.includes('Telmisartan')
        ? 'இரத்த அழுத்தத்தைக் கட்டுப்படுத்தி இதயத்தைக் காக்கும் மருந்து'
        : 'இரத்தத்தில் சர்க்கரை அளவை சமநிலையில் வைக்கும் மாத்திரை',
      purpose: m.name.includes('Telmisartan')
        ? 'இரத்த அழுத்தத்தை சீராக வைத்திருக்க'
        : 'சர்க்கரை அளவைக் கட்டுப்படுத்த',
      uses: m.name.includes('Telmisartan')
        ? 'மாரடைப்பு மற்றும் பக்கவாத அபாயத்தைக் குறைக்கிறது.'
        : 'உணவுக்குப் பிறகு சர்க்கரை உயர்வதைத் தடுக்கிறது.',
      meal: m.name.includes('Telmisartan') ? 'காலை உணவுக்குப் பிறகு' : 'உணவுக்குப் பின் உடனடியாக',
      side_effects: 'ஆரம்பத்தில் லேசான மயக்கம் வரலாம்.',
      food_interactions: 'உப்பு, ஊறுகாய், இனிப்பு வகைகளை தவிர்க்கவும்.',
      drug_interactions: 'வலி மாத்திரைகளை சுயமாக அடிக்கடி எடுக்க வேண்டாம்.',
    })),
    warnings: [
      'இது தொடர் மருந்து, மருத்துவர் ஆலோசனையின்றி நிறுத்தக் கூடாது.',
      'வாரத்திற்கு ஒரு முறை BP மற்றும் சர்க்கரையை பரிசோதிக்கவும்.',
    ],
  },
];

export const SAMPLE_PRESCRIPTIONS_PA: Prescription[] = [
  {
    ...SAMPLE_PRESCRIPTIONS_HI[0],
    id: 'sample_rx_1',
    lang: 'pa',
    summary: 'ਮੌਸਮ ਬਦਲਣ ਕਾਰਨ ਤੇਜ਼ ਬੁਖ਼ਾਰ, ਸਿਰਦਰਦ, ਗੈਸ ਅਤੇ ਸੁੱਕੀ ਖੰਘ ਦੇ ਇਲਾਜ ਦੀ ਪਰਚੀ ਹੈ।',
    meds: SAMPLE_PRESCRIPTIONS_HI[0].meds.map((m) => ({
      ...m,
      info: m.name.includes('Paracetamol')
        ? 'ਬੁਖ਼ਾਰ ਅਤੇ ਸਰੀਰ ਦਰਦ ਦੂਰ ਕਰਨ ਵਾਲੀ ਗੋਲੀ'
        : m.name.includes('Pantoprazole')
        ? 'ਤੇਜ਼ਾਬ ਅਤੇ ਪੇਟ ਦੀ ਗੈਸ ਰੋਕਣ ਵਾਲਾ ਕੈਪਸੂਲ'
        : m.name.includes('Ascoril')
        ? 'ਸੁੱਕੀ ਖੰਘ ਅਤੇ ਗਲੇ ਦੀ ਖ਼ਰਾਸ਼ ਦੂਰ ਕਰਨ ਵਾਲਾ ਸ਼ਰਬਤ'
        : 'ਗਲੇ ਅਤੇ ਛਾਤੀ ਦੀ ਇਨਫੈਕਸ਼ਨ ਖ਼ਤਮ ਕਰਨ ਵਾਲੀ ਐਂਟੀਬਾਇਓਟਿਕ',
      purpose: m.name.includes('Paracetamol')
        ? 'ਬੁਖ਼ਾਰ ਅਤੇ ਅੰਗ-ਅੰਗ ਪੀੜ ਦੂਰ ਕਰਨ ਲਈ'
        : m.name.includes('Pantoprazole')
        ? 'ਗੈਸ, ਜਲਣ ਅਤੇ ਛਾਲਿਆਂ ਤੋਂ ਬਚਾਅ ਲਈ'
        : m.name.includes('Ascoril')
        ? 'ਸੁੱਕੀ ਖੰਘ ਨੂੰ ਸ਼ਾਂਤ ਕਰਨ ਲਈ'
        : 'ਬੈਕਟੀਰੀਆ ਇਨਫੈਕਸ਼ਨ ਨੂੰ ਜੜ੍ਹੋਂ ਮੁਕਾਉਣ ਲਈ',
      uses: m.name.includes('Paracetamol')
        ? 'ਸਿਰਦਰਦ ਅਤੇ ਬੁਖ਼ਾਰ ਤੋਂ ਰਾਹਤ ਦਿੰਦੀ ਹੈ।'
        : m.name.includes('Pantoprazole')
        ? 'ਦਵਾਈਆਂ ਨਾਲ ਪੇਟ ਵਿਚ ਹੋਣ ਵਾਲੀ ਜਲਣ ਰੋਕਦੀ ਹੈ।'
        : m.name.includes('Ascoril')
        ? 'ਗਲੇ ਦੀ ਖਿਚ-ਖਿਚ ਅਤੇ ਖੰਘ ਹਟਾਉਂਦੀ ਹੈ।'
        : 'ਛਾਤੀ ਅਤੇ ਗਲੇ ਦੀ ਇਨਫੈਕਸ਼ਨ ਠੀਕ ਕਰਦੀ ਹੈ।',
      meal: m.name.includes('Pantoprazole') ? 'ਸਵੇਰੇ ਖ਼ਾਲੀ ਪੇਟ ਨਾਸ਼ਤੇ ਤੋਂ ਪਹਿਲਾਂ' : 'ਰੋਟੀ ਖਾਣ ਤੋਂ ਬਾਅਦ ਕੋਸੇ ਪਾਣੀ ਨਾਲ',
      side_effects: 'ਹਲਕੀ ਨੀਂਦ ਜਾਂ ਸੁਸਤੀ ਆ ਸਕਦੀ ਹੈ।',
      food_interactions: 'ਸ਼ਰਾਬ, ਠੰਢਾ ਪਾਣੀ ਅਤੇ ਖੱਟੀਆਂ ਚੀਜ਼ਾਂ ਤੋਂ ਪਰਹੇਜ਼ ਰੱਖੋ।',
      drug_interactions: 'ਦੂਜੀਆਂ ਦਰਦ ਦੀਆਂ ਦਵਾਈਆਂ ਨਾਲ ਨਾ ਮਿਲਾਓ।',
    })),
    warnings: [
      'ਐਂਟੀਬਾਇਓਟਿਕ ਦਾ 3 ਦਿਨਾਂ ਦਾ ਕੋਰਸ ਪੂਰਾ ਕਰੋ, ਬੁਖ਼ਾਰ ਉਤਰਨ ਤੇ ਵੀ ਬੰਦ ਨਾ ਕਰੋ।',
      'ਪੈਰਾਸੀਟਾਮੋਲ ਲੈਂਦੇ ਸਮੇਂ ਸ਼ਰਾਬ ਬਿਲਕੁਲ ਨਾ ਪੀਓ।',
      'ਬੁਖ਼ਾਰ 3 ਦਿਨ ਬਾਅਦ ਵੀ ਰਹੇ ਤਾਂ ਡਾਕਟਰ ਨੂੰ ਤੁਰੰਤ ਦਿਖਾਓ।',
    ],
  },
  {
    ...SAMPLE_PRESCRIPTIONS_HI[1],
    id: 'sample_rx_2',
    lang: 'pa',
    summary: 'ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ (BP) ਅਤੇ ਟਾਈਪ-2 ਸ਼ੂਗਰ ਨੂੰ ਕਾਬੂ ਵਿਚ ਰੱਖਣ ਵਾਲੀ ਰੋਜ਼ਾਨਾ ਦੀ ਪਰਚੀ।',
    meds: SAMPLE_PRESCRIPTIONS_HI[1].meds.map((m) => ({
      ...m,
      info: m.name.includes('Telmisartan')
        ? 'ਬੀਪੀ ਕੰਟਰੋਲ ਰੱਖਣ ਅਤੇ ਦਿਲ-ਗੁਰਦਿਆਂ ਦੀ ਰੱਖਿਆ ਕਰਨ ਵਾਲੀ ਗੋਲੀ'
        : 'ਖ਼ੂਨ ਵਿਚ ਸ਼ੂਗਰ ਦੀ ਮਾਤਰਾ ਸੰਤੁਲਿਤ ਰੱਖਣ ਵਾਲੀ ਦਵਾਈ',
      purpose: m.name.includes('Telmisartan')
        ? 'ਬੀਪੀ ਨੂੰ ਆਮ ਪੱਧਰ ਤੇ ਰੱਖਣ ਲਈ'
        : 'ਸ਼ੂਗਰ ਲੈਵਲ ਨੂੰ ਕੰਟਰੋਲ ਵਿਚ ਰੱਖਣ ਲਈ',
      uses: m.name.includes('Telmisartan')
        ? 'ਦਿਲ ਦੇ ਦੌਰੇ ਅਤੇ ਸਟ੍ਰੋਕ ਦੇ ਖ਼ਤਰੇ ਨੂੰ ਘਟਾਉਂਦੀ ਹੈ।'
        : 'ਖਾਣਾ ਖਾਣ ਤੋਂ ਬਾਅਦ ਸ਼ੂਗਰ ਵਧਣ ਤੋਂ ਰੋਕਦੀ ਹੈ।',
      meal: m.name.includes('Telmisartan') ? 'ਸਵੇਰੇ ਨਾਸ਼ਤੇ ਤੋਂ ਬਾਅਦ ਇਕੋ ਸਮੇਂ' : 'ਦੁਪਹਿਰ ਤੇ ਰਾਤ ਦੇ ਖਾਣੇ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ',
      side_effects: 'ਸ਼ੁਰੂ ਵਿਚ ਹਲਕਾ ਚੱਕਰ ਜਾਂ ਗੈਸ ਹੋ ਸਕਦੀ ਹੈ।',
      food_interactions: 'ਲੂਣ, ਪਾਪੜ, ਅਚਾਰ ਅਤੇ ਮਿੱਠੀਆਂ ਚੀਜ਼ਾਂ ਬੰਦ ਰੱਖੋ।',
      drug_interactions: 'ਦਰਦ ਦੀਆਂ ਗੋਲੀਆਂ (Diclofenac) ਵਾਰ-ਵਾਰ ਨਾ ਲਵੋ।',
    })),
    warnings: [
      'ਇਹ ਰੋਜ਼ਾਨਾ ਚੱਲਣ ਵਾਲੀ ਪੱਕੀ ਦਵਾਈ ਹੈ, ਡਾਕਟਰ ਤੋਂ ਬਿਨਾਂ ਪੁੱਛੇ ਕਦੇ ਬੰਦ ਨਾ ਕਰੋ।',
      'ਹਫ਼ਤੇ ਵਿਚ ਇਕ ਵਾਰ ਬੀਪੀ ਅਤੇ ਸ਼ੂਗਰ ਜ਼ਰੂਰ ਚੈੱਕ ਕਰਵਾਓ।',
    ],
  },
];

export function getSamplePrescriptions(lang: LanguageCode): Prescription[] {
  switch (lang) {
    case 'mwr':
      return SAMPLE_PRESCRIPTIONS_MWR;
    case 'en':
      return SAMPLE_PRESCRIPTIONS_EN;
    case 'gu':
      return SAMPLE_PRESCRIPTIONS_GU;
    case 'ta':
      return SAMPLE_PRESCRIPTIONS_TA;
    case 'pa':
      return SAMPLE_PRESCRIPTIONS_PA;
    case 'hi':
    default:
      return SAMPLE_PRESCRIPTIONS_HI;
  }
}

export const SAMPLE_PRESCRIPTIONS = SAMPLE_PRESCRIPTIONS_HI;
