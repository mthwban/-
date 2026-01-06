
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
      en: "Motivated professional with strong hands-on experience in field operations, daily organization, and precise task management.", 
      ar: "محترف طموح بخبرة عملية قوية في العمليات الميدانية، التنظيم اليومي، وإدارة المهام الدقيقة." 
    },
    ctaPrimary: { en: "View Journey", ar: "استعراض المسيرة" },
    ctaSecondary: { en: "Full CV (PDF)", ar: "السيرة الذاتية (PDF)" },
    ctaVoice: { en: "Listen to Bio", ar: "استمع للتعريف" },
    ctaContact: { en: "Contact", ar: "تواصل" }
  },
  about: {
    badge: { en: "PROFESSIONAL PROFILE", ar: "الملف المهني" },
    title: { en: "Excellence & Discipline", ar: "التميز والانضباط" },
    pillars: [
      {
        icon: <Zap className="w-10 h-10" />,
        title: { en: "Project Leadership", ar: "قيادة المشاريع" },
        text: { en: "Google Certified PM with expertise in planning, coordination, and quality assurance.", ar: "مدير مشاريع معتمد من جوجل، خبير في التخطيط، التنسيق، وضمان الجودة." }
      },
      {
        icon: <Target className="w-10 h-10" />,
        title: { en: "Field Excellence", ar: "التميز الميداني" },
        text: { en: "Proven ability in large-scale operations with high tolerance for peak season pressure.", ar: "قدرة مثبتة في العمليات الكبرى مع تحمل عالٍ لضغوط مواسم الذروة." }
      },
      {
        icon: <Camera className="w-10 h-10" />,
        title: { en: "Visual Arts", ar: "الفنون البصرية" },
        text: { en: "Professional cinematography and video editing to deliver high-impact marketing results.", ar: "تصوير ومونتاج فيديو احترافي لتقديم نتائج تسويقية عالية التأثير." }
      }
    ],
    roiTitle: { en: "Core Values", ar: "القيم الجوهرية" },
    roiDesc: { en: "I seek a professional environment that values excellence and supports continuous growth.", ar: "أسعى لبيئة مهنية تقدر التميز وتدعم النمو المستمر والابتكار." },
    metrics: [
      { value: "100%", label: { en: "Commitment", ar: "الانضباط" }, highlight: true },
      { value: "Fast", label: { en: "Learning", ar: "تعلم سريع" }, highlight: false },
      { value: "Team", label: { en: "Work", ar: "عمل جماعي" }, highlight: false }
    ]
  },
  hobbies: {
    title: { en: "Hobbies & Lifestyle", ar: "الهوايات ونمط الحياة" },
    items: [
      { icon: <Dumbbell className="w-5 h-5" />, label: { en: "Bodybuilding", ar: "كمال الأجسام" } },
      { icon: <Heart className="w-5 h-5" />, label: { en: "Running", ar: "الجري" } },
      { icon: <Camera className="w-5 h-5" />, label: { en: "Photography", ar: "التصوير" } },
      { icon: <Video className="w-5 h-5" />, label: { en: "Video Editing", ar: "مونتاج الفيديو" } }
    ]
  },
  experience: {
    badge: { en: "WORK HISTORY", ar: "تاريخ العمل" },
    title: { en: "Professional Experience", ar: "الخبرات العملية" }
  },
  certifications: {
    badge: { en: "CREDENTIALS", ar: "الاعتمادات" },
    title: { en: "Verified Expertise", ar: "الشهادات والتعليم" },
    verifyLabel: { en: "VERIFY", ar: "تحقق" },
    approved: { en: "APPROVED", ar: "معتمد" },
    folderCta: { en: "View All Certificates on Drive", ar: "عرض كافة الشهادات على جوجل درايف" }
  },
  contact: {
    title: { en: "Connect", ar: "تواصل" },
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
    badge: { en: "Capabilities", ar: "القدرات" },
    title: { en: "Strategic Domains", ar: "المجالات الاستراتيجية" },
    items: [
      { icon: <Briefcase />, title: { en: "Operations", ar: "التشغيل" }, desc: { en: "Maintenance and site operations management.", ar: "إدارة تشغيل المواقع وأعمال الصيانة." } },
      { icon: <Target />, title: { en: "Management", ar: "الإدارة" }, desc: { en: "Project and team leadership in high-stakes environments.", ar: "قيادة المشاريع والفرق في البيئات عالية المسؤولية." } },
      { icon: <Camera />, title: { en: "Creative", ar: "الإبداع" }, desc: { en: "Visual production and digital marketing strategies.", ar: "الإنتاج البصري واستراتيجيات التسويق الرقمي." } }
    ]
  },
  vision: {
    badge: { en: "VISION", ar: "الرؤية" },
    title: { en: "Professional Path", ar: "المسار المهني" },
    text: { en: "Excellence is not an act, but a habit of discipline and continuous growth.", ar: "التميز ليس مجرد فعل، بل هو عادة من الانضباط والنمو المستمر." },
    maxRoi: { en: "Efficiency", ar: "الكفاءة" },
    preciseEco: { en: "Economic Rigor", ar: "الدقة الاقتصادية" },
    minWaste: { en: "Waste Reduction", ar: "تقليل الفاقد" },
    strictControl: { en: "Strict Control", ar: "رقابة صارمة" }
  },
  fieldEvidence: {
    title: { en: "Operations Showcase", ar: "معرض العمليات" },
    location: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
    opMetric: { en: "Efficiency", ar: "الكفاءة" },
    workflowAnalysis: { en: "Technical Audit", ar: "التدقيق التقني" },
    cases: [
      { id: "1", image: "site1", kpi: "150k Units", title: { en: "Hajj Site Management", ar: "إدارة مواقع الحج" }, description: { en: "Oversaw year-round site operations, ensuring continuity for 150k units during Hajj peak.", ar: "الإشراف على عمليات المواقع طوال العام، وضمان الاستمرارية لـ ١٥٠ ألف وحدة خلال ذروة الحج." } },
      { id: "2", image: "site2", kpi: "High Precision", title: { en: "Election Operations", ar: "العمليات الانتخابية" }, description: { en: "Coordinated election registration and logistics with full transparency and accuracy.", ar: "تنسيق تسجيل الناخبين واللوجستيات بشفافية ودقة كاملة." } }
    ],
    viewLogs: { en: "Explore Case", ar: "استكشاف الحالة" }
  },
  quiz: {
    badge: { en: "OP-IQ", ar: "اختبار الذكاء التشغيلي" },
    title: { en: "Leadership IQ", ar: "اختبار القيادة" },
    scoreLabel: { en: "Score", ar: "الدرجة" },
    startBtn: { en: "Start Test", ar: "ابدأ الاختبار" },
    questions: [
      {
        q: { en: "A site operation hits a peak bottleneck. Your first action?", ar: "حدث تعطل مفاجئ في العمليات الميدانية في وقت الذروة. ما هو إجراءك الأول؟" },
        options: [
          { text: { en: "Assess and prioritize workflow", ar: "تقييم وترتيب أولويات العمل" }, isCorrect: true },
          { text: { en: "Wait for manual instructions", ar: "انتظار التعليمات اليدوية" }, isCorrect: false }
        ],
        tip: { en: "Proactive assessment is key to continuity.", ar: "التقييم الاستباقي هو مفتاح الاستمرارية." }
      }
    ],
    finishBtn: { en: "Submit", ar: "إرسال" },
    nextBtn: { en: "Next", ar: "التالي" },
    resultMsg: { en: "Your operational intelligence is elite.", ar: "ذكاءك التشغيلي بمستوى النخبة." },
    hireCta: { en: "Ready to cooperate?", ar: "جاهز للتعاون؟" },
    resetBtn: { en: "Retry", ar: "إعادة" }
  },
  dashboard: {
    insightEngine: { en: "Ops Dashboard", ar: "لوحة العمليات" },
    title: { en: "Performance Metrics", ar: "مقاييس الأداء" },
    subtitle: { en: "Real-world impact visualized through field data.", ar: "الأثر الفعلي مجسداً من خلال البيانات الميدانية." },
    systemStatus: { en: "Status", ar: "الحالة" },
    liveOptimal: { en: "Active", ar: "نشط" },
    stats: [
      { icon: <BarChart />, value: "150k", label: { en: "Hajj Units", ar: "وحدات الحج" } },
      { icon: <Users />, value: "Elite", label: { en: "Team Spirit", ar: "روح الفريق" } },
      { icon: <ShieldCheck />, value: "Verified", label: { en: "Credentials", ar: "الشهادات" } },
      { icon: <Clock />, value: "24/7", label: { en: "Readiness", ar: "الجاهزية" } }
    ],
    throughputTitle: { en: "Operational Surge", ar: "الذروة التشغيلية" },
    throughputSubtitle: { en: "Units managed over high-stakes cycles", ar: "الوحدات المدارة خلال دورات الحج" },
    actual: { en: "Actual", ar: "الفعلي" },
    projected: { en: "Target", ar: "المستهدف" },
    compliance: { en: "Discipline", ar: "الانضباط" },
    riskTitle: { en: "Risk Mitigation", ar: "تخفيف المخاطر" },
    riskSubtitle: { en: "Strategic field safety", ar: "السلامة الميدانية الاستراتيجية" },
    complianceDesc: { en: "100% compliance with Royal Commission standards.", ar: "التزام بنسبة ١٠٠٪ بمعايير الهيئة الملكية." }
  },
  executive: {
    exit: { en: "Exit Dossier", ar: "خروج" },
    subtitle: { en: "Strategic summary for stakeholders.", ar: "ملخص استراتيجي لأصحاب المصلحة." }
  },
  development: {
    items: [
      {
        title: { en: "Google Digital Marketing & E-Commerce", ar: "التسويق الرقمي والتجارة الإلكترونية من جوجل" },
        issuer: { en: "Coursera", ar: "كورسيرا" },
        status: { en: "Expected completion in the upcoming months", ar: "من المتوقع الانتهاء في الأشهر القادمة" }
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
      { en: "Oversaw year-round site operations and maintenance, ensuring workflow continuity during Hajj season.", ar: "الإشراف على عمليات تشغيل وصيانة المواقع طوال العام، وضمان استمرارية سير العمل خلال موسم الحج." },
      { en: "Implemented structured planning and daily reporting to coordinate massive logistics.", ar: "تطبيق التخطيط الهيكلي والتقارير اليومية لتنسيق اللوجستيات الضخمة." }
    ],
    tags: [{ en: "Operations", ar: "عمليات" }, { en: "Hajj Logistics", ar: "لوجستيات الحج" }, { en: "Maintenance", ar: "صيانة" }]
  },
  {
    title: { en: "Committee Member – Presidential Elections", ar: "عضو لجنة – الانتخابات الرئاسية" },
    company: { en: "Mauritanian Consulate General, Jeddah", ar: "القنصلية الموريتانية العامة بجدة" },
    period: { en: "04/2023 – 08/2023", ar: "أبريل ٢٠٢٣ – أغسطس ٢٠٢٣" },
    description: [
      { en: "Organized voter registration and electoral lists with extreme accuracy.", ar: "تنظيم تسجيل الناخبين والقوائم الانتخابية بدقة متناهية." },
      { en: "Ensured compliance with official standards in a high-responsibility environment.", ar: "ضمان الامتثال للمعايير الرسمية في بيئة ذات مسؤولية كبيرة." }
    ],
    tags: [{ en: "Organization", ar: "تنظيم" }, { en: "Diplomatic Logistics", ar: "لوجستيات دبلوماسية" }]
  },
  {
    title: { en: "Marketing Specialist", ar: "أخصائي تسويق" },
    company: { en: "Construction & Transportation Companies", ar: "شركات المقاولات والنقل" },
    period: { en: "2020 – 2023", ar: "٢٠٢٠ – ٢٠٢٣" },
    description: [
      { en: "Developed early-stage digital marketing initiatives to boost brand visibility.", ar: "تطوير مبادرات التسويق الرقمي في مراحلها الأولى لتعزيز ظهور العلامة التجارية." },
      { en: "Managed online communication strategies for industrial sectors.", ar: "إدارة استراتيجيات التواصل عبر الإنترنت للقطاعات الصناعية." }
    ],
    tags: [{ en: "Marketing", ar: "تسويق" }, { en: "Brand Strategy", ar: "استراتيجية العلامة" }]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: { en: "Google Project Management Certificate", ar: "شهادة إدارة المشاريع من جوجل" },
    issuer: { en: "Coursera", ar: "جوجل / كورسيرا" },
    date: { en: "Verified", ar: "موثق" },
    url: "https://coursera.org/verify/professional-al-cert/BB2H5F57UU1E"
  },
  {
    title: { en: "Small Business Social Media Marketing", ar: "التسويق عبر وسائل التواصل للمشاريع الصغيرة" },
    issuer: { en: "Coursera Project Network", ar: "كورسيرا" },
    date: { en: "Verified", ar: "موثق" },
    url: "https://coursera.org/verify/1YKOO0BLUAC4"
  },
  {
    title: { en: "Video Production Certificate", ar: "شهادة إنتاج الفيديو" },
    issuer: { en: "University of Colorado Boulder", ar: "جامعة كولورادو" },
    date: { en: "Verified", ar: "موثق" },
    url: "https://coursera.org/verify/MNQTL62TBRVL"
  },
  {
    title: { en: "Leading Teams", ar: "قيادة الفرق" },
    issuer: { en: "University of Michigan", ar: "جامعة ميشيغان" },
    date: { en: "Verified", ar: "موثق" },
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
    category: { en: "Management & Projects", ar: "الإدارة والمشاريع" },
    icon: <Boxes />,
    items: [
      { en: "Field Coordination", ar: "التنسيق الميداني" },
      { en: "Quality Control", ar: "ضبط الجودة" },
      { en: "Process Optimization", ar: "تحسين العمليات" }
    ]
  },
  {
    category: { en: "Creative Media", ar: "الإعلام الإبداعي" },
    icon: <Video />,
    items: [
      { en: "Cinematography", ar: "التصوير السينمائي" },
      { en: "Visual Storytelling", ar: "السرد البصري" },
      { en: "Production Management", ar: "إدارة الإنتاج" }
    ]
  },
  {
    category: { en: "Professional Mastery", ar: "الاتقان المهني" },
    icon: <ShieldCheck />,
    items: [
      { en: "Extreme Pressure Tolerance", ar: "تحمل الضغط الشديد" },
      { en: "Fast Learning Adaptability", ar: "سرعة التكيف والتعلم" },
      { en: "Team Leadership", ar: "قيادة الفرق" }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: IMAGES.site1,
    title: { en: "Hajj Operations Control", ar: "التحكم في عمليات الحج" },
    category: { en: "Field Ops", ar: "عمليات ميدانية" },
    caption: { en: "Coordinating workflows for 150k units during surge.", ar: "تنسيق مسارات العمل لـ ١٥٠ ألف وحدة خلال الذروة." },
    phase: { en: "Execution", ar: "التنفيذ" },
    kpi: { en: "150k Reach", ar: "وصول لـ ١٥٠ ألف" }
  },
  {
    src: IMAGES.site2,
    title: { en: "Strategic Reporting", ar: "التقارير الاستراتيجية" },
    category: { en: "Analysis", ar: "تحليل" },
    caption: { en: "Data-driven site assessment and documentation.", ar: "تقييم المواقع وتوثيقها بناءً على البيانات." },
    phase: { en: "Strategy", ar: "استراتيجية" },
    kpi: { en: "Zero Errors", ar: "صفر أخطاء" }
  }
];
