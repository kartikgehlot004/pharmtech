import { LanguageCode } from '../types';

export interface TranslationStrings {
  // Navigation
  nav: {
    howItWorks: string;
    features: string;
    myDashboard: string;
    schemes: string;
    startBtn: string;
    badge: string;
    logout: string;
    lightMode: string;
    darkMode: string;
    selectLanguage: string;
  };
  // Hero
  hero: {
    tag: string;
    title1: string;
    title2: string;
    subtitle: string;
    uploadBtn: string;
    schemesBtn: string;
    availableLangs: string;
    rxDoctor: string;
    rxVerified: string;
    rxTitle: string;
    rxVoiceSampleTitle: string;
    rxVoiceSampleBadge: string;
    rxVoiceSampleDesc: string;
    rxVoiceBtnListen: string;
    rxVoiceBtnStop: string;
    safePrivate: string;
    aiPartner: string;
    sampleSpokenText: string;
  };
  // How it works
  how: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    stepCompleted: string;
  };
  // Features
  feat: {
    badge: string;
    title: string;
    subtitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
    f5Title: string;
    f5Desc: string;
    f6Title: string;
    f6Desc: string;
    f7Title: string;
    f7Desc: string;
    f8Title: string;
    f8Desc: string;
  };
  // Auth Card
  auth: {
    loginTitle: string;
    signupTitle: string;
    desc: string;
    loginTab: string;
    signupTab: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    pwdLabel: string;
    pwdPlaceholder: string;
    loginBtn: string;
    signupBtn: string;
    demoLoginBtn: string;
    privacyNote: string;
    emailError: string;
    pwdError: string;
    emailExistsError: string;
    emailNotFoundError: string;
    wrongPwdError: string;
  };
  // Dashboard Header & Tabs
  dash: {
    badge: string;
    title: string;
    subtitleLogged: string;
    subtitleGuest: string;
    greeting: string;
    langLabel: string;
    logout: string;
    tabScan: string;
    tabMy: string;
    tabReminders: string;
    tabHistory: string;
    tabAssistant: string;
    apiKeyTitle: string;
    apiKeyDesc: string;
    apiKeyClose: string;
    apiKeySave: string;
    medicalDisclaimer: string;
  };
  // Scan Tab
  scan: {
    boxTitle: string;
    boxDesc: string;
    chooseFileBtn: string;
    removeBtn: string;
    scanBtn: string;
    scanningText: string;
    sampleHeader: string;
    sample1Title: string;
    sample1Badge: string;
    sample1Desc: string;
    sample2Title: string;
    sample2Badge: string;
    sample2Desc: string;
    selectPhotoFirst: string;
    scanError: string;
    backToScan: string;
    savedRxDetail: string;
  };
  // Rx Result Card
  rxCard: {
    rxHeader: string;
    medsCountSuffix: string;
    listenAllBtn: string;
    stopAudioBtn: string;
    summaryTitle: string;
    medsSectionTitle: string;
    listenMedBtn: string;
    stopMedBtn: string;
    infoLabel: string;
    usesLabel: string;
    dosageLabel: string;
    sideEffectsLabel: string;
    interactionsLabel: string;
    foodInteractionLabel: string;
    drugInteractionLabel: string;
    purposeLabel: string;
    safeCommon: string;
    avoidFoodLabel: string;
    avoidDrugsLabel: string;
    daysCourse: string;
    warningsTitle: string;
    saveRxBtn: string;
    savedRxBtn: string;
  };
  // My Prescriptions Tab
  my: {
    title: string;
    addNewBtn: string;
    emptyTitle: string;
    emptyDesc: string;
    startAddingBtn: string;
    deleteConfirm: string;
    viewBtn: string;
  };
  // Reminders Tab
  rem: {
    title: string;
    subtitle: string;
    testChimeBtn: string;
    filterToday: string;
    filterAll: string;
    emptyToday: string;
    emptyAll: string;
    emptyDesc: string;
    todayBadge: string;
    dateLabel: string;
    takenTooltip: string;
    markTakenTooltip: string;
    testAlertPrefix: string;
    timeChimeAlert: string;
    timeLabelMorning: string;
    timeLabelAfternoon: string;
    timeLabelNight: string;
  };
  // Health History Tab
  hist: {
    title: string;
    prescriptionsCountSuffix: string;
    listenReportBtn: string;
    reloadBtn: string;
    analyzingTitle: string;
    analyzingDesc: string;
    emptyTitle: string;
    emptyDesc: string;
    overviewTitle: string;
    changesTitle: string;
    adviceTitle: string;
    historyDisclaimer: string;
    fallbackOverview: string;
    fallbackChange1: string;
    fallbackChange2: string;
    fallbackAdvice1: string;
    fallbackAdvice2: string;
    fallbackAdvice3: string;
  };
  // Assistant Tab
  asst: {
    title: string;
    subtitle: string;
    welcomeMessage: string;
    listenAgain: string;
    thinking: string;
    suggestionsLabel: string;
    sug1: string;
    sug2: string;
    sug3: string;
    sug4: string;
    inputPlaceholder: string;
    sendBtn: string;
    micUnsupported: string;
    micActiveTitle: string;
    micInactiveTitle: string;
    fallbackReply: string;
  };
  // Schemes Section
  schemes: {
    badge: string;
    title: string;
    subtitle: string;
    openPortal: string;
    centralGovt: string;
    rajGovt: string;
    jodhpurDistrict: string;
  };
  // Footer
  footer: {
    tagline: string;
    subtagline: string;
    disclaimerTitle: string;
    disclaimerText: string;
    copyright: string;
    madeWith: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationStrings> = {
  hi: {
    nav: {
      howItWorks: 'कैसे काम करता है',
      features: 'खूबियाँ',
      myDashboard: 'मेरा डैशबोर्ड',
      schemes: 'सरकारी योजनाएँ',
      startBtn: 'शुरू करें',
      badge: 'दवाई साथी',
      logout: 'लॉगआउट',
      lightMode: 'लाइट मोड',
      darkMode: 'डार्क मोड',
      selectLanguage: 'भाषा चुनें',
    },
    hero: {
      tag: '🎙️ Voice-First • हिन्दी • मारवाड़ी • English • 6 भाषाएँ',
      title1: 'डॉक्टर की पर्ची अब',
      title2: 'आपकी भाषा में बोलेगी',
      subtitle:
        'हाथ से लिखी पर्ची की फोटो डालिए। DawaiMitra बताएगा – कौन सी दवाई, किस काम की, कब और कैसे लेनी है, क्या नहीं खाना है। बिना पढ़े, सिर्फ़ सुनकर।',
      uploadBtn: '📷 पर्ची अपलोड करें',
      schemesBtn: '🏥 सरकारी योजनाएँ',
      availableLangs: 'उपलब्ध भाषाएँ:',
      rxDoctor: 'डॉ. आर. के. शर्मा (MD) • जोधपुर',
      rxVerified: 'पर्ची सत्यापित',
      rxTitle: 'Rx — डॉक्टर की पर्ची',
      rxVoiceSampleTitle: 'पैरासिटामोल 650mg',
      rxVoiceSampleBadge: 'सुबह-रात',
      rxVoiceSampleDesc: 'बुखार और बदन दर्द की दवाई। सुबह और रात खाने के बाद लें, 5 दिन तक।',
      rxVoiceBtnListen: '🔊 बोलकर सुनाओ (क्लिक करें)',
      rxVoiceBtnStop: '⏸️ रोकें',
      safePrivate: '100% सुरक्षित व निजी',
      aiPartner: 'AI पावर्ड वॉइस साथी',
      sampleSpokenText:
        'पैरासिटामोल 650 मिलीग्राम। यह बुखार और बदन दर्द की दवाई है। सुबह और रात खाना खाने के बाद एक गोली 5 दिन तक लेनी है। शराब बिल्कुल न पिएं।',
    },
    how: {
      badge: 'सरल और सुलभ',
      title: 'सिर्फ़ 3 आसान कदम',
      subtitle: 'बड़े बटन, कम टाइपिंग – दादा-दादी और बुज़ुर्ग भी बिना किसी की मदद खुद चला सकें।',
      step1Title: 'फोटो खींचें',
      step1Desc: 'डॉक्टर की हाथ से लिखी या कंप्यूटर पर्ची की साफ़ फोटो खींचें या गैलरी से चुनें।',
      step2Title: 'AI पढ़ेगा',
      step2Desc: 'DawaiMitra लिखावट पहचानकर हर दवाई का नाम, खुराक, समय और साइड इफेक्ट्स निकालेगा।',
      step3Title: 'सुनें और याद रखें',
      step3Desc: 'आपकी अपनी बोली में बोलकर समझाएगा और जितने दिन का कोर्स है, समय पर आवाज़ में याद दिलाएगा।',
      stepCompleted: 'कदम पूर्ण',
    },
    feat: {
      badge: 'विशिष्ट सुविधाएँ',
      title: 'DawaiMitra की ख़ास बातें',
      subtitle: 'सिर्फ़ रिमाइंडर नहीं – डॉक्टर की पर्ची को हर मरीज़ और बुज़ुर्ग के लिए आसान बनाने वाला साथी।',
      f1Title: 'पूरी दवाई जानकारी',
      f1Desc: 'दवाई का नाम, किस बीमारी की है, सही मात्रा, खाने से पहले या बाद, और क्या साइड इफेक्ट हो सकते हैं।',
      f2Title: 'ड्रग व फ़ूड अलर्ट',
      f2Desc: 'कौन सा खाना (दूध, खटाई, चाय) या कौन सी दूसरी दवाई इसके साथ नहीं लेनी चाहिए, तुरंत सचेत करता है।',
      f3Title: 'डिजिटल पर्ची बैंक',
      f3Desc: 'हर पर्ची आपके खाते में हमेशा सुरक्षित सेव रहती है। कभी भी पर्ची खोने का डर नहीं।',
      f4Title: 'स्मार्ट वॉयस रिमाइंडर',
      f4Desc: 'जितने दिन का कोर्स, उतने दिन समय पर आवाज़ में बोलेगा: "दवाई का समय हो गया, पानी के साथ लीजिए।"',
      f5Title: '6 भारतीय भाषाएँ',
      f5Desc: 'हिन्दी, मारवाड़ी (राजस्थानी), English, ગુજરાતી, தமிழ், ਪੰਜਾਬੀ – आपकी अपनी मातृभाषा में सब कुछ।',
      f6Title: 'बोलने वाला असिस्टेंट',
      f6Desc: 'माइक दबाकर अपनी बोली में सवाल पूछें – "क्या यह गोली खाली पेट ले सकते हैं?" AI बोलकर जवाब देगा।',
      f7Title: 'हेल्थ हिस्ट्री व ट्रेंड्स',
      f7Desc: 'पुरानी और नई पर्चियों की तुलना करके बताता है कि कौन सी दवा बदली और बीमारी में कितना सुधार हुआ।',
      f8Title: 'पूरी गोपनीयता व प्राइवेसी',
      f8Desc: 'आपका मेडिकल डेटा केवल आपके निजी अकाउंट में रहता है। कोई अवांछित विज्ञापन या डेटा शेयरिंग नहीं।',
    },
    auth: {
      loginTitle: 'साइन-इन करें',
      signupTitle: 'नया खाता बनाएँ',
      desc: 'पर्ची अपलोड करने और सुरक्षित रखने के लिए अपने अकाउंट में प्रवेश करें।',
      loginTab: 'लॉगिन',
      signupTab: 'नया खाता',
      nameLabel: 'आपका नाम',
      namePlaceholder: 'उदा. रमेश कुमार',
      emailLabel: 'ईमेल (Email)',
      emailPlaceholder: 'patient@example.com',
      pwdLabel: 'पासवर्ड (कम से कम 6 अक्षर)',
      pwdPlaceholder: '••••••••',
      loginBtn: '🔑 लॉगिन करें',
      signupBtn: '✅ खाता बनाएँ',
      demoLoginBtn: '⚡ 1-क्लिक टेस्ट लॉगिन (कार्तिक गहलोत)',
      privacyNote: 'आपकी पर्चियाँ और मेडिकल रिकॉर्ड केवल आपके खाते में सुरक्षित रहते हैं।',
      emailError: 'कृपया सही ईमेल पता डालें (उदा. patient@example.com)',
      pwdError: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए',
      emailExistsError: 'यह ईमेल पहले से रजिस्टर है। कृपया लॉगिन करें।',
      emailNotFoundError: 'यह ईमेल नहीं मिला। कृपया पहले नया खाता बनाएँ।',
      wrongPwdError: 'गलत पासवर्ड। कृपया दोबारा प्रयास करें।',
    },
    dash: {
      badge: 'व्यक्तिगत डैशबोर्ड',
      title: 'मेरा DawaiMitra',
      subtitleLogged: 'आपकी सभी पर्चियाँ, रिमाइंडर और सेहत की जानकारी यहाँ उपलब्ध है।',
      subtitleGuest: 'पर्ची अपलोड करने और आवाज़ में सुनने के लिए पहले साइन-इन करें।',
      greeting: 'नमस्ते',
      langLabel: 'भाषा:',
      logout: 'लॉगआउट',
      tabScan: '📷 नई पर्ची',
      tabMy: '🗂️ मेरी पर्चियाँ',
      tabReminders: '⏰ रिमाइंडर',
      tabHistory: '📈 हेल्थ हिस्ट्री',
      tabAssistant: '🎙️ असिस्टेंट',
      apiKeyTitle: 'कस्टम Gemini API Key (वैकल्पिक)',
      apiKeyDesc: 'सिस्टम में सर्वर-साइड AI पहले से चालू है। यदि आप अपनी खुद की API Key उपयोग करना चाहते हैं, तो यहाँ डालें।',
      apiKeyClose: '✕ बंद करें',
      apiKeySave: 'सेव',
      medicalDisclaimer: '⚕️ यह AI सहायता है, डॉक्टर की सलाह का विकल्प नहीं। दवाई बदलने से पहले डॉक्टर या फार्मासिस्ट से अवश्य पूछें।',
    },
    scan: {
      boxTitle: 'पर्ची की फोटो चुनें या कैमरा से खींचें',
      boxDesc: 'JPG, PNG या WebP फॉर्मेट (साफ़ और सीधी फोटो होने पर लिखावट तुरंत पढ़ी जाएगी)',
      chooseFileBtn: 'फ़ाइल / कैमरा से चुनें',
      removeBtn: 'हटाएँ',
      scanBtn: '🔎 पर्ची समझाओ (AI विश्लेषण)',
      scanningText: '⏳ पर्ची की लिखावट पढ़ी जा रही है…',
      sampleHeader: 'तुरंत देखने के लिए नमूना पर्ची चुनें (1-Click Test)',
      sample1Title: '📋 नमूना 1: वायरल बुखार व खांसी',
      sample1Badge: '4 दवाइयाँ',
      sample1Desc: 'Paracetamol 650mg, Pan-40, Ascoril Cough Syrup, Azithromycin',
      sample2Title: '📋 नमूना 2: BP व शुगर की नियमित दवा',
      sample2Badge: '2 दवाइयाँ',
      sample2Desc: 'Telmisartan 40mg (High BP), Metformin 500mg SR (Diabetes)',
      selectPhotoFirst: 'कृपया पहले पर्ची की फोटो चुनें',
      scanError: 'पर्ची नहीं पढ़ी जा सकी। कृपया साफ़ फोटो के साथ दोबारा कोशिश करें, या नीचे दिए गए नमूने (Sample) से आज़माएँ।',
      backToScan: '← वापस नई पर्ची स्कैन पर जाएँ',
      savedRxDetail: 'सेव की गई पर्ची का विवरण',
    },
    rxCard: {
      rxHeader: 'डॉक्टर की पर्ची',
      medsCountSuffix: 'दवाइयाँ चिन्हित',
      listenAllBtn: '🔊 पूरी पर्ची सुनें',
      stopAudioBtn: 'आवाज़ रोकें',
      summaryTitle: 'सार (Prescription Summary):',
      medsSectionTitle: 'दवाइयों की पूरी जानकारी',
      listenMedBtn: 'सुनें',
      stopMedBtn: 'रोकें',
      infoLabel: 'दवाई की जानकारी',
      usesLabel: 'दवाई के उपयोग (फायदे व बीमारी)',
      dosageLabel: 'खुराक व समय',
      sideEffectsLabel: 'दवाई के साइड इफेक्ट्स',
      interactionsLabel: 'दवाई के इंटरैक्शन (परहेज़ व सावधानियाँ)',
      foodInteractionLabel: 'भोजन व पेय के साथ (Food Interaction)',
      drugInteractionLabel: 'अन्य दवाइयों के साथ (Medicine Interaction)',
      purposeLabel: 'किस काम की:',
      safeCommon: 'सामान्यतः सुरक्षित',
      avoidFoodLabel: '🚫 इनके साथ न लें (खाना):',
      avoidDrugsLabel: '⚠️ दूसरी दवाइयाँ:',
      daysCourse: 'दिन का कोर्स',
      warningsTitle: 'विशेष सावधानियाँ व ड्रग अलर्ट (Drug-Drug Warnings)',
      saveRxBtn: '💾 सेव करें व रिमाइंडर लगाएँ',
      savedRxBtn: '✅ पर्ची व रिमाइंडर सेव हो चुके हैं',
    },
    my: {
      title: 'सेव की गई पर्चियाँ',
      addNewBtn: 'नई जोड़ें',
      emptyTitle: 'अभी कोई पर्ची सेव नहीं है',
      emptyDesc: 'अपनी डॉक्टर की पर्ची की फोटो खींचें या नमूना पर्ची से शुरुआत करें।',
      startAddingBtn: 'नई पर्ची जोड़ें',
      deleteConfirm: 'क्या आप वाकई यह पर्ची हटाना चाहते हैं?',
      viewBtn: 'देखें',
    },
    rem: {
      title: 'दवाइयों का स्मार्ट रिमाइंडर शेड्यूल',
      subtitle: 'पेज खुला रहने पर समय होने पर खुद आवाज़ में बोलेगा और याद दिलाएगा।',
      testChimeBtn: '🔔 आवाज़ टेस्ट करें',
      filterToday: 'आज के',
      filterAll: 'सभी',
      emptyToday: 'आज के लिए कोई निर्धारित खुराक नहीं है',
      emptyAll: 'कोई सक्रिय रिमाइंडर नहीं',
      emptyDesc: "'नई पर्ची' टैब में जाकर पर्ची सेव करने पर यहाँ ऑटोमैटिक रिमाइंडर जुड़ जाएँगे।",
      todayBadge: 'आज',
      dateLabel: 'तारीख:',
      takenTooltip: 'खुराक ले ली गई',
      markTakenTooltip: 'दवा ले ली है तो टिक करें',
      testAlertPrefix: '🔔 टेस्ट रिमाइंडर:',
      timeChimeAlert: 'दवाई का समय हो गया।',
      timeLabelMorning: 'सुबह',
      timeLabelAfternoon: 'दोपहर',
      timeLabelNight: 'रात',
    },
    hist: {
      title: 'हेल्थ हिस्ट्री व दवाओं का तुलनात्मक विश्लेषण',
      prescriptionsCountSuffix: 'पर्चियों के आधार पर AI समीक्षा',
      listenReportBtn: '🔊 पूरी रिपोर्ट सुनें',
      reloadBtn: 'दोबारा विश्लेषण करें',
      analyzingTitle: 'पुरानी और नई पर्चियों का तुलनात्मक विश्लेषण किया जा रहा है…',
      analyzingDesc: 'दवाओं के बदलाव व सेहत की प्रगति जांची जा रही है',
      emptyTitle: 'हेल्थ हिस्ट्री के लिए पर्चियाँ सेव करें',
      emptyDesc: 'जैसे ही आप 1 या 2 पर्चियाँ सेव करेंगे, DawaiMitra पुरानी और नई दवाओं की तुलना करके आपकी सेहत की पूरी स्थिति समझाएगा।',
      overviewTitle: 'समग्र स्वास्थ्य स्थिति (Overall Health Progression)',
      changesTitle: '🔄 पर्चियों में आए मुख्य बदलाव (Treatment Changes)',
      adviceTitle: '💡 आपके लिए महत्वपूर्ण स्वास्थ्य सलाह (Safety Advice)',
      historyDisclaimer: 'यह विश्लेषण आपकी पर्चियों के आधार पर मार्गदर्शन के लिए है। किसी भी पुरानी दवाई को बंद करने या नई शुरू करने से पहले अपने डॉक्टर से अवश्य मिलें।',
      fallbackOverview: 'आपके खाते में पर्चियाँ सुरक्षित हैं और आपकी सेहत में सुधार की दिशा सही है।',
      fallbackChange1: 'पिछली पर्ची के मुकाबले नई दवाइयाँ समय पर ली जा रही हैं।',
      fallbackChange2: 'एंटीबायोटिक या दर्द निवारक का कोर्स पूरा होने पर डॉक्टर से दोबारा समीक्षा कराएँ।',
      fallbackAdvice1: 'दवाई हमेशा डॉक्टर के बताए अनुसार गुनगुने पानी से लें।',
      fallbackAdvice2: 'अगर पुराना सिरप या गोली बच जाए तो बिना डॉक्टर की सलाह दोबारा न दोहराएँ।',
      fallbackAdvice3: 'बीपी और शुगर की नियमित जाँच का रिकॉर्ड बनाकर रखें।',
    },
    asst: {
      title: 'DawaiMitra वॉइस असिस्टेंट',
      subtitle: 'दवाइयों के बारे में सवाल पूछें • आवाज़ में सुनें',
      welcomeMessage: 'नमस्ते! मैं DawaiMitra हूँ। आपकी पर्ची और दवाइयों के बारे में कुछ भी पूछिए – जैसे खुराक, समय या परहेज। बोलकर पूछने के लिए 🎤 माइक दबाएँ।',
      listenAgain: 'दोबारा सुनें',
      thinking: 'DawaiMitra जवाब सोच रहा है…',
      suggestionsLabel: 'सुझाव:',
      sug1: 'क्या पैरासिटामोल खाली पेट ले सकते हैं?',
      sug2: 'मेरी दवाइयों में कौन सा खाना नहीं खाना चाहिए?',
      sug3: 'अगर एक खुराक भूल जाऊं तो क्या करूँ?',
      sug4: 'एंटीबायोटिक का पूरा कोर्स करना क्यों ज़रूरी है?',
      inputPlaceholder: 'अपनी दवाई के बारे में पूछें या 🎤 दबाकर बोलें…',
      sendBtn: 'भेजें',
      micUnsupported: 'आपके ब्राउज़र में आवाज़ पहचान (Microphone) सपोर्ट नहीं है। कृपया लिखकर प्रश्न पूछें।',
      micActiveTitle: 'माइक बंद करें',
      micInactiveTitle: 'बोलकर पूछें',
      fallbackReply: 'माफ़ कीजिए, अभी नेटवर्क से संपर्क नहीं हो पाया। सामान्य नियम: दवाइयाँ समय पर पानी के साथ लें और गंभीर लक्षण होने पर तुरंत डॉक्टर को दिखाएँ।',
    },
    schemes: {
      badge: 'कल्याणकारी स्वास्थ्य पोर्टल',
      title: 'सरकारी स्वास्थ्य योजनाएँ',
      subtitle: 'केंद्र, राजस्थान और जोधपुर की आधिकारिक स्वास्थ्य सेवाएँ – सीधे पोर्टल खोलें और लाभ पाएँ।',
      openPortal: 'पोर्टल खोलें',
      centralGovt: 'केंद्र सरकार',
      rajGovt: 'राजस्थान सरकार',
      jodhpurDistrict: 'जोधपुर',
    },
    footer: {
      tagline: 'हर घर, हर बुज़ुर्ग और हर मरीज़ के लिए आसान, सुलभ और विश्वसनीय पर्ची वाचक।',
      subtagline: 'जोधपुर, राजस्थान • समर्पित जन-स्वास्थ्य सेवा',
      disclaimerTitle: 'चिकित्सा अस्वीकरण (Medical Disclaimer):',
      disclaimerText: 'यह AI सहायता मरीजों की सुविधा और जागरूकता के लिए बनाई गई है। यह किसी भी प्रकार से पेशेवर डॉक्टर या फार्मासिस्ट की सलाह का विकल्प नहीं है। दवाइयों की खुराक बदलने या नई दवा शुरू करने से पहले हमेशा अपने डॉक्टर से परामर्श लें।',
      copyright: '© 2026 DawaiMitra. सर्वाधिकार सुरक्षित।',
      madeWith: 'समर्पित स्वास्थ्य सेवा',
    },
  },

  mwr: {
    nav: {
      howItWorks: 'कियान काम करे',
      features: 'खास बातां',
      myDashboard: 'म्हारो डैशबोर्ड',
      schemes: 'सरकारी योजनावां',
      startBtn: 'सरू करो',
      badge: 'दवाई साथी',
      logout: 'लॉगआउट',
      lightMode: 'दिन रो मोड',
      darkMode: 'रात रो मोड',
      selectLanguage: 'बोली चुणो',
    },
    hero: {
      tag: '🎙️ आवाज़ सूँ समझो • मारवाड़ी • हिन्दी • English',
      title1: 'डॉक्टर री पर्ची अब',
      title2: 'आपणी मारवाड़ी में बोलेला',
      subtitle:
        'हाथ सूँ लिखी पर्ची री फोटो नाखो। DawaiMitra बतावेला – कुण सी दवाई, किस काम री, कदे अर कियाँ लेणी, कांई नी खावणो। बिना पढ़े, खाली सुण\'र।',
      uploadBtn: '📷 पर्ची नाखो (अपलोड)',
      schemesBtn: '🏥 सरकारी योजनावां',
      availableLangs: 'उपलब्ध बोलियाँ:',
      rxDoctor: 'डॉ. आर. के. शर्मा (MD) • जोधपुर',
      rxVerified: 'पर्ची जाँची हुई',
      rxTitle: 'Rx — डॉक्टर री पर्ची',
      rxVoiceSampleTitle: 'पैरासिटामोल 650mg',
      rxVoiceSampleBadge: 'सवार-सांझ',
      rxVoiceSampleDesc: 'तावर (बुखार) अर आंग दुखवा री दवाई। सवार-सांझ भात (रोटी) खाया पछे लेणी, 5 दिन।',
      rxVoiceBtnListen: '🔊 बोल\'र सुणाओ (दबाओ)',
      rxVoiceBtnStop: '⏸️ रोको',
      safePrivate: '100% महफूज़ अर निजी',
      aiPartner: 'AI पावर्ड बोलणियो साथी',
      sampleSpokenText:
        'पैरासिटामोल 650 मिलीग्राम। या तावर अर आंग दुखवा री दवाई है। सवार-सांझ भात खाया पछे एक गोली 5 दिन लेणी है। दारू बिल्कुल नी पीवणी।',
    },
    how: {
      badge: 'एकदम सोरो',
      title: 'खाली 3 सोरा कदम',
      subtitle: 'मोटा बटन, लिखणो कोनी – दादी-दादा भी बिना किसे पूछे आपी चला सके।',
      step1Title: 'फोटो खींचो',
      step1Desc: 'डॉक्टर री हाथ सूँ लिखी या कम्प्यूटर पर्ची री साफ़ फोटो खींचो या गैलरी सूँ चुणो।',
      step2Title: 'AI बांचेला',
      step2Desc: 'DawaiMitra लिखावट पहचान\'र हर दवाई रो नाम, खुराक, टेम अर साइड इफेक्ट निकालेला।',
      step3Title: 'सुणो अर याद राखो',
      step3Desc: 'आपणी बोली में समझावेला अर जतरा दिन रो कोर्स है, टेम पे आवाज लगा\'र याद दिलावेला।',
      stepCompleted: 'कदम पूरो',
    },
    feat: {
      badge: 'खास सहूलियत',
      title: 'DawaiMitra री खास बातां',
      subtitle: 'खाली रिमाइंडर नी – पर्ची ने हर मरीज अर बुजुर्गां वास्ते सोरी बनावणियो साथी।',
      f1Title: 'पूरी दवाई री विगत',
      f1Desc: 'दवाई रो नाम, किस बिमारी री है, कतरी लेणी, खाया पेली या पछे, अर कांई साइड इफेक्ट हो सके।',
      f2Title: 'परहेज अर चेतावणी',
      f2Desc: 'कांई नी खावणो (दूध, खटाई, चाय) अर कुण सी दूसरी गोली साथे नी लेणी, तुरंत चेतावे।',
      f3Title: 'पर्चियाँ महफूज़ बैंक',
      f3Desc: 'हर पर्ची थांके खाते में हमेश वास्ते सेव रेवेला। कदेई खोवण रो डर कोनी।',
      f4Title: 'बोलणियो रिमाइंडर',
      f4Desc: 'जतरा दिन रो कोर्स है, टेम पे बोलेला: "दवाई रो टेम हो ग्यो, पाणी सागे ले लो।"',
      f5Title: '6 बोलियाँ',
      f5Desc: 'हिन्दी, मारवाड़ी (राजस्थानी), English, ગુજરાતી, தமிழ், ਪੰਜਾਬੀ – आपणी खुद री बोली में।',
      f6Title: 'बोलणियो मददगार',
      f6Desc: 'माइक दबा\'र पूछो – "कांई या गोली भूखे पेट ले सकाँ?" AI बोल\'र जवाब देवेला।',
      f7Title: 'तबीयत री हिस्ट्री',
      f7Desc: 'पुरानी अर नवी पर्ची मिला\'र बतावेला के कुण सी दवाई बदली अर तबियत में कतरो सुधार आयो।',
      f8Title: 'पूरी प्राइवेसी',
      f8Desc: 'थांको मेडिकल रेकॉर्ड खाली थांके खाते में सुरक्षित रेवेला। कोई दूजो नी देख सके।',
    },
    auth: {
      loginTitle: 'खाते में आओ (साइन-इन)',
      signupTitle: 'नवो खातो बणाओ',
      desc: 'पर्ची नाखण अर सुणण वास्ते पेली खाते में लॉगिन करो।',
      loginTab: 'लॉगिन',
      signupTab: 'नवो खातो',
      nameLabel: 'थांको नाम',
      namePlaceholder: 'उदा. रमेश कुमार',
      emailLabel: 'ईमेल (Email)',
      emailPlaceholder: 'patient@example.com',
      pwdLabel: 'पासवर्ड (कमती सूँ कमती 6 आखर)',
      pwdPlaceholder: '••••••••',
      loginBtn: '🔑 लॉगिन करो',
      signupBtn: '✅ खातो बणाओ',
      demoLoginBtn: '⚡ 1-क्लिक टेस्ट लॉगिन (कार्तिक गहलोत)',
      privacyNote: 'थांकी पर्चियाँ खाली थांके खाते में सुरक्षित रेवेला।',
      emailError: 'सही ईमेल नाखो सा',
      pwdError: 'पासवर्ड कमती सूँ कमती 6 आखर रो होवणो चाहीजै',
      emailExistsError: 'यो ईमेल पेली सूँ दर्ज है, लॉगिन करो सा।',
      emailNotFoundError: 'यो ईमेल नी मिल्यो, नवो खातो बणाओ सा।',
      wrongPwdError: 'पासवर्ड गलत है सा, पाछो जाँचे करो।',
    },
    dash: {
      badge: 'म्हारो डैशबोर्ड',
      title: 'म्हारो DawaiMitra',
      subtitleLogged: 'थांकी सगली पर्चियाँ, रिमाइंडर अर तबियत री जानकारी अठै हाजर है।',
      subtitleGuest: 'पर्ची नाखण अर आवाज सुणण वास्ते पेली साइन-इन करो सा।',
      greeting: 'खम्मा घणी',
      langLabel: 'बोली:',
      logout: 'लॉगआउट',
      tabScan: '📷 नवी पर्ची',
      tabMy: '🗂️ म्हारी पर्चियाँ',
      tabReminders: '⏰ रिमाइंडर',
      tabHistory: '📈 हेल्थ हिस्ट्री',
      tabAssistant: '🎙️ मददगार साथी',
      apiKeyTitle: 'कस्टम Gemini API Key (जरूरत होवै तो)',
      apiKeyDesc: 'सर्वर पे AI चालू है। जे आपणी खुद री चाबी नाखणी होवै तो अठै नाखो।',
      apiKeyClose: '✕ बंद करो',
      apiKeySave: 'सेव करो',
      medicalDisclaimer: '⚕️ या AI सहायता है सा, डॉक्टर री सलाह रो बद्ल कोनी। दवाई बदलण सूँ पेली डॉक्टर ने जरूर पूछो।',
    },
    scan: {
      boxTitle: 'पर्ची री फोटो चुणो या कैमरा सूँ खींचो',
      boxDesc: 'JPG या PNG फोटो (साफ़ फोटो होसी तो लिखावट झटपट बांच लेवेला)',
      chooseFileBtn: 'फ़ाइल / कैमरा सूँ चुणो',
      removeBtn: 'हटाओ',
      scanBtn: '🔎 पर्ची समझाओ (AI बांचो)',
      scanningText: '⏳ पर्ची बांची जा री है सा… धीरज राखो…',
      sampleHeader: 'जाँचण वास्ते नमूना पर्ची चुणो (1-क्लिक टेस्ट)',
      sample1Title: '📋 नमूना 1: तावर (बुखार) अर खांसी री पर्ची',
      sample1Badge: '4 दवाइयाँ',
      sample1Desc: 'Paracetamol 650mg, Pan-40, Ascoril Cough Syrup, Azithromycin',
      sample2Title: '📋 नमूना 2: बीपी अर सुगर री रोज री दवाई',
      sample2Badge: '2 दवाइयाँ',
      sample2Desc: 'Telmisartan 40mg (BP), Metformin 500mg SR (सुगर)',
      selectPhotoFirst: 'पेली पर्ची री फोटो तो चुणो सा',
      scanError: 'पर्ची बांच नी सक्या। साफ़ फोटो नाखो या नमूना पर्ची सूँ चलाओ सा।',
      backToScan: '← पाछा नवी पर्ची पे चालो',
      savedRxDetail: 'सेव पर्ची री पूरी विगत',
    },
    rxCard: {
      rxHeader: 'डॉक्टर री पर्ची',
      medsCountSuffix: 'दवाइयाँ लादी',
      listenAllBtn: '🔊 पूरी पर्ची सुणो',
      stopAudioBtn: 'आवाज़ रोको',
      summaryTitle: 'सार (पर्ची किस बिमारी री है):',
      medsSectionTitle: 'दवाइयाँ री पूरी विगत',
      listenMedBtn: 'सुणो',
      stopMedBtn: 'रोको',
      infoLabel: 'दवाई री पूरी जानकारी',
      usesLabel: 'दवाई रा उपयोग (कीं काम आवे)',
      dosageLabel: 'खुराक अर टेम',
      sideEffectsLabel: 'दवाई रा साइड इफेक्ट्स',
      interactionsLabel: 'दवाई रो मेल-जोल (परहेज अर चेतावणी)',
      foodInteractionLabel: 'खाण-पीण साथे (Food Interaction)',
      drugInteractionLabel: 'दूजी दवाइयाँ साथे (Medicine Interaction)',
      purposeLabel: 'किस काम री:',
      safeCommon: 'सामान्यतः ठीक',
      avoidFoodLabel: '🚫 सागे कांई नी खावणो:',
      avoidDrugsLabel: '⚠️ दूजी दवाइयाँ:',
      daysCourse: 'दिन रो कोर्स',
      warningsTitle: 'जरूरी चेतावणी व परहेज (Drug Warnings)',
      saveRxBtn: '💾 सेव करो व रिमाइंडर लगाओ',
      savedRxBtn: '✅ पर्ची व रिमाइंडर सेव हो ग्या',
    },
    my: {
      title: 'सेव पर्चियाँ',
      addNewBtn: 'नवी जोड़ो',
      emptyTitle: 'अजूं कोई पर्ची सेव कोनी',
      emptyDesc: 'आपणी पर्ची री फोटो नाखो या नमूना पर्ची सूँ देखो सा।',
      startAddingBtn: 'नवी पर्ची जोड़ो',
      deleteConfirm: 'कांई साची या पर्ची हटानी है?',
      viewBtn: 'देखो',
    },
    rem: {
      title: 'दवाइयों रो स्मार्ट रिमाइंडर',
      subtitle: 'पेज खुलो रैसी तो टेम होया पे खुद आवाज लगा\'र याद दिलावेला।',
      testChimeBtn: '🔔 आवाज़ टेस्ट करो',
      filterToday: 'आज री',
      filterAll: 'सगली',
      emptyToday: 'आज वास्ते कोई खुराक नी बची',
      emptyAll: 'कोई चालू रिमाइंडर कोनी',
      emptyDesc: "'नवी पर्ची' में जा\'र सेव करोला जणा अठै रिमाइंडर जुड़ जावेला।",
      todayBadge: 'आज',
      dateLabel: 'तारीख:',
      takenTooltip: 'दवाई ले ली सा',
      markTakenTooltip: 'दवाई ले ली होवै तो टिक करो',
      testAlertPrefix: '🔔 टेस्ट रिमाइंडर:',
      timeChimeAlert: 'दवाई रो टेम हो ग्यो सा।',
      timeLabelMorning: 'सवार',
      timeLabelAfternoon: 'दोपर',
      timeLabelNight: 'सांझ',
    },
    hist: {
      title: 'हेल्थ हिस्ट्री अर दवाइयों रो मिलान',
      prescriptionsCountSuffix: 'पर्चियों री AI जाँच',
      listenReportBtn: '🔊 पूरी रिपोर्ट सुणो',
      reloadBtn: 'पाछी जाँच करो',
      analyzingTitle: 'पुरानी अर नवी पर्चियों री जाँच हो री है सा…',
      analyzingDesc: 'दवाइयों रो फेरबदल अर तबियत रो सुधार जांच रिया हां',
      emptyTitle: 'हेल्थ हिस्ट्री वास्ते पर्चियाँ सेव करो',
      emptyDesc: '1-2 पर्चियाँ सेव करतां ही DawaiMitra बतावेला के तबियत में कतरो सुधार आयो सा।',
      overviewTitle: 'तबियत रो हाल (Overall Health)',
      changesTitle: '🔄 पर्चियों में आया मुख्य बदलाव',
      adviceTitle: '💡 थांके वास्ते जरूरी सलाह',
      historyDisclaimer: 'या जानकारी थांकी सहूलियत वास्ते है सा। कोई दवाई छोड़ण सूँ पेली डॉक्टर सूँ जरूर मिलो।',
      fallbackOverview: 'थांके खाते में पर्चियाँ महफूज़ है अर तबियत सुधर री है सा।',
      fallbackChange1: 'नवी दवाईयां टेम पे ली जा री है।',
      fallbackChange2: 'एंटीबायोटिक रो कोर्स पूरो होया पछे डॉक्टर ने पाछो दिखाओ।',
      fallbackAdvice1: 'दवाई हमेश गुनगुने पाणी सागे लेवो सा।',
      fallbackAdvice2: 'बच्योड़ी दवाई बिना पूछे पाछी नी लेवणी।',
      fallbackAdvice3: 'बीपी अर सुगर रो टेम-टेम पे नाप राखो।',
    },
    asst: {
      title: 'DawaiMitra मददगार साथी',
      subtitle: 'दवाइयों बाबत सवाल पूछो • आवाज में सुणो',
      welcomeMessage: 'खम्मा घणी! म्हूँ DawaiMitra हूँ सा। आपणी दवाई बाबत कुछ भी पूछ सको हो – खुराक, टेम या परहेज। बोल\'र पूछण वास्ते 🎤 माइक दबाओ।',
      listenAgain: 'पाछो सुणो',
      thinking: 'DawaiMitra सोच रियो है सा…',
      suggestionsLabel: 'सुझाव:',
      sug1: 'कांई पैरासिटामोल भूखे पेट ले सकाँ?',
      sug2: 'म्हारी दवाइयों में कांई नी खावणो चाहीजै?',
      sug3: 'जे खुराक भूल जावाँ तो कांई करूँ?',
      sug4: 'एंटीबायोटिक रो कोर्स पूरो करनो क्यूँ जरूरी है?',
      inputPlaceholder: 'दवाई बाबत पूछो या 🎤 दबा\'र बोलो सा…',
      sendBtn: 'भेजो',
      micUnsupported: 'थांके ब्राउज़र में माइक नी चाले सा, लिख\'र पूछो।',
      micActiveTitle: 'माइक बंद करो',
      micInactiveTitle: 'बोल\'र पूछो',
      fallbackReply: 'माफ़ करजो सा, अभी संपर्क नी हो पायो। सामान्य नियम: दवाई टेम पे पाणी सागे लेवो अर तकलीफ घणी होवै तो डॉक्टर ने दिखाओ।',
    },
    schemes: {
      badge: 'कल्याणकारी स्वास्थ्य पोर्टल',
      title: 'सरकारी स्वास्थ्य योजनावां',
      subtitle: 'केंद्र, राजस्थान अर जोधपुर री स्वास्थ्य सेवावां – सीधा पोर्टल खोलो सा।',
      openPortal: 'पोर्टल खोलो',
      centralGovt: 'केंद्र सरकार',
      rajGovt: 'राजस्थान सरकार',
      jodhpurDistrict: 'जोधपुर',
    },
    footer: {
      tagline: 'हर घर, हर बुजुर्गां वास्ते सोरो, साचो अर भरोसामंद पर्ची वाचक।',
      subtagline: 'जोधपुर, राजस्थान • समर्पित जन-स्वास्थ्य सेवा',
      disclaimerTitle: 'चिकित्सा अस्वीकरण:',
      disclaimerText: 'यो AI मरीजों री जानकारी वास्ते बणायो ग्यो है। यो डॉक्टर री सलाह रो बद्ल कोनी सा। दवाई बदलण सूँ पेली डॉक्टर सूँ जरूर राय लेवो।',
      copyright: '© 2026 DawaiMitra. सर्वाधिकार सुरक्षित।',
      madeWith: 'समर्पित स्वास्थ्य सेवा',
    },
  },

  en: {
    nav: {
      howItWorks: 'How It Works',
      features: 'Features',
      myDashboard: 'My Dashboard',
      schemes: 'Govt Schemes',
      startBtn: 'Get Started',
      badge: 'Medicine Companion',
      logout: 'Logout',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      selectLanguage: 'Select Language',
    },
    hero: {
      tag: '🎙️ Voice-First • English • Hindi • Marwari • 6 Languages',
      title1: "Doctor's Prescription Now",
      title2: 'Speaks in Your Language',
      subtitle:
        'Upload a photo of any handwritten prescription. DawaiMitra explains what each medicine does, when and how to take it, and dietary precautions—by voice without reading.',
      uploadBtn: '📷 Upload Prescription',
      schemesBtn: '🏥 Health Schemes',
      availableLangs: 'Available Languages:',
      rxDoctor: 'Dr. R. K. Sharma (MD) • Jodhpur',
      rxVerified: 'Rx Verified',
      rxTitle: "Rx — Doctor's Prescription",
      rxVoiceSampleTitle: 'Paracetamol 650mg',
      rxVoiceSampleBadge: 'Morning-Night',
      rxVoiceSampleDesc: 'For fever and body pain. Take 1 tablet morning and night after meals for 5 days.',
      rxVoiceBtnListen: '🔊 Listen Sample (Click)',
      rxVoiceBtnStop: '⏸️ Stop',
      safePrivate: '100% Safe & Private',
      aiPartner: 'AI Powered Voice Companion',
      sampleSpokenText:
        'Paracetamol 650 milligrams. Medicine for fever and body ache. Take one tablet morning and night after meals for 5 days. Do not consume alcohol.',
    },
    how: {
      badge: 'Simple & Accessible',
      title: 'Just 3 Simple Steps',
      subtitle: 'Large buttons, zero tedious typing—crafted so elderly grandparents can use it independently.',
      step1Title: 'Take a Photo',
      step1Desc: 'Capture or upload a clear photo of your handwritten or printed doctor prescription.',
      step2Title: 'AI Decodes',
      step2Desc: 'DawaiMitra deciphers handwriting, medicine names, dosages, timings, and side effects.',
      step3Title: 'Listen & Remember',
      step3Desc: 'Explains everything out loud in your mother tongue and sets timed audio dose reminders.',
      stepCompleted: 'Step Complete',
    },
    feat: {
      badge: 'Key Capabilities',
      title: 'Why DawaiMitra Stands Out',
      subtitle: 'More than a reminder app—a compassionate companion that makes medical prescriptions understandable.',
      f1Title: 'Complete Medicine Details',
      f1Desc: 'Identifies condition treated, dosage, timing (before/after food), and common side effects.',
      f2Title: 'Food & Drug Alerts',
      f2Desc: 'Flags food interactions (milk, citrus, tea) and conflicting medicines to avoid taking together.',
      f3Title: 'Digital Prescription Vault',
      f3Desc: 'All prescriptions are securely stored under your account. Never worry about misplaced papers.',
      f4Title: 'Smart Voice Reminders',
      f4Desc: 'Speaks out loud on time throughout your course: "Time for your medicine, take with water."',
      f5Title: '6 Indian Languages',
      f5Desc: 'Hindi, Marwari (Rajasthani), English, Gujarati, Tamil, Punjabi—all in your native dialect.',
      f6Title: 'Voice Assistant',
      f6Desc: 'Tap the mic and ask: "Can I take this on an empty stomach?" AI answers conversationally.',
      f7Title: 'Health History & Trends',
      f7Desc: 'Compares past and current prescriptions to detect regimen shifts and progress.',
      f8Title: 'Strict Privacy',
      f8Desc: 'Your personal health data remains strictly in your private account. No third-party ad sharing.',
    },
    auth: {
      loginTitle: 'Sign In',
      signupTitle: 'Create New Account',
      desc: 'Sign in to upload prescriptions, listen to audio guidance, and track doses.',
      loginTab: 'Login',
      signupTab: 'Sign Up',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Ramesh Kumar',
      emailLabel: 'Email Address',
      emailPlaceholder: 'patient@example.com',
      pwdLabel: 'Password (min 6 characters)',
      pwdPlaceholder: '••••••••',
      loginBtn: '🔑 Sign In',
      signupBtn: '✅ Create Account',
      demoLoginBtn: '⚡ 1-Click Demo Login (Kartik Gehlot)',
      privacyNote: 'Your prescriptions and health records are encrypted and kept strictly confidential.',
      emailError: 'Please enter a valid email address (e.g. patient@example.com)',
      pwdError: 'Password must be at least 6 characters long',
      emailExistsError: 'This email is already registered. Please sign in.',
      emailNotFoundError: 'Account not found. Please register first.',
      wrongPwdError: 'Incorrect password. Please try again.',
    },
    dash: {
      badge: 'Personal Dashboard',
      title: 'My DawaiMitra',
      subtitleLogged: 'All your saved prescriptions, dose schedules, and health progress in one place.',
      subtitleGuest: 'Please sign in to upload prescriptions and receive voice guidance.',
      greeting: 'Hello',
      langLabel: 'Language:',
      logout: 'Logout',
      tabScan: '📷 New Prescription',
      tabMy: '🗂️ My Prescriptions',
      tabReminders: '⏰ Reminders',
      tabHistory: '📈 Health History',
      tabAssistant: '🎙️ Voice Assistant',
      apiKeyTitle: 'Custom Gemini API Key (Optional)',
      apiKeyDesc: 'Server-side Gemini AI is active. Enter your own API key if you want custom billing.',
      apiKeyClose: '✕ Close',
      apiKeySave: 'Save',
      medicalDisclaimer: '⚕️ This is an AI assistant, not a substitute for professional medical advice. Always consult your doctor before modifying medication.',
    },
    scan: {
      boxTitle: 'Upload or Snap Prescription Photo',
      boxDesc: 'JPG, PNG, or WebP (A well-lit, straight image guarantees instant and accurate reading)',
      chooseFileBtn: 'Choose File / Camera',
      removeBtn: 'Remove',
      scanBtn: '🔎 Decode Prescription (AI Analysis)',
      scanningText: '⏳ Reading handwriting and identifying medications…',
      sampleHeader: 'Select a Sample Prescription for Instant Testing (1-Click Test)',
      sample1Title: '📋 Sample 1: Viral Fever & Cough Prescription',
      sample1Badge: '4 Medicines',
      sample1Desc: 'Paracetamol 650mg, Pan-40, Ascoril Cough Syrup, Azithromycin',
      sample2Title: '📋 Sample 2: Chronic Hypertension & Diabetes Rx',
      sample2Badge: '2 Medicines',
      sample2Desc: 'Telmisartan 40mg (High BP), Metformin 500mg SR (Diabetes)',
      selectPhotoFirst: 'Please select a prescription photo first',
      scanError: 'Could not read prescription. Please try with a clearer photo, or test with one of the samples below.',
      backToScan: '← Back to New Scan',
      savedRxDetail: 'Saved Prescription Details',
    },
    rxCard: {
      rxHeader: "Doctor's Prescription",
      medsCountSuffix: 'Medicines Identified',
      listenAllBtn: '🔊 Listen to Full Rx',
      stopAudioBtn: 'Stop Audio',
      summaryTitle: 'Prescription Summary:',
      medsSectionTitle: 'Full Medication Details',
      listenMedBtn: 'Listen',
      stopMedBtn: 'Stop',
      infoLabel: 'Medicine Information',
      usesLabel: 'Uses & Indications',
      dosageLabel: 'Dosage & Schedule',
      sideEffectsLabel: 'Side Effects',
      interactionsLabel: 'Interactions & Precautions',
      foodInteractionLabel: 'Food & Diet Interaction',
      drugInteractionLabel: 'Drug-Drug Interaction',
      purposeLabel: 'Purpose:',
      safeCommon: 'Generally mild',
      avoidFoodLabel: '🚫 Avoid with (Food):',
      avoidDrugsLabel: '⚠️ Avoid with (Drugs):',
      daysCourse: 'day course',
      warningsTitle: 'Important Warnings & Drug-Drug Alerts',
      saveRxBtn: '💾 Save & Set Reminders',
      savedRxBtn: '✅ Saved with Active Reminders',
    },
    my: {
      title: 'Saved Prescriptions',
      addNewBtn: 'Add New',
      emptyTitle: 'No Prescriptions Saved Yet',
      emptyDesc: 'Snap a photo of your doctor prescription or start with a sample prescription.',
      startAddingBtn: 'Add New Prescription',
      deleteConfirm: 'Are you sure you want to delete this prescription?',
      viewBtn: 'View',
    },
    rem: {
      title: 'Smart Medication Reminders',
      subtitle: 'When this page is open, audible voice alerts will speak when it is time for your medicine.',
      testChimeBtn: '🔔 Test Voice Chime',
      filterToday: "Today's Doses",
      filterAll: 'All Scheduled',
      emptyToday: 'No scheduled doses remaining for today',
      emptyAll: 'No active dose reminders',
      emptyDesc: "Save a prescription in the 'New Prescription' tab to automatically create dose schedules here.",
      todayBadge: 'Today',
      dateLabel: 'Date:',
      takenTooltip: 'Dose marked as taken',
      markTakenTooltip: 'Check when you have taken your medicine',
      testAlertPrefix: '🔔 Test Alert:',
      timeChimeAlert: 'Time for your medicine.',
      timeLabelMorning: 'Morning',
      timeLabelAfternoon: 'Afternoon',
      timeLabelNight: 'Night',
    },
    hist: {
      title: 'Prescription History & Treatment Trends',
      prescriptionsCountSuffix: 'prescriptions analyzed with AI',
      listenReportBtn: '🔊 Listen to Full Report',
      reloadBtn: 'Re-analyze',
      analyzingTitle: 'Comparing older and newer prescriptions…',
      analyzingDesc: 'Analyzing medication adjustments and recovery progress',
      emptyTitle: 'Save Prescriptions to View Health History',
      emptyDesc: 'Once you save 1 or 2 prescriptions, DawaiMitra compares past and current therapies to explain your ongoing health trajectory.',
      overviewTitle: 'Overall Health Progression',
      changesTitle: '🔄 Notable Treatment Adjustments',
      adviceTitle: '💡 Safety & Lifestyle Precautions',
      historyDisclaimer: 'This comparative review is for guidance only. Never discontinue or alter prescribed doses without speaking to your treating physician.',
      fallbackOverview: 'Your prescriptions are securely logged and your treatment progression is on track.',
      fallbackChange1: 'Recent medications are scheduled according to prescribed course durations.',
      fallbackChange2: 'Schedule a follow-up review with your doctor once antibiotic or pain relief courses finish.',
      fallbackAdvice1: 'Always take oral medications with lukewarm water as directed.',
      fallbackAdvice2: 'Do not reuse leftover syrups or tablets without fresh medical consultation.',
      fallbackAdvice3: 'Maintain regular BP and glucose logs for routine physician check-ups.',
    },
    asst: {
      title: 'DawaiMitra Voice Assistant',
      subtitle: 'Ask anything about your medications • Hear spoken answers',
      welcomeMessage: 'Hello! I am DawaiMitra. Ask me anything about your prescriptions—dosages, timings, or food cautions. Tap 🎤 to ask by voice.',
      listenAgain: 'Listen Again',
      thinking: 'DawaiMitra is thinking…',
      suggestionsLabel: 'Quick Suggestions:',
      sug1: 'Can I take Paracetamol on an empty stomach?',
      sug2: 'Are there any food restrictions for my medicines?',
      sug3: 'What should I do if I miss a scheduled dose?',
      sug4: 'Why is completing the full antibiotic course important?',
      inputPlaceholder: 'Ask about your medicines or tap 🎤 to speak…',
      sendBtn: 'Send',
      micUnsupported: 'Microphone recognition is not supported in this browser. Please type your query.',
      micActiveTitle: 'Stop Listening',
      micInactiveTitle: 'Speak Question',
      fallbackReply: 'Network communication issue. General guideline: take medicines on time with water, and seek emergency medical care for severe symptoms.',
    },
    schemes: {
      badge: 'Public Healthcare Portals',
      title: 'Government Health Schemes',
      subtitle: 'Official central, state (Rajasthan), and district (Jodhpur) healthcare services—open portals directly.',
      openPortal: 'Open Portal',
      centralGovt: 'Central Govt',
      rajGovt: 'Rajasthan Govt',
      jodhpurDistrict: 'Jodhpur',
    },
    footer: {
      tagline: 'Simple, accessible, and reliable prescription decoder for every household, patient, and senior.',
      subtagline: 'Jodhpur, Rajasthan • Dedicated Public Health Service',
      disclaimerTitle: 'Medical Disclaimer:',
      disclaimerText: 'This AI application is designed to aid accessibility and patient understanding. It is NOT a replacement for certified physicians or pharmacists. Always consult your healthcare provider before modifying any medical treatment.',
      copyright: '© 2026 DawaiMitra. All rights reserved.',
      madeWith: 'Dedicated Healthcare Mission',
    },
  },

  gu: {
    nav: {
      howItWorks: 'કેવી રીતે કામ કરે છે',
      features: 'વિશેષતાઓ',
      myDashboard: 'મારું ડેશબોર્ડ',
      schemes: 'સરકારી યોજનાઓ',
      startBtn: 'શરૂ કરો',
      badge: 'દવા સાથી',
      logout: 'લૉગઆઉટ',
      lightMode: 'લાઈટ મોડ',
      darkMode: 'ડાર્ક મોડ',
      selectLanguage: 'ભાષા પસંદ કરો',
    },
    hero: {
      tag: '🎙️ અવાજ દ્વારા સમજો • ગુજરાતી • હિન્દી • English',
      title1: 'ડૉક્ટરની ચિઠ્ઠી હવે',
      title2: 'તમારી ભાષામાં બોલશે',
      subtitle:
        'હાથથી લખેલી ચિઠ્ઠીનો ફોટો અપલોડ કરો. DawaiMitra જણાવશે – કઈ દવા, શેના માટે, ક્યારે અને કેવી રીતે લેવી, શું ન ખાવું. વાંચ્યા વગર, ફક્ત સાંભળીને.',
      uploadBtn: '📷 ચિઠ્ઠી અપલોડ કરો',
      schemesBtn: '🏥 સરકારી યોજનાઓ',
      availableLangs: 'ઉપલબ્ધ ભાષાઓ:',
      rxDoctor: 'ડૉ. આર. કે. શર્મા (MD) • જોધપુર',
      rxVerified: 'ચિઠ્ઠી પ્રમાણિત',
      rxTitle: 'Rx — ડૉક્ટરની ચિઠ્ઠી',
      rxVoiceSampleTitle: 'પેરાસિટામોલ 650mg',
      rxVoiceSampleBadge: 'સવાર-સાંજ',
      rxVoiceSampleDesc: 'તાવ અને અંગદુખાવાની દવા. સવાર અને રાત્રે જમ્યા પછી લેવી, 5 દિવસ માટે.',
      rxVoiceBtnListen: '🔊 બોલીને સંભળાવો',
      rxVoiceBtnStop: '⏸️ રોકો',
      safePrivate: '100% સુરક્ષિત અને ખાનગી',
      aiPartner: 'AI વોઇસ સાથી',
      sampleSpokenText:
        'પેરાસિટામોલ 650 મિલીગ્રામ. તાવ અને શરીરના દુખાવાની દવા. સવાર અને રાત્રે જમ્યા પછી 1 ગોળી 5 દિવસ લેવી. દારૂ બિલકુલ ન પીવો.',
    },
    how: {
      badge: 'સરળ અને સુલભ',
      title: 'ફક્ત 3 સરળ પગલાં',
      subtitle: 'મોટા બટનો, ઓછું ટાઇપિંગ – વડીલો પણ જાતે જ સરળતાથી વાપરી શકે.',
      step1Title: 'ફોટો પાડો',
      step1Desc: 'ડૉક્ટરની હાથથી લખેલી કે પ્રિન્ટેડ ચિઠ્ઠીનો ચોખ્ખો ફોટો પાડો અથવા ગૅલેરીમાંથી પસંદ કરો.',
      step2Title: 'AI વાંચશે',
      step2Desc: 'DawaiMitra અક્ષરો ઓળખીને દરેક દવાનું નામ, ડોઝ, સમય અને આડઅસરો જણાવશે.',
      step3Title: 'સાંભળો અને યાદ રાખો',
      step3Desc: 'તમારી પોતાની ભાષામાં બોલીને સમજાવશે અને નિયત દિવસો સુધી સમયસર યાદ કરાવશે.',
      stepCompleted: 'પગલું પૂર્ણ',
    },
    feat: {
      badge: 'મુખ્ય વિશેષતાઓ',
      title: 'DawaiMitra ની ખાસ બાબતો',
      subtitle: 'માત્ર રિમાઇન્ડર નહીં – ચિઠ્ઠીને સરળતાથી સમજાવતો તમારો સાથી.',
      f1Title: 'દવાની સંપૂર્ણ માહિતી',
      f1Desc: 'દવાનું નામ, શેના માટે છે, માત્રા, જમ્યા પહેલાં કે પછી અને સંભવિત આડઅસર.',
      f2Title: 'ખોરાક અને દવા એલર્ટ',
      f2Desc: 'કયો ખોરાક (દૂધ, ખટાશ) અથવા કઈ બીજી દવા સાથે ન લેવી જોઈએ તેની તાત્કાલિક ચેતવણી.',
      f3Title: 'ડિજિટલ ચિઠ્ઠી સંગ્રહ',
      f3Desc: 'દરેક ચિઠ્ઠી તમારા ખાતામાં હંમેશા સુરક્ષિત રહેશે. ખોવાઈ જવાની કોઈ ચિંતા નહીં.',
      f4Title: 'સ્માર્ટ વોઇસ રિમાઇન્ડર',
      f4Desc: 'જેટલા દિવસનો કોર્સ છે તેટલા દિવસ સમયસર બોલશે: "દવાનો સમય થયો છે, પાણી સાથે લો."',
      f5Title: '6 ભારતીય ભાષાઓ',
      f5Desc: 'ગુજરાતી, હિન્દી, મારવાડી, English, தமிழ், ਪੰਜਾਬી – તમારી માતૃભાષામાં.',
      f6Title: 'બોલતો સહાયક',
      f6Desc: 'માઇક દબાવીને પૂછો – "શું આ ગોળી ભૂખ્યા પેટે લઈ શકાય?" AI બોલીને ઉત્તર આપશે.',
      f7Title: 'હેલ્થ હિસ્ટ્રી',
      f7Desc: 'જૂની અને નવી ચિઠ્ઠીઓની સરખામણી કરીને દવાઓનો બદલાવ અને સ્વાસ્થ્ય પ્રગતિ જણાવશે.',
      f8Title: 'સંપૂર્ણ ગોપનીયતા',
      f8Desc: 'તમારો મેડિકલ ડેટા સંપૂર્ણ સુરક્ષિત રહેશે. કોઈ ડેટા શેરિંગ નહીં.',
    },
    auth: {
      loginTitle: 'સાઇન-ઇન કરો',
      signupTitle: 'નવું ખાતું બનાવો',
      desc: 'ચિઠ્ઠી અપલોડ કરવા અને સાચવવા માટે તમારા ખાતામાં પ્રવેશ કરો.',
      loginTab: 'લૉગઇન',
      signupTab: 'નવું ખાતું',
      nameLabel: 'તમારું નામ',
      namePlaceholder: 'દા.ત. રમેશભાઈ',
      emailLabel: 'ઇમેઇલ (Email)',
      emailPlaceholder: 'patient@example.com',
      pwdLabel: 'પાસવર્ડ (ઓછામાં ઓછા 6 અક્ષર)',
      pwdPlaceholder: '••••••••',
      loginBtn: '🔑 લૉગઇન કરો',
      signupBtn: '✅ ખાતું બનાવો',
      demoLoginBtn: '⚡ 1-ક્લિક ટેસ્ટ લૉગઇન (કાર્તિક ગેહલોત)',
      privacyNote: 'તમારી ચિઠ્ઠીઓ ફક્ત તમારા ખાતામાં સુરક્ષિત રહે છે.',
      emailError: 'કૃપા કરીને સાચો ઇમેઇલ નાખો',
      pwdError: 'પાસવર્ડ ઓછામાં ઓછો 6 અક્ષરનો હોવો જોઈએ',
      emailExistsError: 'આ ઇમેઇલ પહેલેથી રજીસ્ટર છે. કૃપા કરીને લૉગઇન કરો.',
      emailNotFoundError: 'ખાતું મળ્યું નથી. કૃપા કરીને નવું ખાતું બનાવો.',
      wrongPwdError: 'ખોટો પાસવર્ડ. કૃપા કરીને ફરી પ્રયાસ કરો.',
    },
    dash: {
      badge: 'વ્યક્તિગત ડેશબોર્ડ',
      title: 'મારું DawaiMitra',
      subtitleLogged: 'તમારી બધી ચિઠ્ઠીઓ, રિમાઇન્ડર્સ અને સ્વાસ્થ્ય માહિતી અહીં ઉપલબ્ધ છે.',
      subtitleGuest: 'ચિઠ્ઠી અપલોડ કરવા માટે પહેલાં સાઇન-ઇન કરો.',
      greeting: 'નમસ્તે',
      langLabel: 'ભાષા:',
      logout: 'લૉગઆઉટ',
      tabScan: '📷 નવી ચિઠ્ઠી',
      tabMy: '🗂️ મારી ચિઠ્ઠીઓ',
      tabReminders: '⏰ રિમાઇન્ડર',
      tabHistory: '📈 હેલ્થ હિસ્ટ્રી',
      tabAssistant: '🎙️ સહાયક',
      apiKeyTitle: 'કસ્ટમ Gemini API Key (વૈકલ્પિક)',
      apiKeyDesc: 'સર્વર પર AI ચાલુ છે. જો તમારી પોતાની API Key વાપરવી હોય તો અહીં દાખલ કરો.',
      apiKeyClose: '✕ બંધ કરો',
      apiKeySave: 'સાચવો',
      medicalDisclaimer: '⚕️ આ AI સહાયક છે, ડૉક્ટરની સલાહનો વિકલ્પ નથી. દવા બદલતા પહેલાં ડૉક્ટરની સલાહ લો.',
    },
    scan: {
      boxTitle: 'ચિઠ્ઠીનો ફોટો પસંદ કરો અથવા કૅમેરાથી પાડો',
      boxDesc: 'JPG, PNG કે WebP (ચોખ્ખો ફોટો હશે તો લખાણ તરત જ ઓળખાઈ જશે)',
      chooseFileBtn: 'ફાઇલ / કૅમેરા પસંદ કરો',
      removeBtn: 'દૂર કરો',
      scanBtn: '🔎 ચિઠ્ઠી સમજાવો (AI વિશ્લેષણ)',
      scanningText: '⏳ ચિઠ્ઠીનું લખાણ વાંચવામાં આવી રહ્યું છે…',
      sampleHeader: 'તરત જોવા માટે નમૂનાની ચિઠ્ઠી પસંદ કરો (1-ક્લિક ટેસ્ટ)',
      sample1Title: '📋 નમૂનો 1: તાવ અને ઉધરસની ચિઠ્ઠી',
      sample1Badge: '4 દવાઓ',
      sample1Desc: 'Paracetamol 650mg, Pan-40, Ascoril Cough Syrup, Azithromycin',
      sample2Title: '📋 નમૂનો 2: બીપી અને ડાયાબિટીસની નિયમિત દવા',
      sample2Badge: '2 દવાઓ',
      sample2Desc: 'Telmisartan 40mg (High BP), Metformin 500mg SR (ડાયાબિટીસ)',
      selectPhotoFirst: 'કૃપા કરીને પહેલાં ચિઠ્ઠીનો ફોટો પસંદ કરો',
      scanError: 'ચિઠ્ઠી વાંચી શકાઈ નથી. કૃપા કરીને ચોખ્ખો ફોટો અપલોડ કરો.',
      backToScan: '← પાછા નવી ચિઠ્ઠી સ્કૅન પર જાઓ',
      savedRxDetail: 'સાચવેલી ચિઠ્ઠીની વિગતો',
    },
    rxCard: {
      rxHeader: 'ડૉક્ટરની ચિઠ્ઠી',
      medsCountSuffix: 'દવાઓ મળી',
      listenAllBtn: '🔊 આખી ચિઠ્ઠી સાંભળો',
      stopAudioBtn: 'અવાજ રોકો',
      summaryTitle: 'સારાંશ (Prescription Summary):',
      medsSectionTitle: 'દવાઓની સંપૂર્ણ વિગત',
      listenMedBtn: 'સાંભળો',
      stopMedBtn: 'રોકો',
      infoLabel: 'દવાની સંપૂર્ણ માહિતી',
      usesLabel: 'દવાના ઉપયોગો (ફાયદા)',
      dosageLabel: 'માત્રા અને સમય',
      sideEffectsLabel: 'દવાની આડઅસરો (Side Effects)',
      interactionsLabel: 'દવાની પ્રતિક્રિયાઓ (Interactions)',
      foodInteractionLabel: 'ખોરાક સાથે (Food Interaction)',
      drugInteractionLabel: 'અન્ય દવાઓ સાથે (Medicine Interaction)',
      purposeLabel: 'શેના માટે:',
      safeCommon: 'સામાન્ય રીતે સુરક્ષિત',
      avoidFoodLabel: '🚫 સાથે ન લેવું (ખોરાક):',
      avoidDrugsLabel: '⚠️ બીજી દવાઓ:',
      daysCourse: 'દિવસનો કોર્સ',
      warningsTitle: 'મહત્વપૂર્ણ સાવચેતી અને ડ્રગ એલર્ટ',
      saveRxBtn: '💾 સાચવો અને રિમાઇન્ડર ગોઠવો',
      savedRxBtn: '✅ ચિઠ્ઠી સાચવી લેવામાં આવી છે',
    },
    my: {
      title: 'સાચવેલી ચિઠ્ઠીઓ',
      addNewBtn: 'નવી ઉમેરો',
      emptyTitle: 'હજુ કોઈ ચિઠ્ઠી સાચવેલી નથી',
      emptyDesc: 'તમારી ડૉક્ટરની ચિઠ્ઠીનો ફોટો પાડો અથવા નમૂનાથી શરૂઆત કરો.',
      startAddingBtn: 'નવી ચિઠ્ઠી ઉમેરો',
      deleteConfirm: 'શું તમે ખરેખર આ ચિઠ્ઠી કાઢી નાખવા માંગો છો?',
      viewBtn: 'જુઓ',
    },
    rem: {
      title: 'સ્માર્ટ દવા રિમાઇન્ડર શિડ્યુલ',
      subtitle: 'પેજ ખુલ્લું રહેશે ત્યારે સમય થતાં આપમેળે અવાજમાં બોલીને યાદ કરાવશે.',
      testChimeBtn: '🔔 અવાજ ટેસ્ટ કરો',
      filterToday: 'આજના',
      filterAll: 'બધા',
      emptyToday: 'આજના દિવસ માટે કોઈ દવા બાકી નથી',
      emptyAll: 'કોઈ સક્રિય રિમાઇન્ડર નથી',
      emptyDesc: "'નવી ચિઠ્ઠી' ટેબમાં જઈને ચિઠ્ઠી સાચવશો એટલે અહીં રિમાઇન્ડર ઉમેરાઈ જશે.",
      todayBadge: 'આજે',
      dateLabel: 'તારીખ:',
      takenTooltip: 'દવા લઈ લીધી છે',
      markTakenTooltip: 'દવા લઈ લીધી હોય તો ટીક કરો',
      testAlertPrefix: '🔔 ટેસ્ટ એલર્ટ:',
      timeChimeAlert: 'દવાનો સમય થઈ ગયો છે.',
      timeLabelMorning: 'સવાર',
      timeLabelAfternoon: 'બપોર',
      timeLabelNight: 'રાત',
    },
    hist: {
      title: 'હેલ્થ હિસ્ટ્રી અને દવાઓની સરખામણી',
      prescriptionsCountSuffix: 'ચિઠ્ઠીઓનું AI વિશ્લેષણ',
      listenReportBtn: '🔊 સંપૂર્ણ અહેવાલ સાંભળો',
      reloadBtn: 'ફરી વિશ્લેષણ કરો',
      analyzingTitle: 'જૂની અને નવી ચિઠ્ઠીઓનું વિશ્લેષણ થઈ રહ્યું છે…',
      analyzingDesc: 'દવાઓના બદલાવ અને તબિયતની પ્રગતિ તપાસવામાં આવી રહી છે',
      emptyTitle: 'હેલ્થ હિસ્ટ્રી માટે ચિઠ્ઠીઓ સાચવો',
      emptyDesc: 'જેવી તમે 1-2 ચિઠ્ઠીઓ સાચવશો, DawaiMitra તમારી સ્વાસ્થ્ય પ્રગતિ સમજાવશે.',
      overviewTitle: 'એકંદર સ્વાસ્થ્ય સ્થિતિ (Overall Health)',
      changesTitle: '🔄 મુખ્ય ફેરફારો (Treatment Changes)',
      adviceTitle: '💡 મહત્વપૂર્ણ સલાહ (Safety Advice)',
      historyDisclaimer: 'આ વિશ્લેષણ માત્ર માર્ગદર્શન માટે છે. દવા બદલતા પહેલાં ડૉક્ટરની સલાહ લો.',
      fallbackOverview: 'તમારા ખાતામાં ચિઠ્ઠીઓ સુરક્ષિત છે અને સ્વાસ્થ્યમાં સુધારો થઈ રહ્યો છે.',
      fallbackChange1: 'નવી દવાઓ નિયત સમય મુજબ લેવામાં આવી રહી છે.',
      fallbackChange2: 'કોર્સ પૂરો થયા પછી ડૉક્ટર પાસે ફરી તપાસ કરાવો.',
      fallbackAdvice1: 'દવા હંમેશા હુંફાળા પાણી સાથે લો.',
      fallbackAdvice2: 'વધેલી દવા ડૉક્ટરની પૂછ્યા વગર ફરી ન લો.',
      fallbackAdvice3: 'બીપી અને સુગર નિયમિત તપાસતા રહો.',
    },
    asst: {
      title: 'DawaiMitra વોઇસ સહાયક',
      subtitle: 'દવાઓ વિશે પ્રશ્નો પૂછો • અવાજમાં સાંભળો',
      welcomeMessage: 'નમસ્તે! હું DawaiMitra છું. તમારી દવાઓ વિશે કંઈપણ પૂછો – માત્રા, સમય કે પરહેજ. બોલીને પૂછવા માટે 🎤 માઇક દબાવો.',
      listenAgain: 'ફરી સાંભળો',
      thinking: 'DawaiMitra વિચારી રહ્યો છે…',
      suggestionsLabel: 'સૂચનો:',
      sug1: 'શું પેરાસિટામોલ ભૂખ્યા પેટે લઈ શકાય?',
      sug2: 'મારી દવાઓમાં કયો ખોરાક ન ખાવો?',
      sug3: 'જો કોઈ ડોઝ ભૂલી જાઉં તો શું કરવું?',
      sug4: 'એન્ટિબાયોટિકનો પૂરો કોર્સ કરવો કેમ જરૂરી છે?',
      inputPlaceholder: 'દવા વિશે પૂછો અથવા 🎤 દબાવીને બોલો…',
      sendBtn: 'મોકલો',
      micUnsupported: 'તમારા બ્રાઉઝરમાં માઇક સપોર્ટ નથી. કૃપા કરીને લખીને પૂછો.',
      micActiveTitle: 'માઇક બંધ કરો',
      micInactiveTitle: 'બોલીને પૂછો',
      fallbackReply: 'નેટવર્ક સમસ્યા છે. સામાન્ય નિયમ: દવા સમયસર પાણી સાથે લો અને તકલીફ હોય તો ડૉક્ટરને બતાવો.',
    },
    schemes: {
      badge: 'કલ્યાણકારી આરોગ્ય પોર્ટલ',
      title: 'સરકારી સ્વાસ્થ્ય યોજનાઓ',
      subtitle: 'કેન્દ્ર, ગુજરાત અને રાજસ્થાનની સત્તાવાર આરોગ્ય સેવાઓ – સીધા પોર્ટલ ખોલો.',
      openPortal: 'પોર્ટલ ખોલો',
      centralGovt: 'કેન્દ્ર સરકાર',
      rajGovt: 'રાજ્ય સરકાર',
      jodhpurDistrict: 'જોધપુર',
    },
    footer: {
      tagline: 'દરેક ઘર અને વડીલો માટે સરળ અને વિશ્વસનીય ચિઠ્ઠી વાચક.',
      subtagline: 'સમર્પિત જન-સ્વાસ્થ્ય સેવા',
      disclaimerTitle: 'મેડિકલ ડિસ્ક્લેમર:',
      disclaimerText: 'આ AI સેવા દર્દીઓની જાગૃતિ માટે છે. તે ડૉક્ટરની સલાહનો વિકલ્પ નથી. કોઈ પણ દવા બદલતા પહેલાં ડૉક્ટરની સલાહ લો.',
      copyright: '© 2026 DawaiMitra. સર્વાધિકાર સુરક્ષિત.',
      madeWith: 'સમર્પિત આરોગ્ય સેવા',
    },
  },

  ta: {
    nav: {
      howItWorks: 'செயல்படும் விதம்',
      features: 'சிறப்பம்சங்கள்',
      myDashboard: 'டாஷ்போர்டு',
      schemes: 'அரசு திட்டங்கள்',
      startBtn: 'தொடங்குக',
      badge: 'மருந்து துணைவன்',
      logout: 'வெளியேறு',
      lightMode: 'பகல் வடிவம்',
      darkMode: 'இரவு வடிவம்',
      selectLanguage: 'மொழியைத் தேர்வு செய்க',
    },
    hero: {
      tag: '🎙️ குரல் வழி வழிகாட்டி • தமிழ் • Hindi • English',
      title1: 'மருத்துவர் சீட்டு இனி',
      title2: 'உங்கள் மொழியில் பேசும்',
      subtitle:
        'மருத்துவரின் கைப்பட எழுதிய சீட்டின் புகைப்படத்தை பதிவேற்றுங்கள். DawaiMitra – எந்த மருந்து, எதற்கு, எப்போது, எப்படி சாப்பிட வேண்டும் என்பதை படிக்காமல் குரல் வழியே விளக்கும்.',
      uploadBtn: '📷 சீட்டைப் பதிவேற்றுக',
      schemesBtn: '🏥 அரசுத் திட்டங்கள்',
      availableLangs: 'மொழிகள்:',
      rxDoctor: 'டாக்டர் ஆர். கே. சர்மா (MD) • ஜோத்பூர்',
      rxVerified: 'சரிபார்க்கப்பட்டது',
      rxTitle: 'Rx — மருத்துவர் சீட்டு',
      rxVoiceSampleTitle: 'பாராசிட்டமால் 650mg',
      rxVoiceSampleBadge: 'காலை-இரவு',
      rxVoiceSampleDesc: 'காய்ச்சல் மற்றும் உடல் வலி மருந்து. காலை மற்றும் இரவு உணவுக்குப் பின் 5 நாட்கள் எடுத்துக்கொள்ளவும்.',
      rxVoiceBtnListen: '🔊 கேட்டுப் பாருங்கள்',
      rxVoiceBtnStop: '⏸️ நிறுத்துக',
      safePrivate: '100% பாதுகாப்பானது',
      aiPartner: 'AI குரல் துணைவன்',
      sampleSpokenText:
        'பாராசிட்டமால் 650 மில்லிகிராம். காய்ச்சல் மற்றும் உடல் வலிக்கான மருந்து. காலை மற்றும் இரவு உணவுக்குப் பிறகு 5 நாட்கள் எடுத்துக் கொள்ளவும். மது அருந்த வேண்டாம்.',
    },
    how: {
      badge: 'எளிதான அணுகுமுறை',
      title: '3 எளிய படிகள்',
      subtitle: 'பெரிய பொத்தான்கள், தட்டச்சு தேவையில்லை – முதியவர்களும் எளிதாகப் பயன்படுத்தலாம்.',
      step1Title: 'படம் எடுக்கவும்',
      step1Desc: 'மருத்துவர் சீட்டைத் தெளிவாக படம் பிடிக்கவும் அல்லது பதிவேற்றவும்.',
      step2Title: 'AI படிக்கும்',
      step2Desc: 'கையெழுத்தை அடையாளம் கண்டு மருந்துப் பெயர், அளவு மற்றும் நேரத்தைக் கண்டறியும்.',
      step3Title: 'கேட்டு நினைவில் வைக்கவும்',
      step3Desc: 'உங்கள் தாய்மொழியில் பேசி விளக்கும் மற்றும் நேரத்திற்கு நினைவூட்டும்.',
      stepCompleted: 'படி முடிந்தது',
    },
    feat: {
      badge: 'முக்கிய அம்சங்கள்',
      title: 'DawaiMitra-வின் சிறப்புகள்',
      subtitle: 'மருந்துச் சீட்டை ஒவ்வொரு நோயாளியும் எளிதில் புரிந்துகொள்ள உதவும் உற்ற தோழன்.',
      f1Title: 'முழுமையான மருந்து விவரம்',
      f1Desc: 'மருந்தின் பெயர், நோயின் வகை, உணவுடன் உண்ணும் முறை மற்றும் பக்கவிளைவுகள்.',
      f2Title: 'உணவு & மருந்து எச்சரிக்கை',
      f2Desc: 'தவிர்க்க வேண்டிய உணவுகள் மற்றும் முரண்பட்ட மருந்துகள் குறித்த எச்சரிக்கை.',
      f3Title: 'பாதுகாப்பான டிஜிட்டல் பெட்டகம்',
      f3Desc: 'எல்லா சீட்டுகளும் உங்கள் கணக்கில் பாதுகாப்பாக இருக்கும். தொலைந்து போகாது.',
      f4Title: 'குரல் வழி நினைவூட்டல்',
      f4Desc: 'மருந்து உட்கொள்ளும் நேரத்தில் குரல் வழியே நினைவூட்டும்.',
      f5Title: '6 மொழிகள்',
      f5Desc: 'தமிழ், இந்தி, மார்வாரி, ஆங்கிலம், குஜராத்தி, பஞ்சாபி ஆகிய மொழிகளில்.',
      f6Title: 'குரல் வழி உதவியாளர்',
      f6Desc: 'மைக் அழுத்தி உங்கள் மொழியிலேயே கேள்விகள் கேட்கலாம்.',
      f7Title: 'சுகாதார வரலாறு',
      f7Desc: 'பழைய மற்றும் புதிய சீட்டுகளை ஒப்பிட்டு முன்னேற்றத்தைக் காட்டும்.',
      f8Title: 'முழுமையான ரகசியத்தன்மை',
      f8Desc: 'உங்கள் மருத்துவ தரவுகள் முற்றிலும் பாதுகாப்பாக இருக்கும்.',
    },
    auth: {
      loginTitle: 'உள்நுழைக',
      signupTitle: 'புதிய கணக்கு',
      desc: 'மருந்துச் சீட்டுகளைச் சேமிக்க உங்கள் கணக்கில் நுழையவும்.',
      loginTab: 'உள்நுழைவு',
      signupTab: 'பதிவு செய்க',
      nameLabel: 'உங்கள் பெயர்',
      namePlaceholder: 'எ.கா. ரமேஷ்',
      emailLabel: 'மின்னஞ்சல் (Email)',
      emailPlaceholder: 'patient@example.com',
      pwdLabel: 'கடவுச்சொல் (குறைந்தது 6 எழுத்துகள்)',
      pwdPlaceholder: '••••••••',
      loginBtn: '🔑 உள்நுழைக',
      signupBtn: '✅ கணக்கை உருவாக்குக',
      demoLoginBtn: '⚡ 1-கிளிக் சோதனை உள்நுழைவு',
      privacyNote: 'உங்கள் விவரங்கள் உங்கள் கணக்கில் மட்டுமே பாதுகாப்பாக இருக்கும்.',
      emailError: 'சரியான மின்னஞ்சலை உள்ளிடவும்',
      pwdError: 'கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்',
      emailExistsError: 'மின்னஞ்சல் ஏற்கனவே உள்ளது. உள்நுழைக.',
      emailNotFoundError: 'கணக்கு இல்லை. பதிவு செய்யவும்.',
      wrongPwdError: 'தவறான கடவுச்சொல்.',
    },
    dash: {
      badge: 'டாஷ்போர்டு',
      title: 'எனது DawaiMitra',
      subtitleLogged: 'உங்கள் அனைத்து சீட்டுகள், நினைவூட்டல்கள் இங்கு உள்ளன.',
      subtitleGuest: 'மருந்துச் சீட்டைப் பதிவேற்ற முதலில் உள்நுழையவும்.',
      greeting: 'வணக்கம்',
      langLabel: 'மொழி:',
      logout: 'வெளியேறு',
      tabScan: '📷 புதிய சீட்டு',
      tabMy: '🗂️ எனது சீட்டுகள்',
      tabReminders: '⏰ நினைவூட்டல்',
      tabHistory: '📈 மருத்துவ வரலாறு',
      tabAssistant: '🎙️ உதவியாளர்',
      apiKeyTitle: 'Custom Gemini API Key (விருப்பமானது)',
      apiKeyDesc: 'AI சேவை இயங்குகிறது. சொந்த சாவி தேவைப்பட்டால் உள்ளிடவும்.',
      apiKeyClose: '✕ மூடுக',
      apiKeySave: 'சேமிக்க',
      medicalDisclaimer: '⚕️ இது AI உதவி மட்டுமே, மருத்துவரின் ஆலோசனைக்கு மாற்றாகாது.',
    },
    scan: {
      boxTitle: 'மருந்துச் சீட்டைத் தேர்வு செய்யவும் அல்லது படம் எடுக்கவும்',
      boxDesc: 'JPG, PNG வடிவம் (தெளிவான படம் துல்லியமான வாசிப்பைத் தரும்)',
      chooseFileBtn: 'கேமரா / கோப்பு',
      removeBtn: 'நீக்கு',
      scanBtn: '🔎 சீட்டை விளக்குக (AI ஆய்வு)',
      scanningText: '⏳ கையெழுத்தைப் படித்து மருந்துகளை அடையாளம் காண்கிறது…',
      sampleHeader: 'மாதிரி சீட்டைத் தேர்வு செய்க (1-கிளிக் சோதனை)',
      sample1Title: '📋 மாதிரி 1: காய்ச்சல் மற்றும் இருமல் சீட்டு',
      sample1Badge: '4 மருந்துகள்',
      sample1Desc: 'Paracetamol 650mg, Pan-40, Ascoril Cough Syrup, Azithromycin',
      sample2Title: '📋 மாதிரி 2: இரத்த அழுத்தம் & சர்க்கரை மருந்து',
      sample2Badge: '2 மருந்துகள்',
      sample2Desc: 'Telmisartan 40mg (BP), Metformin 500mg SR (சர்க்கரை)',
      selectPhotoFirst: 'முதலில் சீட்டின் புகைப்படத்தைத் தேர்வு செய்யவும்',
      scanError: 'சீட்டைப் படிக்க முடியவில்லை. தெளிவான படத்தைப் பதிவேற்றவும்.',
      backToScan: '← புதிய சீட்டுக்குத் திரும்புக',
      savedRxDetail: 'சேமிக்கப்பட்ட விவரங்கள்',
    },
    rxCard: {
      rxHeader: 'மருத்துவர் சீட்டு',
      medsCountSuffix: 'மருந்துகள் கண்டறியப்பட்டன',
      listenAllBtn: '🔊 முழு சீட்டையும் கேட்க',
      stopAudioBtn: 'ஒலியை நிறுத்து',
      summaryTitle: 'சுருக்கம்:',
      medsSectionTitle: 'மருந்துகளின் முழு விவரம்',
      listenMedBtn: 'கேட்க',
      stopMedBtn: 'நிறுத்து',
      infoLabel: 'மருந்து பற்றிய விவரங்கள்',
      usesLabel: 'மருந்தின் பயன்கள்',
      dosageLabel: 'அளவு மற்றும் நேரம்',
      sideEffectsLabel: 'பக்க விளைவுகள் (Side Effects)',
      interactionsLabel: 'மருந்து இடைவினைகள் (Interactions)',
      foodInteractionLabel: 'உணவுடன் தொடர்பு (Food)',
      drugInteractionLabel: 'பிற மருந்துகளுடன் (Medicine)',
      purposeLabel: 'எதற்கு:',
      safeCommon: 'பொதுவாக பாதுகாப்பானது',
      avoidFoodLabel: '🚫 தவிர்க்க வேண்டிய உணவு:',
      avoidDrugsLabel: '⚠️ தவிர்க்க வேண்டிய மருந்துகள்:',
      daysCourse: 'நாட்கள் மருந்து',
      warningsTitle: 'முக்கிய எச்சரிக்கைகள்',
      saveRxBtn: '💾 சேமித்து நினைவூட்டலை அமைக்கவும்',
      savedRxBtn: '✅ சேமிக்கப்பட்டது',
    },
    my: {
      title: 'சேமிக்கப்பட்ட சீட்டுகள்',
      addNewBtn: 'புதியது சேர்க்க',
      emptyTitle: 'சீட்டுகள் ஏதும் இல்லை',
      emptyDesc: 'உங்கள் மருத்துவர் சீட்டின் படத்தை பதிவேற்றுங்கள்.',
      startAddingBtn: 'புதிய சீட்டு சேர்க்க',
      deleteConfirm: 'இதை நீக்க விரும்புகிறீர்களா?',
      viewBtn: 'பார்க்க',
    },
    rem: {
      title: 'ஸ்மார்ட் மருந்து நினைவூட்டல்',
      subtitle: 'பக்கம் திறந்திருக்கும்போது சரியான நேரத்தில் குரலில் நினைவூட்டும்.',
      testChimeBtn: '🔔 ஒலியைச் சோதிக்க',
      filterToday: 'இன்றைய அளவுகள்',
      filterAll: 'அனைத்தும்',
      emptyToday: 'இன்று உட்கொள்ள வேண்டிய மருந்துகள் இல்லை',
      emptyAll: 'நினைவூட்டல் இல்லை',
      emptyDesc: 'புதிய சீட்டைச் சேமிக்கும் போது தானாக நினைவூட்டல் வரும்.',
      todayBadge: 'இன்று',
      dateLabel: 'தேதி:',
      takenTooltip: 'மருந்து உட்கொள்ளப்பட்டது',
      markTakenTooltip: 'மருந்து சாப்பிட்டதும் குறிக்கவும்',
      testAlertPrefix: '🔔 சோதனை எச்சரிக்கை:',
      timeChimeAlert: 'மருந்து சாப்பிடும் நேரம் வந்துவிட்டது.',
      timeLabelMorning: 'காலை',
      timeLabelAfternoon: 'மதியம்',
      timeLabelNight: 'இரவு',
    },
    hist: {
      title: 'மருத்துவ வரலாறு மற்றும் ஒப்பிடுதல்',
      prescriptionsCountSuffix: 'சீட்டுகள் ஆய்வு செய்யப்பட்டன',
      listenReportBtn: '🔊 முழு அறிக்கையைக் கேட்க',
      reloadBtn: 'மீண்டும் ஆய்வு செய்',
      analyzingTitle: 'பழைய மற்றும் புதிய சீட்டுகள் ஒப்பிடப்படுகின்றன…',
      analyzingDesc: 'மருந்து மாற்றங்கள் ஆராயப்படுகின்றன',
      emptyTitle: 'மருத்துவ வரலாறுக்கு சீட்டுகளை சேமிக்கவும்',
      emptyDesc: '1-2 சீட்டுகளை சேமித்ததும் DawaiMitra முன்னேற்றத்தை விளக்கும்.',
      overviewTitle: 'உடல்நல முன்னேற்றம்',
      changesTitle: '🔄 முக்கிய மாற்றங்கள்',
      adviceTitle: '💡 மருத்துவ ஆலோசனைகள்',
      historyDisclaimer: 'இது வழிகாட்டுதலுக்கு மட்டுமே. மருந்தை மாற்றுமுன் மருத்துவரிடம் கேட்கவும்.',
      fallbackOverview: 'உங்கள் சீட்டுகள் பாதுகாப்பாக உள்ளன.',
      fallbackChange1: 'புதிய மருந்துகள் அட்டவணைப்படி எடுக்கப்படுகின்றன.',
      fallbackChange2: 'மருந்து முடிந்ததும் மருத்துவரை மீண்டும் சந்திக்கவும்.',
      fallbackAdvice1: 'மருந்தை வெதுவெதுப்பான நீரில் விழுங்கவும்.',
      fallbackAdvice2: 'மீதமுள்ள மருந்தை சுயமாக மீண்டும் எடுக்க வேண்டாம்.',
      fallbackAdvice3: 'இரத்த அழுத்தம், சர்க்கரையை தொடர்ந்து பரிசோதிக்கவும்.',
    },
    asst: {
      title: 'DawaiMitra குரல் உதவியாளர்',
      subtitle: 'மருந்துகள் குறித்து கேளுங்கள் • குரல் வடிவில் கேளுங்கள்',
      welcomeMessage: 'வணக்கம்! நான் DawaiMitra. உங்கள் மருந்துகள் பற்றி எதையும் கேளுங்கள். பேச 🎤 மைக் அழுத்தவும்.',
      listenAgain: 'மீண்டும் கேட்க',
      thinking: 'DawaiMitra பதிலளிக்கிறது…',
      suggestionsLabel: 'பரிந்துரைகள்:',
      sug1: 'பாராசிட்டமால் வெறும் வயிற்றில் சாப்பிடலாமா?',
      sug2: 'நான் தவிர்க்க வேண்டிய உணவுகள் என்ன?',
      sug3: 'மருந்தை மறந்தால் என்ன செய்ய வேண்டும்?',
      sug4: 'ஆண்டிபயாடிக் மருந்தை முழுமையாக முடிப்பது ஏன் அவசியம்?',
      inputPlaceholder: 'மருந்து பற்றி கேளுங்கள் அல்லது 🎤 பேசவும்…',
      sendBtn: 'அனுப்புக',
      micUnsupported: 'மைக் வசதி இல்லை. தட்டச்சு செய்யவும்.',
      micActiveTitle: 'மைக்கை நிறுத்து',
      micInactiveTitle: 'பேசத் தொடங்கவும்',
      fallbackReply: 'மன்னிக்கவும். மருந்துகளை சரியான நேரத்தில் உட்கொள்ளுங்கள், சிக்கல் தீவிரமடைந்தால் மருத்துவரை அணுகவும்.',
    },
    schemes: {
      badge: 'பொது சுகாதார திட்டங்கள்',
      title: 'அரசு நலத்திட்டங்கள்',
      subtitle: 'மத்திய மற்றும் மாநில அரசு சுகாதார சேவைகள் – தளங்களை அணுகவும்.',
      openPortal: 'திறக்க',
      centralGovt: 'மத்திய அரசு',
      rajGovt: 'மாநில அரசு',
      jodhpurDistrict: 'ஜோத்பூர்',
    },
    footer: {
      tagline: 'ஒவ்வொரு குடும்பத்திற்கும் எளிய, நம்பகமான மருந்து வாசிப்பான்.',
      subtagline: 'அர்ப்பணிக்கப்பட்ட மக்கள் சுகாதார சேவை',
      disclaimerTitle: 'பொறுப்புத் துறப்பு:',
      disclaimerText: 'இது விழிப்புணர்வுக்கான AI கருவி. மருத்துவர் ஆலோசனைக்கு மாற்றாகாது.',
      copyright: '© 2026 DawaiMitra. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      madeWith: 'மக்கள் நல்வாழ்வு சேவை',
    },
  },

  pa: {
    nav: {
      howItWorks: 'ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',
      features: 'ਖ਼ੂਬੀਆਂ',
      myDashboard: 'ਮੇਰਾ ਡੈਸ਼ਬੋਰਡ',
      schemes: 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ',
      startBtn: 'ਸ਼ੁਰੂ ਕਰੋ',
      badge: 'ਦਵਾਈ ਸਾਥੀ',
      logout: 'ਲੌਗਆਊਟ',
      lightMode: 'ਲਾਈਟ ਮੋਡ',
      darkMode: 'ਡਾਰਕ ਮੋਡ',
      selectLanguage: 'ਬੋਲੀ ਚੁਣੋ',
    },
    hero: {
      tag: '🎙️ ਬੋਲ ਕੇ ਸੁਣੋ • ਪੰਜਾਬੀ • ਹਿੰਦੀ • English',
      title1: 'ਡਾਕਟਰ ਦੀ ਪਰਚੀ ਹੁਣ',
      title2: 'ਤੁਹਾਡੀ ਬੋਲੀ \'ਚ ਬੋਲੇਗੀ',
      subtitle:
        'ਹੱਥ ਨਾਲ ਲਿਖੀ ਪਰਚੀ ਦੀ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ। DawaiMitra ਦੱਸੇਗਾ – ਕਿਹੜੀ ਦਵਾਈ, ਕਿਸ ਕੰਮ ਦੀ, ਕਦੋਂ ਅਤੇ ਕਿਵੇਂ ਲੈਣੀ ਹੈ, ਕੀ ਨਹੀਂ ਖਾਣਾ। ਬਿਨਾਂ ਪੜ੍ਹੇ, ਸਿਰਫ਼ ਸੁਣ ਕੇ।',
      uploadBtn: '📷 ਪਰਚੀ ਅੱਪਲੋਡ ਕਰੋ',
      schemesBtn: '🏥 ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ',
      availableLangs: 'ਉਪਲਬਧ ਬੋਲੀਆਂ:',
      rxDoctor: 'ਡਾ. ਆਰ. ਕੇ. ਸ਼ਰਮਾ (MD) • ਜੋਧਪੁਰ',
      rxVerified: 'ਪਰਚੀ ਪ੍ਰਮਾਣਿਤ',
      rxTitle: 'Rx — ਡਾਕਟਰ ਦੀ ਪਰਚੀ',
      rxVoiceSampleTitle: 'ਪੈਰਾਸੀਟਾਮੋਲ 650mg',
      rxVoiceSampleBadge: 'ਸਵੇਰ-ਰਾਤ',
      rxVoiceSampleDesc: 'ਬੁਖ਼ਾਰ ਅਤੇ ਸਰੀਰ ਦਰਦ ਦੀ ਦਵਾਈ। ਸਵੇਰੇ ਅਤੇ ਰਾਤ ਨੂੰ ਰੋਟੀ ਖਾਣ ਤੋਂ ਬਾਅਦ ਲਵੋ, 5 ਦਿਨ।',
      rxVoiceBtnListen: '🔊 ਬੋਲ ਕੇ ਸੁਣਾਓ',
      rxVoiceBtnStop: '⏸️ ਰੋਕੋ',
      safePrivate: '100% ਸੁਰੱਖਿਅਤ ਤੇ ਨਿੱਜੀ',
      aiPartner: 'AI ਆਵਾਜ਼ ਸਾਥੀ',
      sampleSpokenText:
        'ਪੈਰਾਸੀਟਾਮੋਲ 650 ਮਿਲੀਗ੍ਰਾਮ। ਇਹ ਬੁਖ਼ਾਰ ਅਤੇ ਸਰੀਰ ਦਰਦ ਦੀ ਦਵਾਈ ਹੈ। ਸਵੇਰੇ ਅਤੇ ਰਾਤ ਨੂੰ ਰੋਟੀ ਖਾਣ ਤੋਂ ਬਾਅਦ ਇੱਕ ਗੋਲੀ 5 ਦਿਨ ਲੈਣੀ ਹੈ। ਸ਼ਰਾਬ ਬਿਲਕੁਲ ਨਾ ਪੀਓ।',
    },
    how: {
      badge: 'ਸੌਖਾ ਅਤੇ ਸਪੱਸ਼ਟ',
      title: 'ਸਿਰਫ਼ 3 ਆਸਾਨ ਕਦਮ',
      subtitle: 'ਵੱਡੇ ਬਟਨ, ਘੱਟ ਟਾਈਪਿੰਗ – ਬਜ਼ੁਰਗ ਵੀ ਬਿਨਾਂ ਕਿਸੇ ਦੀ ਮਦਦ ਖ਼ੁਦ ਚਲਾ ਸਕਣ।',
      step1Title: 'ਫੋਟੋ ਖਿੱਚੋ',
      step1Desc: 'ਡਾਕਟਰ ਦੀ ਹੱਥ ਨਾਲ ਲਿਖੀ ਪਰਚੀ ਦੀ ਸਾਫ਼ ਫ਼ੋਟੋ ਖਿੱਚੋ ਜਾਂ ਗੈਲਰੀ \'ਚੋਂ ਚੁਣੋ।',
      step2Title: 'AI ਪੜ੍ਹੇਗਾ',
      step2Desc: 'DawaiMitra ਲਿਖਾਈ ਪਛਾਣ ਕੇ ਹਰ ਦਵਾਈ ਦਾ ਨਾਮ, ਖ਼ੁਰਾਕ, ਸਮਾਂ ਅਤੇ ਸਾਈਡ ਇਫੈਕਟ ਕੱਢੇਗਾ।',
      step3Title: 'ਸੁਣੋ ਅਤੇ ਯਾਦ ਰੱਖੋ',
      step3Desc: 'ਤੁਹਾਡੀ ਆਪਣੀ ਬੋਲੀ ਵਿੱਚ ਬੋਲ ਕੇ ਸਮਝਾਏਗਾ ਅਤੇ ਸਮੇਂ ਸਿਰ ਆਵਾਜ਼ ਵਿੱਚ ਯਾਦ ਕਰਵਾਏਗਾ।',
      stepCompleted: 'ਕਦਮ ਪੂਰਾ',
    },
    feat: {
      badge: 'ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
      title: 'DawaiMitra ਦੀਆਂ ਖ਼ਾਸ ਗੱਲਾਂ',
      subtitle: 'ਸਿਰਫ਼ ਰੀਮਾਈਂਡਰ ਨਹੀਂ – ਪਰਚੀ ਨੂੰ ਸੌਖਿਆਂ ਸਮਝਾਉਣ ਵਾਲਾ ਤੁਹਾਡਾ ਸਾਥੀ।',
      f1Title: 'ਪੂਰੀ ਦਵਾਈ ਜਾਣਕਾਰੀ',
      f1Desc: 'ਦਵਾਈ ਦਾ ਨਾਮ, ਕਿਸ ਬਿਮਾਰੀ ਲਈ ਹੈ, ਖ਼ੁਰਾਕ, ਖਾਣੇ ਤੋਂ ਪਹਿਲਾਂ ਜਾਂ ਬਾਅਦ, ਅਤੇ ਸਾਈਡ ਇਫੈਕਟ।',
      f2Title: 'ਪਰਹੇਜ਼ ਅਤੇ ਚਿਤਾਵਨੀ',
      f2Desc: 'ਕਿਹੜਾ ਖਾਣਾ (ਦੁੱਧ, ਖਟਾਈ) ਜਾਂ ਕਿਹੜੀ ਦੂਜੀ ਦਵਾਈ ਨਾਲ ਨਹੀਂ ਲੈਣੀ, ਤੁਰੰਤ ਸੁਚੇਤ ਕਰਦਾ ਹੈ।',
      f3Title: 'ਡਿਜੀਟਲ ਪਰਚੀ ਬੈਂਕ',
      f3Desc: 'ਹਰ ਪਰਚੀ ਤੁਹਾਡੇ ਖ਼ਾਤੇ ਵਿੱਚ ਹਮੇਸ਼ਾ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੀ ਹੈ। ਗੁੰਮਣ ਦਾ ਕੋਈ ਡਰ ਨਹੀਂ।',
      f4Title: 'ਸਮਾਰਟ ਆਵਾਜ਼ ਰੀਮਾਈਂਡਰ',
      f4Desc: 'ਜਿੰਨੇ ਦਿਨਾਂ ਦਾ ਕੋਰਸ ਹੈ, ਸਮੇਂ ਸਿਰ ਬੋਲੇਗਾ: "ਦਵਾਈ ਦਾ ਸਮਾਂ ਹੋ ਗਿਆ ਹੈ, ਪਾਣੀ ਨਾਲ ਲਵੋ।"',
      f5Title: '6 ਭਾਰਤੀ ਬੋਲੀਆਂ',
      f5Desc: 'ਪੰਜਾਬੀ, ਹਿੰਦੀ, ਮਾਰਵਾੜੀ, ਅੰਗਰੇਜ਼ੀ, ਗੁਜਰਾਤੀ, ਤਾਮਿਲ – ਤੁਹਾਡੀ ਆਪਣੀ ਮਾਂ-ਬੋਲੀ \'ਚ।',
      f6Title: 'ਬੋਲਣ ਵਾਲਾ ਸਹਾਇਕ',
      f6Desc: 'ਮਾਈਕ ਦਬਾ ਕੇ ਪੁੱਛੋ – "ਕੀ ਇਹ ਗੋਲੀ ਖ਼ਾਲੀ ਪੇਟ ਲੈ ਸਕਦੇ ਹਾਂ?" AI ਬੋਲ ਕੇ ਜਵਾਬ ਦੇਵੇਗਾ।',
      f7Title: 'ਸਿਹਤ ਹਿਸਟਰੀ',
      f7Desc: 'ਪੁਰਾਣੀ ਅਤੇ ਨਵੀਂ ਪਰਚੀ ਮਿਲਾ ਕੇ ਦੱਸਦਾ ਹੈ ਕਿ ਕਿਹੜੀ ਦਵਾਈ ਬਦਲੀ ਅਤੇ ਕਿੰਨਾ ਸੁਧਾਰ ਹੋਇਆ।',
      f8Title: 'ਪੂਰੀ ਗੁਪਤਤਾ',
      f8Desc: 'ਤੁਹਾਡਾ ਮੈਡੀਕਲ ਰਿਕਾਰਡ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਨਿੱਜੀ ਖ਼ਾਤੇ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦਾ ਹੈ।',
    },
    auth: {
      loginTitle: 'ਸਾਈਨ-ਇਨ ਕਰੋ',
      signupTitle: 'ਨਵਾਂ ਖ਼ਾਤਾ ਬਣਾਓ',
      desc: 'ਪਰਚੀ ਅੱਪਲੋਡ ਕਰਨ ਅਤੇ ਸੁਣਨ ਲਈ ਆਪਣੇ ਖ਼ਾਤੇ ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ।',
      loginTab: 'ਲੌਗਇਨ',
      signupTab: 'ਨਵਾਂ ਖ਼ਾਤਾ',
      nameLabel: 'ਤੁਹਾਡਾ ਨਾਮ',
      namePlaceholder: 'ਜਿਵੇਂ: ਰਮੇਸ਼ ਸਿੰਘ',
      emailLabel: 'ਈਮੇਲ (Email)',
      emailPlaceholder: 'patient@example.com',
      pwdLabel: 'ਪਾਸਵਰਡ (ਘੱਟੋ-ਘੱਟ 6 ਅੱਖਰ)',
      pwdPlaceholder: '••••••••',
      loginBtn: '🔑 ਲੌਗਇਨ ਕਰੋ',
      signupBtn: '✅ ਖ਼ਾਤਾ ਬਣਾਓ',
      demoLoginBtn: '⚡ 1-ਕਲਿੱਕ ਟੈਸਟ ਲੌਗਇਨ (ਕਾਰਤਿਕ ਗਹਿਲੋਤ)',
      privacyNote: 'ਤੁਹਾਡੀਆਂ ਪਰਚੀਆਂ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਖ਼ਾਤੇ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੀਆਂ ਹਨ।',
      emailError: 'ਸਹੀ ਈਮੇਲ ਦਰਜ ਕਰੋ',
      pwdError: 'ਪਾਸਵਰਡ ਘੱਟੋ-ਘੱਟ 6 ਅੱਖਰਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ',
      emailExistsError: 'ਇਹ ਈਮੇਲ ਪਹਿਲਾਂ ਹੀ ਰਜਿਸਟਰ ਹੈ। ਲੌਗਇਨ ਕਰੋ ਜੀ।',
      emailNotFoundError: 'ਖ਼ਾਤਾ ਨਹੀਂ ਮਿਲਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਨਵਾਂ ਖ਼ਾਤਾ ਬਣਾਓ।',
      wrongPwdError: 'ਗ਼ਲਤ ਪਾਸਵਰਡ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜੀ।',
    },
    dash: {
      badge: 'ਨਿੱਜੀ ਡੈਸ਼ਬੋਰਡ',
      title: 'ਮੇਰਾ DawaiMitra',
      subtitleLogged: 'ਤੁਹਾਡੀਆਂ ਸਾਰੀਆਂ ਪਰਚੀਆਂ, ਰੀਮਾਈਂਡਰ ਅਤੇ ਸਿਹਤ ਦੀ ਜਾਣਕਾਰੀ ਇੱਥੇ ਉਪਲਬਧ ਹੈ।',
      subtitleGuest: 'ਪਰਚੀ ਅੱਪਲੋਡ ਕਰਨ ਲਈ ਪਹਿਲਾਂ ਸਾਈਨ-ਇਨ ਕਰੋ ਜੀ।',
      greeting: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ',
      langLabel: 'ਬੋਲੀ:',
      logout: 'ਲੌਗਆਊਟ',
      tabScan: '📷 ਨਵੀਂ ਪਰਚੀ',
      tabMy: '🗂️ ਮੇਰੀਆਂ ਪਰਚੀਆਂ',
      tabReminders: '⏰ ਰੀਮਾਈਂਡਰ',
      tabHistory: '📈 ਸਿਹਤ ਹਿਸਟਰੀ',
      tabAssistant: '🎙️ ਸਹਾਇਕ',
      apiKeyTitle: 'ਕਸਟਮ Gemini API Key (ਵਿਕਲਪਿਕ)',
      apiKeyDesc: 'ਸਰਵਰ ਤੇ AI ਚੱਲ ਰਿਹਾ ਹੈ। ਜੇਕਰ ਆਪਣੀ API Key ਲਗਾਉਣੀ ਹੋਵੇ ਤਾਂ ਇੱਥੇ ਪਾਓ।',
      apiKeyClose: '✕ ਬੰਦ ਕਰੋ',
      apiKeySave: 'ਸੇਵ ਕਰੋ',
      medicalDisclaimer: '⚕️ ਇਹ AI ਸਹਾਇਤਾ ਹੈ, ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਦਾ ਬਦਲ ਨਹੀਂ। ਦਵਾਈ ਬਦਲਣ ਤੋਂ ਪਹਿਲਾਂ ਡਾਕਟਰ ਨੂੰ ਪੁੱਛੋ।',
    },
    scan: {
      boxTitle: 'ਪਰਚੀ ਦੀ ਫ਼ੋਟੋ ਚੁਣੋ ਜਾਂ ਕੈਮਰੇ ਨਾਲ ਖਿੱਚੋ',
      boxDesc: 'JPG, PNG ਫ਼ਾਰਮੈਟ (ਸਾਫ਼ ਫ਼ੋਟੋ ਹੋਣ ਤੇ ਲਿਖਾਈ ਤੁਰੰਤ ਪੜ੍ਹੀ ਜਾਵੇਗੀ)',
      chooseFileBtn: 'ਫ਼ਾਈਲ / ਕੈਮਰੇ \'ਚੋਂ ਚੁਣੋ',
      removeBtn: 'ਹਟਾਓ',
      scanBtn: '🔎 ਪਰਚੀ ਸਮਝਾਓ (AI ਵਿਸ਼ਲੇਸ਼ਣ)',
      scanningText: '⏳ ਪਰਚੀ ਪੜ੍ਹੀ ਜਾ ਰਹੀ ਹੈ ਜੀ…',
      sampleHeader: 'ਜਾਂਚਣ ਲਈ ਨਮੂਨਾ ਪਰਚੀ ਚੁਣੋ (1-ਕਲਿੱਕ ਟੈਸਟ)',
      sample1Title: '📋 ਨਮੂਨਾ 1: ਬੁਖ਼ਾਰ ਅਤੇ ਖੰਘ ਦੀ ਪਰਚੀ',
      sample1Badge: '4 ਦਵਾਈਆਂ',
      sample1Desc: 'Paracetamol 650mg, Pan-40, Ascoril Cough Syrup, Azithromycin',
      sample2Title: '📋 ਨਮੂਨਾ 2: ਬੀਪੀ ਅਤੇ ਸ਼ੂਗਰ ਦੀ ਦਵਾਈ',
      sample2Badge: '2 ਦਵਾਈਆਂ',
      sample2Desc: 'Telmisartan 40mg (High BP), Metformin 500mg SR (ਸ਼ੂਗਰ)',
      selectPhotoFirst: 'ਪਹਿਲਾਂ ਪਰਚੀ ਦੀ ਫ਼ੋਟੋ ਚੁਣੋ ਜੀ',
      scanError: 'ਪਰਚੀ ਪੜ੍ਹੀ ਨਹੀਂ ਜਾ ਸਕੀ। ਸਾਫ਼ ਫ਼ੋਟੋ ਨਾਲ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜੀ।',
      backToScan: '← ਵਾਪਸ ਨਵੀਂ ਪਰਚੀ ਤੇ ਜਾਓ',
      savedRxDetail: 'ਸੇਵ ਪਰਚੀ ਦਾ ਵੇਰਵਾ',
    },
    rxCard: {
      rxHeader: 'ਡਾਕਟਰ ਦੀ ਪਰਚੀ',
      medsCountSuffix: 'ਦਵਾਈਆਂ ਮਿਲੀਆਂ',
      listenAllBtn: '🔊 ਪੂਰੀ ਪਰਚੀ ਸੁਣੋ',
      stopAudioBtn: 'ਆਵਾਜ਼ ਰੋਕੋ',
      summaryTitle: 'ਸੰਖੇਪ (Prescription Summary):',
      medsSectionTitle: 'ਦਵਾਈਆਂ ਦਾ ਪੂਰਾ ਵੇਰਵਾ',
      listenMedBtn: 'ਸੁਣੋ',
      stopMedBtn: 'ਰੋਕੋ',
      infoLabel: 'ਦਵਾਈ ਦੀ ਪੂਰੀ ਜਾਣਕਾਰੀ',
      usesLabel: 'ਦਵਾਈ ਦੇ ਉਪਯੋਗ',
      dosageLabel: 'ਖੁਰਾਕ ਅਤੇ ਸਮਾਂ',
      sideEffectsLabel: 'ਦਵਾਈ ਦੇ ਮਾੜੇ ਪ੍ਰਭਾਵ (Side Effects)',
      interactionsLabel: 'ਦਵਾਈਆਂ ਦੇ ਆਪਸੀ ਪਰਹੇਜ਼ (Interactions)',
      foodInteractionLabel: 'ਖਾਣ-ਪੀਣ ਨਾਲ (Food Interaction)',
      drugInteractionLabel: 'ਦੂਜੀਆਂ ਦਵਾਈਆਂ ਨਾਲ (Medicine Interaction)',
      purposeLabel: 'ਕਿਸ ਕੰਮ ਲਈ:',
      safeCommon: 'ਆਮ ਤੌਰ \'ਤੇ ਠੀਕ',
      avoidFoodLabel: '🚫 ਨਾਲ ਕੀ ਨਹੀਂ ਖਾਣਾ:',
      avoidDrugsLabel: '⚠️ ਦੂਜੀਆਂ ਦਵਾਈਆਂ:',
      daysCourse: 'ਦਿਨਾਂ ਦਾ ਕੋਰਸ',
      warningsTitle: 'ਜ਼ਰੂਰੀ ਸਾਵਧਾਨੀਆਂ ਤੇ ਪਰਹੇਜ਼ (Warnings)',
      saveRxBtn: '💾 ਸੇਵ ਕਰੋ ਤੇ ਰੀਮਾਈਂਡਰ ਲਗਾਓ',
      savedRxBtn: '✅ ਸੇਵ ਹੋ ਗਈ ਹੈ',
    },
    my: {
      title: 'ਸੇਵ ਕੀਤੀਆਂ ਪਰਚੀਆਂ',
      addNewBtn: 'ਨਵੀਂ ਜੋੜੋ',
      emptyTitle: 'ਅਜੇ ਕੋਈ ਪਰਚੀ ਸੇਵ ਨਹੀਂ ਹੈ',
      emptyDesc: 'ਆਪਣੀ ਪਰਚੀ ਦੀ ਫ਼ੋਟੋ ਖਿੱਚੋ ਜਾਂ ਨਮੂਨੇ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ ਜੀ।',
      startAddingBtn: 'ਨਵੀਂ ਪਰਚੀ ਜੋੜੋ',
      deleteConfirm: 'ਕੀ ਤੁਸੀਂ ਵਾਕਈ ਇਹ ਪਰਚੀ ਹਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?',
      viewBtn: 'ਵੇਖੋ',
    },
    rem: {
      title: 'ਸਮਾਰਟ ਦਵਾਈ ਰੀਮਾਈਂਡਰ',
      subtitle: 'ਪੇਜ ਖੁੱਲ੍ਹਾ ਰਹਿਣ ਤੇ ਸਮਾਂ ਹੋਣ ਤੇ ਖ਼ੁਦ ਆਵਾਜ਼ ਮਾਰ ਕੇ ਯਾਦ ਕਰਵਾਏਗਾ।',
      testChimeBtn: '🔔 ਆਵਾਜ਼ ਟੈਸਟ ਕਰੋ',
      filterToday: 'ਅੱਜ ਦੀਆਂ',
      filterAll: 'ਸਾਰੀਆਂ',
      emptyToday: 'ਅੱਜ ਲਈ ਕੋਈ ਖ਼ੁਰਾਕ ਬਾਕੀ ਨਹੀਂ ਹੈ',
      emptyAll: 'ਕੋਈ ਸਰਗਰਮ ਰੀਮਾਈਂਡਰ ਨਹੀਂ',
      emptyDesc: "'ਨਵੀਂ ਪਰਚੀ' ਵਿੱਚ ਜਾ ਕੇ ਸੇਵ ਕਰਨ ਤੇ ਇੱਥੇ ਰੀਮਾਈਂਡਰ ਜੁੜ ਜਾਣਗੇ।",
      todayBadge: 'ਅੱਜ',
      dateLabel: 'ਤਾਰੀਖ਼:',
      takenTooltip: 'ਦਵਾਈ ਲੈ ਲਈ ਗਈ ਹੈ',
      markTakenTooltip: 'ਜੇਕਰ ਦਵਾਈ ਲੈ ਲਈ ਹੈ ਤਾਂ ਟਿੱਕ ਕਰੋ',
      testAlertPrefix: '🔔 ਟੈਸਟ ਅਲਰਟ:',
      timeChimeAlert: 'ਦਵਾਈ ਦਾ ਸਮਾਂ ਹੋ ਗਿਆ ਹੈ ਜੀ।',
      timeLabelMorning: 'ਸਵੇਰ',
      timeLabelAfternoon: 'ਦੁਪਹਿਰ',
      timeLabelNight: 'ਰਾਤ',
    },
    hist: {
      title: 'ਸਿਹਤ ਹਿਸਟਰੀ ਅਤੇ ਦਵਾਈਆਂ ਦੀ ਤੁਲਨਾ',
      prescriptionsCountSuffix: 'ਪਰਚੀਆਂ ਦੀ AI ਸਮੀਖਿਆ',
      listenReportBtn: '🔊 ਪੂਰੀ ਰਿਪੋਰਟ ਸੁਣੋ',
      reloadBtn: 'ਦੁਬਾਰਾ ਜਾਂਚੋ',
      analyzingTitle: 'ਪੁਰਾਣੀਆਂ ਅਤੇ ਨਵੀਆਂ ਪਰਚੀਆਂ ਦੀ ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ…',
      analyzingDesc: 'ਦਵਾਈਆਂ ਦੇ ਬਦਲਾਅ ਅਤੇ ਸਿਹਤ ਦੇ ਸੁਧਾਰ ਦੀ ਸਮੀਖਿਆ',
      emptyTitle: 'ਸਿਹਤ ਹਿਸਟਰੀ ਲਈ ਪਰਚੀਆਂ ਸੇਵ ਕਰੋ',
      emptyDesc: 'ਜਿਵੇਂ ਹੀ ਤੁਸੀਂ ਪਰਚੀ ਸੇਵ ਕਰੋਗੇ, DawaiMitra ਸਿਹਤ ਦਾ ਪੂਰਾ ਹਾਲ ਸਮਝਾਏਗਾ।',
      overviewTitle: 'ਸਮੁੱਚੀ ਸਿਹਤ ਸਥਿਤੀ',
      changesTitle: '🔄 ਮੁੱਖ ਬਦਲਾਅ (Treatment Changes)',
      adviceTitle: '💡 ਜ਼ਰੂਰੀ ਸਿਹਤ ਸਲਾਹ (Safety Advice)',
      historyDisclaimer: 'ਇਹ ਵਿਸ਼ਲੇਸ਼ਣ ਸਿਰਫ਼ ਜਾਣਕਾਰੀ ਲਈ ਹੈ। ਦਵਾਈ ਬਦਲਣ ਤੋਂ ਪਹਿਲਾਂ ਡਾਕਟਰ ਨੂੰ ਜ਼ਰੂਰ ਮਿਲੋ।',
      fallbackOverview: 'ਤੁਹਾਡੀਆਂ ਪਰਚੀਆਂ ਸੁਰੱਖਿਅਤ ਹਨ ਅਤੇ ਸਿਹਤ ਵਿੱਚ ਸੁਧਾਰ ਹੋ ਰਿਹਾ ਹੈ।',
      fallbackChange1: 'ਨਵੀਆਂ ਦਵਾਈਆਂ ਸਮੇਂ ਸਿਰ ਲਈਆਂ ਜਾ ਰਹੀਆਂ ਹਨ।',
      fallbackChange2: 'ਕੋਰਸ ਪੂਰਾ ਹੋਣ ਤੇ ਡਾਕਟਰ ਨੂੰ ਦੁਬਾਰਾ ਦਿਖਾਓ ਜੀ।',
      fallbackAdvice1: 'ਦਵਾਈ ਹਮੇਸ਼ਾ ਕੋਸੇ ਪਾਣੀ ਨਾਲ ਲਵੋ।',
      fallbackAdvice2: 'ਬਚੀ ਦਵਾਈ ਬਿਨਾਂ ਪੁੱਛੇ ਦੁਬਾਰਾ ਨਾ ਵਰਤੋ।',
      fallbackAdvice3: 'ਬੀਪੀ ਅਤੇ ਸ਼ੂਗਰ ਦੀ ਜਾਂਚ ਸਮੇਂ-ਸਮੇਂ ਤੇ ਕਰਵਾਉਂਦੇ ਰਹੋ।',
    },
    asst: {
      title: 'DawaiMitra ਆਵਾਜ਼ ਸਹਾਇਕ',
      subtitle: 'ਦਵਾਈਆਂ ਬਾਰੇ ਸਵਾਲ ਪੁੱਛੋ • ਆਵਾਜ਼ ਵਿੱਚ ਸੁਣੋ',
      welcomeMessage: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ! ਮੈਂ DawaiMitra ਹਾਂ। ਦਵਾਈਆਂ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ – ਖ਼ੁਰਾਕ, ਸਮਾਂ ਜਾਂ ਪਰਹੇਜ਼। ਬੋਲਣ ਲਈ 🎤 ਮਾਈਕ ਦਬਾਓ।',
      listenAgain: 'ਦੁਬਾਰਾ ਸੁਣੋ',
      thinking: 'DawaiMitra ਜਵਾਬ ਸੋਚ ਰਿਹਾ ਹੈ…',
      suggestionsLabel: 'ਸੁਝਾਅ:',
      sug1: 'ਕੀ ਪੈਰਾਸੀਟਾਮੋਲ ਖ਼ਾਲੀ ਪੇਟ ਲੈ ਸਕਦੇ ਹਾਂ?',
      sug2: 'ਮੇਰੀਆਂ ਦਵਾਈਆਂ ਵਿੱਚ ਕੀ ਪਰਹੇਜ਼ ਰੱਖਣਾ ਹੈ?',
      sug3: 'ਜੇਕਰ ਕੋਈ ਖ਼ੁਰਾਕ ਭੁੱਲ ਜਾਵਾਂ ਤਾਂ ਕੀ ਕਰਾਂ?',
      sug4: 'ਐਂਟੀਬਾਇਓਟਿਕ ਦਾ ਪੂਰਾ ਕੋਰਸ ਕਰਨਾ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹੈ?',
      inputPlaceholder: 'ਦਵਾਈ ਬਾਰੇ ਪੁੱਛੋ ਜਾਂ 🎤 ਦਬਾ ਕੇ ਬੋਲੋ…',
      sendBtn: 'ਭੇਜੋ',
      micUnsupported: 'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਮਾਈਕ ਸਪੋਰਟ ਨਹੀਂ ਹੈ। ਲਿਖ ਕੇ ਪੁੱਛੋ ਜੀ।',
      micActiveTitle: 'ਮਾਈਕ ਬੰਦ ਕਰੋ',
      micInactiveTitle: 'ਬੋਲ ਕੇ ਪੁੱਛੋ',
      fallbackReply: 'ਮਾਫ਼ ਕਰਨਾ ਜੀ। ਦਵਾਈਆਂ ਸਮੇਂ ਸਿਰ ਲਵੋ ਅਤੇ ਗੰਭੀਰ ਲੱਛਣ ਹੋਣ ਤੇ ਤੁਰੰਤ ਡਾਕਟਰ ਨੂੰ ਦਿਖਾਓ।',
    },
    schemes: {
      badge: 'ਲੋਕ ਭਲਾਈ ਸਿਹਤ ਪੋਰਟਲ',
      title: 'ਸਰਕਾਰੀ ਸਿਹਤ ਯੋਜਨਾਵਾਂ',
      subtitle: 'ਕੇਂਦਰ, ਪੰਜਾਬ ਅਤੇ ਰਾਜਸਥਾਨ ਦੀਆਂ ਸਰਕਾਰੀ ਸਿਹਤ ਸੇਵਾਵਾਂ – ਸਿੱਧਾ ਪੋਰਟਲ ਖੋਲ੍ਹੋ।',
      openPortal: 'ਪੋਰਟਲ ਖੋਲ੍ਹੋ',
      centralGovt: 'ਕੇਂਦਰ ਸਰਕਾਰ',
      rajGovt: 'ਰਾਜ ਸਰਕਾਰ',
      jodhpurDistrict: 'ਜੋਧਪੁਰ',
    },
    footer: {
      tagline: 'ਹਰ ਘਰ ਅਤੇ ਬਜ਼ੁਰਗ ਲਈ ਆਸਾਨ ਤੇ ਭਰੋਸੇਯੋਗ ਪਰਚੀ ਪਾਠਕ।',
      subtagline: 'ਸਮਰਪਿਤ ਲੋਕ-ਸਿਹਤ ਸੇਵਾ',
      disclaimerTitle: 'ਮੈਡੀਕਲ ਡਿਸਕਲੇਮਰ:',
      disclaimerText: 'ਇਹ AI ਸਹਾਇਤਾ ਮਰੀਜ਼ਾਂ ਦੀ ਜਾਣਕਾਰੀ ਲਈ ਹੈ। ਇਹ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ।',
      copyright: '© 2026 DawaiMitra. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।',
      madeWith: 'ਸਮਰਪਿਤ ਸਿਹਤ ਮਿਸ਼ਨ',
    },
  },
};
