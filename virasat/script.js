const translations = {
  en: {
    logo: "INDIA", navHome: "Home", navAbout: "About", navGallery: "Gallery", navFeatures: "Features", heroTitle: "VIRASAT",
    introText: "A vibrant tapestry of ancient stone, sweeping landscapes, and unbroken living traditions shaping a breathtaking cultural journey across the Indian subcontinent.",
    tag1: "Ancient Heritage", tag2: "Living Arts", tag3: "Spiritual Journey",
    panel1Title: "Stones that speak.", panel1Desc: "India's monuments are architectural compasses bridging millennia of art, astronomy, and dynastic history.",
    panel2Title: "The living pulse.", panel2Desc: "Culture here is not just observed in museums; it is experienced in every street, festival, and artisan's craft.",
    card1Kicker: "Timeless Architecture", card1Title: "Temples of Hampi", card1Desc: "Stone chariots and monolithic ruins echoing the glory of the Vijayanagara Empire.",
    card2Kicker: "Spiritual Heart", card2Title: "Varanasi Ghats", card2Desc: "The world's oldest living city, where ancient rituals meet the sacred Ganges.",
    card3Kicker: "Royal Legacy", card3Title: "Rajputana Forts", card3Desc: "Impregnable hill forts in Rajasthan featuring intricate palaces and sweeping views.",
    card4Kicker: "Living Arts", card4Title: "Classical Traditions", card4Desc: "From Bharatanatyam to ancient copper craft, a culture that lives and breathes today.",
    card5Kicker: "Natural Heritage", card5Title: "Kerala Backwaters", card5Desc: "An interconnected network of ancient trade routes and serene ecological harmony."
  },
  hi: {
    logo: "भारत", navHome: "मुख्य पृष्ठ", navAbout: "हमारे बारे में", navGallery: "गैलरी", navFeatures: "विशेषताएं", heroTitle: "विरासत",
    introText: "प्राचीन पत्थरों, विस्तृत परिदृश्यों और अखंड जीवंत परंपराओं की एक जीवंत टेपेस्ट्री, जो भारतीय उपमहाद्वीप में एक लुभावनी सांस्कृतिक यात्रा को आकार देती है।",
    tag1: "प्राचीन विरासत", tag2: "जीवित कलाएं", tag3: "आध्यात्मिक यात्रा",
    panel1Title: "पत्थर जो बोलते हैं।", panel1Desc: "भारत के स्मारक स्थापत्य कंपास हैं जो कला, खगोल विज्ञान और राजवंशीय इतिहास की सहस्राब्दी को जोड़ते हैं।",
    panel2Title: "जीवंत स्पंदन।", panel2Desc: "यहाँ संस्कृति केवल संग्रहालयों में नहीं देखी जाती; यह हर सड़क, त्योहार और कारीगर के शिल्प में अनुभव की जाती है।",
    card1Kicker: "कालातीत वास्तुकला", card1Title: "हम्पी के मंदिर", card1Desc: "विजयनगर साम्राज्य की महिमा को दर्शाते पत्थर के रथ और अखंड खंडहर।",
    card2Kicker: "आध्यात्मिक हृदय", card2Title: "वाराणसी के घाट", card2Desc: "दुनिया का सबसे पुराना जीवित शहर, जहां प्राचीन अनुष्ठान पवित्र गंगा से मिलते हैं।",
    card3Kicker: "शाही विरासत", card3Title: "राजपूताना किले", card3Desc: "राजस्थान के अभेद्य पहाड़ी किले जिनमें जटिल महल और मनोरम दृश्य हैं।",
    card4Kicker: "जीवित कलाएं", card4Title: "शास्त्रीय परंपराएं", card4Desc: "भरतनाट्यम से लेकर प्राचीन तांबे के शिल्प तक, एक ऐसी संस्कृति जो आज भी जीवित है और सांस लेती है।",
    card5Kicker: "प्राकृतिक विरासत", card5Title: "केरल बैकवाटर्स", card5Desc: "प्राचीन व्यापार मार्गों और शांत पारिस्थितिक सद्भाव का एक परस्पर नेटवर्क।"
  },
  kn: {
    logo: "ಭಾರತ", navHome: "ಮುಖಪುಟ", navAbout: "ನಮ್ಮ ಬಗ್ಗೆ", navGallery: "ಗ್ಯಾಲರಿ", navFeatures: "ವೈಶಿಷ್ಟ್ಯಗಳು", heroTitle: "ವಿರಾಸತ್",
    introText: "ಭಾರತೀಯ ಉಪಖಂಡದಾದ್ಯಂತ ಉಸಿರುಕಟ್ಟುವ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರಯಾಣವನ್ನು ರೂಪಿಸುವ ಪ್ರಾಚೀನ ಕಲ್ಲುಗಳು, ವಿಸ್ತಾರವಾದ ಭೂದೃಶ್ಯಗಳು ಮತ್ತು ಮುರಿಯದ ಜೀವಂತ ಸಂಪ್ರದಾಯಗಳ ರೋಮಾಂಚಕ ವಸ್ತ್ರ.",
    tag1: "ಪ್ರಾಚೀನ ಪರಂಪರೆ", tag2: "ಜೀವಂತ ಕಲೆಗಳು", tag3: "ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಯಾಣ",
    panel1Title: "ಮಾತನಾಡುವ ಕಲ್ಲುಗಳು.", panel1Desc: "ಭಾರತದ ಸ್ಮಾರಕಗಳು ಕಲೆ, ಖಗೋಳಶಾಸ್ತ್ರ ಮತ್ತು ರಾಜವಂಶದ ಇತಿಹಾಸವನ್ನು ಬೆಸೆಯುವ ವಾಸ್ತುಶಿಲ್ಪದ ದಿಕ್ಸೂಚಿಗಳಾಗಿವೆ.",
    panel2Title: "ಜೀವಂತ ನಾಡಿ.", panel2Desc: "ಇಲ್ಲಿನ ಸಂಸ್ಕೃತಿಯನ್ನು ವಸ್ತುಸಂಗ್ರಹಾಲಯಗಳಲ್ಲಿ ಮಾತ್ರ ನೋಡಲಾಗುವುದಿಲ್ಲ; ಪ್ರತಿಯೊಂದು ಬೀದಿ, ಹಬ್ಬ ಮತ್ತು ಕುಶಲಕರ್ಮಿಗಳ ಕಲೆಯಲ್ಲಿ ಇದನ್ನು ಅನುಭವಿಸಲಾಗುತ್ತದೆ.",
    card1Kicker: "ಕಾಲಾತೀತ ವಾಸ್ತುಶಿಲ್ಪ", card1Title: "ಹಂಪಿಯ ದೇವಾಲಯಗಳು", card1Desc: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ವೈಭವವನ್ನು ಪ್ರತಿಬಿಂಬಿಸುವ ಕಲ್ಲಿನ ರಥಗಳು ಮತ್ತು ಏಕಶಿಲಾ ಅವಶೇಷಗಳು.",
    card2Kicker: "ಆಧ್ಯಾತ್ಮಿಕ ಹೃದಯ", card2Title: "ವಾರಣಾಸಿ ಘಾಟ್ಗಳು", card2Desc: "ಪ್ರಾಚೀನ ಆಚರಣೆಗಳು ಪವಿತ್ರ ಗಂಗೆಯನ್ನು ಸಂಧಿಸುವ ವಿಶ್ವದ ಅತ್ಯಂತ ಹಳೆಯ ಜೀವಂತ ನಗರ.",
    card3Kicker: "ರಾಜ ಪರಂಪರೆ", card3Title: "ರಜಪೂತಾನ ಕೋಟೆಗಳು", card3Desc: "ಸಂಕೀರ್ಣವಾದ ಅರಮನೆಗಳು ಮತ್ತು ವಿಸ್ತಾರವಾದ ನೋಟಗಳನ್ನು ಒಳಗೊಂಡಿರುವ ರಾಜಸ್ಥಾನದ ಭೇದಿಸಲಾಗದ ಬೆಟ್ಟದ ಕೋಟೆಗಳು.",
    card4Kicker: "ಜೀವಂತ ಕಲೆಗಳು", card4Title: "ಶಾಸ್ತ್ರೀಯ ಸಂಪ್ರದಾಯಗಳು", card4Desc: "ಭರತನಾಟ್ಯದಿಂದ ಪ್ರಾಚೀನ ತಾಮ್ರದ ಕರಕುಶಲತೆಯವರೆಗೆ, ಇಂದಿಗೂ ಜೀವಿಸುವ ಮತ್ತು ಉಸಿರಾಡುವ ಸಂಸ್ಕೃತಿ.",
    card5Kicker: "ನೈಸರ್ಗಿಕ ಪರಂಪರೆ", card5Title: "ಕೇರಳ ಬ್ಯಾಕ್ವಾಟರ್ಸ್", card5Desc: "ಪ್ರಾಚೀನ ವ್ಯಾಪಾರ ಮಾರ್ಗಗಳು ಮತ್ತು ಪ್ರಶಾಂತ ಪರಿಸರ ಸಾಮರಸ್ಯದ ಪರಸ್ಪರ ಜಾಲ."
  },
  pa: {
    logo: "ਭਾਰਤ", navHome: "ਮੁੱਖ ਪੰਨਾ", navAbout: "ਸਾਡੇ ਬਾਰੇ", navGallery: "ਗੈਲਰੀ", navFeatures: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ", heroTitle: "ਵਿਰਾਸਤ",
    introText: "ਪ੍ਰਾਚੀਨ ਪੱਥਰਾਂ, ਵਿਸ਼ਾਲ ਦ੍ਰਿਸ਼ਾਂ, ਅਤੇ ਅਟੁੱਟ ਜੀਵਤ ਪਰੰਪਰਾਵਾਂ ਦੀ ਇੱਕ ਜੀਵੰਤ ਟੇਪਸਟਰੀ ਜੋ ਭਾਰਤੀ ਉਪਮਹਾਂਦੀਪ ਵਿੱਚ ਇੱਕ ਸ਼ਾਨਦਾਰ ਸੱਭਿਆਚਾਰਕ ਯਾਤਰਾ ਨੂੰ ਰੂਪ ਦਿੰਦੀ ਹੈ।",
    tag1: "ਪ੍ਰਾਚੀਨ ਵਿਰਾਸਤ", tag2: "ਜੀਵਤ ਕਲਾਵਾਂ", tag3: "ਅਧਿਆਤਮਿਕ ਯਾਤਰਾ",
    panel1Title: "ਪੱਥਰ ਜੋ ਬੋਲਦੇ ਹਨ।", panel1Desc: "ਭਾਰਤ ਦੀਆਂ ਯਾਦਗਾਰਾਂ ਕਲਾ, ਖਗੋਲ ਵਿਗਿਆਨ ਅਤੇ ਰਾਜਵੰਸ਼ ਦੇ ਇਤਿਹਾਸ ਦੇ ਹਜ਼ਾਰਾਂ ਸਾਲਾਂ ਨੂੰ ਜੋੜਨ ਵਾਲੇ ਆਰਕੀਟੈਕਚਰਲ ਕੰਪਾਸ ਹਨ।",
    panel2Title: "ਜੀਵਤ ਨਬਜ਼।", panel2Desc: "ਇੱਥੇ ਸੱਭਿਆਚਾਰ ਸਿਰਫ਼ ਅਜਾਇਬ ਘਰਾਂ ਵਿੱਚ ਨਹੀਂ ਦੇਖਿਆ ਜਾਂਦਾ; ਇਹ ਹਰ ਗਲੀ, ਤਿਉਹਾਰ ਅਤੇ ਕਾਰੀਗਰਾਂ ਦੀ ਕਲਾ ਵਿੱਚ ਮਹਿਸੂਸ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",
    card1Kicker: "ਸਦੀਵੀ ਆਰਕੀਟੈਕਚਰ", card1Title: "ਹੰਪੀ ਦੇ ਮੰਦਰ", card1Desc: "ਵਿਜੇਨਗਰ ਸਾਮਰਾਜ ਦੀ ਸ਼ਾਨ ਨੂੰ ਦਰਸਾਉਂਦੇ ਪੱਥਰ ਦੇ ਰੱਥ ਅਤੇ ਅਖੰਡ ਖੰਡਰ।",
    card2Kicker: "ਅਧਿਆਤਮਿਕ ਦਿਲ", card2Title: "ਵਾਰਾਣਸੀ ਦੇ ਘਾਟ", card2Desc: "ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਪੁਰਾਣਾ ਜੀਵਤ ਸ਼ਹਿਰ, ਜਿੱਥੇ ਪ੍ਰਾਚੀਨ ਰੀਤੀ-ਰਿਵਾਜ ਪਵਿੱਤਰ ਗੰਗਾ ਨੂੰ ਮਿਲਦੇ ਹਨ।",
    card3Kicker: "ਸ਼ਾਹੀ ਵਿਰਾਸਤ", card3Title: "ਰਾਜਪੂਤਾਨਾ ਕਿਲੇ", card3Desc: "ਰਾਜਸਥਾਨ ਦੇ ਅਭੇਦ ਪਹਾੜੀ ਕਿਲੇ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਗੁੰਝਲਦਾਰ ਮਹਿਲ ਅਤੇ ਸ਼ਾਨਦਾਰ ਦ੍ਰਿਸ਼ ਹਨ।",
    card4Kicker: "ਜੀਵਤ ਕਲਾਵਾਂ", card4Title: "ਕਲਾਸੀਕਲ ਪਰੰਪਰਾਵਾਂ", card4Desc: "ਭਰਤਨਾਟਿਅਮ ਤੋਂ ਲੈ ਕੇ ਪ੍ਰਾਚੀਨ ਤਾਂਬੇ ਦੀ ਕਲਾ ਤੱਕ, ਇੱਕ ਅਜਿਹਾ ਸੱਭਿਆਚਾਰ ਜੋ ਅੱਜ ਵੀ ਜਿਉਂਦਾ ਹੈ ਅਤੇ ਸਾਹ ਲੈਂਦਾ ਹੈ।",
    card5Kicker: "ਕੁਦਰਤੀ ਵਿਰਾਸਤ", card5Title: "ਕੇਰਲ ਬੈਕਵਾਟਰਸ", card5Desc: "ਪ੍ਰਾਚੀਨ ਵਪਾਰਕ ਮਾਰਗਾਂ ਅਤੇ ਸ਼ਾਂਤ ਵਾਤਾਵਰਣਕ ਸਦਭਾਵਨਾ ਦਾ ਆਪਸ ਵਿੱਚ ਜੁੜਿਆ ਨੈਟਵਰਕ।"
  },
  hr: {
    logo: "भारत", navHome: "मुख्य पृष्ठ", navAbout: "म्हारै बारे म", navGallery: "गैलरी", navFeatures: "खासियत", heroTitle: "विरासत",
    introText: "पुराणे पत्थरां, चौड़े नज़ारे, अर कदे ना टूटन आली जीवंत परंपराओं का एक सुथरा ढांचा, जो भारतीय उपमहाद्वीप में एक गज़ब की सांस्कृतिक यात्रा नै आकार दे सै।",
    tag1: "पुराणी विरासत", tag2: "जीवित कला", tag3: "आध्यात्मिक यात्रा",
    panel1Title: "पत्थर जो बोलैं सैं।", panel1Desc: "भारत के स्मारक वास्तुकला के कंपास सैं जो कला, खगोल विज्ञान अर राजवंशीय इतिहास के हज़ारों सालां नै जोड़ैं सैं।",
    panel2Title: "जीवंत धड़कन।", panel2Desc: "उरै संस्कृति खाली म्यूज़ियम में कोन्या देखी जाती; या हर गली, त्योहार अर कारीगर की कला में महसूस करी जावै सै।",
    card1Kicker: "सदाबहार वास्तुकला", card1Title: "हम्पी के मंदिर", card1Desc: "विजयनगर साम्राज्य की शान नै दिखांदे पत्थर के रथ अर अखंड खंडहर।",
    card2Kicker: "आध्यात्मिक दिल", card2Title: "वाराणसी के घाट", card2Desc: "दुनिया का सबतै पुराणा जीवित शहर, जड़ै पुराणे रीति-रिवाज़ पवित्र गंगा तै मिलैं सैं।",
    card3Kicker: "शाही विरासत", card3Title: "राजपूताना किले", card3Desc: "राजस्थान के ना टूटन आले पहाड़ी किले जिन्मै सुथरे महल अर गज़ब के नज़ारे सैं।",
    card4Kicker: "जीवित कला", card4Title: "शास्त्रीय परंपराएं", card4Desc: "भरतनाट्यम तै लेकै पुराणे तांबे के शिल्प तक, एक इसी संस्कृति जो आज भी ज़िंदा सै अर सांस लेवै सै।",
    card5Kicker: "प्राकृतिक विरासत", card5Title: "केरल बैकवाटर्स", card5Desc: "पुराणे व्यापार रास्तों अर शांत पर्यावरण का आपस में जुड़्या होया नेटवर्क।"
  }
};

function switchLanguage(langCode) {
  document.getElementById('current-lang').innerText = langCode.toUpperCase();
  const dict = translations[langCode];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key]) {
      el.innerText = dict[key];
    }
  });
}

window.addEventListener("load", () => {
  const loader = document.getElementById("app-loading-container");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("is-hidden");
    }, 1500); // Increased to 1500ms so it is definitely noticeable
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.language-menu button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      switchLanguage(e.target.getAttribute('data-lang'));
    });
  });

  const root = document.documentElement;
  const cinemaScroll = document.querySelector(".cinema-scroll");
  const sightsTrack = document.querySelector(".sights-track");
  const sightsControls = document.querySelector(".sights-controls");
  const sightPrev = document.querySelector(".sight-prev");
  const sightNext = document.querySelector(".sight-next");
  const originalSightCards = Array.from(document.querySelectorAll(".sight-card"));
  
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

  let targetMouseX = 0, targetMouseY = 0;
  let mouseX = 0, mouseY = 0;
  let targetScroll = 0, smoothScroll = 0;
  let initialized = false;
  let rafPending = false;
  
  let sightCards = [];
  let originalSightCount = originalSightCards.length;
  let activeSight = originalSightCount; 

  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const smoothstep = (e0, e1, v) => { const x = clamp((v - e0) / (e1 - e0)); return x * x * (3 - 2 * x); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const segmentInOut = (s, a, b, c, d) => {
    const enter = smoothstep(a, b, s), exit = smoothstep(c, d, s);
    return { enter, exit, active: enter * (1 - exit) };
  };
  const getScrollDistance = () => clamp(-cinemaScroll.getBoundingClientRect().top, 0, cinemaScroll.offsetHeight - window.innerHeight);

  const update = () => {
    rafPending = false;
    
    targetScroll = getScrollDistance();
    if (!initialized || reduceMotion.matches) { 
      smoothScroll = targetScroll; 
      initialized = true; 
    } else { 
      smoothScroll = lerp(smoothScroll, targetScroll, 0.14); 
    }
    if (Math.abs(smoothScroll - targetScroll) < 0.08) smoothScroll = targetScroll;

    mouseX = lerp(mouseX, targetMouseX, 0.12);
    mouseY = lerp(mouseY, targetMouseY, 0.12);

    const frame2 = segmentInOut(smoothScroll, 560, 900, 1300, 1620);
    const frame3 = segmentInOut(smoothScroll, 1760, 2140, 2540, 2700);
    const progress = clamp(smoothScroll / 2700);
    const introExit = smoothstep(90, 650, smoothScroll);
    const sightsEnterRaw = smoothstep(2760, 3560, smoothScroll);
    const sightsEnter = Math.pow(sightsEnterRaw, 1.55);
    const sightsControlsEnter = smoothstep(3360, 3660, smoothScroll);
    const blurActive = clamp(frame2.active + frame3.active);
    const frame2Opacity = frame2.active * (1 - frame3.enter);
    const splitDrift = Math.pow(frame2.enter, 1.5);
    const panel2Opacity = frame2.active * (1 - frame2.exit);
    const panel3Opacity = frame3.active * (1 - frame3.exit);
    const backScale = 0.76 + progress * 0.2 + frame2.enter * 0.18 + frame3.enter * 0.16;
    const sharedHeroY = progress * -74;
    const sharedHeroScale = progress * 0.23;
    const sightsScreenTop = Math.min(220, Math.max(112, window.innerHeight * 0.19)) - 50;
    const sightsParentTop = window.innerHeight - (window.innerHeight - sightsScreenTop) / backScale;

    root.style.setProperty("--mx", reduceMotion.matches ? 0 : mouseX.toFixed(4));
    root.style.setProperty("--my", reduceMotion.matches ? 0 : mouseY.toFixed(4));

    root.style.setProperty("--back-opacity", (1 - frame2.active * 0.06).toFixed(4));
    root.style.setProperty("--back-x", `${(mouseX * -12).toFixed(4)}px`);
    root.style.setProperty("--back-y", `${(mouseY * -4).toFixed(4)}px`);
    root.style.setProperty("--back-scale", backScale.toFixed(4));
    root.style.setProperty("--four-y", `${(10 + progress * 10).toFixed(4)}vh`);
    root.style.setProperty("--four-scale", (0.78 + progress * 0.16).toFixed(4));
    root.style.setProperty("--bazaar-y", `${(20 - progress * 8).toFixed(4)}vh`);
    root.style.setProperty("--blur-px", `${(blurActive * 14).toFixed(4)}px`);
    root.style.setProperty("--back-brightness", (1 - blurActive * 0.255).toFixed(4));
    root.style.setProperty("--bazaar-blur-px", `${(frame2.active * 14).toFixed(4)}px`);
    root.style.setProperty("--bazaar-brightness", (1 - frame2.active * 0.255 - frame3.active * 0.06).toFixed(4));
    root.style.setProperty("--bazaar-saturation", (1 + frame3.active * 0.18).toFixed(4));
    root.style.setProperty("--shade-opacity", "1");
    root.style.setProperty("--shade-z", frame2.active > 0.02 ? "2" : "0");
    root.style.setProperty("--shade-top-alpha", (blurActive * 0.465).toFixed(4));
    root.style.setProperty("--shade-mid-alpha", (blurActive * 0.42).toFixed(4));
    root.style.setProperty("--shade-bottom-alpha", (blurActive * 0.51).toFixed(4));

    root.style.setProperty("--title-y", `${(introExit * -210).toFixed(4)}px`);
    root.style.setProperty("--title-scale", (1 - introExit * 0.08).toFixed(4));
    root.style.setProperty("--title-opacity", (1 - introExit).toFixed(4));

    root.style.setProperty("--monument-x", `calc(-50% + ${(mouseX * 18).toFixed(4)}px)`);
    root.style.setProperty("--monument-y", `${(mouseY * 8 + sharedHeroY - frame2.exit * 760).toFixed(4)}px`);
    root.style.setProperty("--monument-bottom", `${(5 - frame2.enter * 13).toFixed(4)}vh`);
    root.style.setProperty("--monument-width", `${(67.2 + frame2.enter * 37.8).toFixed(4)}vw`);
    root.style.setProperty("--monument-scale", (1.02 + sharedHeroScale + frame2.exit * 0.46).toFixed(4));

    root.style.setProperty("--split-left-x", `calc(-50% + ${(-splitDrift * 46).toFixed(4)}vw + ${(mouseX * 22).toFixed(4)}px)`);
    root.style.setProperty("--split-left-y", `${(mouseY * 10 + sharedHeroY - splitDrift * 180).toFixed(4)}px`);
    root.style.setProperty("--split-left-scale", (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));
    root.style.setProperty("--split-right-x", `calc(-50% + ${(splitDrift * 46).toFixed(4)}vw + ${(mouseX * 22).toFixed(4)}px)`);
    root.style.setProperty("--split-right-y", `${(mouseY * 10 + sharedHeroY - splitDrift * 180).toFixed(4)}px`);
    root.style.setProperty("--split-right-scale", (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));

    root.style.setProperty("--frame2-opacity", frame2Opacity.toFixed(4));
    root.style.setProperty("--frame2-x", `calc(-50% + ${(mouseX * 10).toFixed(4)}px)`);
    root.style.setProperty("--frame2-y", `calc(-50% + ${(mouseY * 8 - frame2.exit * 150).toFixed(4)}px)`);
    root.style.setProperty("--frame2-scale", (1.06 + frame2.enter * 0.08 + frame2.exit * 0.08).toFixed(4));

    root.style.setProperty("--intro-copy-y", `${(introExit * 90).toFixed(4)}px`);
    root.style.setProperty("--intro-copy-opacity", (1 - introExit).toFixed(4));
    root.style.setProperty("--panel2-opacity", panel2Opacity.toFixed(4));
    root.style.setProperty("--panel2-y", `calc(-50% + ${(-frame2.exit * 86 + (1 - frame2.enter) * 58).toFixed(4)}px)`);
    root.style.setProperty("--panel3-opacity", panel3Opacity.toFixed(4));
    root.style.setProperty("--panel3-y", `calc(-50% + ${(-frame3.exit * 86 + (1 - frame3.enter) * 58).toFixed(4)}px)`);

    root.style.setProperty("--sights-opacity", sightsEnter.toFixed(4));
    root.style.setProperty("--sights-controls-opacity", sightsControlsEnter.toFixed(4));
    sightsControls.classList.toggle("is-ready", sightsControlsEnter > 0.98);
    root.style.setProperty("--sights-visibility", sightsEnter > 0.01 ? "visible" : "hidden");
    root.style.setProperty("--sights-y", "0px");
    root.style.setProperty("--sights-enter-x", `${((1 - sightsEnter) * 420).toFixed(4)}vw`);
    root.style.setProperty("--sights-scale", (1 / backScale).toFixed(4));
    root.style.setProperty("--sights-top", `${sightsParentTop.toFixed(4)}px`);
    root.style.setProperty("--sights-screen-top", `${sightsScreenTop.toFixed(4)}px`);

    if (Math.abs(smoothScroll - targetScroll) > 0.08 || 
        Math.abs(mouseX - targetMouseX) > 0.001 || 
        Math.abs(mouseY - targetMouseY) > 0.001) {
      requestTick();
    }
  };

  const requestTick = () => {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(update);
    }
  };

  const setupSightSlider = () => {
    sightsTrack.replaceChildren();
    for (let setIndex = 0; setIndex < 3; setIndex++) {
      originalSightCards.forEach((card, cardIndex) => {
        const clone = card.cloneNode(true);
        clone.dataset.sightIndex = setIndex * originalSightCount + cardIndex;
        sightsTrack.appendChild(clone);
      });
    }
    sightCards = Array.from(sightsTrack.children);
    activeSight = originalSightCount;

    sightCards.forEach(card => {
      card.addEventListener("click", () => selectSightCard(card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectSightCard(card);
        }
      });
    });

    sightsTrack.addEventListener("transitionend", normalizeSightSlider);
    updateSightSlider();
  };

  const updateSightSlider = () => {
    if (sightCards.length === 0) return;
    const cardWidth = sightCards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(sightsTrack).columnGap || "0");
    root.style.setProperty("--sights-shift", `${-(cardWidth + gap) * activeSight}px`);
    
    sightCards.forEach(card => {
      if (Number(card.dataset.sightIndex) === activeSight) {
        card.classList.add("is-active");
      } else {
        card.classList.remove("is-active");
      }
    });
  };

  const moveSightSlider = (dir) => {
    activeSight += dir;
    updateSightSlider();
  };

  const selectSightCard = (card) => {
    const idx = Number(card.dataset.sightIndex);
    if (isFinite(idx)) {
      activeSight = idx;
      updateSightSlider();
    }
  };

  const jumpSightSlider = (i) => {
    sightsTrack.classList.add("is-jumping");
    activeSight = i;
    updateSightSlider();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sightsTrack.classList.remove("is-jumping");
      });
    });
  };

  const normalizeSightSlider = () => {
    if (activeSight >= originalSightCount * 2) {
      jumpSightSlider(activeSight - originalSightCount);
    } else if (activeSight < originalSightCount) {
      jumpSightSlider(activeSight + originalSightCount);
    }
  };

  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", () => {
    updateSightSlider();
    requestTick();
  });
  window.addEventListener("pointermove", (e) => {
    targetMouseX = e.clientX / window.innerWidth - 0.5;
    targetMouseY = e.clientY / window.innerHeight - 0.5;
    requestTick();
  }, { passive: true });

  sightPrev.addEventListener("click", () => moveSightSlider(-1));
  sightNext.addEventListener("click", () => moveSightSlider(1));

  setupSightSlider();
  requestTick();
});

// Chapters Modal Interaction Logic
const openChaptersBtn = document.getElementById('open-chapters');
const closeChaptersBtn = document.getElementById('close-chapters');
const chaptersModal = document.getElementById('chapters-modal');

if (openChaptersBtn && chaptersModal) {
  openChaptersBtn.addEventListener('click', () => {
    chaptersModal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  });
}

if (closeChaptersBtn && chaptersModal) {
  closeChaptersBtn.addEventListener('click', () => {
    chaptersModal.classList.remove('is-open');
    document.body.style.overflow = ''; // Restore scroll
  });
}

// Close on clicking outside container
chaptersModal.addEventListener('click', (e) => {
  if (e.target === chaptersModal) {
    chaptersModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

// Interactive Chapter Cards (Simulating navigation or launching feature views)
document.querySelectorAll('.chapter-card').forEach(card => {
  card.addEventListener('click', () => {
    const chapterId = card.getAttribute('data-chapter');
    alert(`Launching Virasat Feature Module: Chapter 0${chapterId} - Initializing immersive ecosystem...`);
  });
});
