
import React from 'react';
import { 
  Users, ShieldCheck, Wrench, Truck, Zap, Scale, Smartphone, 
  GraduationCap, Landmark, Globe, Snowflake, Package, HeartPulse,
  Video, Target, TrendingUp, Award, Eye, LineChart, Clock, FileText,
  Facebook, Search, Camera, Dumbbell, Microscope, Shield, 
  ClipboardCheck, HardHat, Presentation, Settings, MapPin
} from 'lucide-react';
import { GalleryItem } from './types.ts';

// ... (بقية الملف كما هو بدون تغيير في القيم)
export const CONTACT_INFO = {
  phone: "+966566162529",
  whatsapp: "966566162529",
  email: "M.THWBAN@GMAIL.COM",
  linkedin: "https://www.linkedin.com/in/mohamed-imijine-32093b362",
  resume: "https://drive.google.com/file/d/1x0cn40NvPvJuYFmlmFIjDbccFW1xc5kR/view?usp=sharing"
};

export const IMAGES = {
  profile: "https://lh3.googleusercontent.com/d/1Zijt_bmcVaL1Tqk9oiRXTuG5Cm4jPK30",
  fieldSelfie: "https://lh3.googleusercontent.com/d/1Zijt_bmcVaL1Tqk9oiRXTuG5Cm4jPK30", 
  truckOps: "https://lh3.googleusercontent.com/d/1BfVl4x2P6_zS88I-F1_846-x_yvP-m5W", 
  industrialFacility: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200", 
};

export const UI_STRINGS = {
  brand: { en: "THWBAN", ar: "ثوبان" },
  nav: {
    services: { en: "Expertise", ar: "الخبرات" },
    about: { en: "Strategy", ar: "الاستراتيجية" },
    vision: { en: "Vision", ar: "الرؤية" },
    experience: { en: "Command", ar: "القيادة" },
    portfolio: { en: "Field Proof", ar: "الإثبات الميداني" },
    certifications: { en: "Milestones", ar: "الإنجازات" },
    skills: { en: "Skills", ar: "المهارات" },
    contact: { en: "Connect", ar: "تواصل" },
  },
  hero: {
    badge: { en: "OPERATIONS & BUSINESS ANALYSIS PROFESSIONAL", ar: "محترف تحليل أعمال وعمليات" },
    nameFirst: { en: "Mohamed", ar: "محمد" },
    nameLast: { en: "Thwban", ar: "ثوبان" },
    analyst: { en: "STRATEGIC ANALYST", ar: "محلل استراتيجي" },
    headline: { en: "Precision Execution Powered by Economic Logic.", ar: "دقة التنفيذ مدعومة بالمنطق الاقتصادي الرصين." },
    ctaPrimary: { en: "Field Evidence", ar: "الإثبات الميداني" },
    ctaSecondary: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
    ctaContact: { en: "Hire Strategist", ar: "تواصل للتوظيف" },
    pmpBadge: { en: "PMP Candidate", ar: "مرشح PMP" },
    pmpHours: { en: "158+ Accredited Hours", ar: "158+ ساعة معتمدة" },
    trainingLabel: { en: "Global Training", ar: "التدريب العالمي" },
    trainingDetail: { en: "180+ Hours Certified", ar: "180+ ساعة معتمدة" },
    trainingCounter: { en: "Specialized Training Hours", ar: "ساعة تدريبية معتمدة" },
    bornIn: { en: "Born in Saudi Arabia", ar: "مواليد المملكة العربية السعودية" }
  },
  about: {
    badge: { en: "The ROI Logic", ar: "منطق العائد" },
    title: { en: "Operational Strategy.", ar: "الاستراتيجية التشغيلية." },
    text: { 
      en: "I bridge the gap between economic theory and field execution. With a background in Economics and a decade of field command, I ensure every operational move is backed by financial logic.",
      ar: "أقوم بسد الفجوة بين النظرية الاقتصادية والتنفيذ الميداني. مع خلفية في الاقتصاد وعقد من القيادة الميدانية، أضمن أن كل خطوة تشغيلية مدعومة بمنطق مالي وعلمي رصين."
    },
    metrics: [
      { value: "10y+", label: { en: "Field Command", ar: "قيادة ميدانية" } },
      { value: "40k", label: { en: "Units Managed", ar: "وحدة مدارة" } },
      { value: "100%", label: { en: "HSE Integrity", ar: "نزاهة السلامة" } }
    ],
    roiTitle: { en: "Strategic Efficiency", ar: "الكفاءة الاستراتيجية" },
    roiDesc: { en: "Maximizing output while strictly minimizing operational waste through data-driven auditing.", ar: "تعظيم المخرجات مع تقليل الهدر التشغيلي بشكل صارم من خلال التدقيق القائم على البيانات." }
  },
  vision: {
    badge: { en: "Future Proof", ar: "جاهزية المستقبل" },
    title: { en: "Architect of Precision.", ar: "مهندس الدقة." },
    text: { 
      en: "To transform complex field operations into streamlined, data-backed economic successes.",
      ar: "تحويل العمليات الميدانية المعقدة إلى نجاحات اقتصادية مبسطة ومدعومة بالبيانات والتحليل الاقتصادي الدقيق."
    },
    maxRoi: { en: "Maximum ROI", ar: "أقصى عائد" },
    preciseEco: { en: "Precise Economic Logic", ar: "منطق اقتصادي دقيق" },
    minWaste: { en: "Minimal Waste", ar: "أدنى هدر" },
    strictControl: { en: "Strict Process Control", ar: "رقابة صارمة على العمليات" }
  },
  services: {
    badge: { en: "Core Expertise", ar: "الخبرات الجوهرية" },
    title: { en: "Strategic Solutions.", ar: "حلول استراتيجية." },
    items: [
      { 
        icon: <Target className="w-12 h-12" />, 
        title: { en: "Operations Analysis", ar: "تحليل العمليات" }, 
        desc: { en: "Deep-dive auditing of field workflows to identify bottlenecks and efficiency gains.", ar: "تدقيق عميق في سير العمل الميداني لتحديد الاختناقات وتحقيق مكاسب الكفاءة." } 
      },
      { 
        icon: <Zap className="w-12 h-12" />, 
        title: { en: "Project Command", ar: "قيادة المشاريع" }, 
        desc: { en: "Leading high-stakes projects from initiation to closure with PMP-aligned methodology.", ar: "قيادة المشاريع عالية الأهمية من البداية إلى الإغلاق بمنهجية متوافقة مع PMP وجوجل." } 
      },
      { 
        icon: <TrendingUp className="w-12 h-12" />, 
        title: { en: "Growth Strategy", ar: "استراتيجية النمو" }, 
        desc: { en: "Integrating digital marketing ROI with operational efficiency to scale business impact.", ar: "دمج عائد التسويق الرقمي مع الكفاءة التشغيلية لتوسيع أثر الأعمال." } 
      }
    ]
  },
  process: {
    badge: { en: "Execution Framework", ar: "إطار التنفيذ" },
    title: { en: "The Precision Cycle.", ar: "دورة الدقة التشغيلية." },
    steps: [
      {
        icon: <Search className="w-6 h-6" />,
        title: { en: "Diagnostic Audit", ar: "التدقيق التشخيصي" },
        desc: { en: "Mapping existing workflows to pinpoint economic leakages.", ar: "رسم خرائط سير العمل الحالية لتحديد مواضع التسرب الاقتصادي." }
      },
      {
        icon: <Presentation className="w-6 h-6" />,
        title: { en: "Strategic Design", ar: "التصميم الاستراتيجي" },
        desc: { en: "Architecting scalable operations backed by financial ROI logic.", ar: "هندسة عمليات قابلة للتطوير مدعومة بمنطق العائد المالي." }
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: { en: "Tactical Launch", ar: "الإطلاق التكتيكي" },
        desc: { en: "Executing high-pressure field operations with PMP rigor.", ar: "تنفيذ العمليات الميدانية عالية الضغط بصرامة منهجية PMP." }
      },
      {
        icon: <LineChart className="w-6 h-6" />,
        title: { en: "Performance Scale", ar: "توسيع الأداء" },
        desc: { en: "Refining data outputs to ensure long-term operational stability.", ar: "تحسين مخرجات البيانات لضمان الاستقرار التشغيلي طويل الأمد." }
      }
    ],
    footer: { en: "Precision in process is the bridge between goals and results.", ar: "الدقة في العمليات هي الجسر بين الأهداف والنتائج." }
  },
  experience: {
    badge: { en: "Career Milestones", ar: "المحطات المهنية" },
    title: { en: "Field History.", ar: "التاريخ الميداني." },
    climateLogistics: { en: "Cold-Chain Control", ar: "التحكم بسلسلة التبريد" },
    fridgeCommand: { en: "Industrial Fridge Ops", ar: "عمليات الثلاجات الصناعية" },
    outputFlow: { en: "Output Flow", ar: "تدفق المخرجات" },
    globalDispatch: { en: "Global Supply Chain", ar: "سلسلة التوريد العالمية" },
    healthSafety: { en: "Safety Command", ar: "قيادة السلامة" },
    healthLead: { en: "HSE Leadership", ar: "قيادة الصحة والسلامة" }
  },
  fieldEvidence: {
    title: { en: "Visual Proof.", ar: "الإثبات البصري." },
    location: { en: "Al-Muaisem Complex, Makkah", ar: "مجمع المعيصم، مكة المكرمة" },
    opMetric: { en: "Op Metric", ar: "مقياس العمليات" },
    workflowAnalysis: { en: "Workflow Analysis", ar: "تحليل سير العمل" },
    viewLogs: { en: "View Field Logs", ar: "عرض السجلات الميدانية" },
    cases: [
      {
        id: "c1",
        image: "truckOps",
        kpi: "40,000+",
        title: { en: "Logistics Optimization", ar: "تحسين اللوجستيات" },
        description: { en: "Coordinating high-volume industrial transport with zero downtime during Hajj seasons.", ar: "تنسيق النقل الصناعي عالي الحجم مع صفر وقت توقف خلال مواسم الحج." },
        steps: [
          { icon: <Truck className="w-5 h-5" />, label: { en: "Transport Sync", ar: "مزامنة النقل" } },
          { icon: <Clock className="w-5 h-5" />, label: { en: "Real-time Tracking", ar: "تتبع فوري" } }
        ]
      },
      {
        id: "c2",
        image: "industrialFacility",
        kpi: "99.9%",
        title: { en: "Facility Readiness", ar: "جاهزية المرافق" },
        description: { en: "Maintaining operational integrity in complex industrial environments and cooling systems.", ar: "الحفاظ على النزاهة التشغيلية في البيئات الصناعية المعقدة وأنظمة التبريد." },
        steps: [
          { icon: <Wrench className="w-5 h-5" />, label: { en: "Maintenance", ar: "الصيانة" } },
          { icon: <Shield className="w-5 h-5" />, label: { en: "HSE Compliance", ar: "الالتزام بالسلامة" } }
        ]
      }
    ]
  },
  certifications: {
    badge: { en: "Verified Credentials", ar: "الاعتمادات الموثقة" },
    title: { en: "Professional Validation.", ar: "التوثيق المهني." },
    approved: { en: "VERIFIED", ar: "موثق" },
    verifyLabel: { en: "Click to Verify", ar: "انقر للتحقق" }
  },
  development: {
    badge: { en: "Continuous Learning", ar: "التعلم المستمر" },
    title: { en: "Strategic Growth Paths.", ar: "مسارات النمو الاستراتيجي." },
    items: [
      {
        title: { en: "PMP® Final Prep", ar: "التحضير النهائي لـ PMP®" },
        issuer: { en: "PMI Global", ar: "معهد PMI العالمي" },
        status: { en: "Experience Approved - Final Exam Phase", ar: "تم اعتماد الخبرة - مرحلة الاختبار النهائي" },
        icon: <ShieldCheck className="w-8 h-8" />
      },
      {
        title: { en: "Advanced Digital Marketing", ar: "التسويق الرقمي المتقدم" },
        issuer: { en: "Meta / Google", ar: "ميتا / جوجل" },
        status: { en: "Integrating Social ROI into Operations", ar: "دمج العائد الاجتماعي في العمليات" },
        icon: <TrendingUp className="w-8 h-8" />
      }
    ]
  },
  contact: {
    title: { en: "Initiate Command.", ar: "بدء التواصل." },
    subtitle: { en: "Ready to optimize your next operation?", ar: "جاهز لتحسين عمليتك القادمة؟" },
    linkedin: { en: "Connect on LinkedIn", ar: "تواصل عبر لينكد إن" },
    footer: { en: "Strategic Operations Architect", ar: "مهندس العمليات الاستراتيجية" }
  },
  ai: {
    suggested: [
      { en: "Verify Certifications", ar: "تحقق من الشهادات" },
      { en: "Analyze Job Compatibility", ar: "تحليل الملاءمة الوظيفية" },
      { en: "View Hajj Field Logs", ar: "عرض سجلات الحج الميدانية" }
    ]
  },
  hobbies: {
    title: { en: "Operational Discipline", ar: "الانضباط التشغيلي" },
    items: [
      { icon: <Dumbbell className="w-6 h-6" />, title: { en: "Endurance", ar: "التحمل" }, desc: { en: "Mental and physical resilience training.", ar: "التدريب على المرونة الذهنية والبدنية." } },
      { icon: <Camera className="w-6 h-6" />, title: { en: "Visual Audit", ar: "التدقيق البصري" }, desc: { en: "Capturing precision in industrial environments.", ar: "التقاط الدقة في البيئات الصناعية." } },
      { icon: <Video className="w-6 h-6" />, title: { en: "Media Logic", ar: "منطق الوسائط" }, desc: { en: "Structural storytelling and editing.", ar: "سرد القصص الهيكلي والتحرير." } }
    ]
  }
};

export const CERTIFICATIONS = [
  {
    title: { en: "Google Project Management Certificate", ar: "شهادة جوجل الاحترافية في إدارة المشاريع" },
    issuer: { en: "Google / Coursera", ar: "جوجل / كورسيرا" },
    date: { en: "Oct 2025", ar: "أكتوبر 2025" },
    url: "https://coursera.org/verify/professional-cert/BB2H5F57UU1E"
  },
  {
    title: { en: "Leading Teams (University of Michigan)", ar: "قيادة الفرق (جامعة ميشيغان)" },
    issuer: { en: "University of Michigan", ar: "جامعة ميشيغان" },
    date: { en: "Nov 2025", ar: "نوفمبر 2025" },
    url: "https://coursera.org/verify/HZ3HI46GM6TI"
  },
  {
    title: { en: "Social Media Marketing for Small Business", ar: "تسويق المشاريع الصغيرة عبر التواصل الاجتماعي" },
    issuer: { en: "Meta / Facebook", ar: "ميتا / فيسبوك" },
    date: { en: "Oct 2025", ar: "أكتوبر 2025" },
    url: "https://coursera.org/verify/1YKOO0BLUAC4"
  },
  {
    title: { en: "Video Production Process", ar: "عملية إنتاج الفيديو" },
    issuer: { en: "University of Colorado Boulder", ar: "جامعة كولورادو بولدر" },
    date: { en: "Oct 2025", ar: "أكتوبر 2025" },
    url: "https://coursera.org/verify/MNQTL62TBRVL"
  },
  {
    title: { en: "Tirhab Soft Skills Program", ar: "برنامج ترحاب للمهارات الناعمة (خدمة ضيوف الرحمن)" },
    issuer: { en: "Ministry of Hajj & Umrah", ar: "وزارة الحج والعمرة" },
    date: { en: "June 2022", ar: "يونيو 2022" },
    url: "https://www.terhab-hajj.com/Certification/4"
  },
  {
    title: { en: "Grouping (Tafweej) Organization Training", ar: "تأهيل العاملين في منظومة التفويج" },
    issuer: { en: "Ministry of Hajj & Umrah", ar: "وزارة الحج والعمرة" },
    date: { en: "July 2022", ar: "يوليو 2022" },
    url: "https://www.terhab-hajj.com/Certification/5"
  },
  {
    title: { en: "Bachelor of Economics", ar: "بكالوريوس في الاقتصاد" },
    issuer: { en: "Umm Al-Qura University", ar: "جامعة أم القرى" },
    date: { en: "Aug 2018", ar: "أغسطس 2018" },
    url: "https://uqu.edu.sa"
  }
];

export const EXPERIENCES = [
  {
    title: { en: "Operations & Business Analyst", ar: "محلل أعمال وعمليات" },
    company: { en: "Manassik Al-Mulabbi Co. – Royal Commission", ar: "شركة مناسك الملبي – الهيئة الملكية" },
    period: { en: "2024 – 2025", ar: "2024 – 2025" },
    description: [
      { en: "Oversaw high-capacity industrial facilities at Al-Muaisem Complex 2.", ar: "الإشراف على المرافق الصناعية عالية السعة في مجمع المعيصم 2." },
      { en: "Developed structured tactical reports for executive decision-making.", ar: "تطوير تقارير تكتيكية هيكلية لاتخاذ القرار التنفيذي." },
      { en: "Ensured seamless logistics coordination during peak Hajj operations.", ar: "ضمان تنسيق لوجستي سلس خلال ذروة عمليات الحج." }
    ],
    tags: [{ en: "Industrial Ops", ar: "العمليات الصناعية" }, { en: "Analytics", ar: "التحليلات" }, { en: "HSE", ar: "السلامة" }]
  },
  {
    title: { en: "Digital Marketing Specialist", ar: "أخصائي تسويق رقمي" },
    company: { en: "Freelance / Strategic Growth Projects", ar: "مشاريع نمو استراتيجية مستقلة" },
    period: { en: "2023 – Present", ar: "2023 – الحالي" },
    description: [
      { en: "Designing high-conversion marketing funnels for SME growth.", ar: "تصميم مسارات تسويقية عالية التحويل لنمو المشاريع الصغيرة والمتوسطة." },
      { en: "Analyzing audience segmentation data via Meta/Facebook logic.", ar: "تحليل بيانات تقسيم الجمهور عبر منطق ميتا/فيسبوك." }
    ],
    tags: [{ en: "Marketing", ar: "التسويق" }, { en: "Growth", ar: "النمو" }, { en: "Meta Certified", ar: "معتمد من ميتا" }]
  },
  {
    title: { en: "Electoral Steering Committee Member", ar: "عضو لجنة تسيير الانتخابات" },
    company: { en: "Mauritanian Consulate, Jeddah", ar: "القنصلية الموريتانية، جدة" },
    period: { en: "2023", ar: "2023" },
    description: [
      { en: "Controlled logistical integrity for voter registration workflows.", ar: "التحكم في النزاهة اللوجستية لسير عمل تسجيل الناخبين." },
      { en: "Managed cross-functional coordination for national missions.", ar: "إدارة التنسيق عبر الوظائف للمهام الوطنية." }
    ],
    tags: [{ en: "Governance", ar: "الحوكمة" }, { en: "Logistics", ar: "اللوجستيات" }]
  },
  {
    title: { en: "Field Commander (10 Hajj Seasons)", ar: "قائد ميداني (10 مواسم حج)" },
    company: { en: "Ministry of Hajj & Umrah Sector", ar: "قطاع وزارة الحج والعمرة" },
    period: { en: "2013 – 2023", ar: "2013 – 2023" },
    description: [
      { en: "Led Tafweej (Grouping) units in high-pressure field conditions.", ar: "قيادة وحدات التفويج في ظروف ميدانية عالية الضغط." },
      { en: "Monitored crowd safety KPIs and real-time operational flows.", ar: "مراقبة مؤشرات أداء سلامة الحشود والتدفقات التشغيلية اللحظية." }
    ],
    tags: [{ en: "Crowd Command", ar: "قيادة الحشود" }, { en: "Crisis Ops", ar: "عمليات الأزمات" }]
  }
];

export const SKILLS = [
  {
    category: { en: "Strategic Command", ar: "القيادة الاستراتيجية" },
    items: [
      { en: "Workflow Sync", ar: "مزامنة سير العمل" },
      { en: "Tactical Reporting", ar: "التقارير التكتيكية" },
      { en: "ROI Logic", ar: "منطق العائد" }
    ],
    icon: <Zap className="w-8 h-8" />
  },
  {
    category: { en: "Technical Intelligence", ar: "الذكاء الفني" },
    items: [
      { en: "Process Audit", ar: "تدقيق العمليات" },
      { en: "Visual Production", ar: "الإنتاج البصري" },
      { en: "Digital Strategy", ar: "الاستراتيجية الرقمية" }
    ],
    icon: <Settings className="w-8 h-8" />
  },
  {
    category: { en: "Core Discipline", ar: "الانضباط الجوهري" },
    items: [
      { en: "Crisis Ops", ar: "عمليات الأزمات" },
      { en: "HSE Integrity", ar: "نزاهة السلامة" },
      { en: "Team Alignment", ar: "محاذاة الفرق" }
    ],
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: IMAGES.truckOps,
    title: { en: "Hajj Logistics", ar: "لوجستيات الحج" },
    category: { en: "Field Ops", ar: "عمليات ميدانية" },
    caption: { en: "Managing 40k+ production units during seasonal peak.", ar: "إدارة أكثر من 40 ألف وحدة إنتاج خلال الذروة الموسمية." },
    phase: { en: "Execution", ar: "التنفيذ" },
    kpi: { en: "40k Units", ar: "40 ألف وحدة" }
  },
  {
    src: IMAGES.industrialFacility,
    title: { en: "Industrial O&M", ar: "التشغيل والصيانة" },
    category: { en: "Facility Mgmt", ar: "إدارة المرافق" },
    caption: { en: "Overseeing critical industrial infrastructure and cooling systems.", ar: "الإشراف على البنية التحتية الصناعية الحيوية وأنظمة التبريد." },
    phase: { en: "Control", ar: "التقابة" },
    kpi: { en: "99.9% Uptime", ar: "99.9% جاهزية" }
  }
];
