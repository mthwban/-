
import React from 'react';
import { 
  BarChart3, 
  Users, 
  Video, 
  TrendingUp, 
  Target, 
  UserCheck, 
  ShieldCheck, 
  Award, 
  LineChart, 
  Briefcase 
} from 'lucide-react';
import { ExperienceItem, CertificationItem, SkillGroup } from './types';

export const CONTACT_INFO = {
  phone: "+966566162529",
  whatsapp: "966566162529",
  email: "M.THWBAN@GMAIL.COM",
  linkedin: "https://www.linkedin.com/in/mohamed-imijine-32093b362"
};

// Colors based on branding: Imagine Deep Green #006233, Gold #c29b40
export const BRAND_COLORS = {
  primary: "#006233",
  secondary: "#c29b40"
};

export const UI_STRINGS = {
  nav: {
    about: { en: "About", ar: "نبذة" },
    services: { en: "Expertise", ar: "الخبرات" },
    experience: { en: "Career", ar: "المسيرة" },
    certifications: { en: "Credentials", ar: "الشهادات" },
    skills: { en: "Skills", ar: "المهارات" },
    process: { en: "Process", ar: "المنهجية" },
    contact: { en: "Contact", ar: "تواصل" }
  },
  hero: {
    status: { en: "Operations and Business Analysis Professional", ar: "محترف تحليل أعمال وتشغيل" },
    nameFirst: { en: "Mohamed Thwban", ar: "محمد ثوبان" },
    nameLast: { en: "Imijine", ar: "إميجن" },
    headline: { 
      en: "Business Analyst | Field Operations Lead | Content Strategist | Economist", 
      ar: "محلل أعمال | قائد عمليات ميدانية | استراتيجي محتوى | اقتصادي" 
    },
    ctaExplore: { en: "View Expertise", ar: "استكشاف الخبرات" },
    ctaContact: { en: "Start Collaboration", ar: "بدء التعاون" }
  },
  services: {
    badge: { en: "Core Pillars", ar: "الركائز الأساسية" },
    title: { en: "Integrated Strategic Solutions", ar: "حلول استراتيجية متكاملة" },
    items: [
      {
        icon: <LineChart className="w-8 h-8 text-[#c29b40]" />,
        title: { en: "Operations Analysis", ar: "تحليل العمليات" },
        desc: { 
          en: "Identifying operational gaps and enhancing workflow efficiency through data-driven insights.",
          ar: "تحديد الفجوات التشغيلية وتعزيز كفاءة سير العمل من خلال الرؤى المستندة إلى البيانات."
        }
      },
      {
        icon: <Target className="w-8 h-8 text-[#c29b40]" />,
        title: { en: "Strategic Marketing", ar: "التسويق الاستراتيجي" },
        desc: { 
          en: "Developing digital initiatives to increase brand awareness and market positioning.",
          ar: "تطوير المبادرات الرقمية لزيادة الوعي بالعلامة التجارية والتموضع في السوق."
        }
      },
      {
        icon: <Video className="w-8 h-8 text-[#c29b40]" />,
        title: { en: "Visual Storytelling", ar: "السرد القصصي المرئي" },
        desc: { 
          en: "High-end video production and cinematography to communicate brand value effectively.",
          ar: "إنتاج فيديو وتصوير سينمائي رفيع المستوى لإيصال قيمة العلامة التجارية بفعالية."
        }
      }
    ]
  },
  about: {
    badge: { en: "Professional Profile", ar: "الملف المهني" },
    title: { 
      en: "Precision in Analysis. Excellence in Execution.", 
      ar: "الدقة في التحليل. التميز في التنفيذ." 
    },
    p1: { 
      en: "A professional in business and operations analysis, with extensive field experience in performance optimization and operational efficiency. My academic background in Economics has shaped my analytical methodology and my understanding of the deep connection between processes and outcomes. This enables me to conduct comprehensive Business Analysis that supports strategic, data-driven decision-making in diverse field environments.", 
      ar: "خبير في تحليل الأعمال والعمليات، بخبرة ميدانية واسعة في تحسين الأداء ورفع الكفاءة التشغيلية. لقد صقلت دراستي للاقتصاد منهجيتي التحليلية وعمقت فهمي للارتباط الوثيق بين سير العمليات والنتائج المحققة، مما يمكنني من تقديم تحليل أعمال شامل يدعم اتخاذ القرارات الاستراتيجية القائمة على البيانات في مختلف البيئات الميدانية." 
    },
    p2: { 
      en: "Born in Makkah, Saudi Arabia. Whether overseeing Hajj site operations or leading multi-national election logistics, I am committed to delivering high-quality results and contributing to excellence-driven organizations.", 
      ar: "مواليد مكة المكرمة، المملكة العربية السعودية. سواء كنت أشرف على عمليات مواقع الحج أو أقود لوجستيات انتخابات دولية، فأنا ملتزم بتقديم نتائج عالية الجودة والمساهمة في المؤسسات التي تسعى للتميز." 
    },
    p3: { en: "Ready for your next milestone.", ar: "جاهز لإنجازك القادم." },
    origin: { en: "Born in Makkah, Saudi Arabia", ar: "مواليد مكة المكرمة، المملكة العربية السعودية" }
  },
  experience: {
    badge: { en: "Work History", ar: "السجل المهني" },
    title: { en: "Professional Journey", ar: "المسار المهني" }
  },
  certs: {
    badge: { en: "Validation", ar: "الاعتمادات" },
    title: { en: "Professional Certifications", ar: "الشهادات المهنية" },
    cta: { en: "Download Full CV", ar: "تحميل السيرة الذاتية" },
    verify: { en: "Verify Credential", ar: "تحقق من الشهادة" },
    inProgressTitle: { en: "Professional Development", ar: "التطوير المهني" },
    expectedSoon: { en: "Currently In Progress (Expected completion soon)", ar: "قيد التنفيذ حالياً (الموعد المتوقع قريباً)" }
  },
  skills: {
    badge: { en: "Competencies", ar: "الكفاءات" },
    title: { en: "Technical & Leadership Mastery", ar: "الإتقان التقني والقيادي" }
  },
  process: {
    badge: { en: "Workflow", ar: "سير العمل" },
    title: { en: "Methodical Approach to Growth", ar: "نهج منهجي للنمو" },
    steps: [
      {
        icon: <Briefcase className="w-8 h-8 text-[#c29b40]" />,
        title: { en: "Analysis", ar: "التحليل" },
        desc: { en: "In-depth review of existing workflows and business objectives.", ar: "مراجعة متعمقة لسير العمل الحالي وأهداف العمل." }
      },
      {
        icon: <Target className="w-8 h-8 text-[#c29b40]" />,
        title: { en: "Strategy", ar: "الاستراتيجية" },
        desc: { en: "Developing data-driven plans to address identified gaps.", ar: "تطوير خطط مستندة إلى البيانات لمعالجة الفجوات المحددة." }
      },
      {
        icon: <ShieldCheck className="w-8 h-8 text-[#c29b40]" />,
        title: { en: "Execution", ar: "التنفيذ" },
        desc: { en: "Implementing solutions with rigorous quality assurance.", ar: "تنفيذ الحلول مع ضمان الجودة الصارم." }
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-[#c29b40]" />,
        title: { en: "Optimization", ar: "التحسين" },
        desc: { en: "Continuous monitoring and refinement for maximum impact.", ar: "المراقبة والتحسين المستمر لتحقيق أقصى قدر من التأثير." }
      }
    ]
  },
  contact: {
    badge: { en: "Get in Touch", ar: "تواصل معي" },
    title: { en: "Let's innovate together.", ar: "لنبتكر معاً." },
    emailLabel: { en: "Direct Email", ar: "البريد المباشر" },
    linkedinLabel: { en: "LinkedIn Profile", ar: "لينكد إن" },
    locationLabel: { en: "Location", ar: "الموقع" },
    locationValue: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
    footerRights: { en: "All Rights Reserved", ar: "جميع الحقوق محفوظة" }
  },
  floating: {
    whatsapp: { en: "WhatsApp Message", ar: "مراسلتي عبر واتساب" }
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: { en: "Business Analyst – Operations & Maintenance", ar: "محلل أعمال – التشغيل والصيانة" },
    company: { en: "Manasik Al-Mulabbi Co. – King Abdulaziz Project (Royal Commission)", ar: "شركة مناسك الملبي – مشروع الملك عبدالعزيز (الهيئة الملكية)" },
    period: { en: "10/2024 – 10/2025", ar: "١٠/٢٠٢٤ – ١٠/٢٠٢٥" },
    description: [
      { en: "Oversaw year-round site operations and maintenance for Hady and Adah projects.", ar: "الإشراف على عمليات الموقع وصيانته طوال العام لمشاريع الهدي والأضاحي." },
      { en: "Ensured workflow continuity and team communication during the Hajj season through structured planning.", ar: "ضمان استمرارية سير العمل وتواصل الفرق خلال موسم الحج من خلال التخطيط الهيكلي." },
      { en: "Managed real-time daily reporting and identified operational efficiency gaps.", ar: "إدارة التقارير اليومية الفورية وتحديد فجوات الكفاءة التشغيلية." }
    ],
    tags: [
      { en: "Business Analysis", ar: "تحليل أعمال" },
      { en: "Field Ops", ar: "عمليات ميدانية" },
      { en: "Hajj Season", ar: "موسم الحج" }
    ]
  },
  {
    title: { en: "Committee Member – Presidential Elections", ar: "عضو لجنة – الانتخابات الرئاسية" },
    company: { en: "Mauritanian Consulate, Jeddah", ar: "القنصلية الموريتانية بجدة" },
    period: { en: "04/2023 – 08/2023", ar: "٠٤/٢٠٢٣ – ٠٨/٢٠٢٣" },
    description: [
      { en: "Organized voter registration and electoral lists with transparency and accuracy.", ar: "تنظيم تسجيل الناخبين والقوائم الانتخابية بشفافية ودقة." },
      { en: "Coordinated election operations and ensured compliance with official high-responsibility standards.", ar: "تنسيق عمليات الانتخابات وضمان الامتثال للمعايير الرسمية عالية المسؤولية." }
    ],
    tags: [
      { en: "Organization", ar: "تنظيم" },
      { en: "Compliance", ar: "امتثال" }
    ]
  },
  {
    title: { en: "Marketing Specialist", ar: "أخصائي تسويق" },
    company: { en: "Construction & Transportation Companies", ar: "شركات الإنشاءات والنقل" },
    period: { en: "2020 – 2023", ar: "٢٠٢٠ – ٢٠٢٣" },
    description: [
      { en: "Developed digital marketing initiatives to increase brand awareness.", ar: "تطوير مبادرات التسويق الرقمي لزيادة الوعي بالعلامة التجارية." },
      { en: "Explored effective online communication strategies to enhance market presence.", ar: "استكشاف استراتيجيات تواصل فعالة عبر الإنترنت لتعزيز التواجد في السوق." }
    ],
    tags: [
      { en: "Digital Marketing", ar: "تسويق رقمي" },
      { en: "Strategy", ar: "استراتيجية" }
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: { en: "Google Project Management Professional Certificate", ar: "شهادة جوجل الاحترافية في إدارة المشاريع" },
    issuer: { en: "Coursera", ar: "كورسيرا" },
    date: { en: "2024", ar: "٢٠٢٤" },
    url: "https://coursera.org/verify/professional-cert/BB2H5F57UU1E"
  },
  {
    title: { en: "Small Business Social Media Marketing on Facebook", ar: "التسويق للمشاريع الصغيرة عبر موقع التواصل فيسبوك" },
    issuer: { en: "Coursera Project Network", ar: "كورسيرا" },
    date: { en: "2023", ar: "٢٠٢٣" },
    url: "https://coursera.org/verify/1YKOO0BLUAC4"
  },
  {
    title: { en: "Leading Teams: Developing as a Leader", ar: "قيادة الفرق: التطور كقائد" },
    issuer: { en: "University of Michigan", ar: "جامعة ميشيغان" },
    date: { en: "2024", ar: "٢٠٢٤" },
    url: "https://coursera.org/verify/HZ3HI46GM6TI"
  },
  {
    title: { en: "Ready to Roll – The Video Production Process", ar: "عملية إنتاج الفيديو - جاهز للبدء" },
    issuer: { en: "University of Colorado Boulder", ar: "جامعة كولورادو بولدر" },
    date: { en: "2024", ar: "٢٠٢٤" },
    url: "https://coursera.org/verify/MNQTL62TBRVL"
  },
  {
    title: { en: "“Tirhab” Soft Skills for Frontline Employees", ar: "برنامج ترحاب للمهارات الناعمة (خدمة ضيوف الرحمن)" },
    issuer: { en: "Ministry of Hajj and Umrah", ar: "وزارة الحج والعمرة" },
    date: { en: "2024", ar: "٢٠٢٤" },
    url: "https://www.terhab-hajj.com/Certification/4"
  }
];

export const IN_PROGRESS_CERT = {
  title: { en: "Google Digital Marketing & E-Commerce", ar: "جوجل في التسويق الرقمي والتجارة الإلكترونية" },
  issuer: { en: "Coursera in partnership with Google", ar: "كورسيرا بالشراكة مع جوجل" },
  progress: 88,
  status: { en: "Currently In Progress (Expected completion soon)", ar: "قيد التنفيذ حالياً (الموعد المتوقع قريباً)" }
};

export const SKILLS: SkillGroup[] = [
  {
    category: { en: "Operations & Analysis", ar: "التشغيل والتحليل" },
    icon: <BarChart3 className="w-6 h-6 text-[#c29b40]" />,
    items: [
      { en: "Process Improvement", ar: "تحسين العمليات" },
      { en: "Data Analysis", ar: "تحليل البيانات" },
      { en: "Reporting", ar: "إعداد التقارير" },
      { en: "Quality Assurance", ar: "ضمان الجودة" }
    ]
  },
  {
    category: { en: "Visual & Digital production", ar: "الإنتاج المرئي والرقمي" },
    icon: <Video className="w-6 h-6 text-[#c29b40]" />,
    items: [
      { en: "Cinematography", ar: "تصوير سينمائي" },
      { en: "Video Editing", ar: "مونتاج الفيديو" },
      { en: "Digital Marketing", ar: "تسويق رقمي" },
      { en: "Visual Content", ar: "محتوى مرئي" }
    ]
  },
  {
    category: { en: "Leadership & Strategy", ar: "القيادة والاستراتيجية" },
    icon: <UserCheck className="w-6 h-6 text-[#c29b40]" />,
    items: [
      { en: "Team Leadership", ar: "قيادة الفرق" },
      { en: "Communication", ar: "مهارات التواصل" },
      { en: "Time Management", ar: "إدارة الوقت" },
      { en: "Critical Thinking", ar: "تفكير نقدي" }
    ]
  }
];
