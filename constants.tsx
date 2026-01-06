
import React from 'react';
import { 
  Target, Zap, TrendingUp, Award, Clock, ShieldCheck, Mail, Linkedin, 
  MapPin, Search, Presentation, LineChart, Snowflake, Package, 
  HeartPulse, Video, Dumbbell, Globe, Users, Database, Shield, Activity, 
  Cpu, Layout, BarChart, Hammer, Thermometer, Settings, ClipboardList, HelpCircle, 
  Flame, Film, Camera, Layers, Briefcase, Play, FileText, CheckCircle, 
  Facebook, CameraIcon, Scissors, Monitor, Landmark, PieChart, Star, Truck, Factory, Boxes, Home, Code, Palette, Smartphone, Clapperboard
} from 'lucide-react';
import { GalleryItem, Experience, Skill, Certification } from './types.ts';

export const CONTACT_INFO = {
  phone: "+966566162529",
  whatsapp: "966566162529",
  email: "M.THWBAN@GMAIL.COM",
  linkedin: "https://www.linkedin.com/in/mohamed-imijine-32093b362",
  resume: "https://drive.google.com/file/d/1x0cn40NvPvJuYFmlmFIjDbccFW1xc5kR/view?usp=sharing",
  dob: "1995/05/21",
  nationality: { en: "Mauritanian", ar: "موريتاني" },
  birthPlace: { en: "Born & Raised in Makkah, KSA", ar: "مواليد مكة المكرمة، السعودية" }
};

export const IMAGES = {
  profile: "https://lh3.googleusercontent.com/d/1Zijt_bmcVaL1Tqk9oiRXTuG5Cm4jPK30",
  fieldSelfie: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2000&auto=format&fit=crop", // Field Inspection Selfie
  logistics: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop", // Truck at sunset
  meeting: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop", // Strategic Meeting
  operations: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop", // Industrial interior
  loading: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2000&auto=format&fit=crop", // Forklift loading
  waste: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop", // Skip/Waste management
  container: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2000&auto=format&fit=crop", // Container dispatch
};

export const UI_STRINGS = {
  brand: { en: "THWBAN", ar: "ثوبان" },
  nav: {
    about: { en: "Pillars", ar: "الركائز المهنية" },
    services: { en: "Expertise", ar: "الخبرات" },
    experience: { en: "Logistics Timeline", ar: "المسار اللوجستي" },
    portfolio: { en: "Showcase", ar: "معرض الأعمال" },
    certifications: { en: "Certs", ar: "الشهادات" },
    skills: { en: "Capabilities", ar: "القدرات" },
    contact: { en: "Connect", ar: "تواصل" },
  },
  hero: {
    badge: { en: "OPERATIONS | VISUAL ARTS | DIGITAL ARCHITECTURE", ar: "عمليات | فنون بصرية | عمارة رقمية" },
    nameFirst: { en: "Mohamed", ar: "محمد" },
    nameLast: { en: "Thwban", ar: "ثوبان" },
    headline: { 
      en: "Economist and Industrial Operations Specialist managing 150k unit surges. Simultaneously a Cinematographer and Digital Architect crafting elite visual presence.", 
      ar: "اقتصادي وأخصائي عمليات صناعية يدير تدفقات الـ 150 ألف وحدة. وفي الوقت ذاته، مصور سينمائي ومهندس رقمي يصيغ حضوراً بصرياً نخبوياً." 
    },
    ctaPrimary: { en: "Analyze Dossier", ar: "تحليل الملف" },
    ctaSecondary: { en: "View Credentials", ar: "عرض الاعتمادات" },
    ctaContact: { en: "Direct Link", ar: "رابط مباشر" },
    ctaFastTrack: { en: "Executive Mode", ar: "الوضع التنفيذي" },
    ctaVoice: { en: "Voice Bio", ar: "نبذة صوتية" },
    glowingFocus: {
      pmp: { en: "PMP® Certification", ar: "شهادة PMP® الاحترافية" },
      marketing: { en: "Digital Marketing", ar: "التسويق الرقمي" },
      pmpStatus: { en: "Candidate / In Progress", ar: "مرشح / قيد التحضير" },
      marketingStatus: { en: "Specialization Track", ar: "قيد التخصص" }
    }
  },
  about: {
    badge: { en: "The Specialized Hybrid", ar: "الهجين المتخصص" },
    title: { en: "Independent Mastery in Three Fields.", ar: "إتقان مستقل في ثلاثة مجالات." },
    pillars: [
      {
        id: "ops",
        icon: <Boxes />,
        title: { en: "Industrial Operations", ar: "العمليات الاستراتيجية" },
        text: { 
          en: "Expert in large-scale logistics and field organization. Managing a massive throughput of 150,000 units during the Hajj peak at Muaisem 2 with strict operational rigor.",
          ar: "خبير في اللوجستيات واسعة النطاق والتنظيم الميداني. أدير إنتاجية ضخمة تصل لـ 150,000 وحدة في ذروة الحج بالمعيصم 2 بصرامة تشغيلية تامة."
        }
      },
      {
        id: "film",
        icon: <Video />,
        title: { en: "Visual Engineering", ar: "الهندسة البصرية" },
        text: { 
          en: "Professional Cinematographer and Post-Production specialist. Mastering 4K storytelling, color grading, and visual documentation to elite cinematic standards.",
          ar: "مصور سينمائي محترف وأخصائي ما بعد الإنتاج. أتقن رواية القصص بدقة 4K، وتلوين المشاهد، والتوثيق البصري وفق معايير سينمائية نخبوية."
        }
      },
      {
        id: "web",
        icon: <Layout />,
        title: { en: "Digital Strategy", ar: "الاستراتيجية الرقمية" },
        text: { 
          en: "Digital Architect focusing on high-end web design and UI/UX. Translating complex business requirements into sleek, functional, and responsive digital interfaces.",
          ar: "مهندس رقمي يركز على تصميم الويب الراقي وواجهات المستخدم. أحول متطلبات الأعمال المعقدة إلى واجهات رقمية أنيقة، عملية، ومتجاوبة."
        }
      }
    ],
    metrics: [
      { value: "150k", label: { en: "Ops Units", ar: "وحدة تشغيلية" }, highlight: true },
      { value: "10y", label: { en: "Seasonal Exp", ar: "خبرة موسمية" }, highlight: false },
      { value: "4K", label: { en: "Video Res", ar: "دقة فيديو" } }
    ],
    roiTitle: { en: "Strategic ROI", ar: "العائد الاستراتيجي" },
    roiDesc: { en: "Each domain is executed with specialized tools and independent expertise to maximize brand value and operational efficiency.", ar: "يتم تنفيذ كل مجال بأدوات متخصصة وخبرة مستقلة لتعظيم قيمة العلامة التجارية والكفاءة التشغيلية." }
  },
  dashboard: {
    title: { en: "Metric Dashboard", ar: "لوحة المقاييس" },
    subtitle: { en: "Real-time look at operational and creative output.", ar: "نظرة مباشرة على المخرجات التشغيلية والإبداعية." },
    stats: [
      { label: { en: "Logistics Peak", ar: "ذروة اللوجستيات" }, value: "150k", icon: <Boxes /> },
      { label: { en: "Hajj Experience", ar: "خبرة الحج" }, value: "10y", icon: <Target /> },
      { label: { en: "Visual Projects", ar: "مشاريع بصرية" }, value: "4K", icon: <Video /> },
      { label: { en: "Web Ready", ar: "جاهزية الويب" }, value: "Full", icon: <Layout /> }
    ]
  },
  matcher: {
    title: { en: "Job Capability Audit", ar: "تدقيق القدرات الوظيفية" },
    description: { en: "Verify my multi-stack expertise against your needs.", ar: "تحقق من خبراتي المتعددة مقابل احتياجاتك." },
    placeholder: { en: "Paste JD here...", ar: "ألصق الوصف الوظيفة هنا..." },
    cta: { en: "Run Analysis", ar: "تشغيل التحليل" }
  },
  executive: {
    title: { en: "Executive Brief", ar: "موجز تنفيذي" },
    subtitle: { en: "Core highlights for decision-making.", ar: "أبرز النقاط لاتخاذ القرار." },
    exit: { en: "Full Portfolio", ar: "الملف الكامل" }
  },
  experience: {
    badge: { en: "Logistics Timeline", ar: "المسار اللوجستي" },
    title: { en: "Career Progression.", ar: "التطور المهني." }
  },
  certifications: {
    badge: { en: "Verified Credentials", ar: "الاعتمادات الموثقة" },
    title: { en: "Professional Certs.", ar: "الشهادات المهنية." },
    verifyLabel: { en: "ID Code", ar: "كود التحقق" },
    approved: { en: "Verified", ar: "موثق" }
  },
  development: {
    badge: { en: "Strategic Path", ar: "المسار الاستراتيجي" },
    items: [
      {
        icon: <ShieldCheck />,
        title: { en: "PMP® - Project Management", ar: "PMP® - إدارة المشاريع" },
        issuer: { en: "PMI Standard Training", ar: "تدريب معايير PMI" },
        status: { en: "Advanced Training & Application", ar: "تدريب وتطبيق متقدم" }
      },
      {
        icon: <TrendingUp />,
        title: { en: "Digital Marketing & E-Commerce", ar: "التسويق الرقمي والتجارة الإلكترونية" },
        issuer: { en: "Google Professional Track", ar: "مسار جوجل الاحترافي" },
        status: { en: "Expected completion in upcoming months", ar: "الإكمال المتوقع في الأشهر القادمة" }
      }
    ]
  },
  contact: {
    title: { en: "Connect for Strategy.", ar: "تواصل للاستراتيجية." },
    subtitle: { en: "Expertise in Operations, Visual Arts, and Design.", ar: "خبرة في العمليات، الفنون البصرية، والتصميم." },
    linkedin: { en: "LinkedIn Profile", ar: "حساب لينكد إن" },
    footer: { en: "Mohamed Thwban Imijine | Multi-Specialist", ar: "محمد ثوبان اميجن | أخصائي متخصص" }
  },
  hobbies: {
    title: { en: "Personal Discipline", ar: "الانضباط الشخصي" },
    items: [
      {
        icon: <Dumbbell />,
        title: { en: "Bodybuilding", ar: "كمال الأجسام" },
        desc: { en: "Physical resilience and consistency.", ar: "المرونة البدنية والاستمرارية." }
      },
      {
        icon: <CameraIcon />,
        title: { en: "Photography", ar: "التصوير" },
        desc: { en: "Capturing details in urban landscapes.", ar: "التقاط التفاصيل في المناظر الحضرية." }
      },
      {
        icon: <Film />,
        title: { en: "Film Editing", ar: "مونتاج الأفلام" },
        desc: { en: "Studying rhythm and narrative pacing.", ar: "دراسة الإيقاع وسرعة السرد." }
      }
    ]
  },
  process: {
    badge: { en: "Execution Flow", ar: "تدفق التنفيذ" },
    title: { en: "Logic in Every Domain.", ar: "المنطق في كل مجال." },
    footer: { en: "Bridging economics with visual performance.", ar: "سد الفجوة بين الاقتصاد والأداء البصري." },
    steps: [
      {
        icon: <Search />,
        title: { en: "Audit", ar: "التدقيق" },
        desc: { en: "Analyzing field data & workflows.", ar: "تحليل بيانات الميدان ومسارات العمل." }
      },
      {
        icon: <Settings />,
        title: { en: "Operationalize", ar: "التشغيل" },
        desc: { en: "Scaling logistics to 150k units.", ar: "نقل اللوجستيات لنطاق 150 ألف." }
      },
      {
        icon: <Camera />,
        title: { en: "Visualize", ar: "التجسيد البصري" },
        desc: { en: "Cinematic documentation & editing.", ar: "التوثيق السينمائي والمونتاج." }
      },
      {
        icon: <Layout />,
        title: { en: "Architect", ar: "الهندسة الرقمية" },
        desc: { en: "Web deployment & UI solutions.", ar: "نشر الويب وحلول الواجهات." }
      }
    ]
  },
  quiz: {
    badge: { en: "Strategic IQ", ar: "الذكاء الاستراتيجي" },
    title: { en: "Capability Challenge", ar: "تحدي القدرات" },
    scoreLabel: { en: "Points", ar: "نقاط" },
    startBtn: { en: "Begin Audit", ar: "بدء التدقيق" },
    nextBtn: { en: "Next Step", ar: "الخطوة التالية" },
    finishBtn: { en: "Final Score", ar: "النتيجة النهائية" },
    resetBtn: { en: "Restart", ar: "إعادة" },
    hireCta: { en: "Hire Strategically?", ar: "توظيف استراتيجي؟" },
    resultMsg: { 
      en: "Validated mastery of 150k unit logistics and cinematic visual standards.",
      ar: "إتقان مثبت للوجستيات الـ 150 ألف وحدة والمعايير البصرية السينمائية."
    },
    questions: [
      {
        q: { en: "How do you manage 150k units during Hajj peak?", ar: "كيف تدير 150 ألف وحدة خلال ذروة الحج؟" },
        tip: { en: "Economic rigor combined with precise field coordination.", ar: "الصرامة الاقتصادية المدمجة مع التنسيق الميداني الدقيق." },
        options: [
          { text: { en: "Manual tracking only", ar: "التتبع اليدوي فقط" }, isCorrect: false },
          { text: { en: "Strategic Field Coordination", ar: "التنسيق الميداني الاستراتيجي" }, isCorrect: true },
          { text: { en: "Social media updates", ar: "تحديثات السوشيال ميديا" }, isCorrect: false },
          { text: { en: "Phone calls only", ar: "المكالمات الهاتفية فقط" }, isCorrect: false }
        ]
      }
    ]
  },
  vision: {
    badge: { en: "The Logic", ar: "المنطق" },
    title: { en: "Design & Efficiency.", ar: "التصميم والكفاءة." },
    text: { en: "Ops logic ensures scale; visual logic ensures impact.", ar: "منطق العمليات يضمن النطاق؛ المنطق البصري يضمن الأثر." },
    maxRoi: { en: "Visual ROI", ar: "عائد بصري" },
    preciseEco: { en: "Economic Rigor", ar: "صرامة اقتصادية" },
    minWaste: { en: "Digital Lean", ar: "رشاقة رقمية" },
    strictControl: { en: "Ops Control", ar: "ضبط العمليات" }
  },
  fieldEvidence: {
    title: { en: "Tactical Proof.", ar: "إثبات تكتيكي." },
    location: { en: "Al-Muaisem 2 & Digital Studio", ar: "مجمع المعيصم 2 والاستوديو الرقمي" },
    opMetric: { en: "Field Impact", ar: "الأثر الميداني" },
    workflowAnalysis: { en: "Ops Audit", ar: "تدقيق العمليات" },
    viewLogs: { en: "View Dossier", ar: "عرض الملف" },
    cases: [
      {
        id: "muaisem-surge-2025",
        image: "operations",
        kpi: "150,000 Units Scaled",
        title: { en: "Industrial Ops & Visual Lead", ar: "قائد العمليات الصناعية والإبداع" },
        description: { en: "Managing one of the largest seasonal logistics surges globally while independently directing visual assets for site reports.", ar: "إدارة أحد أكبر الطفرات اللوجستية الموسمية عالمياً مع قيادة الأصول البصرية لتقارير الموقع بشكل مستقل." },
        steps: [
          { icon: <Boxes />, label: { en: "Scale Ops", ar: "نطاق العمليات" } },
          { icon: <Video />, label: { en: "Cinema 4K", ar: "سينما 4K" } }
        ]
      }
    ]
  },
  services: {
    badge: { en: "Elite Stack", ar: "الحزمة النخبوية" },
    title: { en: "Multi-Domain Force.", ar: "قوة متعددة المجالات." },
    items: [
      {
        icon: <Boxes />,
        title: { en: "Operations & Logistics", ar: "العمليات واللوجستيات" },
        desc: { en: "Strategic management of 150k unit peak surges with economic precision.", ar: "إدارة استراتيجية لطفرات الـ 150 ألف وحدة بدقة اقتصادية." }
      },
      {
        icon: <Video />,
        title: { en: "Cinematography", ar: "التصوير السينمائي" },
        desc: { en: "Professional 4K filmmaking and elite visual documentation.", ar: "صناعة أفلام احترافية 4K وتوثيق بصري نخبوياً." }
      },
      {
        icon: <Layout />,
        title: { en: "Web Design", ar: "تصميم الويب" },
        desc: { en: "High-performance digital architecture and UI/UX design.", ar: "عمارة رقمية عالية الأداء وتصميم واجهات المستخدم." }
      }
    ]
  }
};

export const EXPERIENCES: Experience[] = [
  {
    title: { en: "Operations and Maintenance Officer", ar: "مسؤول التشغيل والصيانة" },
    company: { en: "Manasik Al-Mulabbi Co. | Muaisem 2", ar: "شركة مناسك الملبي | المعيصم 2" },
    period: { en: "04/2024 – 09/2025", ar: "04/2024 – 09/2025" },
    description: [
      { en: "Overseeing year-round site operations and maintenance for Hady and Adahi Project (Royal Commission).", ar: "الإشراف على عمليات الموقع والصيانة طوال العام لمشروع الهدي والأضاحي (الهيئة الملكية)." },
      { en: "Ensuring workflow continuity for 150,000 unit peaks during the Hajj season.", ar: "ضمان استمرارية سير العمل لـ 150 ألف وحدة في ذروة موسم الحج." },
      { en: "Managing daily reporting and structured planning for massive site logistics.", ar: "إدارة التقارير اليومية والتخطيط الهيكلي للوجستيات المواقع الضخمة." }
    ],
    tags: [
      { en: "Ops Mastery", ar: "إتقان العمليات" },
      { en: "150k Scale", ar: "نطاق 150 ألف" },
      { en: "Site Lead", ar: "قائد موقع" }
    ]
  },
  {
    title: { en: "10 Years - Seasonal Hajj Operations", ar: "١٠ سنوات - عمليات الحج الموسمية" },
    company: { en: "Ministry of Hajj & Various Projects", ar: "وزارة الحج ومشاريع متنوعة" },
    period: { en: "2015 – 2025", ar: "٢٠١٥ – ٢٠٢٥ م" },
    description: [
      { en: "Managed diverse field logistics and crowd coordination across multiple Hajj seasons.", ar: "إدارة لوجستيات ميدانية متنوعة وتنسيق الحشود عبر مواسم حج متعددة." },
      { en: "Developed deep expertise in high-pressure seasonal surge management.", ar: "تطوير خبرة عميقة في إدارة الطفرات الموسمية تحت ضغط عالٍ." }
    ],
    tags: [
      { en: "Decade of Exp", ar: "خبرة عقد" },
      { en: "Crisis Management", ar: "إدارة الأزمات" }
    ]
  },
  {
    title: { en: "Committee Member – Presidential Elections", ar: "عضو لجنة – الانتخابات الرئاسية" },
    company: { en: "Mauritanian Consulate, Jeddah", ar: "القنصلية الموريتانية، جدة" },
    period: { en: "04/2023 – 08/2023", ar: "04/2023 – 08/2023" },
    description: [
      { en: "Organized voter registration and electoral lists with high transparency.", ar: "تنظيم تسجيل الناخبين والقوائم الانتخابية بشفافية عالية." },
      { en: "Coordinated election operations ensuring compliance with official standards.", ar: "تنسيق العمليات الانتخابية لضمان الامتثال للمعايير الرسمية." }
    ],
    tags: [
      { en: "Governance", ar: "الحوكمة" },
      { en: "Accuracy", ar: "الدقة" }
    ]
  },
  {
    title: { en: "Marketing Specialist", ar: "أخصائي تسويق" },
    company: { en: "Construction & Transportation Companies", ar: "شركات المقاولات والنقل" },
    period: { en: "2020 – 2023", ar: "٢٠٢٠ – ٢٠٢٣ م" },
    description: [
      { en: "Developed early-stage digital marketing initiatives to increase brand awareness.", ar: "تطوير مبادرات التسويق الرقمي المبكرة لزيادة الوعي بالعلامة التجارية." },
      { en: "Explored effective online communication and branding strategies.", ar: "استكشاف استراتيجيات التواصل والبراندنج الفعالة عبر الإنترنت." }
    ],
    tags: [
      { en: "Digital Strategy", ar: "استراتيجية رقمية" },
      { en: "Branding", ar: "براندنج" }
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: { en: "Operational Strategy", ar: "الاستراتيجية التشغيلية" },
    icon: <Boxes />,
    items: [
      { en: "Planning & Coordination", ar: "التخطيط والتنسيق" },
      { en: "Process Improvement", ar: "تحسين العمليات" },
      { en: "Quality Assurance", ar: "ضمان الجودة" },
      { en: "Risk Management", ar: "إدارة المخاطر" }
    ]
  },
  {
    category: { en: "Visual & Digital Arts", ar: "الفنون البصرية والرقمية" },
    icon: <Video />,
    items: [
      { en: "Cinematography (4K)", ar: "التصوير السينمائي (4K)" },
      { en: "Professional Video Editing", ar: "المونتاج الاحترافي" },
      { en: "Web Design (UI/UX)", ar: "تصميم الويب" },
      { en: "Visual Production", ar: "الإنتاج البصري" }
    ]
  },
  {
    category: { en: "Professional Soft Skills", ar: "المهارات الناعمة الاحترافية" },
    icon: <Target />,
    items: [
      { en: "Time Management", ar: "إدارة الوقت" },
      { en: "Teamwork & Leadership", ar: "العمل الجماعي والقيادة" },
      { en: "Working Under Pressure", ar: "العمل تحت الضغط" },
      { en: "Effective Communication", ar: "التواصل الفعال" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: { en: "Google Project Management Professional", ar: "إدارة المشاريع الاحترافية من جوجل" },
    issuer: { en: "Google / Coursera", ar: "جوجل" },
    date: { en: "Verified 2025", ar: "موثق ٢٠٢٥ م" },
    url: "https://coursera.org/verify/professional-cert/BB2H5F57UU1E"
  },
  {
    title: { en: "Video Production (CU Boulder)", ar: "إنتاج الفيديو (جامعة كولورادو)" },
    issuer: { en: "University of Colorado Boulder", ar: "جامعة كولورادو" },
    date: { en: "Verified 2025", ar: "موثق ٢٠٢٥ م" },
    url: "https://coursera.org/verify/MNQTL62TBRVL"
  },
  {
    title: { en: "Leading Teams (Michigan)", ar: "قيادة الفرق (جامعة ميشيغان)" },
    issuer: { en: "University of Michigan", ar: "جامعة ميشيغان" },
    date: { en: "Verified 2025", ar: "موثق ٢٠٢٥ م" },
    url: "https://coursera.org/verify/HZ3HI46GM6TI"
  },
  {
    title: { en: "Small Business Social Media Marketing", ar: "تسويق المشاريع الصغيرة عبر السوشيال ميديا" },
    issuer: { en: "Meta (Facebook) / Coursera", ar: "ميتا" },
    date: { en: "Verified 2025", ar: "موثق ٢٠٢٥ م" },
    url: "https://coursera.org/verify/1YKOO0BLUAC4"
  },
  {
    title: { en: "Tirhab Soft Skills Program", ar: "برنامج ترحاب للمهارات الناعمة" },
    issuer: { en: "Ministry of Hajj and Umrah", ar: "وزارة الحج والعمرة" },
    date: { en: "Verified 2025", ar: "موثق ٢٠٢٥ م" },
    url: "https://www.terhab-hajj.com/Certification/4"
  },
  {
    title: { en: "Tafwij Training & Qualification", ar: "برنامج التفويج: تدريب وتأهيل" },
    issuer: { en: "Ministry of Hajj and Umrah", ar: "وزارة الحج والعمرة" },
    date: { en: "Verified 2025", ar: "موثق ٢٠٢٥ م" },
    url: "https://www.terhab-hajj.com/Certification/5"
  },
  {
    title: { en: "Bachelor of Economics", ar: "بكالوريوس اقتصاد" },
    issuer: { en: "Umm Al-Qura University", ar: "جامعة أم القرى" },
    date: { en: "Graduated 2018", ar: "تخرج ٢٠١٨ م" },
    url: "#"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: IMAGES.logistics,
    title: { en: "Gate Logistics", ar: "لوجستيات البوابة" },
    category: { en: "Site Security & Flow", ar: "أمن الموقع والتدفق" },
    caption: { en: "Monitoring entry flow during the Hajj season peak at the Muaisem Site 2 gate.", ar: "مراقبة تدفق الدخول خلال ذروة موسم الحج عند بوابة مجمع المعيصم 2." },
    phase: { en: "Operational Security", ar: "الأمن التشغيلي" },
    kpi: { en: "Zero Bottlenecks", ar: "لا توجد اختناقات" }
  },
  {
    src: IMAGES.meeting,
    title: { en: "Strategic Planning", ar: "التخطيط الاستراتيجي" },
    category: { en: "Leadership", ar: "القيادة" },
    caption: { en: "Coordinating with site supervisors and managers for 150k unit throughput strategy.", ar: "التنسيق مع مشرفي ومديري الموقع لاستراتيجية إنتاجية الـ 150 ألف وحدة." },
    phase: { en: "Team Governance", ar: "حوكمة الفريق" },
    kpi: { en: "Full Alignment", ar: "محاذاة تامة" }
  },
  {
    src: IMAGES.loading,
    title: { en: "Inventory Movement", ar: "حركة المخزون" },
    category: { en: "Warehousing", ar: "المستودعات" },
    caption: { en: "Managing heavy-duty loading operations for technical infrastructure.", ar: "إدارة عمليات التحميل الشاقة للبنية التحتية الفنية." },
    phase: { en: "Logistics Exec", ar: "التنفيذ اللوجستي" },
    kpi: { en: "Safe Handling", ar: "مناولة آمنة" }
  },
  {
    src: IMAGES.waste,
    title: { en: "Industrial Efficiency", ar: "الكفاءة الصناعية" },
    category: { en: "Site Maintenance", ar: "صيانة الموقع" },
    caption: { en: "Overseeing systematic waste removal and site cleanliness for hygiene standards.", ar: "الإشراف على إزالة النفايات بشكل منهجي ونظافة الموقع لمعايير النظافة." },
    phase: { en: "Environmental Control", ar: "الرقابة البيئية" },
    kpi: { en: "100% Compliance", ar: "امتثال بنسبة 100%" }
  },
  {
    src: IMAGES.fieldSelfie,
    title: { en: "Site Inspection", ar: "تفتيش الموقع" },
    category: { en: "Field Quality", ar: "الجودة الميدانية" },
    caption: { en: "Conducting real-time safety and quality audits across the Muaisem industrial zone.", ar: "إجراء تدقيقات فورية للسلامة والجودة عبر منطقة المعيصم الصناعية." },
    phase: { en: "Audit Phase", ar: "مرحلة التدقيق" },
    kpi: { en: "High Standards", ar: "معايير عالية" }
  },
  {
    src: IMAGES.container,
    title: { en: "Global Dispatch", ar: "الإرسال العالمي" },
    category: { en: "Supply Chain", ar: "سلسلة التوريد" },
    caption: { en: "Final inspection of container loading for off-site logistics.", ar: "التفتيش النهائي لتحميل الحاويات للوجستيات خارج الموقع." },
    phase: { en: "Outbound Logic", ar: "المنطق الصادر" },
    kpi: { en: "On-time Dispatch", ar: "إرسال في الوقت المحدد" }
  },
  {
    src: IMAGES.operations,
    title: { en: "Process Control", ar: "التحكم في العمليات" },
    category: { en: "Industrial Interior", ar: "الداخلية الصناعية" },
    caption: { en: "Operational oversight within the cooling and processing facility.", ar: "الإشراف التشغيلي داخل منشأة التبريد والمعالجة." },
    phase: { en: "Production Management", ar: "إدارة الإنتاج" },
    kpi: { en: "Peak Accuracy", ar: "أقصى دقة" }
  }
];
