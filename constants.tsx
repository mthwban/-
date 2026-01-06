import React from 'react';
import { 
  Users, ShieldCheck, Wrench, Truck, Zap, Scale, Smartphone, 
  GraduationCap, Landmark, Globe, Snowflake, Package, HeartPulse,
  Video, Target, TrendingUp, Award, Eye, LineChart, Clock, FileText,
  Facebook, Search, Camera, Dumbbell, Microscope, Shield, 
  ClipboardCheck, HardHat, Presentation, Settings, MapPin
} from 'lucide-react';
import { GalleryItem, Experience, Skill, Certification } from './types.ts';

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
  coldChain: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
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
    headline: { en: "Precision Execution Powered by Economic Logic.", ar: "دقة التنفيذ مدعومة بالمنطق الاقتصادي الرصين." },
    ctaPrimary: { en: "Field Evidence", ar: "الإثبات الميداني" },
    ctaSecondary: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
    ctaContact: { en: "Hire Strategist", ar: "تواصل للتوظيف" },
    pmpBadge: { en: "PMP Candidate", ar: "مرشح PMP" },
    pmpHours: { en: "158+ Accredited Hours", ar: "158+ ساعة معتمدة" },
    trainingLabel: { en: "Global Training", ar: "التدريب العالمي" },
    trainingDetail: { en: "180+ Hours Certified", ar: "180+ ساعة معتمدة" },
    trainingCounter: { en: "Specialized Training Hours", ar: "ساعة تدريبية معتمدة" }
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
    healthLead: { en: "Health Control Lead", ar: "قائد مراقبة الصحة" }
  },
  fieldEvidence: {
    title: { en: "The Proven Method.", ar: "المنهجية المثبتة." },
    location: { en: "Strategic Presence in Saudi Arabia", ar: "تواجد استراتيجي في المملكة العربية السعودية" },
    opMetric: { en: "Operational Efficiency", ar: "الكفاءة التشغيلية" },
    workflowAnalysis: { en: "Workflow Analysis", ar: "تحليل سير العمل" },
    viewLogs: { en: "View Logs", ar: "عرض السجلات" },
    cases: [
      {
        id: "cold-chain-2024",
        image: "coldChain",
        kpi: "99.8% Uptime",
        title: { en: "Cold Chain Master Command", ar: "قيادة سلسلة التبريد المتكاملة" },
        description: { en: "Supervising critical industrial refrigeration for high-stakes logistics operations in Jeddah.", ar: "الإشراف على التبريد الصناعي الحيوي للعمليات اللوجستية عالية الأهمية في جدة." },
        steps: [
          { icon: <Snowflake />, label: { en: "Climate Control", ar: "التحكم المناخي" } },
          { icon: <Shield />, label: { en: "Risk Audit", ar: "تدقيق المخاطر" } }
        ]
      }
    ]
  },
  certifications: {
    badge: { en: "Professional Milestones", ar: "المعالم الاحترافية" },
    title: { en: "Accredited Logic.", ar: "المنطق المعتمد." },
    verifyLabel: { en: "Verification", ar: "التحقق" },
    approved: { en: "Verified", ar: "معتمد" }
  },
  development: {
    badge: { en: "Ongoing Growth", ar: "نمو مستمر" },
    items: [
      {
        icon: <ShieldCheck />,
        title: { en: "PMP Certification", ar: "شهادة PMP" },
        issuer: { en: "PMI", ar: "معهد إدارة المشاريع" },
        status: { en: "In Progress (158 Hours Completed)", ar: "قيد المراجعة (تم إكمال 158 ساعة)" }
      }
    ]
  },
  hobbies: {
    title: { en: "Personal Drive", ar: "الشغف الشخصي" },
    items: [
      {
        icon: <Video />,
        title: { en: "Creative Editing", ar: "المونتاج الإبداعي" },
        desc: { en: "Expertise in CapCut & Visual Storytelling.", ar: "خبرة في CapCut ورواية القصص البصرية." }
      },
      {
        icon: <Dumbbell />,
        title: { en: "Strategic Fitness", ar: "اللياقة الاستراتيجية" },
        desc: { en: "Calisthenics & Strength Training.", ar: "رياضة الكاليسثينيكس وتمارين القوة." }
      },
      {
        icon: <Globe />,
        title: { en: "Digital Impact", ar: "الأثر الرقمي" },
        desc: { en: "Social Media Strategic Marketing.", ar: "التسويق الاستراتيجي عبر قنوات التواصل." }
      }
    ]
  },
  contact: {
    title: { en: "Connect with the Strategist.", ar: "تواصل مع المحلل الاستراتيجي." },
    subtitle: { en: "Let's align your operations with economic reality.", ar: "لنقم بمواءمة عملياتك مع الواقع الاقتصادي." },
    linkedin: { en: "LinkedIn Profile", ar: "الملف الشخصي على لينكد إن" },
    footer: { en: "Execution by Thwban", ar: "التنفيذ بواسطة ثوبان" }
  }
};

export const EXPERIENCES: Experience[] = [
  {
    title: { en: "Operations & Fridge Commander", ar: "قائد العمليات والثلاجات" },
    company: { en: "Adahi Project", ar: "مشروع أضاحي" },
    period: { en: "10/2024 - Present", ar: "10/2024 - حتى الآن" },
    description: [
      { en: "Commanding cold-chain logistics for industrial-scale distribution.", ar: "قيادة اللوجستيات لسلسلة التبريد للتوزيع على نطاق صناعي." },
      { en: "Audit of unit flow to ensure 100% adherence to safety protocols.", ar: "تدقيق تدفق الوحدات لضمان الالتزام بنسبة 100% ببروتوكولات السلامة." }
    ],
    tags: [
      { en: "Cold Chain", ar: "سلسلة التبريد" },
      { en: "Operations", ar: "العمليات" }
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: { en: "Strategy & Analysis", ar: "الاستراتيجية والتحليل" },
    icon: <Target />,
    items: [
      { en: "Operations Analysis", ar: "تحليل العمليات" },
      { en: "Economic ROI Logic", ar: "منطق العائد الاقتصادي" },
      { en: "Project Management", ar: "إدارة المشاريع" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: { en: "Google Project Management", ar: "إدارة المشاريع من جوجل" },
    issuer: { en: "Google (Coursera)", ar: "جوجل (كورسيرا)" },
    date: { en: "2024", ar: "2024" },
    url: "https://coursera.org"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: IMAGES.truckOps,
    title: { en: "Logistics Flow", ar: "تدفق اللوجستيات" },
    category: { en: "Field Ops", ar: "العمليات الميدانية" },
    caption: { en: "Optimizing truck dispatch for industrial efficiency.", ar: "تحسين إرسال الشاحنات للكفاءة الصناعية." },
    phase: { en: "Execution", ar: "التنفيذ" },
    kpi: { en: "40k Units", ar: "40 ألف وحدة" }
  }
];
