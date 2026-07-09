import { GalleryItem, NewsArticle, ActivityDetail } from './types';

export const translations = {
  en: {
    // Brand & General
    brandName: "Pushpak Foundation",
    brandLocation: "Nadiad, Gujarat",
    tagline: "Service • Education • Values • Social Development",
    established: "Established: 30 June 2015",
    registration: "Reg No: F/2365/Kheda",
    phone: "+91 9909078101",
    email: "pushpakfoundation2015@gmail.com",
    address: "Pushpak Foundation, 9 Keshavnagar Society, Near Meghanagar, Pawan Chakki Road, Nadiad - 387002, District Kheda, Gujarat, India",
    logoAlt: "Pushpak Foundation Logo",
    
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navVisionMission: "Vision & Mission",
    navActivities: "Activities",
    navGallery: "Gallery",
    navNews: "News",
    navVolunteer: "Volunteer",
    navDonate: "Donate",
    navContact: "Contact",
    
    // Sub-activities navigation
    navEducation: "Education Seminars",
    navScholarship: "Scholarship Guidance",
    navSkillDev: "Skill Development",
    navWomenEmp: "Women Empowerment",
    navHealth: "Health Awareness",
    navNTDNT: "NT-DNT Community",
    
    // Buttons
    btnReadMore: "Read More",
    btnJoinUs: "Join Us",
    btnVolunteer: "Become a Volunteer",
    btnOurActivities: "Our Activities",
    btnContactUs: "Contact Us",
    btnDonateNow: "Donate Now",
    btnSubmit: "Submit",
    btnBackToActivities: "Back to All Activities",
    btnWhatsAppChat: "Chat on WhatsApp",
    btnLoading: "Processing...",
    
    // Hero Section
    heroTitle: "Transformation in Society through Service",
    heroSubtitle: "Since 2015, Pushpak Foundation has been continuously working towards Education, Women Empowerment, Skill Development, and Social Welfare in Nadiad and Gujarat.",
    
    // Home Sections
    secAboutTitle: "About Our Foundation",
    secAboutDesc: "Pushpak Foundation is a registered non-profit organization located in Nadiad, Gujarat, India. Since its inception on June 30, 2015, the trust has committed itself to uplifting marginalized communities, empowering women, inspiring youth, and raising educational standards. Under registration number F/2365/Kheda, we run countless on-ground welfare seminars, skills classrooms, health check-up campaigns, and advocacy programs across Nadiad and neighboring districts.",
    
    secMissionTitle: "Our Dedicated Mission",
    secMissionDesc: "To implement sustainable community-driven programs that uplift vulnerable sections of society, provide modern job-ready vocational training to rural women and youth, secure financial scholarships for students, and build an inclusive environment where every citizen can thrive with self-respect and empowerment.",
    
    secVisionTitle: "Our Noble Vision",
    secVisionDesc: "To build an equitable, compassionate, and self-reliant society where education is accessible to every child, women have full financial and social independence, and rural/tribal (NT-DNT) communities are integrated into the mainstream of development and progress.",
    
    statsTitle: "Our Cumulative Impact",
    statsSubtitle: "Real numbers representing lives changed and communities uplifted since 2015",
    statStudents: "Students Mentored",
    statWomen: "Women Trained & Independent",
    statCamps: "Health & Social Camps",
    statYears: "Years of Active Service",
    
    latestActivitiesTitle: "Featured Activities",
    latestActivitiesSubtitle: "Glance at our core interventions shaping the future",
    
    galleryTitle: "Memories in Frames",
    gallerySubtitle: "Real-world glimpses of our workshops, distribution drives, and community camps",
    videoGalleryTitle: "Visual Journey",
    videoGallerySubtitle: "Watch our impact in action through documentary and camp videos",
    
    testimonialsTitle: "Voices of Impact",
    testimonialsSubtitle: "What the community and beneficiaries say about Pushpak Foundation",
    
    donateCTATitle: "Help Us Create More Smiles",
    donateCTASubtitle: "Your small support can buy a sewing machine for a rural mother or fund a child's school kit for a year.",
    
    newsTitle: "Latest News & Events",
    newsSubtitle: "Stay updated with our recent programs, seminars, and announcements",
    
    contactTitle: "Get in Touch",
    contactSubtitle: "Have questions? Want to collaborate or visit us? We would love to hear from you.",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormPhone: "Phone Number",
    contactFormSubject: "Subject",
    contactFormMessage: "Write your message...",
    contactSuccess: "Thank you! Your message has been sent successfully. We will get back to you shortly.",
    
    // Donation Page Specifics
    donateTitle: "Empower Lives with Your Donation",
    donateSubtitle: "Your contribution directly funds student kits, sewing machines, health check-up camps, and community development projects.",
    donateCardTitle: "Support a Cause",
    donateCustomAmount: "Enter Custom Amount (₹)",
    donateImpactTitle: "Visual Impact Calculator",
    donateImpactSubtitle: "Drag the slider to see how your funds will support our communities on the ground:",
    donateSelectCause: "Choose a Cause to Support",
    donateCauses: {
      edu: "Child Education & Books Kit",
      women: "Sewing Machine for Women Empowerment",
      health: "Medical Camp Medicines & Kits",
      community: "NT-DNT Community Food & Shelter Kits",
      general: "General Fund (Where support is needed most)"
    },
    donateImpactDesc: "With {amount} INR, we can provide: {desc}",
    donateDetailsTitle: "Bank Transfer Details (Direct Deposit)",
    donateBankName: "Bank of Maharashtra",
    donateAccountName: "Pushpak Foundation",
    donateAccountNum: "60301333885 (Simulated)",
    donateIFSC: "MAHB0000388 (Simulated)",
    donateBranch: "Nadiad Main Branch",
    donateReceiptGen: "Simulated Receipt Generator",
    donateReceiptDesc: "Fill the form below to generate a formal donation appreciation receipt instantly.",
    donateReceiptBtn: "Generate Receipt",
    donateQRText: "Scan to Donate (BHIM UPI / GPAY / PHONEPE)",
    donateThankYou: "Thank you for your generous heart! A certificate of appreciation and receipt has been generated below.",
    
    // Volunteer Page Specifics
    volunteerTitle: "Become an Agent of Change",
    volunteerSubtitle: "Join our active network of 100+ volunteers in Gujarat and contribute your time, skills, and energy to society.",
    volunteerWhyTitle: "Why Volunteer With Us?",
    volunteerWhy1: "Direct on-ground social work experience",
    volunteerWhy2: "Expand your professional and social network",
    volunteerWhy3: "Official volunteer certificate and letter of appreciation",
    volunteerWhy4: "Personal growth, soft skills development, and self-satisfaction",
    volunteerFormTitle: "Volunteer Enrollment Form",
    volunteerSuccessTitle: "Registration Successful!",
    volunteerSuccessMsg: "Welcome to the family! Your volunteer profile has been created. Below is your official interactive Welcome & Certificate of Enrollment.",
    volunteerCertTitle: "CERTIFICATE OF ENROLLMENT",
    volunteerCertBody: "This is to certify that {name} has successfully enrolled as an active volunteer of Pushpak Foundation (Nadiad, Gujarat) on this day. We deeply appreciate their dedication to serving the nation through Education, Women Empowerment, and Social Development.",
    
    // Footer Specifics
    footerDesc: "Pushpak Foundation is dedicated to the social, educational, and economic empowerment of marginalized classes, rural women, and NT-DNT tribes of Gujarat since 2015.",
    footerLinksHeader: "Quick Navigation",
    footerContactHeader: "Reach Us",
    footerMapHeader: "Find Us On Google Maps",
    footerCopy: "All Rights Reserved. Registered under F/2365/Kheda, Gujarat, India."
  },
  gu: {
    // Brand & General
    brandName: "પુષ્પક ફાઉન્ડેશન",
    brandLocation: "નડિયાદ, ગુજરાત",
    tagline: "સેવા • શિક્ષણ • સંસ્કાર • સમાજ વિકાસ",
    established: "સ્થાપના: ૩૦ જૂન ૨૦૧૫",
    registration: "નોંધણી નંબર: F/2365/ખેડા",
    phone: "+91 9909078101",
    email: "pushpakfoundation2015@gmail.com",
    address: "પુષ્પક ફાઉન્ડેશન, 9 કેશવનગર સોસાયટી, મેઘાનગર પાસે, પવન ચક્કી રોડ, નડિયાદ 387002 જિલ્લો ખેડા ગુજરાત, ભારત",
    logoAlt: "પુષ્પક ફાઉન્ડેશન લોગો",
    
    // Navigation
    navHome: "હોમ",
    navAbout: "અમારા વિશે",
    navVisionMission: "ધ્યેય અને વિઝન",
    navActivities: "પ્રવૃત્તિઓ",
    navGallery: "ગેલેરી",
    navNews: "સમાચાર",
    navVolunteer: "સ્વયંસેવક બનો",
    navDonate: "દાન આપો",
    navContact: "સંપર્ક",
    
    // Sub-activities navigation
    navEducation: "શિક્ષણ સેમિનાર",
    navScholarship: "સ્કૉલરશિપ માર્ગદર્શન",
    navSkillDev: "કૌશલ્ય વિકાસ",
    navWomenEmp: "મહિલા સશક્તિકરણ",
    navHealth: "આરોગ્ય જાગૃતિ",
    navNTDNT: "NT-DNT જાતિ વિકાસ",
    
    // Buttons
    btnReadMore: "વધુ વાંચો",
    btnJoinUs: "અમારી સાથે જોડાઓ",
    btnVolunteer: "સ્વયંસેવક બનો",
    btnOurActivities: "અમારી પ્રવૃત્તિઓ",
    btnContactUs: "સંપર્ક કરો",
    btnDonateNow: "દાન કરો",
    btnSubmit: "સબમિટ કરો",
    btnBackToActivities: "બધી પ્રવૃત્તિઓ જુઓ",
    btnWhatsAppChat: "વોટ્સએપ ચેટ કરો",
    btnLoading: "પ્રક્રિયા ચાલુ છે...",
    
    // Hero Section
    heroTitle: "સેવા દ્વારા સમાજમાં પરિવર્તન",
    heroSubtitle: "2015થી પુષ્પક ફાઉન્ડેશન શિક્ષણ, મહિલા સશક્તિકરણ, કૌશલ્ય વિકાસ અને સમાજ કલ્યાણ માટે નડિયાદ અને સમગ્ર ગુજરાતમાં સતત કાર્યરત છે.",
    
    // Home Sections
    secAboutTitle: "ફાઉન્ડેશન વિશે",
    secAboutDesc: "પુષ્પક ફાઉન્ડેશન નડિયાદ, ગુજરાતમાં આવેલી એક અગ્રણી રજિસ્ટર્ડ બિન-લાભકારી સંસ્થા છે. ૩૦ જૂન ૨૦૧૫ ના રોજ તેની સ્થાપના થઈ ત્યારથી, ટ્રસ્ટે પછાત વર્ગોના ઉત્થાન, મહિલાઓનું સશક્તિકરણ, યુવાનોને માર્ગદર્શન અને શિક્ષણના સ્તરને ઊંચું લાવવા માટે પોતાને સમર્પિત કર્યું છે. નોંધણી ક્રમાંક F/2365/ખેડા હેઠળ, અમે નડિયાદ અને આસપાસના જિલ્લાઓમાં અસંખ્ય સેવા સેમિનારો, વ્યવસાયિક તાલીમ વર્ગો, આરોગ્ય તપાસ શિબિરો અને સામાજિક જાગૃતિ કાર્યક્રમો ચલાવીએ છીએ.",
    
    secMissionTitle: "અમારું ધ્યેય (મિશન)",
    secMissionDesc: "સમાજના વંચિત વર્ગોના ઉત્થાન માટે ટકાઉ અને લોક-ઉપયોગી કાર્યક્રમોનું આયોજન કરવું, ગ્રામીણ મહિલાઓ અને યુવાનોને રોજગારીલક્ષી તાલીમ આપવી, વિદ્યાર્થીઓને સ્કોલરશિપ મેળવવામાં મદદ કરવી અને એવું વાતાવરણ બનાવવું જ્યાં દરેક નાગરિક આત્મસન્માન સાથે જીવી શકે.",
    
    secVisionTitle: "અમારું વિઝન",
    secVisionDesc: "એક સમાન, કરુણાસભર અને સ્વનિર્ભર સમાજનું નિર્માણ કરવું જ્યાં દરેક બાળકને શિક્ષણની તક મળે, મહિલાઓ આર્થિક અને સામાજિક રીતે સ્વતંત્ર બને અને વિચરતી-વિમુક્ત જાતિઓ (NT-DNT) વિકાસના મુખ્ય પ્રવાહમાં જોડાય.",
    
    statsTitle: "અમારો અત્યાર સુધીનો પ્રભાવ",
    statsSubtitle: "૨૦૧૫ થી અત્યાર સુધી બદલાયેલા જીવન અને સામાજિક પરિવર્તનના આંકડા",
    statStudents: "માર્ગદર્શન મેળવનાર વિદ્યાર્થીઓ",
    statWomen: "તાલીમ મેળવી સ્વનિર્ભર બનેલી બહેનો",
    statCamps: "આરોગ્ય અને સામાજિક કેમ્પ",
    statYears: "સક્રિય સેવાના વર્ષો",
    
    latestActivitiesTitle: "મુખ્ય પ્રવૃત્તિઓ",
    latestActivitiesSubtitle: "સમાજ નિર્માણ માટેના અમારા મુખ્ય કાર્યો પર એક નજર",
    
    galleryTitle: "સેવા ચિત્રો (ગેલેરી)",
    gallerySubtitle: "અમારા પ્રત્યક્ષ કાર્યક્રમો, વિતરણ અભિયાન અને શિબિરોની વાસ્તવિક તસવીરો",
    videoGalleryTitle: "વિડિયો ગેલેરી",
    videoGallerySubtitle: "અમારા સામાજિક કાર્યો અને વિડીયો ઝાંખી અહીં નિહાળો",
    
    testimonialsTitle: "અનુભવો અને પ્રતિભાવો",
    testimonialsSubtitle: "લાભાર્થીઓ અને સમાજના અગ્રણીઓ પુષ્પક ફાઉન્ડેશન વિશે શું કહે છે",
    
    donateCTATitle: "સેવાના આ મહાયજ્ઞમાં સહભાગી બનો",
    donateCTASubtitle: "તમારી નાની મદદ ગ્રામીણ બહેનોને સીવણ મશીન અપાવી શકે છે અથવા ગરીબ બાળકના આખા વર્ષના ભણતરનો ખર્ચ ઉઠાવી શકે છે.",
    
    newsTitle: "નવીનતમ સમાચાર અને અપડેટ્સ",
    newsSubtitle: "અમારા તાજેતરના સેમિનારો, કાર્યક્રમો અને જાહેરાતોથી માહિતગાર રહો",
    
    contactTitle: "અમારો સંપર્ક કરો",
    contactSubtitle: "કોઈ પ્રશ્ન હોય? સહયોગ કરવો હોય કે મુલાકાત લેવી હોય? અમે તમારા સંદેશાની રાહ જોઈ રહ્યા છીએ.",
    contactFormName: "પૂરું નામ",
    contactFormEmail: "ઈમેલ એડ્રેસ",
    contactFormPhone: "મોબાઈલ નંબર",
    contactFormSubject: "વિષય",
    contactFormMessage: "સંદેશો લખો...",
    contactSuccess: "આભાર! તમારો સંદેશો અમને મળી ગયો છે. અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.",
    
    // Donation Page Specifics
    donateTitle: "તમારું દાન, કોઈનું ઉજ્જવળ ભવિષ્ય",
    donateSubtitle: "તમારો આર્થિક સહયોગ સીધો જ વિદ્યાર્થીઓની કીટ, સીવણ મશીન, મેડિકલ કેમ્પ અને પછાત વસ્તીના વિકાસ કાર્યો પાછળ વપરાય છે.",
    donateCardTitle: "સેવા કાર્ય પસંદ કરો",
    donateCustomAmount: "દાનની રકમ લખો (₹)",
    donateImpactTitle: "પારદર્શક પ્રભાવ કેલ્ક્યુલેટર",
    donateImpactSubtitle: "દાનની રકમ બદલીને જુઓ કે તમારા નાણાંથી જમીન સ્તરે કેવા સેવા કાર્યો થશે:",
    donateSelectCause: "કયા કાર્યમાં મદદ કરવા માંગો છો?",
    donateCauses: {
      edu: "બાળ શિક્ષણ અને પુસ્તકોની કીટ",
      women: "મહિલા સશક્તિકરણ માટે સીવણ મશીન",
      health: "મેડિકલ કેમ્પ દવાઓ અને તપાસ સાધનો",
      community: "NT-DNT જાતિના પરિવારો માટે ભોજન-રાશન કીટ",
      general: "સામાન્ય દાન ભંડોળ (જ્યાં સૌથી વધુ જરૂર હોય)"
    },
    donateImpactDesc: "રૂ. {amount} ના દાનથી અમે નીચેની મદદ કરી શકીશું: {desc}",
    donateDetailsTitle: "બેંક એકાઉન્ટ વિગતો (ડાયરેક્ટ ડિપોઝિટ)",
    donateBankName: "બેંક ઓફ મહારાષ્ટ્ર (Bank of Maharashtra)",
    donateAccountName: "પુષ્પક ફાઉન્ડેશન",
    donateAccountNum: "60301333885 (ડેમો)",
    donateIFSC: "MAHB0000388 (ડેમો)",
    donateBranch: "નડિયાદ મુખ્ય શાખા",
    donateReceiptGen: "ત્વરિત પાવતી (રસીદ) જનરેટર",
    donateReceiptDesc: "તમારી વિગતો ભરીને દાનની સન્માન પાવતી પીડીએફ ફોર્મેટમાં અહીં મેળવો.",
    donateReceiptBtn: "પાવતી બનાવો",
    donateQRText: "UPI, GPay અથવા PhonePe થી સ્કેન કરીને દાન કરો",
    donateThankYou: "તમારા ઉદાર દિલ માટે ખુબ આભાર! તમારી દાન પાવતી અને પ્રશંસા પત્ર નીચે તૈયાર છે.",
    
    // Volunteer Page Specifics
    volunteerTitle: "સમાજ પરિવર્તનના ભાગીદાર બનો",
    volunteerSubtitle: "ગુજરાતમાં અમારા ૧૦૦ થી વધુ સક્રિય સ્વયંસેવકોના નેટવર્કમાં જોડાઓ અને તમારો સમય અને કૌશલ્ય સમાજને અર્પણ કરો.",
    volunteerWhyTitle: "શા માટે અમારી સાથે જોડાવું જોઈએ?",
    volunteerWhy1: "સીધો જમીન સ્તરે સામાજિક કાર્ય કરવાનો અનુભવ",
    volunteerWhy2: "નવા લોકો અને સમાજના પ્રબુદ્ધ નાગરિકો સાથે જોડાવાની તક",
    volunteerWhy3: "અધિકૃત સ્વયંસેવક પ્રમાણપત્ર અને પ્રશંસા પત્ર",
    volunteerWhy4: "વ્યક્તિત્વ વિકાસ, સેવા સંતોષ અને આત્મ-ગૌરવ",
    volunteerFormTitle: "સ્વયંસેવક નોંધણી ફોર્મ",
    volunteerSuccessTitle: "નોંધણી સફળ થઈ!",
    volunteerSuccessMsg: "અમારા પરિવારમાં આપનું સ્વાગત છે! તમારું વોલન્ટીયર કાર્ડ અને પ્રશંસા પત્ર નીચે તૈયાર કરવામાં આવ્યું છે.",
    volunteerCertTitle: "સ્વયંસેવક પ્રમાણપત્ર",
    volunteerCertBody: "આથી પ્રમાણિત કરવામાં આવે છે કે {name} એ પુષ્પક ફાઉન્ડેશન (નડિયાદ, ગુજરાત) માં સ્વયંસેવક તરીકે સફળતાપૂર્વક જોડાણ કરેલ છે. અમે શિક્ષણ, મહિલા સશક્તિકરણ અને સમાજ સેવા પ્રત્યેની તેમની નિષ્ઠાની પ્રશંસા કરીએ છીએ.",
    
    // Footer Specifics
    footerDesc: "૨૦૧૫ થી પુષ્પક ફાઉન્ડેશન ગુજરાતના પછાત વર્ગો, ગ્રામીણ બહેનો અને વિચરતી-વિમુક્ત જાતિઓના આર્થિક, શૈક્ષણિક અને સામાજિક સશક્તિકરણ માટે કટિબદ્ધ છે.",
    footerLinksHeader: "ઝડપી લીંક",
    footerContactHeader: "સંપર્ક વિગત",
    footerMapHeader: "ગૂગલ મેપ પર લોકેશન",
    footerCopy: "બધા હકો સ્વાધીન છે. રજિસ્ટર્ડ નંબર: F/2365/ખેડા, ગુજરાત, ભારત."
  }
};

// Realistic, descriptive mock image URLs representing real high-quality NGO workspace,
// which user can replace later with real photographs, as specified in prompt.
export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800',
    category: 'education',
    titleEn: 'Education Awareness Seminar',
    titleGu: 'શિક્ષણ જાગૃતિ સેમિનાર',
    descriptionEn: 'Special seminar organized to motivate primary school kids and parents in rural Nadiad.',
    descriptionGu: 'ગ્રામીણ નડિયાદમાં પ્રાથમિક શાળાના બાળકો અને વાલીઓને પ્રોત્સાહિત કરવા માટે આયોજિત સેમિનાર.'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    category: 'education',
    titleEn: 'Career Guidance Program',
    titleGu: 'કારકિર્દી માર્ગદર્શન સેમિનાર',
    descriptionEn: 'Counseling and path options for 10th and 12th grade board exam students.',
    descriptionGu: 'ધોરણ ૧૦ અને ૧૨ બોર્ડના વિદ્યાર્થીઓ માટે કારકિર્દી માર્ગદર્શન અને કાઉન્સેલિંગ શિબિર.'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
    category: 'women',
    titleEn: 'Free Sewing & Tailoring Classes',
    titleGu: 'મફત સીવણ અને કટીંગ તાલીમ વર્ગ',
    descriptionEn: 'Empowering local mothers and young women with vocational sewing and cutting skills.',
    descriptionGu: 'સ્થાનિક બહેનોને રોજગારલક્ષી સીવણ અને કટીંગ કૌશલ્ય આપી આર્થિક આત્મનિર્ભર બનાવવી.'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=800',
    category: 'skills',
    titleEn: 'Digital Literacy & Computer Basics',
    titleGu: 'ડિજિટલ સાક્ષરતા અને કોમ્પ્યુટર તાલીમ',
    descriptionEn: 'Basic desktop application and internet navigation classes for rural youth.',
    descriptionGu: 'ગ્રામીણ યુવાનો માટે પાયાનું કોમ્પ્યુટર જ્ઞાન અને ઇન્ટરનેટ વપરાશ અંગેની વ્યવહારિક તાલીમ.'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    category: 'health',
    titleEn: 'Free Diagnostic & Medicine Distribution Camp',
    titleGu: 'મફત નિદાન અને નિઃશુલ્ક દવા વિતરણ કેમ્પ',
    descriptionEn: 'Comprehensive medical checkup camp with professional physicians and free medicines.',
    descriptionGu: 'નિષ્ણાત તબીબો દ્વારા સામાન્ય રોગોની નિદાન શિબિર અને જરૂરી દવાઓનું વિનામૂલ્યે વિતરણ.'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=800',
    category: 'community',
    titleEn: 'NT-DNT Community Food Support Drive',
    titleGu: 'વિચરતી જાતિના પરિવારો માટે અનાજ કીટ વિતરણ',
    descriptionEn: 'Welfare kits and monthly grocery support delivered to marginalized tribal families.',
    descriptionGu: 'વંચિત વિચરતી-વિમુક્ત જાતિના પરિવારોને માસિક રાશન કીટ અને સામાજિક કલ્યાણ સહાય પૂરી પાડવી.'
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    category: 'environment',
    titleEn: 'Tree Plantation & Environmental Drive',
    titleGu: 'વૃક્ષારોપણ અને પર્યાવરણ બચાવો અભિયાન',
    descriptionEn: 'Planting over 500+ saplings in surrounding schools and public parks of Nadiad.',
    descriptionGu: 'નડિયાદની શાળાઓ અને જાહેર બગીચાઓમાં ૫૦૦થી વધુ રોપાઓનું વાવેતર અને ઉછેર સંકલ્પ.'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
    category: 'health',
    titleEn: 'Menstrual Hygiene Awareness Seminar',
    titleGu: 'માસિક ધર્મ સ્વચ્છતા જાગૃતિ સેમિનાર',
    descriptionEn: 'Distribution of sanitary napkins and expert talks on reproductive health in rural girls highschools.',
    descriptionGu: 'ગ્રામીણ શાળાઓમાં કિશોરીઓને સેનિટરી નેપકિન વિતરણ અને સ્ત્રી સ્વાસ્થ્ય અંગે વિગતવાર માર્ગદર્શન.'
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'n1',
    date: 'July 2, 2026',
    titleEn: '11th Foundation Day Celebration & Sewing Machine Distribution',
    titleGu: '૧૧માં સ્થાપના દિવસની ઉજવણી અને સિલાઈ મશીન વિતરણ કાર્યક્રમ',
    summaryEn: 'Pushpak Foundation completed 11 years of active community service. 25 widow mothers received free industrial sewing machines.',
    summaryGu: 'પુષ્પક ફાઉન્ડેશને સક્રિય સમાજ સેવાના ૧૧ વર્ષ પૂર્ણ કર્યા. કાર્યક્રમ અંતર્ગત ૨૫ વિધવા માતાઓને સ્વનિર્ભરતા માટે મફત સિલાઈ મશીન અર્પણ કરાયા.',
    contentEn: 'On June 30, 2026, Pushpak Foundation celebrated its 11th year milestone at Nadiad. The trust invited several local dignitaries who praised the continuous effort of our team towards the marginalized. A special highlight of the ceremony was the distribution of 25 industrial-grade sewing machines to needy widows and single mothers to support their financial independence. Over 150 volunteers and community leaders attended the function.',
    contentGu: '૩૦ જૂન ૨૦૨૬ ના રોજ, પુષ્પક ફાઉન્ડેશને નડિયાદ ખાતે તેની સેવા સફરના ૧૧ વર્ષ સફળતાપૂર્વક પૂર્ણ કર્યા. આ પ્રસંગે અનેક મહાનુભાવો ઉપસ્થિત રહ્યા હતા અને ટ્રસ્ટની પાયાની કામગીરીની સરાહના કરી હતી. સમારંભના મુખ્ય આકર્ષણ તરીકે ૨૫ જરૂરિયાતમંદ વિધવા બહેનો અને એકલી માતાઓને આજીવિકા સન્માન રૂપે વિનામૂલ્યે ઓટોમેટિક સિલાઈ મશીન વિતરિત કરવામાં આવ્યા હતા જેથી તેઓ ગૌરવભેર આજીવિકા મેળવી શકે.',
    image: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?auto=format&fit=crop&q=80&w=800',
    categoryEn: 'Foundation Event',
    categoryGu: 'મુખ્ય ઉત્સવ'
  },
  {
    id: 'n2',
    date: 'June 18, 2026',
    titleEn: 'Government Scholarship & Pension Scheme Guidance Camp in Narsanda',
    titleGu: 'નરસાંડા ગામે સરકારી સ્કોલરશિપ અને પેન્શન યોજના સહાયતા કેમ્પ',
    summaryEn: 'A mass registration camp organized helping 300+ students and elderly sign up for state and central government benefits.',
    summaryGu: 'આયોજિત વિશેષ કેમ્પમાં ૩૦૦થી વધુ વિદ્યાર્થીઓ અને વૃદ્ધોને વિવિધ સરકારી યોજનાઓના ફોર્મ ભરાવી મંજૂરી મેળવવામાં સહાય અપાઈ.',
    contentEn: 'To bridge the gap between welfare policies and beneficiaries, Pushpak Foundation organized a day-long "Sarkari Yojana Sahayta Shibir" in Narsanda. Expert counselors guided villagers about various educational scholarships (for SC, ST, OBC, and NT-DNT students) and elderly pension schemes. Our team compiled and processed over 180 online files on the spot, completely free of charge.',
    contentGu: 'સરકારી કલ્યાણકારી યોજનાઓ અને વાસ્તવિક લાભાર્થીઓ વચ્ચેનો સેતુ બનવા માટે, પુષ્પક ફાઉન્ડેશન દ્વારા નરસાંડા ગામે એક દિવસીય "સરકારી યોજના સહાયતા શિબિર" નું આયોજન કરાયું હતું. કાઉન્સિલરોએ અનુસૂચિત જાતિ, જનજાતિ અને વિચરતી વિમુક્ત જાતિના વિદ્યાર્થીઓને શિષ્યવૃત્તિ તેમજ વડીલોને પેન્શન યોજનાના ફોર્મ ભરવામાં અને દસ્તાવેજો એકત્ર કરવામાં માર્ગદર્શન આપ્યું હતું.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    categoryEn: 'Public Service',
    categoryGu: 'સેવા અભિયાન'
  },
  {
    id: 'n3',
    date: 'May 10, 2026',
    titleEn: 'Summer Vocational Skill Classes Conclude with Certificate Ceremony',
    titleGu: 'ઉનાળુ વેકેશન કૌશલ્ય તાલીમ વર્ગોનું સન્માન પત્ર સાથે સમાપન',
    summaryEn: 'Over 120 school and college girls successfully finished training in Basic Computer Applications and Mehendi/Tailoring arts.',
    summaryGu: '૧૨૦થી વધુ શાળા-કોલેજની દીકરીઓએ બેઝિક કોમ્પ્યુટર કોર્સ અને મહેંદી-સીવણ કલાની તાલીમ પૂર્ણ કરી પ્રમાણપત્ર મેળવ્યા.',
    contentEn: 'Our annual 45-day Summer Training Classes ended with a joyful graduation ceremony in Nadiad. Young women and girls demonstrated their tailoring masterpieces and digital skills acquired during the crash course. Trustees distributed certificates of completion which will aid them in securing local employment or launching custom self-help boutiques. Parents expressed deep gratitude to the foundation for organizing this resource completely free of cost.',
    contentGu: 'અમારા વાર્ષિક ૪૫-દિવસીય ઉનાળુ વેકેશન તાલીમ વર્ગોનું નડિયાદ ખાતે દબદબાભેર સમાપન થયું. આ તાલીમ શિબિરમાં યુવતીઓએ સીવણકામ, સલવાર-કુર્તી કટીંગ તેમજ બેઝિક કોમ્પ્યુટરનું જ્ઞાન મેળવ્યું હતું. દીકરીઓને પ્રમાણપત્રો અર્પણ કરવામાં આવ્યા, જે તેઓને ભવિષ્યમાં સ્વરોજગાર શરૂ કરવામાં અથવા સ્થાનિક નોકરી મેળવવામાં મદદરૂપ બનશે.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    categoryEn: 'Skill Training',
    categoryGu: 'કૌશલ્ય વિકાસ'
  }
];

export const activityDetails: ActivityDetail[] = [
  {
    id: 'act1',
    pageId: 'education',
    titleEn: 'Education Seminars & Value Creation',
    titleGu: 'શિક્ષણ સેમિનાર અને સંસ્કાર સિંચન',
    descriptionEn: 'Education is the ultimate weapon to fight poverty and inequality. We host academic motivational talks, school kit distribution programs, and extra tutoring classrooms for marginalized students in government schools around Nadiad. We also conduct interactive workshops on "Sanskar" (ethical values) to help shape character and build responsible citizens.',
    descriptionGu: 'શિક્ષણ એ ગરીબી અને અસમાનતા સામે લડવાનું સૌથી શક્તિશાળી શસ્ત્ર છે. અમે નડિયાદ અને આસપાસની સરકારી શાળાઓના વંચિત વિદ્યાર્થીઓ માટે શૈક્ષણિક સેમિનાર, મફત નોટબુક-સ્કૂલબેગ વિતરણ અને પાયાના ટ્યુશન વર્ગો ચલાવીએ છીએ. આ સાથે બાળકોમાં નૈતિક મૂલ્યો અને સંસ્કારનું સિંચન થાય તે માટે વિવિધ વર્કશોપનું પણ આયોજન કરવામાં આવે છે.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    highlightsEn: [
      'Over 5,000+ students guided via education seminars',
      'Free textbook, notebook and stationery kit distribution drives',
      'Value-based workshops (Sanskar Shibir) during festivals',
      'Parental awareness counseling regarding children higher education'
    ],
    highlightsGu: [
      '૫,૦૦૦ થી વધુ વિદ્યાર્થીઓને શૈક્ષણિક સેમિનાર દ્વારા માર્ગદર્શન',
      'દર વર્ષે ગરીબ વિદ્યાર્થીઓને વિનામૂલ્યે નોટબુક, સ્કૂલબેગ અને સ્ટેશનરી વિતરણ',
      'તહેવારો દરમિયાન નૈતિક મૂલ્ય આધારિત શિબિરો (સંસ્કાર શિબિર)',
      'ઉચ્ચ શિક્ષણ માટે વાલીઓનું કાઉન્સેલિંગ અને પ્રેરણા સભાઓ'
    ]
  },
  {
    id: 'act2',
    pageId: 'scholarship',
    titleEn: 'Government Scholarship & Career Guidance',
    titleGu: 'સરકારી સ્કોલરશિપ અને કારકિર્દી માર્ગદર્શન',
    descriptionEn: 'Many talented students drop out of school due to lack of financial resources, unaware of various state and central government scholarship schemes. Our dedicated cell helps students identify correct scholarships (Digital Gujarat, National Scholarship Portal, etc.), prepares their document files, and assists them through the application process. We also run expert-led Career Counseling seminars after 10th and 12th standards.',
    descriptionGu: 'અનેક પ્રતિભાશાળી વિદ્યાર્થીઓ આર્થિક સંકડામણને કારણે અને વિવિધ સરકારી સ્કોલરશિપ યોજનાઓથી અજ્ઞાન હોવાને કારણે અભ્યાસ અધવચ્ચે છોડી દે છે. અમારું માર્ગદર્શન કેન્દ્ર વિદ્યાર્થીઓને યોગ્ય શિષ્યવૃત્તિઓ (ડિજિટલ ગુજરાત, રાષ્ટ્રીય સ્કોલરશિપ વગેરે) ઓળખવામાં, દસ્તાવેજો તૈયાર કરવામાં અને ઓનલાઈન ફોર્મ ભરવામાં મદદ કરે છે. આ સાથે ધોરણ ૧૦ અને ૧૨ પછી કારકિર્દી માર્ગદર્શન સેમિનારનું આયોજન થાય છે.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    highlightsEn: [
      'Specialized "Sarkari Yojana Guidance Shibir" across rural Nadiad',
      'Direct hands-on portal application filing help with zero charges',
      '1-on-1 counseling session for college admission and stream selection',
      'Empowered 1200+ students to receive scholarships successfully'
    ],
    highlightsGu: [
      'ગ્રામીણ વિસ્તારોમાં વિશેષ "સરકારી યોજના માર્ગદર્શન શિબિર"',
      'વિનામૂલ્યે ઓનલાઈન પોર્ટલ પર ફોર્મ ભરવામાં ટીમ દ્વારા પ્રત્યક્ષ મદદ',
      'ધોરણ ૧૦-૧૨ પછી કઈ લાઈન લેવી તે અંગે ૧-on-૧ કાઉન્સેલિંગ સેશન',
      '૧,૨૦૦ થી વધુ વિદ્યાર્થીઓને સફળતાપૂર્વક સરકારી શિષ્યવૃત્તિ મેળવી આપી'
    ]
  },
  {
    id: 'act3',
    pageId: 'skill-development',
    titleEn: 'Skill Development & Entrepreneurship Training',
    titleGu: 'કૌશલ્ય વિકાસ અને સ્વરોજગાર તાલીમ',
    descriptionEn: 'To address youth unemployment, Pushpak Foundation provides highly structured, hands-on skill development courses. These include basic computer courses, graphic design concepts, mobile repairing guidance, bookkeeping, and basic home appliance repairs. We focus on training that can immediately enable independent self-employment or secure jobs in regional markets.',
    descriptionGu: 'યુવા બેરોજગારી દૂર કરવા માટે, પુષ્પક ફાઉન્ડેશન વ્યવસ્થિત અને પ્રેક્ટિકલ કૌશલ્ય વિકાસ અભ્યાસક્રમો પ્રદાન કરે છે. આમાં બેઝિક કોમ્પ્યુટર ઓપરેટિંગ, ડેટા એન્ટ્રી, એકાઉન્ટિંગ કોર્સ અને ઘરગથ્થુ ઉપકરણો રીપેરિંગનો સમાવેશ થાય છે. અમારું ધ્યાન યુવાનોને એવી તાલીમ આપવા પર છે જેનાથી તેઓ તરત જ સ્વતંત્ર વ્યવસાય શરૂ કરી શકે અથવા સ્થાનિક ઉદ્યોગોમાં નોકરી મેળવી શકે.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    highlightsEn: [
      'Well-equipped desktop lab with volunteer tech instructors',
      'Short-term certifications geared for high school dropouts',
      'Resume writing guidance and mock job interviews workshops',
      'Special focus on local industrial requirements to bridge the skill gap'
    ],
    highlightsGu: [
      'સ્વયંસેવક આઈટી શિક્ષકો દ્વારા સુસજ્જ કોમ્પ્યુટર લેબમાં તાલીમ',
      'અભ્યાસ છોડી દીધેલ યુવાનો માટે ટૂંકા ગાળાના સર્ટિફિકેટ કોર્સ',
      'બાયોડેટા (રેઝ્યૂમે) બનાવવાના અને મોક ઇન્ટરવ્યુના તાલીમ સત્રો',
      'સ્થાનિક નોકરીઓની જરૂરિયાત મુજબના અભ્યાસક્રમો પર ભાર'
    ]
  },
  {
    id: 'act4',
    pageId: 'women-empowerment',
    titleEn: 'Women Empowerment & Sewing (Tailoring) Classes',
    titleGu: 'મહિલા સશક્તિકરણ અને મફત સીવણ તાલીમ વર્ગ',
    descriptionEn: 'Empowering a woman empowers an entire family. Our flagship Sewing & Designing training centers in Nadiad offer complete cutting, tailoring, and embroidery workshops to rural women, widow mothers, and girls. Over the years, we have provided free automatic sewing machines to outstanding trainees to support them in starting their micro-boutiques at home.',
    descriptionGu: 'એક સ્ત્રીના સશક્તિકરણથી આખા પરિવારનું કલ્યાણ થાય છે. નડિયાદ ખાતેના અમારા સીવણ અને ડિઝાઇનિંગ સેન્ટરમાં ગ્રામીણ બહેનો, વિધવા માતાઓ અને આર્થિક રીતે નબળી યુવતીઓને સંપૂર્ણ કટીંગ, ડ્રેસ-કુર્તી મેકિંગ અને એમ્બ્રોઇડરીની વ્યવહારિક તાલીમ આપવામાં આવે છે. તાલીમ પૂર્ણ થયા બાદ જરૂરિયાતમંદ બહેનોને મફત સિલાઈ મશીન પણ આપવામાં આવે છે.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    highlightsEn: [
      'Continuous active sewing centers with free training resources',
      'Over 1,200+ women successfully trained and certified',
      'Distribution of free automatic sewing machines to deserving widows',
      'Exhibitions arranged to showcase and sell hand-crafted garments'
    ],
    highlightsGu: [
      'તમામ સાધનો સાથે મફત તાલીમ આપતા કાયમી સીવણ કેન્દ્રો',
      '૧,૨૦૦ થી વધુ બહેનોએ તાલીમ મેળવી આત્મનિર્ભરતા મેળવી',
      'વિધવા બહેનોને આજીવિકા સન્માન રૂપે વિનામૂલ્યે સિલાઈ મશીન વિતરણ',
      'બહેનો દ્વારા તૈયાર કરાયેલા કપડાંના વેચાણ અને પ્રદર્શન માટે પ્લેટફોર્મ'
    ]
  },
  {
    id: 'act5',
    pageId: 'health-awareness',
    titleEn: 'Health Awareness & Diagnostics Camps',
    titleGu: 'આરોગ્ય જાગૃતિ અને મફત નિદાન શિબિરો',
    descriptionEn: 'Healthcare access is a luxury for rural and slum communities. Pushpak Foundation organizes regular general health check-ups, dental camps, eye check-ups (including free cataract surgery coordination), and blood donation drives. We place extreme emphasis on Menstrual Hygiene Education, distributing free sanitary napkins and raising wellness consciousness in schools.',
    descriptionGu: 'ગ્રામીણ અને ગરીબ વસ્તી માટે આરોગ્યની ગુણવત્તાસભર સારવાર મેળવવી ખૂબ મુશ્કેલ છે. પુષ્પક ફાઉન્ડેશન નિયમિતપણે મફત સર્વરોગ નિદાન કેમ્પ, નેત્ર તપાસ કેમ્પ (મોતિયાના ઓપરેશન સહાય સાથે), ડેન્ટલ ચેક-અપ અને રક્તદાન શિબિરો યોજે છે. ગ્રામીણ શાળાઓમાં કિશોરીઓ માટે માસિક ધર્મ સ્વચ્છતા સેમિનાર યોજી સેનિટરી પેડનું વિતરણ કરવામાં આવે છે.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea06073e5?auto=format&fit=crop&q=80&w=800',
    highlightsEn: [
      'Regular medical camps partnering with expert doctors from Nadiad and Ahmedabad',
      'Free distribution of essential medicines, eye glasses, and vitamins',
      'Massive menstrual health drives in 15+ girls high schools',
      'Emergency ambulance assistance support and blood donor network'
    ],
    highlightsGu: [
      'નડિયાદ અને અમદાવાદના તબીબોના સહયોગથી નિયમિત મફત નિદાન શિબિર',
      'જરૂરિયાતમંદ દર્દીઓને વિનામૂલ્યે ચશ્મા, દવાઓ અને વિટામિન ટેબ્લેટ વિતરણ',
      '૧૫ થી વધુ કન્યા શાળાઓમાં માસિક ધર્મ સ્વચ્છતા અને જાગૃતિ અભિયાન',
      'ઇમરજન્સી રક્તદાતા નેટવર્ક અને તબીબી માર્ગદર્શન સેવા'
    ]
  },
  {
    id: 'act6',
    pageId: 'nt-dnt',
    titleEn: 'Nomadic & De-Notified Tribes (NT-DNT) Welfare',
    titleGu: 'વિચરતી અને વિમુક્ત જાતિ (NT-DNT) સમુદાય વિકાસ',
    descriptionEn: 'The Nomadic (NT) and De-Notified Tribes (DNT) are among the most marginalized social groups in India. Lacking permanent shelter, stable livelihood, and formal identity proofs, they struggle daily. Pushpak Foundation actively works in their makeshift settlements around Kheda district. We assist them in securing ID proofs (Aadhaar, Ration Card, Caste Certificates), enrolling children into local schools, and running warm clothes/grocery distribution campaigns.',
    descriptionGu: 'વિચરતી અને વિમુક્ત જાતિઓ (NT-DNT) ભારતની સૌથી પછાત અને વંચિત કડીઓ પૈકીની એક છે. કાયમી આવાસ, સ્થિર રોજીરોટી અને ઓળખ પત્રોના અભાવે તેઓ મુશ્કેલ જીવન જીવે છે. પુષ્પક ફાઉન્ડેશન ખેડા જિલ્લાના તેમના હંગામી વસવાટોમાં સક્રિય કામ કરે છે. અમે તેમને આધાર કાર્ડ, રાશન કાર્ડ, જાતિના દાખલા અપાવવામાં, બાળકોને શાળામાં દાખલ કરાવવામાં અને જીવનજરૂરી રાશન કીટ આપવામાં મદદ કરીએ છીએ.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    highlightsEn: [
      'Door-to-door survey in makeshift settlements to document families',
      'Helped 500+ NT-DNT members obtain legal identity and caste certificates',
      'Night-school bridge programs for children to prep them for school enrollment',
      'Annual winter blanket distribution and festival food kit drives'
    ],
    highlightsGu: [
      'વંચિત વસાહતોમાં ઘરે-ઘરે સર્વે કરી કલ્યાણકારી પત્રકોની તૈયારી',
      '૫૦૦ થી વધુ NT-DNT સમુદાયના સભ્યોને સરકારી ઓળખ પત્ર અને જાતિના દાખલા અપાવ્યા',
      'બાળકોને શાળામાં પ્રવેશ લાયક બનાવવા માટે અનૌપચારિક નાઈટ-સ્કૂલ અભિયાન',
      'શિયાળામાં ધાબળા વિતરણ અને તહેવારો પર વિશેષ મિઠાઈ-રાશન કીટ વિતરણ'
    ]
  }
];
