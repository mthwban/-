
import React from 'react';
import { 
  Target, Award, ShieldCheck, Mail, Linkedin, Video, Users, Boxes, Briefcase, Landmark, CheckCircle, 
  Activity, Clock, TrendingUp, Sparkles, GraduationCap, Zap, FileText, Factory, Camera, Code, Eye, 
  Shield, Database, MapPin, ExternalLink, ArrowUpRight, Snowflake, Truck, HelpCircle, CheckCircle2, 
  ShieldAlert, MessageCircle, Info, RotateCcw, BarChart, PieChart, Layers, Dumbbell, Heart
} from 'lucide-react';
import { GalleryItem, Experience, Skill, Certification } from './types.ts';

export const CONTACT_INFO = {
  phone: "+966566162529",
  whatsapp: "966566162529",
  email: "M.THWBAN@GMAIL.COM",
  linkedin: "https://www.linkedin.com/in/mohamed-imijine-32093b362",
  resume: "https://drive.google.com/file/d/1x0cn40NvPvJuYFmlmFIjDbccFW1xc5kR/view?usp=sharing",
  certificatesFolder: "https://drive.google.com/drive/folders/YOUR_CERTIFICATES_FOLDER_ID", 
  dob: "1995/05/21",
  nationality: { en: "Mauritanian", ar: "موريتاني" },
  birthPlace: { en: "Born & Raised in Makkah, KSA", ar: "مواليد مكة المكرمة، المملكة العربية السعودية" }
};

export const IMAGES = {
  meeting: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  site1: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  site2: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
};

export const UI_STRINGS = {
  brand: { en: "THWBAN", ar: "ثوبان" },
  common: {
    vault: { en: "Credential Vault", ar: "خزنة الاعتمادات" },
    hajjUnits: { en: "150k Units Managed\nat Hajj Peak", ar: "إدارة ١٥٠ ألف وحدة\nفي ذروة الحج" },
    footerSubtitle: { en: "STRATEGIC OPERATIONS & VISUAL ARTS", ar: "العمليات الاستراتيجية والفنون البصرية" }
  },
  nav: {
    about: { en: "About", ar: "عني" },
    experience: { en: "Experience", ar: "الخبرة" },
    portfolio: { en: "Portfolio", ar: "الأعمال" },
    skills: { en: "Skills", ar: "المهارات" },
  },
  hero: {
    badge: { en: "OPERATIONS SPECIALIST | CREATIVE STRATEGIST", ar: "أخصائي عمليات | استراتيجي إبداعي" },
    nameFirst: { en: "Mohamed", ar: "محمد" },
    nameLast: { en: "Thwban", ar: "ثوبان" },
    headline: { 
      en: "I am a motivated professional with strong hands-on experience in field operations, daily organization, and precise task management.", 
      ar: "محترف طموح بخبرة عملية قوية في العمليات الميدانية، التنظيم اليومي، وإدارة المهام الدقيقة." 
    },
    ctaPrimary: { en: "View Journey", ar: "استعراض المسيرة" },
    ctaSecondary: { en: "Full CV (PDF)", ar: "السيرة الذاتية (PDF)" },
    ctaVoice: { en: "Listen to Bio", ar: "استمع للتعريف" },
    ctaContact: { en: "Contact", ar: "تواصل" }
  },
  about: {
    badge: { en: "PROFESSIONAL PROFILE", ar: "الملف المهني" },
    title: { en: "Excellence and Growth", ar: "التميز والنمو المستمر" },
    pillars: [
      {
        icon: <Zap className="w-10 h-10" />,
        title: { en: "Project Management", ar: "إدارة المشاريع" },
        text: { en: "Google Certified PM with expertise in planning, coordination, and quality assurance.", ar: "مدير مشاريع معتمد من جوجل، خبير في التخطيط، التنسيق، وضمان الجودة." }
      },
      {
        icon: <Target className="w-10 h-10" />,
        title: { en: "Field Operations", ar: "العمليات الميدانية" },
        text: { en: "Known for accuracy, fast learning ability, discipline, and high tolerance for work pressure.", ar: "معروف بالدقة، سرعة التعلم، الانضباط، والقدرة العالية على تحمل ضغط العمل." }
      },
      {
        icon: <Camera className="w-10 h-10" />,
        title: { en: "Visual Production", ar: "الإنتاج البصري" },
        text: { en: "Professional skills in photography and video editing to deliver measurable marketing results.", ar: "مهارات احترافية في التصوير الفوتوغرافي ومونتاج الفيديو لتقديم نتائج تسويقية ملموسة." }
      }
    ],
    roiTitle: { en: "Professional Identity", ar: "الهوية المهنية" },
    roiDesc: { en: "I consistently deliver measurable results and seek a professional environment that values excellence.", ar: "أقدم باستمرار نتائج ملموسة وأبحث عن بيئة مهنية تقدر التميز وتدعم النمو المستمر." },
    metrics: [
      { value: "100%", label: { en: "Accuracy", ar: "الدقة" }, highlight: true },
      { value: "Team", label: { en: "Spirit", ar: "روح الفريق" }, highlight: false },
      { value: "Agile", label: { en: "Learning", ar: "تعلم مرن" }, highlight: false }
    ]
  },
  hobbies: {
    title: { en: "Hobbies & Lifestyle", ar: "الهوايات ونمط الحياة" },
    items: [
      { icon: <Dumbbell className="w-5 h-5" />, label: { en: "Bodybuilding", ar: "كمال الأجسام" } },
      { icon: <Heart className="w-5 h-5" />, label: { en: "Running", ar: "الجري" } },
      { icon: <Camera className="w-5 h-5" />, label: { en: "Photography", ar: "التصوير" } },
      { icon: <Video className="w-5 h-5" />, label: { en: "Short Film Editing", ar: "مونتاج الأفلام القصيرة" } }
    ]
  },
  experience: {
    badge: { en: "PROFESSIONAL CAREER", ar: "المسار المهني" },
    title: { en: "Work Experience", ar: "الخبرات العملية" }
  },
  certifications: {
    badge: { en: "EDUCATION & CREDENTIALS", ar: "التعليم والاعتمادات" },
    title: { en: "Verified Expertise", ar: "الشهادات والتعليم" },
    verifyLabel: { en: "VERIFY", ar: "تحقق" },
    approved: { en: "APPROVED", ar: "معتمد" },
    folderCta: { en: "View All Certificates on Drive", ar: "عرض كافة الشهادات على جوجل درايف" }
  },
  contact: {
    title: { en: "Contact Me", ar: "تواصل معي" },
    subtitle: { en: "Available for strategic operational roles or creative visual projects.", ar: "متاح للأدوار التشغيلية الاستراتيجية أو المشاريع البصرية الإبداعية." },
    linkedin: { en: "LinkedIn Profile", ar: "الملف الشخصي على لينكد إن" },
    footer: { en: "All rights reserved", ar: "جميع الحقوق محفوظة" }
  },
  process: {
    badge: { en: "Workflow", ar: "مسار العمل" },
    title: { en: "Methodology", ar: "منهجية العمل" },
    steps: [
      { icon: <Database />, title: { en: "Planning", ar: "التخطيط" }, desc: { en: "Structured planning for complex field operations.", ar: "التخطيط الهيكلي للعمليات الميدانية المعقدة." } },
      { icon: <Activity />, title: { en: "Coordination", ar: "التنسيق" }, desc: { en: "Seamless team and workflow coordination.", ar: "التنسيق السلس بين الفرق ومسارات العمل." } },
      { icon: <ShieldCheck />, title: { en: "Quality", ar: "الجودة" }, desc: { en: "Ensuring compliance and process improvement.", ar: "ضمان الامتثال وتحسين العمليات المستمر." } },
      { icon: <TrendingUp />, title: { en: "Reporting", ar: "التقارير" }, desc: { en: "Accurate daily reporting and results delivery.", ar: "إعداد التقارير اليومية الدقيقة وتقديم النتائج." } }
    ],
    footer: { en: "Consistency delivers measurable results.", ar: "الاستمرارية هي مفتاح النتائج الملموسة." }
  },
  services: {
    badge: { en: "Expertise", ar: "الخبرات" },
    title: { en: "What I Excel At", ar: "مجالات التميز" },
    items: [
      { icon: <Briefcase />, title: { en: "Operations", ar: "التشغيل" }, desc: { en: "Maintenance and site operations management.", ar: "إدارة تشغيل المواقع وأعمال الصيانة." } },
      { icon: <Target />, title: { en: "Management", ar: "الإدارة" }, desc: { en: "Project and team leadership in high-stakes environments.", ar: "قيادة المشاريع والفرق في البيئات عالية المسؤولية." } },
      { icon: <Camera />, title: { en: "Creative", ar: "الإبداع" }, desc: { en: "Visual production and digital marketing strategies.", ar: "الإنتاج البصري واستراتيجيات التسويق الرقمي." } }
    ]
  },
  vision: {
    badge: { en: "VISION", ar: "الرؤية" },
    title: { en: "Professional Vision", ar: "الرؤية المهنية" },
    text: { en: "Excellence is not an act, but a habit of discipline and continuous growth.", ar: "التميز ليس مجرد فعل، بل هو عادة من الانضباط والنمو المستمر." },
    maxRoi: { en: "Efficiency", ar: "الكفاءة" },
    preciseEco: { en: "Strategic Growth", ar: "النمو الاستراتيجي" },
    minWaste: { en: "Process Optimization", ar: "تحسين العمليات" },
    strictControl: { en: "Zero Errors", ar: "صفر أخطاء" }
  },
  fieldEvidence: {
    title: { en: "Field Proofs", ar: "إثباتات ميدانية" },
    location: { en: "Kingdom of Saudi Arabia", ar: "المملكة العربية السعودية" },
    opMetric: { en: "Daily Impact", ar: "الأثر اليومي" },
    workflowAnalysis: { en: "Operations Logic", ar: "منطق العمليات" },
    cases: [
      { id: "1", image: "site1", kpi: "100% Flow", title: { en: "Site Operations", ar: "عمليات المواقع" }, description: { en: "Ensuring workflow continuity and team communication during the Hajj season through structured planning.", ar: "ضمان استمرارية تدفق العمل والتواصل بين الفرق خلال موسم الحج عبر التخطيط الهيكلي." } },
      { id: "2", image: "site2", kpi: "Accuracy", title: { en: "Election Logistics", ar: "لوجستيات الانتخابات" }, description: { en: "Coordinating electoral operations with high transparency in a high-responsibility environment.", ar: "تنسيق العمليات الانتخابية بشفافية عالية في بيئة ذات مسؤولية كبيرة." } }
    ],
    viewLogs: { en: "View Portfolio", ar: "مشاهدة الأعمال" }
  },
  quiz: {
    badge: { en: "Skill Test", ar: "اختبار مهارات" },
    title: { en: "Workplace IQ", ar: "اختبار مهارات العمل" },
    scoreLabel: { en: "Performance Score", ar: "درجة الأداء" },
    startBtn: { en: "Start Test", ar: "ابدأ الاختبار" },
    questions: [
      {
        q: { en: "How do you handle intense work pressure?", ar: "كيف تتعامل مع ضغط العمل الشديد؟" },
        options: [
          { text: { en: "Prioritize and communicate", ar: "ترتيب الأولويات والتواصل" }, isCorrect: true },
          { text: { en: "Delay tasks", ar: "تأجيل المهام" }, isCorrect: false }
        ],
        tip: { en: "Accuracy and time management are key.", ar: "الدقة وإدارة الوقت هما المفتاح." }
      }
    ],
    finishBtn: { en: "Finish", ar: "إنهاء" },
    nextBtn: { en: "Next", ar: "التالي" },
    resultMsg: { en: "Your skills match elite standards!", ar: "مهاراتك تتوافق مع المعايير النخبوية!" },
    hireCta: { en: "Ready to cooperate?", ar: "جاهز للتعاون؟" },
    resetBtn: { en: "Try Again", ar: "إعادة المحاولة" }
  },
  dashboard: {
    insightEngine: { en: "Operations Dashboard", ar: "لوحة العمليات" },
    title: { en: "Performance Metrics", ar: "مقاييس الأداء" },
    subtitle: { en: "Quantitative view of field and technical expertise.", ar: "نظرة كمية على الخبرات الميدانية والتقنية." },
    systemStatus: { en: "Availability", ar: "التوفر" },
    liveOptimal: { en: "Open for Opportunities", ar: "متاح للفرص" },
    stats: [
      { icon: <BarChart />, value: "100%", label: { en: "Workflow Continuity", ar: "استمرارية العمل" } },
      { icon: <Users />, value: "Team", label: { en: "Spirit", ar: "روح الفريق" } },
      { icon: <ShieldCheck />, value: "Verified", label: { en: "Credentials", ar: "الشهادات" } },
      { icon: <Clock />, value: "On-Time", label: { en: "Delivery", ar: "التسليم" } }
    ],
    throughputTitle: { en: "Task Management Flow", ar: "تدفق إدارة المهام" },
    throughputSubtitle: { en: "Efficiency over various projects", ar: "الكفاءة عبر المشاريع المختلفة" },
    actual: { en: "Realized", ar: "المحقق" },
    projected: { en: "Target", ar: "المستهدف" },
    compliance: { en: "Discipline", ar: "الانضباط" },
    riskTitle: { en: "Conflict Resolution", ar: "حل النزاعات" },
    riskSubtitle: { en: "Managing complex team dynamics", ar: "إدارة ديناميكيات الفريق المعقدة" },
    complianceDesc: { en: "Fully compliant with international project standards.", ar: "ملتزم تماماً بمعايير المشاريع الدولية." }
  },
  executive: {
    exit: { en: "Exit Mode", ar: "خروج" },
    subtitle: { en: "Executive profile overview.", ar: "نظرة عامة على الملف التنفيذي." }
  },
  development: {
    items: [
      {
        title: { en: "Google Digital Marketing & E-Commerce", ar: "التسويق الرقمي والتجارة الإلكترونية من جوجل" },
        issuer: { en: "Coursera", ar: "كورسيرا" },
        status: { en: "In Progress (Final Stages)", ar: "قيد التنفيذ (المراحل النهائية)" }
      }
    ]
  }
};

export const EXPERIENCES: Experience[] = [
  {
    title: { en: "Operations and Maintenance Officer", ar: "مسؤول التشغيل والصيانة" },
    company: { en: "Manasik Al-Mulabbi Co. – King Abdulaziz Project for Hady and Adahi – Royal Commission", ar: "شركة مناسك الملبي – مشروع خادم الحرمين الشريفين للأضاحي – الهيئة الملكية" },
    period: { en: "04/2025 – 09/2025", ar: "أبريل ٢٠٢٥ – سبتمبر ٢٠٢٥" },
    description: [
      { en: "Oversaw year-round site operations and maintenance, ensuring workflow continuity during the Hajj season.", ar: "الإشراف على عمليات تشغيل وصيانة المواقع طوال العام، وضمان استمرارية سير العمل خلال موسم الحج." },
      { en: "Implemented structured planning and daily reporting to enhance team communication.", ar: "تطبيق التخطيط الهيكلي والتقارير اليومية لتعزيز التواصل بين الفرق." }
    ],
    tags: [{ en: "Operations", ar: "عمليات" }, { en: "Maintenance", ar: "صيانة" }, { en: "Hajj Excellence", ar: "تميز الحج" }]
  },
  {
    title: { en: "Committee Member – Presidential Elections", ar: "عضو لجنة – الانتخابات الرئاسية" },
    company: { en: "Mauritanian Consulate General, Jeddah", ar: "القنصلية الموريتانية العامة بجدة" },
    period: { en: "04/2023 – 08/2023", ar: "أبريل ٢٠٢٣ – أغسطس ٢٠٢٣" },
    description: [
      { en: "Organized voter registration and electoral lists with high accuracy and transparency.", ar: "تنظيم تسجيل الناخبين والقوائم الانتخابية بدقة وشفافية عالية." },
      { en: "Coordinated election operations in a high-responsibility environment ensuring compliance with official standards.", ar: "تنسيق العمليات الانتخابية في بيئة عالية المسؤولية مع ضمان الامتثال للمعايير الرسمية." }
    ],
    tags: [{ en: "Election Logistics", ar: "لوجستيات الانتخابات" }, { en: "Organization", ar: "تنظيم" }]
  },
  {
    title: { en: "Marketing Specialist", ar: "أخصائي تسويق" },
    company: { en: "Construction & Transportation Companies", ar: "شركات المقاولات والنقل" },
    period: { en: "2020 – 2023", ar: "٢٠٢٠ – ٢٠٢٣" },
    description: [
      { en: "Developed early-stage digital marketing initiatives to increase brand awareness.", ar: "تطوير مبادرات التسويق الرقمي في مراحلها الأولى لزيادة الوعي بالعلامة التجارية." },
      { en: "Explored and implemented effective online communication strategies for industrial sectors.", ar: "استكشاف وتطبيق استراتيجيات فعالة للتواصل عبر الإنترنت للقطاعات الصناعية." }
    ],
    tags: [{ en: "Digital Strategy", ar: "استراتيجية رقمية" }, { en: "Brand Growth", ar: "نمو العلامة" }]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: { en: "Google Project Management Certificate", ar: "شهادة إدارة المشاريع من جوجل" },
    issuer: { en: "Coursera", ar: "جوجل / كورسيرا" },
    date: { en: "2024", ar: "٢٠٢٤ م" },
    url: "https://coursera.org/verify/professional-al-cert/BB2H5F57UU1E"
  },
  {
    title: { en: "Small Business Social Media Marketing", ar: "التسويق عبر وسائل التواصل للمشاريع الصغيرة" },
    issuer: { en: "Coursera Project Network", ar: "كورسيرا" },
    date: { en: "2024", ar: "٢٠٢٤ م" },
    url: "https://coursera.org/verify/1YKOO0BLUAC4"
  },
  {
    title: { en: "Video Production Certificate", ar: "شهادة إنتاج الفيديو" },
    issuer: { en: "University of Colorado Boulder", ar: "جامعة كولورادو" },
    date: { en: "2024", ar: "٢٠٢٤ م" },
    url: "https://coursera.org/verify/MNQTL62TBRVL"
  },
  {
    title: { en: "Leading Teams", ar: "قيادة الفرق" },
    issuer: { en: "University of Michigan", ar: "جامعة ميشيغان" },
    date: { en: "2024", ar: "٢٠٢٤ م" },
    url: "#"
  },
  {
    title: { en: "“Tirhab” Soft Skills Program", ar: "برنامج ترحاب للمهارات الناعمة" },
    issuer: { en: "Ministry of Hajj and Umrah", ar: "وزارة الحج والعمرة" },
    date: { en: "Verified", ar: "موثق" },
    url: "#"
  },
  {
    title: { en: "Bachelor of Economics", ar: "بكالوريوس في الاقتصاد" },
    issuer: { en: "Umm Al-Qura University", ar: "جامعة أم القرى" },
    date: { en: "Aug 2018", ar: "أغسطس ٢٠١٨ م" },
    url: "#"
  }
];

export const SKILLS: Skill[] = [
  {
    category: { en: "Operational Management", ar: "الإدارة التشغيلية" },
    icon: <Boxes />,
    items: [
      { en: "Planning & Coordination", ar: "التخطيط والتنسيق" },
      { en: "Quality Assurance", ar: "ضمان الجودة" },
      { en: "Process Improvement", ar: "تحسين العمليات" }
    ]
  },
  {
    category: { en: "Technical & Visual", ar: "المهارات التقنية والبصرية" },
    icon: <Video />,
    items: [
      { en: "Photography", ar: "التصوير الفوتوغرافي" },
      { en: "Video Editing", ar: "مونتاج الفيديو" },
      { en: "Visual Production", ar: "الإنتاج البصري" }
    ]
  },
  {
    category: { en: "Core Soft Skills", ar: "المهارات الأساسية" },
    icon: <ShieldCheck />,
    items: [
      { en: "Working Under Pressure", ar: "العمل تحت الضغط" },
      { en: "Teamwork & Discipline", ar: "العمل الجماعي والانضباط" },
      { en: "Time Management", ar: "إدارة الوقت" }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: IMAGES.site1,
    title: { en: "Hajj Operations", ar: "عمليات الحج" },
    category: { en: "Field Management", ar: "الإدارة الميدانية" },
    caption: { en: "Structured planning for massive unit flow.", ar: "تخطيط هيكلي لتدفق الوحدات الضخم." },
    phase: { en: "Execution", ar: "التنفيذ" },
    kpi: { en: "100% Continuity", ar: "١٠٠٪ استمرارية" }
  },
  {
    src: IMAGES.site2,
    title: { en: "Strategic Logistics", ar: "اللوجستيات الاستراتيجية" },
    category: { en: "Diplomatic", ar: "دبلوماسي" },
    caption: { en: "Managing electoral data and logistics.", ar: "إدارة البيانات واللوجستيات الانتخابية." },
    phase: { en: "Operations", ar: "العمليات" },
    kpi: { en: "High Accuracy", ar: "دقة عالية" }
  }
];
