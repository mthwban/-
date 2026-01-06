
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
  birthPlace: { en: "Born & Raised in Makkah, KSA", ar: "مواليد مكة المكرمة، المملكة العربية السعودية" }
};

export const IMAGES = {
  profile: "https://lh3.googleusercontent.com/d/1Zijt_bmcVaL1Tqk9oiRXTuG5Cm4jPK30",
  fieldSelfie: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2000&auto=format&fit=crop", 
  logistics: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop", 
  meeting: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop", 
  operations: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop", 
  loading: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2000&auto=format&fit=crop", 
  waste: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop", 
  container: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2000&auto=format&fit=crop", 
};

export const UI_STRINGS = {
  brand: { en: "THWBAN", ar: "ثوبان" },
  common: {
    vault: { en: "Credential Vault", ar: "خزنة الاعتمادات" },
    downloadCv: { en: "DOWNLOAD FULL CV", ar: "تحميل السيرة الذاتية" },
    hajjUnits: { en: "Industrial Scale Hajj Peak Surge", ar: "وحدة في ذروة موسم الحج" },
    strategicHub: { en: "Strategic Hub", ar: "المركز الاستراتيجي" },
    hubSubtitle: { en: "Optimized navigation for executive review", ar: "تنقل محسن للمراجعة التنفيذية" },
    footerSubtitle: { en: "ARCHITECT OF STRATEGIC OPERATIONS & VISUAL ARTS", ar: "مهندس العمليات الاستراتيجية والفنون البصرية" },
    footerNote: { en: "Handcrafted for the next era of industrial leadership.", ar: "صُنع بدقة للحقبة القادمة من القيادة الصناعية." },
    capabilities: { en: "Capabilities.", ar: "القدرات المهنية." },
    vaultSubtitle: { en: "Verified Global Standards & Training", ar: "المعايير والتدريبات العالمية الموثقة" },
    inProgress: { en: "In-Progress Certifications", ar: "اعتمادات قيد التحضير" },
    verifiedCerts: { en: "Verified Credentials", ar: "الاعتمادات الموثقة" },
    bridging: { en: "Bridging Economic Rigor with Operational Excellence", ar: "الربط بين الصرامة الاقتصادية والتميز التشغيلي" }
  },
  nav: {
    about: { en: "Strategic Pillars", ar: "الركائز الاستراتيجية" },
    services: { en: "Core Expertise", ar: "الخبرات الجوهرية" },
    experience: { en: "Professional Path", ar: "المسار المهني" },
    portfolio: { en: "Field Evidence", ar: "الأدلة الميدانية" },
    certifications: { en: "Credentials", ar: "الاعتمادات" },
    skills: { en: "Capabilities", ar: "القدرات" },
    contact: { en: "Connect", ar: "تواصل" },
  },
  hero: {
    badge: { 
      en: "BUSINESS & OPERATIONAL ANALYST | VISUAL STRATEGIST", 
      ar: "محلل أعمال وعمليات تشغيلية | استراتيجي بصري ورقمي" 
    },
    nameFirst: { en: "Mohamed", ar: "محمد" },
    nameLast: { en: "Thwban", ar: "ثوبان" },
    headline: { 
      en: "Operations Analyst with an Economic background, managing industrial surges of 150k units. A multi-disciplinary specialist bridging large-scale logistics with elite cinematography and digital architecture.", 
      ar: "محلل أعمال بخلفية اقتصادية، خبير في إدارة العمليات الصناعية الضخمة لـ 150 ألف وحدة. أجمع في مساري المهني بين الكفاءة اللوجستية، الإبداع السينمائي، والابتكار الرقمي." 
    },
    ctaPrimary: { en: "Analyze Dossier", ar: "تحليل الملف" },
    ctaSecondary: { en: "Verified Credentials", ar: "الاعتمادات الموثقة" },
    ctaContact: { en: "Direct Contact", ar: "اتصال مباشر" },
    ctaFastTrack: { en: "Executive Mode", ar: "الوضع التنفيذي" },
    ctaVoice: { en: "Voice Brief", ar: "موجز صوتي" },
    glowingFocus: {
      pmp: { en: "PMP® Certification", ar: "شهادة PMP® الاحترافية" },
      marketing: { en: "Marketing Strategy", ar: "استراتيجية التسويق" },
      pmpStatus: { 
        en: "Exp Approved | Completing Study & Scheduling Exam", 
        ar: "تم الموافقة على الخبرات السابقة وجاري التحضير لاختبار PMP" 
      },
      marketingStatus: { en: "Advanced Track", ar: "مسار التخصص المتقدم" }
    }
  },
  about: {
    badge: { en: "Operational Rigor", ar: "الصرامة التشغيلية" },
    title: { en: "Independent Mastery Across Vital Domains.", ar: "إتقان مهني مستقل عبر مجالات حيوية." },
    pillars: [
      {
        id: "ops",
        icon: <Boxes />,
        title: { en: "Business & Ops Analysis", ar: "تحليل الأعمال والعمليات" },
        text: { 
          en: "Specialist in industrial-scale logistics. Managing 150,000 units during Hajj peak at Muaisem 2 (Royal Commission Project) with absolute precision and workflow audit.",
          ar: "متخصص في اللوجستيات الصناعية الكبرى. أدير 150,000 وحدة خلال ذروة الحج بمجمع المعيصم 2 (مشروع الهيئة الملكية) بدقة متناهية وتدقيق كامل لمسارات العمل."
        }
      },
      {
        id: "film",
        icon: <Video />,
        title: { en: "Cinematic Strategy", ar: "الاستراتيجية البصرية" },
        text: { 
          en: "Professional Cinematographer specializing in high-end post-production. Delivering 4K narrative storytelling and visual documentation to elite global standards.",
          ar: "مصور سينمائي محترف متخصص في ما بعد الإنتاج الراقي. أقدم رواية بصرية بدقة 4K وتوثيقاً ميدانياً وفق أرقى المعايير العالمية."
        }
      },
      {
        id: "web",
        icon: <Layout />,
        title: { en: "Digital Architecture", ar: "العمارة الرقمية" },
        text: { 
          en: "Full-stack thinking applied to UI/UX and web deployment. Translating complex business logic into high-performance, responsive digital ecosystems.",
          ar: "تفكير شمولي مطبق على واجهات المستخدم ونشر الويب. أحول منطق الأعمال المعقد إلى أنظمة رقمية متكاملة، عالية الأداء ومتجاوبة."
        }
      }
    ],
    metrics: [
      { value: "150k", label: { en: "Peak Units", ar: "وحدة في الذروة" }, highlight: true },
      { value: "10y", label: { en: "Field Exp", ar: "خبرة ميدانية" }, highlight: false },
      { value: "4K", label: { en: "Optic Res", ar: "دقة بصرية" } }
    ],
    roiTitle: { en: "Economic ROI", ar: "العائد الاقتصادي" },
    roiDesc: { en: "Integrating economic discipline with visual impact ensures every operational unit is documented and every digital interface is optimized for performance.", ar: "دمج الانضباط الاقتصادي مع الأثر البصري يضمن توثيق كل وحدة تشغيلية وتحسين كل واجهة رقمية لتحقيق أقصى أداء." },
    explore: { en: "Explore Domain", ar: "استكشاف المجال" }
  },
  dashboard: {
    title: { en: "Ops Dashboard", ar: "لوحة العمليات" },
    subtitle: { en: "Data-driven overview of performance metrics.", ar: "نظرة عامة قائمة على البيانات لمقاييس الأداء." },
    stats: [
      { label: { en: "Logistics Peak", ar: "ذروة اللوجستيات" }, value: "150k", icon: <Boxes /> },
      { label: { en: "Operational Years", ar: "سنوات التشغيل" }, value: "10y", icon: <Target /> },
      { label: { en: "Visual Projects", ar: "المشاريع البصرية" }, value: "4K", icon: <Video /> },
      { label: { en: "UI/UX Ready", ar: "جاهزية الواجهات" }, value: "Full", icon: <Layout /> }
    ],
    throughputTitle: { en: "Operational Throughput Analysis", ar: "تحليل إنتاجية العمليات" },
    throughputSubtitle: { en: "Monthly Units Scaled (Projected vs Actual)", ar: "الوحدات الشهرية المنجزة (المخطط مقابل الفعلي)" },
    actual: { en: "ACTUAL", ar: "الفعلي" },
    projected: { en: "PROJECTED", ar: "المخطط" },
    compliance: { en: "Compliance", ar: "الامتثال" },
    riskTitle: { en: "Risk Management", ar: "إدارة المخاطر" },
    riskSubtitle: { en: "Global Standards Applied", ar: "تطبيق المعايير العالمية" },
    complianceDesc: { en: "Zero-violation track record maintained across multi-seasonal Hajj operations and industrial projects.", ar: "سجل خالٍ من المخالفات تم الحفاظ عليه عبر مواسم حج ومشاريع صناعية متعددة." },
    systemStatus: { en: "System Status", ar: "حالة النظام" },
    liveOptimal: { en: "Live & Optimal", ar: "مباشر ومثالي" },
    insightEngine: { en: "Operational Insight Engine v3.1", ar: "محرك البصيرة التشغيلية v3.1" }
  },
  matcher: {
    title: { en: "Job Alignment Audit", ar: "تدقيق الملاءمة الوظيفية" },
    description: { en: "AI-driven comparison between your JD and my expertise.", ar: "مقارنة ذكية بين وصفك الوظيفي وخبراتي الموثقة." },
    placeholder: { en: "Paste Job Description here...", ar: "ألصق الوصف الوظيفي هنا للتحليل..." },
    cta: { en: "Verify Match", ar: "تحقق من الملاءمة" },
    chatTab: { en: "Interactive Chat", ar: "دردشة تفاعلية" },
    matcherTab: { en: "JD Matcher", ar: "مطابق الوصف" },
    advisorTitle: { en: "Strategic Advisor", ar: "المستشار الاستراتيجي" },
    verifiedProfile: { en: "Profile Verified", ar: "ملف موثق" },
    matchStatus: { en: "Analyzing Credential Vault...", ar: "جاري تحليل خزنة الاعتمادات..." },
    matchReportBtn: { en: "Launch Match Audit", ar: "بدء تدقيق الملاءمة" },
    generatingReport: { en: "Generating Report...", ar: "جاري إنشاء التقرير..." },
    matcherNote: { en: "Our AI will audit Mohamed's dossier against your JD requirements.", ar: "سيقوم ذكاؤنا الاصطناعي بتدقيق ملف محمد مقابل متطلباتك الوظيفية." }
  },
  executive: {
    title: { en: "Executive Briefing", ar: "الإحاطة التنفيذية" },
    subtitle: { en: "Strategic summary for rapid decision-making.", ar: "ملخص استراتيجي لاتخاذ قرار سريع ومدروس." },
    exit: { en: "Full Portfolio", ar: "الملف الكامل" },
    activated: { en: "Executive View Activated", ar: "تم تفعيل العرض التنفيذي" },
    summary: { en: "Summary.", ar: "الملخص." },
    directChannel: { en: "Direct Channel.", ar: "القناة المباشرة." },
    getInTouch: { en: "Get in Touch", ar: "تواصل معي" },
    viewDossier: { en: "View Full Dossier", ar: "عرض الملف الكامل" }
  },
  experience: {
    badge: { en: "Career Timeline", ar: "التسلسل المهني" },
    title: { en: "Verified Field Experience.", ar: "خبرات ميدانية موثقة." }
  },
  certifications: {
    badge: { en: "Official Accreditation", ar: "الاعتمادات الرسمية" },
    title: { en: "Professional Certs.", ar: "الشهادات الاحترافية." },
    verifyLabel: { en: "Verification ID", ar: "رقم التحقق" },
    approved: { en: "Officially Verified", ar: "موثق رسمياً" }
  },
  development: {
    badge: { en: "Ongoing Specialization", ar: "تخصص قيد التنفيذ" },
    items: [
      {
        icon: <ShieldCheck />,
        title: { en: "PMP® - Project Management Professional", ar: "PMP® - إدارة المشاريع الاحترافية" },
        issuer: { en: "PMI Global Standards", ar: "معايير معهد إدارة المشاريع العالمي" },
        status: { 
          en: "Prior experience verified and approved. Currently finalizing course requirements and scheduling the PMP exam.", 
          ar: "تم الموافقة على الخبرات السابقة وجاري التحضير لاختبار PMP" 
        }
      },
      {
        icon: <TrendingUp />,
        title: { en: "Advanced Marketing Strategy", ar: "استراتيجية التسويق المتقدمة" },
        issuer: { en: "Google / Meta Specialization", ar: "تخصص جوجل وميتا الاحترافي" },
        status: { en: "Completing Advanced Strategic Tracks", ar: "استكمال المسارات الاستراتيجية المتقدمة" }
      }
    ]
  },
  hobbies: {
    title: { en: "Personal Discipline", ar: "الانضباط الشخصي" },
    items: [
      {
        icon: <Dumbbell />,
        title: { en: "High-Intensity Training", ar: "التدريب عالي الكثافة" },
        desc: { en: "Developing physical and mental endurance.", ar: "تطوير قوة التحمل البدني والذهني." }
      },
      {
        icon: <CameraIcon />,
        title: { en: "Strategic Photography", ar: "التصوير الاستراتيجي" },
        desc: { en: "Documenting urban architecture and flow.", ar: "توثيق العمارة الحضرية وتدفق المدن." }
      },
      {
        icon: <Film />,
        title: { en: "Post-Production Mastery", ar: "إتقان ما بعد الإنتاج" },
        desc: { en: "Studying visual rhythm and story pacing.", ar: "دراسة الإيقاع البصري وتسلسل السرد." }
      }
    ]
  },
  process: {
    badge: { en: "Execution Framework", ar: "إطار التنفيذ" },
    title: { en: "The Strategic Workflow.", ar: "مسار العمل الاستراتيجي." },
    footer: { en: "Unifying economic data with cinematic execution.", ar: "توحيد البيانات الاقتصادية مع التنفيذ السينمائي." },
    steps: [
      {
        icon: <Search />,
        title: { en: "Diagnostic Audit", ar: "التدقيق التشخيصي" },
        desc: { en: "Mapping field data and bottlenecks.", ar: "رسم خرائط البيانات الميدانية والاختناقات." }
      },
      {
        icon: <Settings />,
        title: { en: "Operations Scale", ar: "توسيع العمليات" },
        desc: { en: "Executing 150k unit surges.", ar: "تنفيذ طفرات الـ 150 ألف وحدة." }
      },
      {
        icon: <Camera />,
        title: { en: "Visual Audit", ar: "التوثيق البصري" },
        desc: { en: "4K documentation of site impact.", ar: "توثيق بدقة 4K لأثر الموقع." }
      },
      {
        icon: <Layout />,
        title: { en: "Digital Sync", ar: "المزامنة الرقمية" },
        desc: { en: "Reporting and UI visualization.", ar: "التقارير وتجسيد البيانات بصرياً." }
      }
    ]
  },
  quiz: {
    badge: { en: "Operational IQ", ar: "الذكاء التشغيلي" },
    title: { en: "Strategic Audit", ar: "التدقيق الاستراتيجي" },
    scoreLabel: { en: "Performance Points", ar: "نقاط الأداء" },
    startBtn: { en: "Initiate Audit", ar: "بدء التدقيق" },
    nextBtn: { en: "Continue", ar: "استمرار" },
    finishBtn: { en: "View Score", ar: "عرض النتيجة" },
    resetBtn: { en: "Restart Audit", ar: "إعادة التدقيق" },
    hireCta: { en: "Ready to Hire?", ar: "جاهز للتوظيف؟" },
    resultMsg: { 
      en: "Validated understanding of 150k unit logistics and cinematic precision.",
      ar: "فهم مثبت للوجستيات الـ 150 ألف وحدة والدقة السينمائية."
    },
    mission: { en: "Mission", ar: "المهمة" },
    finalResult: { en: "Final Score", ar: "النتيجة النهائية" },
    connectNow: { en: "Connect with Mohamed", ar: "تواصل مع محمد الآن" },
    quizIntro: { en: "Do you have the vision required for complex field operations? Test your operational IQ and rack up points.", ar: "هل تمتلك الرؤية المطلوبة لإدارة العمليات الميدانية المعقدة؟ اختبر ذكاءك التشغيلي وسجل نقاطك." },
    questions: [
      {
        q: { en: "What is the core factor in managing 150k units during Hajj?", ar: "ما هو العامل الجوهري في إدارة 150 ألف وحدة خلال الحج؟" },
        tip: { en: "Strategic Field Coordination combined with structured economic data.", ar: "التنسيق الميداني الاستراتيجي المدمج مع بيانات اقتصادية مهيكلة." },
        options: [
          { text: { en: "Random Sampling", ar: "العينات العشوائية" }, isCorrect: false },
          { text: { en: "Structured Field Coordination", ar: "التنسيق الميداني المهيكل" }, isCorrect: true },
          { text: { en: "Basic Staffing", ar: "التوظيف الأساسي فقط" }, isCorrect: false },
          { text: { en: "Passive Monitoring", ar: "المراقبة السلبية" }, isCorrect: false }
        ]
      }
    ]
  },
  vision: {
    badge: { en: "Core Logic", ar: "المنطق الجوهري" },
    title: { en: "Precision Meets Impact.", ar: "الدقة تلتقي بالأثر." },
    text: { en: "Operational scale requires absolute economic rigor.", ar: "التوسع التشغيلي يتطلب صرامة اقتصادية مطلقة." },
    maxRoi: { en: "Verified ROI", ar: "عائد استثماري مثبت" },
    preciseEco: { en: "Economic Discipline", ar: "الانضباط الاقتصادي" },
    minWaste: { en: "Lean Logistics", ar: "اللوجستيات الرشيقة" },
    strictControl: { en: "Quality Audit", ar: "تدقيق الجودة" }
  },
  fieldEvidence: {
    title: { en: "Field Verification.", ar: "التحقق الميداني." },
    location: { en: "Al-Muaisem 2 (Royal Commission Project)", ar: "مجمع المعيصم 2 (مشروع الهيئة الملكية)" },
    opMetric: { en: "Industrial Success", ar: "النجاح الصناعي" },
    workflowAnalysis: { en: "Process Audit", ar: "تدقيق العمليات" },
    viewLogs: { en: "View Evidence", ar: "عرض الأدلة" },
    industrialArchive: { en: "Industrial Operations Archive", ar: "أرشيف العمليات الصناعية" },
    industrialChilling: { en: "Industrial Chilling", ar: "التبريد الصناعي" },
    technicalPackaging: { en: "Technical Packaging", ar: "التغليف التقني" },
    planningTitle: { en: "Leading Teams Under Peak Pressure", ar: "قيادة الفرق والعمليات تحت أقصى ضغط" },
    planningDesc: { en: "The mission is not just execution, but managing field expectations and risks to ensure units meet global quality standards.", ar: "لا تقتصر المهمة على التنفيذ فحسب، بل على إدارة التوقعات والمخاطر الميدانية لضمان جودة الوحدات الميدانية." },
    cases: [
      {
        id: "muaisem-surge-2025",
        image: "operations",
        kpi: "150,000 Units Managed",
        title: { en: "Industrial Operations Specialist", ar: "أخصائي عمليات صناعية" },
        description: { en: "Directed large-scale logistics for the Adahi Project, ensuring 100% throughput compliance during the world's largest seasonal surge.", ar: "أشرفت على اللوجستيات واسعة النطاق لمشروع الأضاحي، مع ضمان الامتثال الكامل للإنتاجية خلال أكبر طفرة موسمية في العالم." },
        steps: [
          { icon: <Boxes />, label: { en: "Ops Audit", ar: "تدقيق العمليات" } },
          { icon: <Video />, label: { en: "Field Sync", ar: "المزامنة الميدانية" } }
        ]
      }
    ]
  },
  gallery: {
    fieldLog: { en: "Field Operations Log", ar: "سجل العمليات الميدانية" },
    showcaseTitle: { en: "Muaisem 2 Showcase", ar: "معرض المعيصم ٢" },
    siteDoc: { en: "Strategic Site Documentation", ar: "التوثيق الاستراتيجي للموقع" },
    industrialVerification: { en: "Industrial Operations & Logistics • Verified Field Performance", ar: "العمليات اللوجستية الصناعية • أداء ميداني موثق" }
  },
  services: {
    badge: { en: "Specialized Stack", ar: "الحزمة المتخصصة" },
    title: { en: "Strategic Capabilities.", ar: "القدرات الاستراتيجية." },
    items: [
      {
        icon: <Boxes />,
        title: { en: "Operations & Logistics", ar: "العمليات واللوجستيات" },
        desc: { en: "Advanced management of industrial surges (150k units) with full economic reporting.", ar: "إدارة متقدمة للطفرات الصناعية (150 ألف وحدة) مع تقارير اقتصادية شاملة." }
      },
      {
        icon: <Video />,
        title: { en: "Cinematography (4K)", ar: "التصوير السينمائي (4K)" },
        desc: { en: "Professional filmmaking for corporate and field documentation to elite standards.", ar: "صناعة أفلام احترافية للتوثيق المؤسسي والميداني وفق معايير نخبوية." }
      },
      {
        icon: <Layout />,
        title: { en: "UI/UX & Web Strategy", ar: "الواجهات واستراتيجية الويب" },
        desc: { en: "High-performance digital architecture focusing on conversion and clarity.", ar: "عمارة رقمية عالية الأداء تركز على التحويل والوضوح البصري." }
      }
    ]
  },
  contact: {
    title: { en: "Strategic Connection.", ar: "اتصال استراتيجي." },
    subtitle: { en: "Ready for high-stakes operational and creative roles.", ar: "جاهز لأدوار تشغيلية وإبداعية عالية التأثير." },
    linkedin: { en: "Official LinkedIn Profile", ar: "الملف الشخصي الرسمي" },
    footer: { en: "Mohamed Thwban Imijine | Strategic Operations Analyst", ar: "محمد ثوبان اميجن | محلل عمليات استراتيجية" }
  }
};

export const EXPERIENCES: Experience[] = [
  {
    title: { en: "Operations and Maintenance Officer", ar: "مسؤول التشغيل والصيانة (محلل عمليات)" },
    company: { en: "Manasik Al-Mulabbi Co. | Muaisem 2", ar: "شركة مناسك الملبي | مجمع المعيصم ٢" },
    period: { en: "April 2024 – Present", ar: "أبريل ٢٠٢٤ – حتى الآن" },
    description: [
      { en: "Directing field operations for the Adahi Project under the Royal Commission's supervision.", ar: "إدارة العمليات الميدانية لمشروع الهدي والأضاحي تحت إشراف الهيئة الملكية." },
      { en: "Managing a throughput of 150,000 units during Hajj peak with zero critical failures.", ar: "إدارة إنتاجية تصل إلى ١٥٠,٠٠٠ وحدة في ذروة الحج دون أي إخفاقات حرجة." },
      { en: "Analyzing workflows and conducting daily site audits to ensure industrial-grade hygiene and efficiency.", ar: "تحليل مسارات العمل وإجراء تدقيقات يومية للموقع لضمان الكفاءة والنظافة الصناعية." }
    ],
    tags: [
      { en: "Operations Audit", ar: "تدقيق العمليات" },
      { en: "150k Scale", ar: "نطاق ١٥٠ ألف" },
      { en: "Royal Project", ar: "مشروع سيادي" }
    ]
  },
  {
    title: { en: "Strategic Hajj Operations Specialist", ar: "أخصائي استراتيجي لعمليات الحج" },
    company: { en: "Ministry of Hajj & Various Stakeholders", ar: "وزارة الحج والعمرة وجهات متعددة" },
    period: { en: "2015 – 2025 (10 Seasons)", ar: "٢٠١٥ – ٢٠٢٥ (١٠ مواسم متتالية)" },
    description: [
      { en: "A decade of high-pressure field coordination for various Hajj logistical missions.", ar: "عقد من الزمن في التنسيق الميداني تحت الضغط العالي لمهمات لوجستية متنوعة في الحج." },
      { en: "Implementing crowd control and resource allocation strategies in dynamic environments.", ar: "تنفيذ استراتيجيات التحكم في الحشود وتوزيع الموارد في بيئات متغيرة." }
    ],
    tags: [
      { en: "Crisis Lead", ar: "قيادة الأزمات" },
      { en: "Decade of Mastery", ar: "عقد من الإتقان" }
    ]
  },
  {
    title: { en: "Consular Committee Member", ar: "عضو لجنة قنصلية (الانتخابات)" },
    company: { en: "Mauritanian Consulate General, Jeddah", ar: "القنصلية الموريتانية العامة بجدة" },
    period: { en: "2024 Presidential Elections", ar: "الانتخابات الرئاسية ٢٠٢٤ م" },
    description: [
      { en: "Orchestrating election logistics and voter registration audits for the Presidential elections.", ar: "تنسيق لوجستيات الانتخابات وتدقيق تسجيل الناخبين للانتخابات الرئاسية." },
      { en: "Ensuring 100% data accuracy and compliance with official governmental protocols.", ar: "ضمان دقة البيانات بنسبة ١٠٠٪ والامتثال للبروتوكولات الحكومية الرسمية." }
    ],
    tags: [
      { en: "Governance", ar: "الحوكمة" },
      { en: "Official Audit", ar: "تدقيق رسمي" }
    ]
  },
  {
    title: { en: "Marketing Specialist", ar: "أخصائي تسويق" },
    company: { en: "Transport & Construction Firms", ar: "مؤسسات المقاولات والنقل" },
    period: { en: "2020 – 2023", ar: "٢٠٢٠ – ٢٠٢٣ م" },
    description: [
      { en: "Developing marketing initiatives and visual presence for industrial service providers.", ar: "تطوير مبادرات التسويق والحضور البصري لمزودي الخدمات صناعية." },
      { en: "Analyzing market trends to increase brand authority in competitive niche sectors.", ar: "تحليل اتجاهات السوق لزيادة سلطة العلامة التجارية في القطاعات المتخصصة." }
    ],
    tags: [
      { en: "Marketing Strategy", ar: "استراتيجية التسويق" },
      { en: "Branding", ar: "براندنج" }
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: { en: "Strategic Analysis", ar: "التحليل الاستراتيجي" },
    icon: <Boxes />,
    items: [
      { en: "Operational Workflow Mapping", ar: "رسم خرائط مسارات العمل" },
      { en: "Industrial Resource Scaling", ar: "توسيع الموارد الصناعية" },
      { en: "Risk & Quality Audit", ar: "تدقيق المخاطر والجودة" },
      { en: "Economic Analysis", ar: "التحليل الاقتصادي" }
    ]
  },
  {
    category: { en: "Advanced Production", ar: "الإنتاج المتقدم" },
    icon: <Video />,
    items: [
      { en: "4K Cinematic Storytelling", ar: "السرد السينمائي 4K" },
      { en: "Field Audio-Visual Documentation", ar: "التوثيق السمعي البصري الميداني" },
      { en: "Modern UI/UX Architecture", ar: "عمارة واجهات المستخدم الحديثة" },
      { en: "Full-Stack Project View", ar: "نظرة شمولية للمشاريع الرقمية" }
    ]
  },
  {
    category: { en: "Executive Leadership", ar: "القيادة التنفيذية" },
    icon: <Target />,
    items: [
      { en: "Stakeholder Coordination", ar: "تنسيق أصحاب المصلحة" },
      { en: "Crisis Decision Making", ar: "اتخاذ القرار في الأزمات" },
      { en: "Industrial Team Scaling", ar: "توسيع الفرق الصناعية" },
      { en: "Ethical Field Governance", ar: "الحوكمة الأخلاقية الميدانية" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: { en: "Google Project Management Professional", ar: "احترافي إدارة المشاريع من جوجل" },
    issuer: { en: "Google / Coursera", ar: "جوجل / كورسيرا" },
    date: { en: "Oct 8, 2025", ar: "٨ أكتوبر ٢٠٢٥ م" },
    url: "https://coursera.org/verify/professional-al-cert/BB2H5F57UU1E"
  },
  {
    title: { en: "Leading Teams Certificate", ar: "شهادة قيادة الفرق" },
    issuer: { en: "University of Michigan", ar: "جامعة ميشيغان" },
    date: { en: "Nov 6, 2025", ar: "٦ نوفمبر ٢٠٢٥ م" },
    url: "https://coursera.org/verify/HZ3HI46GM6TI"
  },
  {
    title: { en: "Facebook Social Media Marketing", ar: "التسويق عبر فيسبوك" },
    issuer: { en: "Meta (Facebook) Professional", ar: "ميتا (فيسبوك) الاحترافي" },
    date: { en: "Oct 11, 2025", ar: "١١ أكتوبر ٢٠٢٥ م" },
    url: "https://coursera.org/verify/1YKOO0BLUAC4"
  },
  {
    title: { en: "The Video Production Process", ar: "عملية الإنتاج السينمائي والمرئي" },
    issuer: { en: "University of Colorado Boulder", ar: "جامعة كولورادو بولدر" },
    date: { en: "Oct 24, 2025", ar: "٢٤ أكتوبر ٢٠٢٥ م" },
    url: "https://coursera.org/verify/MNQTL62TBRVL"
  },
  {
    title: { en: "Tafwij & Crowd Management in Hajj", ar: "إدارة التفويج في منظومة الحج" },
    issuer: { en: "Ministry of Hajj and Umrah", ar: "وزارة الحج والعمرة" },
    date: { en: "July 2022", ar: "يوليو ٢٠٢٢ م" },
    url: "https://www.terhab-hajj.com/Certification/5"
  },
  {
    title: { en: "Soft Skills for Hajj Service", ar: "المهارات الناعمة لخدمة ضيوف الرحمن" },
    issuer: { en: "Ministry of Hajj and Umrah", ar: "وزارة الحج والعمرة" },
    date: { en: "June 2022", ar: "يونيو ٢٠٢٢ م" },
    url: "https://www.terhab-hajj.com/Certification/4"
  },
  {
    title: { en: "Bachelor of Economics", ar: "بكالوريوس اقتصاد" },
    issuer: { en: "Umm Al-Qura University", ar: "جامعة أم القرى (مكة المكرمة)" },
    date: { en: "Graduated 2018", ar: "تخرج ٢٠١٨ م" },
    url: "#"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: IMAGES.logistics,
    title: { en: "Industrial Flow Control", ar: "التحكم في التدفق الصناعي" },
    category: { en: "Operational Security", ar: "الأمن التشغيلي" },
    caption: { en: "Real-time monitoring of entry logistics during peak Hajj operations at Muaisem 2.", ar: "مراقبة فورية للوجستيات الدخول خلال ذروة عمليات الحج بالمعيصم ٢." },
    phase: { en: "Field Audit", ar: "التدقيق الميداني" },
    kpi: { en: "Optimized Flow", ar: "تدفق مثالي" }
  },
  {
    src: IMAGES.meeting,
    title: { en: "Stakeholder Alignment", ar: "محاذاة أصحاب المصلحة" },
    category: { en: "Leadership", ar: "القيادة" },
    caption: { en: "Strategic session with project leads to verify 150k unit throughput targets.", ar: "جلسة استراتيجية مع قادة المشروع للتحقق من أهداف إنتاجية الـ ١٥٠ ألف وحدة." },
    phase: { en: "Governance", ar: "الحوكمة" },
    kpi: { en: "100% Alignment", ar: "محاذاة تامة" }
  },
  {
    src: IMAGES.loading,
    title: { en: "Resource Logistics", ar: "لوجستيات الموارد" },
    category: { en: "Technical Infrastructure", ar: "البنية التحتية الفنية" },
    caption: { en: "Supervising heavy logistics for industrial cooling systems.", ar: "الإشراف على اللوجستيات الثقيلة لأنظمة التبريد الصناعية." },
    phase: { en: "Deployment", ar: "النشر" },
    kpi: { en: "Zero Incidents", ar: "صفر حوادث" }
  },
  {
    src: IMAGES.waste,
    title: { en: "Site Hygiene Audit", ar: "تدقيق نظافة الموقع" },
    category: { en: "Quality Control", ar: "ضبط الجودة" },
    caption: { en: "Implementing strict industrial waste management for Hady and Adahi Project.", ar: "تنفيذ إدارة صارمة للنفايات الصناعية لمشروع الهدي والأضاحي." },
    phase: { en: "Hygiene Protocol", ar: "بروتوكول النظافة" },
    kpi: { en: "Full Compliance", ar: "امتثال كامل" }
  },
  {
    src: IMAGES.fieldSelfie,
    title: { en: "Site Lead Inspection", ar: "تفتيش قائد الموقع" },
    category: { en: "Field Verification", ar: "التحقق الميداني" },
    caption: { en: "Conducting hourly quality checks across the Muaisem industrial zone.", ar: "إجراء فحوصات جودة كل ساعة عبر منطقة المعيصم الصناعية." },
    phase: { en: "Quality Sync", ar: "مزامنة الجودة" },
    kpi: { en: "Verified Status", ar: "حالة موثقة" }
  },
  {
    src: IMAGES.container,
    title: { en: "Supply Chain Dispatch", ar: "إرسال سلسلة التوريد" },
    category: { en: "Global Logistics", ar: "اللوجستيات العالمية" },
    caption: { en: "Final audit of cold-chain container readiness for dispatch.", ar: "التدقيق النهائي لجاهزية حاويات السلسلة الباردة للإرسال." },
    phase: { en: "Outbound Logic", ar: "المنطق الصادر" },
    kpi: { en: "On-Time Supply", ar: "توريد في الوقت" }
  },
  {
    src: IMAGES.operations,
    title: { en: "Process Visualization", ar: "تجسيد العمليات" },
    category: { en: "Industrial Design", ar: "التصميم الصناعي" },
    caption: { en: "Operational oversight inside the processing core of the facility.", ar: "الإشراف التشغيلي داخل النواة الرئيسية للمعالجة في المنشأة." },
    phase: { en: "Production Lead", ar: "قيادة الإنتاج" },
    kpi: { en: "Peak Accuracy", ar: "أقصى دقة" }
  }
];
