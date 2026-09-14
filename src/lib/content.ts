export const COMPANY = {
  name: "Noor Al Manazel",
  legal: "Noor Al Manazel Building Contracting LLC",
  legalAr: "نور المنازل للمقاولات ذ.م.م.",
  nameAr: "نور المنازل",
  phone: "+971 52 237 5008",
  phoneTel: "+971522375008",
  phone2: "+971 52 747 5740",
  phone2Tel: "+971527475740",
  landline: "+971 4 295 6964",
  landlineTel: "+97142956964",
  email: "noormanazel@noormanazel.com",
  whatsapp: "971522375008",
  addressEn:
    "Office 506, Saeed Tower 2, 74 Sheikh Zayed Road, Trade Centre 1, Dubai",
  addressAr: "مكتب 506، برج سعيد 2، شارع الشيخ زايد، مركز التجارة 1، دبي",
  hoursEn: "Monday – Saturday, 9:00 am – 6:00 pm",
  hoursAr: "الاثنين – السبت، 9 صباحاً – 6 مساءً",
  maps: "https://www.google.com/maps?q=25.214511,55.276312",
  gis: "https://2gis.ae/dubai/firm/70000001075862536",
  lat: 25.214511,
  lng: 55.276312,
} as const;

export type Lang = "en" | "ar";

export const SERVICES = [
  {
    slug: "g1-luxury-villas",
    image: "/images/villa-night.jpg",
    icon: "home",
    title: { en: "G+1 Luxury Villas", ar: "فلل فاخرة أرضي + أول" },
    summary: {
      en: "End-to-end design-build for ground-plus-one villas — from first drawing to finished rooms.",
      ar: "تصميم وتنفيذ متكامل لفلل أرضي + أول، من أول مخطط حتى تسليم الغرف.",
    },
    body: {
      en: "Noor Al Manazel specialises in comprehensive design-build for G+1 villas. We take a private brief and carry it through architectural planning, structure, MEP, and refined finishing — one team, one programme, one standard of care.",
      ar: "تتخصص نور المنازل في التصميم والتنفيذ المتكامل لفلل أرضي + أول. نأخذ موجز العميل الخاص وننفّذه عبر التخطيط المعماري والهيكل والأعمال الكهروميكانيكية والتشطيب الدقيق — فريق واحد وبرنامج واحد ومعيار واحد.",
    },
    points: {
      en: [
        "Architectural planning coordinated with structure and MEP",
        "Structural execution to Dubai Municipality standards",
        "Finishes specified with the client, not left to chance",
        "Single point of contact from site visit to handover",
      ],
      ar: [
        "تخطيط معماري منسّق مع الهيكل والأعمال الكهروميكانيكية",
        "تنفيذ إنشائي وفق معايير بلدية دبي",
        "تشطيبات تُحدَّد مع العميل ولا تُترك للصدفة",
        "جهة اتصال واحدة من زيارة الموقع حتى التسليم",
      ],
    },
  },
  {
    slug: "electrical-work",
    image: "/images/electrical.jpg",
    icon: "zap",
    title: { en: "Electrical Work", ar: "الأعمال الكهربائية" },
    summary: {
      en: "Reliable, economical electrical and MEP installation for villas, offices, and commercial floors.",
      ar: "تركيب كهربائي وكهروميكانيكي موثوق واقتصادي للفلل والمكاتب والطوابق التجارية.",
    },
    body: {
      en: "Our electrical teams plan, install, and commission lighting, power, containment, and distribution. The work is priced to last, documented for inspection, and coordinated with mechanical and civil trades so the building comes together as one system.",
      ar: "تُخطّط فرقنا الكهربائية وتُركّب وتُشغّل الإنارة والقوة والتسليك ولوحات التوزيع. يُسعَّر العمل ليدوم، ويُوثَّق للفحص، ويُنسَّق مع الأعمال الميكانيكية والمدنية حتى يكتمل المبنى كنظام واحد.",
    },
    points: {
      en: [
        "Power, lighting, and small-power layouts",
        "Distribution boards and containment",
        "Coordination with HVAC and wet trades",
        "Inspection-ready as-built documentation",
      ],
      ar: [
        "مخططات القوة والإنارة ونقاط الكهرباء",
        "لوحات التوزيع ومسارات الكابلات",
        "تنسيق مع التكييف والأعمال الصحية",
        "وثائق كما نُفّذ جاهزة للفحص",
      ],
    },
  },
  {
    slug: "mechanical-work",
    image: "/images/mep.jpg",
    icon: "wind",
    title: { en: "Mechanical Work", ar: "الأعمال الميكانيكية" },
    summary: {
      en: "HVAC engineering, installation, service, and maintenance — comfort designed for Dubai’s climate.",
      ar: "هندسة وتركيب وصيانة أنظمة التكييف — راحة مصممة لمناخ دبي.",
    },
    body: {
      en: "We provide a full range of mechanical services, from HVAC system engineering to installation, service, and maintenance. Plant rooms are laid out for access; ductwork and pipework are installed to drawing; commissioning is recorded.",
      ar: "نقدّم نطاقاً كاملاً من الخدمات الميكانيكية، من هندسة أنظمة التكييف حتى التركيب والصيانة. تُرتَّب غرف المعدات لسهولة الوصول، وتُركَّب مجاري الهواء والأنابيب وفق المخطط، ويُوثَّق التشغيل التجريبي.",
    },
    points: {
      en: [
        "HVAC design for villa and commercial loads",
        "Installation, insulation, and commissioning",
        "Service contracts and planned maintenance",
        "Plant rooms organised for future access",
      ],
      ar: [
        "تصميم تكييف لأحمال الفلل والمباني التجارية",
        "تركيب وعزل وتشغيل تجريبي",
        "عقود خدمة وصيانة مخططة",
        "غرف معدات مرتبة للصيانة لاحقاً",
      ],
    },
  },
  {
    slug: "structural-work",
    image: "/images/structure.jpg",
    icon: "building",
    title: { en: "Structural Work", ar: "الأعمال الإنشائية" },
    summary: {
      en: "Foundations, frames, and concrete works executed with care — the part of the building you never see, done properly.",
      ar: "أساسات وهياكل وأعمال خرسانية تُنفَّذ بعناية — الجزء الذي لا يُرى من المبنى، يُنجَز كما ينبغي.",
    },
    body: {
      en: "Structural work is where a building earns its life. We form, pour, and strike with a programme that protects adjacent finishes and a site discipline that keeps rebar, cover, and joints where the engineer placed them.",
      ar: "الأعمال الإنشائية هي ما يمنح المبنى عمره. نصُبّ ونفكّ القوالب وفق برنامج يحمي التشطيبات المجاورة، وانضباط موقعي يُبقي الحديد والغطاء والوصلات حيث وضعها المهندس.",
    },
    points: {
      en: [
        "Substructure and superstructure concrete",
        "Formwork, rebar, and pouring to specification",
        "Coordination with consultant and municipality inspections",
        "Safe, tidy sites on residential plots",
      ],
      ar: [
        "خرسانة الأساسات والهيكل العلوي",
        "قوالب وتسليح وصب وفق المواصفات",
        "تنسيق مع فحوصات الاستشاري والبلدية",
        "مواقع آمنة ومرتبة على القسائم السكنية",
      ],
    },
  },
  {
    slug: "planning-design",
    image: "/images/planning.jpg",
    icon: "compass",
    title: { en: "Planning and Design", ar: "التخطيط والتصميم" },
    summary: {
      en: "MEP and architectural planning shaped around how you will actually use the building.",
      ar: "تخطيط معماري وكهروميكانيكي يُصاغ حول طريقة استخدامك الفعلية للمبنى.",
    },
    body: {
      en: "Our engineers plan and design to the client’s brief — layouts, loads, plant, and programme — so construction is a continuation of the drawing, not a negotiation against it.",
      ar: "يُخطّط مهندسونا ويصممون وفق موجز العميل — التوزيعات والأحمال والمعدات والبرنامج — حتى يكون التنفيذ امتداداً للمخطط لا تفاوضاً ضده.",
    },
    points: {
      en: [
        "Concept through detailed design",
        "MEP layouts coordinated with architecture",
        "Bills of quantities and construction programmes",
        "Authority submission support",
      ],
      ar: [
        "من الفكرة حتى التصميم التفصيلي",
        "مخططات كهروميكانيكية منسّقة مع العمارة",
        "جداول كميات وبرامج تنفيذ",
        "دعم تقديمات الجهات المختصة",
      ],
    },
  },
  {
    slug: "inspection",
    image: "/images/craft.jpg",
    icon: "inspect",
    title: { en: "Inspection", ar: "الفحص والمعاينة" },
    summary: {
      en: "Complete inspection of MEP and building works with calibrated instruments and experienced technicians.",
      ar: "فحص كامل للأعمال الكهروميكانيكية والإنشائية بأجهزة معايرة وفنيين ذوي خبرة.",
    },
    body: {
      en: "We inspect what we build, and we inspect for others. Complete checks of MEP installations using quality instruments, carried out by engineers and technicians who know what a passing inspection in Dubai actually requires.",
      ar: "نفحص ما نبنيه، ونفحص لغيرنا. فحوصات كاملة للتركيبات الكهروميكانيكية بأجهزة عالية الجودة، ينفّذها مهندسون وفنيون يعرفون متطلبات الفحص الناجح في دبي.",
    },
    points: {
      en: [
        "Pre-handover snagging and MEP testing",
        "Instrument-based verification",
        "Written reports with photographic record",
        "Remedial works where we are the contractor",
      ],
      ar: [
        "كشف عيوب ما قبل التسليم واختبارات كهروميكانيكية",
        "تحقق بأجهزة قياس",
        "تقارير مكتوبة مع توثيق مصوّر",
        "أعمال إصلاح عندما نكون المقاول",
      ],
    },
  },
  {
    slug: "materials-equipment",
    image: "/images/commercial.jpg",
    icon: "package",
    title: { en: "Materials and Equipment", ar: "المواد والمعدات" },
    summary: {
      en: "Specified materials and equipment for MEP contractors and our own sites — quality that survives the climate.",
      ar: "مواد ومعدات محددة لمقاولي الكهروميكانيك ولمواقعنا — جودة تصمد أمام المناخ.",
    },
    body: {
      en: "We supply high-quality materials and equipment for MEP works, sourced for Dubai conditions and matched to the specification — not whatever is cheapest that week.",
      ar: "نوفّر مواد ومعدات عالية الجودة لأعمال الكهروميكانيك، مختارة لظروف دبي ومطابقة للمواصفات — لا أرخص ما يتوفر في ذلك الأسبوع.",
    },
    points: {
      en: [
        "MEP materials matched to specification",
        "Equipment selected for climate and service life",
        "Supply for our sites and for other contractors",
        "Traceable deliveries to plot or store",
      ],
      ar: [
        "مواد كهروميكانيكية مطابقة للمواصفات",
        "معدات مختارة للمناخ وعمر الخدمة",
        "توريد لمواقعنا ولمقاولين آخرين",
        "تسليمات قابلة للتتبع إلى القسيمة أو المستودع",
      ],
    },
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const PROJECTS = [
  {
    slug: "jumeirah-villa",
    image: "/images/villa-day.jpg",
    gallery: ["/images/villa-day.jpg", "/images/interior.jpg"],
    year: "2025",
    title: { en: "G+1 Villa", ar: "فيلا أرضي + أول" },
    place: { en: "Jumeirah, Dubai", ar: "جميرا، دبي" },
    type: { en: "Design-build", ar: "تصميم وتنفيذ" },
    excerpt: {
      en: "A quiet two-storey house in limestone and bronze — planned, built, and finished as a single commission.",
      ar: "بيت هادئ من طابقين بالحجر الجيري والبرونز — خُطّط وبُني وشُطّب كتكليف واحد.",
    },
  },
  {
    slug: "courtyard-residence",
    image: "/images/villa-night.jpg",
    gallery: ["/images/villa-night.jpg", "/images/hero.jpg"],
    year: "2025",
    title: { en: "Courtyard Residence", ar: "سكن بفناء داخلي" },
    place: { en: "Dubai", ar: "دبي" },
    type: { en: "Villa construction", ar: "إنشاء فيلا" },
    excerpt: {
      en: "Night-ready envelope, still water, and rooms that hold the day’s heat at the threshold.",
      ar: "غلاف جاهز لليل، وماء ساكن، وغرف توقف حرارة النهار عند العتبة.",
    },
  },
  {
    slug: "double-height-interior",
    image: "/images/interior.jpg",
    gallery: ["/images/interior.jpg", "/images/villa-day.jpg"],
    year: "2024",
    title: { en: "Double-Height Living", ar: "معيشة بارتفاع مزدوج" },
    place: { en: "Private villa, Dubai", ar: "فيلا خاصة، دبي" },
    type: { en: "Finishes", ar: "تشطيبات" },
    excerpt: {
      en: "Linen, stone, and a window wall onto the courtyard — interior work held to the same line as the structure.",
      ar: "كتان وحجر وجدار نوافذ على الفناء — أعمال داخلية على نفس خط الهيكل.",
    },
  },
  {
    slug: "trade-centre-commercial",
    image: "/images/commercial.jpg",
    gallery: ["/images/commercial.jpg", "/images/mep.jpg"],
    year: "2024",
    title: { en: "Commercial Floor", ar: "طابق تجاري" },
    place: { en: "Sheikh Zayed Road", ar: "شارع الشيخ زايد" },
    type: { en: "Commercial", ar: "تجاري" },
    excerpt: {
      en: "A mid-rise commercial envelope and services — built for occupancy, not for a photograph.",
      ar: "غلاف تجاري متوسط الارتفاع وخدماته — بُني للإشغال لا للصورة.",
    },
  },
  {
    slug: "structural-frame",
    image: "/images/structure.jpg",
    gallery: ["/images/structure.jpg", "/images/craft.jpg"],
    year: "2024",
    title: { en: "Villa Frame", ar: "هيكل فيلا" },
    place: { en: "Dubai", ar: "دبي" },
    type: { en: "Structural", ar: "إنشائي" },
    excerpt: {
      en: "Formwork, steel, and pour — the unseen work that every later trade depends on.",
      ar: "قوالب وحديد وصب — العمل غير المرئي الذي تعتمد عليه كل الحرف لاحقاً.",
    },
  },
  {
    slug: "mep-plant",
    image: "/images/mep.jpg",
    gallery: ["/images/mep.jpg", "/images/electrical.jpg"],
    year: "2023",
    title: { en: "MEP Plant Room", ar: "غرفة معدات كهروميكانيكية" },
    place: { en: "Dubai", ar: "دبي" },
    type: { en: "Mechanical", ar: "ميكانيكي" },
    excerpt: {
      en: "Air handlers, pipework, and access — a plant room that a technician can actually work in.",
      ar: "وحدات مناولة وأنابيب وممرات وصول — غرفة معدات يمكن للفني العمل فيها فعلاً.",
    },
  },
] as const;

export const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Work",
      contact: "Contact",
      quote: "Get a quote",
    },
    hero: {
      kicker: "Building contracting · Dubai",
      title: "Building dreams through construction.",
      lede: "We build. We craft. Construction for commercial and private clients, from G+1 villas to electrical, mechanical, and structural works.",
      primary: "Start a project",
      secondary: "See the work",
    },
    stats: [
      { value: "75+", label: "Projects handed over" },
      { value: "4+", label: "Years in Dubai" },
      { value: "100+", label: "Colleagues on the books" },
      { value: "SZR", label: "Office on Sheikh Zayed Road" },
    ],
    aboutBand: {
      kicker: "About us",
      title: "Improving properties, for your satisfaction.",
      body: "Noor Al Manazel is a fast-growing building contractor in Dubai. We began with a few clients and have grown through careful work and a capable team. We take commercial and private briefs and deliver them with one standard — listen better, plan better, build better.",
      more: "Our story",
    },
    servicesBand: {
      kicker: "Our services",
      title: "Listen better. Plan better. Build better.",
      body: "Design-build villas, electrical and mechanical MEP, structure, inspection, and supply — one contractor, coordinated trades.",
      all: "All services",
    },
    workBand: {
      kicker: "Selected work",
      title: "Houses, frames, and plant — built to be used.",
      all: "All projects",
    },
    process: {
      kicker: "How we work",
      title: "From first conversation to the keys.",
      steps: [
        {
          n: "01",
          title: "Listen",
          body: "A site visit and a clear brief. We want the constraints — plot, budget, programme — before we draw.",
        },
        {
          n: "02",
          title: "Plan",
          body: "Architecture, structure, and MEP coordinated. Quantities and a programme you can hold us to.",
        },
        {
          n: "03",
          title: "Approve",
          body: "Municipality and authority submissions handled with the consultant, not left on your desk.",
        },
        {
          n: "04",
          title: "Build",
          body: "Structure, services, and finishes on one programme, with a site that stays fit for a residential street.",
        },
        {
          n: "05",
          title: "Inspect",
          body: "Testing, snagging, and written close-out before we call it done.",
        },
        {
          n: "06",
          title: "Handover",
          body: "As-builts, warranties, and a building you can occupy.",
        },
      ],
    },
    vision: {
      kicker: "Direction",
      visionTitle: "Vision",
      vision:
        "A portfolio defined by durability and high quality — buildings that last, and that sit well in this city.",
      missionTitle: "Mission",
      mission:
        "To deliver a complete construction service that meets the specific requirements of each commercial and private client.",
      sustainTitle: "Method",
      sustain:
        "Smart, eco-conscious developments using current tools and practices — not slogans after the fact.",
    },
    cta: {
      title: "Let us turn the brief into a building.",
      body: "Tell us the plot, the programme, and what you need the rooms to do. We will come back with a clear next step.",
      action: "Request a quote",
      call: "Call the office",
    },
    aboutPage: {
      kicker: "The practice",
      title: "A contractor on Sheikh Zayed Road.",
      lede: "Noor Al Manazel Building Contracting LLC works from Office 506, Saeed Tower 2 — in the middle of the city we build in.",
      p1: "We embarked with a few clients and have grown quickly on the back of work that holds up: villas, commercial floors, electrical and mechanical packages, structure, inspection, and supply. The team now numbers more than a hundred colleagues.",
      p2: "Private clients come to us for G+1 villas they will live in. Commercial clients come for MEP and building works that need to be economical and inspectable. Both get the same site discipline.",
      p3: "We are still a young company — four years in — and we treat that as a reason to be careful, not a reason to overclaim. The buildings should speak.",
    },
    workPage: {
      kicker: "Portfolio",
      title: "Selected work.",
      lede: "A sample of the villas, interiors, structure, and plant we deliver in Dubai. Real project photographs can replace these on request.",
      filterAll: "All",
    },
    contactPage: {
      kicker: "Contact",
      title: "Keep in touch with us.",
      lede: "A question, a plot, or a collaboration — write, call, or send a WhatsApp. We reply during office hours.",
      address: "Office",
      phone: "Telephone",
      email: "Email",
      hours: "Hours",
      map: "Open in Google Maps",
      gis: "View on 2GIS",
      formTitle: "Project enquiry",
      formBody:
        "Fill this in and the office will get back to you. For something urgent, WhatsApp is faster.",
      name: "Name",
      phoneField: "Phone",
      emailField: "Email",
      serviceField: "Service",
      servicePlaceholder: "What do you need?",
      message: "Message",
      messagePlaceholder: "Plot, size, timing, anything we should know.",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Received.",
      successBody:
        "Thank you. We will contact you during working hours, Saturday excepted if you wrote on Friday evening.",
      whatsapp: "Continue on WhatsApp",
      error: "Please complete name, phone, and a short message.",
    },
    footer: {
      blurb:
        "Noor Al Manazel is a fast-growing and reliable construction company in Dubai.",
      links: "Pages",
      contact: "Office",
      rights: "All rights reserved.",
    },
    wa: "Hello, I would like to discuss a construction project with Noor Al Manazel.",
    notFound: "This page is not in the drawings.",
    backHome: "Back to the site",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "أعمالنا",
      contact: "تواصل",
      quote: "اطلب عرض سعر",
    },
    hero: {
      kicker: "مقاولات بناء · دبي",
      title: "نبني الأحلام عبر الإنشاء.",
      lede: "نبني. نصنع. إنشاء للعملاء التجاريين والخاصين، من فلل أرضي + أول إلى الأعمال الكهربائية والميكانيكية والإنشائية.",
      primary: "ابدأ مشروعك",
      secondary: "شاهد الأعمال",
    },
    stats: [
      { value: "+75", label: "مشروعاً مسلَّماً" },
      { value: "+4", label: "سنوات في دبي" },
      { value: "+100", label: "زميل في الفريق" },
      { value: "SZR", label: "مكتب على شارع الشيخ زايد" },
    ],
    aboutBand: {
      kicker: "من نحن",
      title: "نُحسّن العقارات، لرضاكم.",
      body: "نور المنازل مقاول بناء سريع النمو في دبي. بدأنا بعدد قليل من العملاء ونمونا بعمل متأنٍ وفريق قادر. نأخذ موجزات تجارية وخاصة وننفّذها بمعيار واحد: نستمع أفضل، نخطط أفضل، نبني أفضل.",
      more: "قصتنا",
    },
    servicesBand: {
      kicker: "خدماتنا",
      title: "نستمع أفضل. نخطط أفضل. نبني أفضل.",
      body: "فلل تصميم وتنفيذ، أعمال كهربائية وميكانيكية، هيكل، فحص، وتوريد — مقاول واحد وحرف منسّقة.",
      all: "كل الخدمات",
    },
    workBand: {
      kicker: "أعمال مختارة",
      title: "بيوت وهياكل ومعدات — تُبنى لتُستخدم.",
      all: "كل المشاريع",
    },
    process: {
      kicker: "طريقة العمل",
      title: "من أول حديث حتى تسليم المفاتيح.",
      steps: [
        {
          n: "01",
          title: "نستمع",
          body: "زيارة موقع وموجز واضح. نريد القيود — القسيمة والميزانية والبرنامج — قبل أن نرسم.",
        },
        {
          n: "02",
          title: "نخطط",
          body: "عمارة وهيكل وكهروميكانيك منسّقة. كميات وبرنامج يمكنكم محاسبتنا عليه.",
        },
        {
          n: "03",
          title: "نعتمد",
          body: "تقديمات البلدية والجهات تُدار مع الاستشاري، لا تُترك على مكتبكم.",
        },
        {
          n: "04",
          title: "نبني",
          body: "هيكل وخدمات وتشطيبات على برنامج واحد، وموقع يبقى لائقاً بشارع سكني.",
        },
        {
          n: "05",
          title: "نفحص",
          body: "اختبارات وكشف عيوب وإغلاق مكتوب قبل أن نقول إن العمل انتهى.",
        },
        {
          n: "06",
          title: "نسلّم",
          body: "مخططات كما نُفّذ وضمانات ومبنى يمكن إشغاله.",
        },
      ],
    },
    vision: {
      kicker: "الاتجاه",
      visionTitle: "الرؤية",
      vision:
        "محفظة تُعرَّف بالمتانة والجودة العالية — مبانٍ تدوم، وتستقر في هذه المدينة بسلام.",
      missionTitle: "الرسالة",
      mission:
        "تقديم خدمة إنشاء شاملة تلبي المتطلبات الخاصة لكل عميل تجاري وخاص.",
      sustainTitle: "المنهج",
      sustain:
        "تطويرات واعية بيئياً بأدوات وممارسات راهنة — لا شعارات بعد انتهاء العمل.",
    },
    cta: {
      title: "دعونا نحوّل الموجز إلى مبنى.",
      body: "أخبرونا بالقسيمة والبرنامج وما تريدون للغرف أن تفعله. سنعود بخطوة تالية واضحة.",
      action: "اطلب عرض سعر",
      call: "اتصل بالمكتب",
    },
    aboutPage: {
      kicker: "الممارسة",
      title: "مقاول على شارع الشيخ زايد.",
      lede: "تعمل نور المنازل للمقاولات ذ.م.م. من مكتب 506 في برج سعيد 2 — في وسط المدينة التي نبني فيها.",
      p1: "بدأنا بعدد قليل من العملاء ونمونا بسرعة على عمل يصمد: فلل، طوابق تجارية، حزم كهربائية وميكانيكية، هيكل، فحص، وتوريد. يضم الفريق اليوم أكثر من مئة زميل.",
      p2: "يأتينا العملاء الخاصون من أجل فلل أرضي + أول سيعيشون فيها. ويأتينا العملاء التجاريون من أجل أعمال كهروميكانيكية وإنشائية يلزم أن تكون اقتصادية وقابلة للفحص. كلاهما يحصل على الانضباط الموقعي نفسه.",
      p3: "ما زلنا شركة فتيّة — أربع سنوات — ونتعامل مع ذلك كسبب للعناية، لا للمبالغة. المباني هي التي تتكلم.",
    },
    workPage: {
      kicker: "المحفظة",
      title: "أعمال مختارة.",
      lede: "عيّنة من الفلل والداخل والهيكل والمعدات التي نسلّمها في دبي. يمكن استبدال هذه الصور بصور مشاريع حقيقية عند الطلب.",
      filterAll: "الكل",
    },
    contactPage: {
      kicker: "تواصل",
      title: "ابقَ على تواصل معنا.",
      lede: "سؤال أو قسيمة أو تعاون — اكتب أو اتصل أو أرسل واتساب. نرد خلال ساعات العمل.",
      address: "المكتب",
      phone: "الهاتف",
      email: "البريد",
      hours: "الساعات",
      map: "افتح في خرائط غوغل",
      gis: "اعرض على تو جيس",
      formTitle: "استفسار عن مشروع",
      formBody:
        "عبّئ هذا النموذج وسيعود المكتب إليك. للأمر العاجل، واتساب أسرع.",
      name: "الاسم",
      phoneField: "الهاتف",
      emailField: "البريد",
      serviceField: "الخدمة",
      servicePlaceholder: "ماذا تحتاج؟",
      message: "الرسالة",
      messagePlaceholder: "القسيمة، الحجم، التوقيت، أي شيء ينبغي أن نعرفه.",
      submit: "أرسل الرسالة",
      sending: "جارٍ الإرسال…",
      successTitle: "وصلت.",
      successBody:
        "شكراً لك. سنتواصل خلال ساعات العمل، باستثناء السبت إن كتبت مساء الجمعة.",
      whatsapp: "تابع على واتساب",
      error: "أكمل الاسم والهاتف ورسالة قصيرة.",
    },
    footer: {
      blurb: "نور المنازل شركة إنشاء سريعة النمو وموثوقة في دبي.",
      links: "صفحات",
      contact: "المكتب",
      rights: "جميع الحقوق محفوظة.",
    },
    wa: "مرحباً، أود مناقشة مشروع إنشاء مع نور المنازل.",
    notFound: "هذه الصفحة ليست في المخططات.",
    backHome: "العودة إلى الموقع",
  },
} as const;

export function waLink(text: string) {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function serviceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
