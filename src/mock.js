// Mock data for Vilas Khade's Resume/Portfolio

export const profile = {
  name: "Vilas Anandrao Khade",
  title: "Senior UI/UX Designer & Graphic Designer",
  tagline: "13+ years crafting human-centered digital products",
  avatar:
    "avatar.jpeg",
  heroImage:
    "https://customer-assets.emergentagent.com/job_minimal-design-cv/artifacts/kvryq2eh_image1.jpeg",
  location: "Mumbai, India",
  email: "hello@vilaskhade.cc",
  phone: "+91 9594985530",
  website: "vilaskhade.cc",
  social: {
    linkedin: "https://www.linkedin.com/in/vilas-khade-58740622/",
    dribbble: "dribbble.com/vilaskhade",
    behance: "behance.net/vilaskhade"
  }
};

export const about =
  "Creative UI/UX and Graphic Designer with 13+ years of experience in web, mobile, branding, and product design. Passionate about modern design systems, accessibility and user-centered solutions that balance business goals with delightful experiences.";

export const objective =
  "Seeking to contribute modern, AI-powered and user-focused design solutions in a dynamic organization — where design thinking meets measurable outcomes.";

export const skills = [
  { name: "UI / UX Design", level: 96 },
  { name: "Mobile App Design", level: 92 },
  { name: "Dashboard & SaaS Design", level: 94 },
  { name: "Branding & Identity", level: 88 },
  { name: "Video Editing", level: 60 }
];

export const tools = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Canva",
  "Camtasia"
];

export const aiTools = [
  {
    name: "Gemini AI",
    use: "Research synthesis & ideation"
  },
  {
    name: "ChatGPT",
    use: "Content generation & UX writing"
  },
  {
    name: "Claude AI",
    use: "Long-form reasoning & design critique"
  },
  {
    name: "Lovable AI",
    use: "Rapid prototyping"
  },
  {
    name: "Flow",
    use: "Workflow automation for design ops"
  },
  {
    name: "Stitch by Google",
    use: "AI-assisted UI exploration"
  }
];

export const experience = [
  {
    role: "Senior UI/UX & Graphic Designer",
    company: "Dure Technologies",
    period: "2016 — Present",
    location: "Mumbai",
    points: [
      "Lead design for public health platforms used across 20+ countries.",
      "Built and maintained a scalable design system used by 12 product teams.",
      "Partnered with engineers & PMs on AI-powered dashboards & reporting tools."
    ]
  },
  {
    role: "Senior Graphic Designer",
    company: "Intelecorp Software",
    period: "2014 — 2016",
    location: "Mumbai",
    points: [
      "Delivered brand identity & UI systems for B2B SaaS products.",
      "Produced marketing collateral, pitch decks and motion assets."
    ]
  },
  {
    role: "Senior Graphic Designer",
    company: "Naaptol",
    period: "2011 — 2014",
    location: "Mumbai",
    points: [
      "Designed product campaigns for one of India's largest tele-shopping networks.",
      "Managed a team of 4 junior designers across print & digital."
    ]
  },
  {
    role: "Web Designer",
    company: "ZCOM Technologies",
    period: "2010 — 2011",
    location: "Pune",
    points: [
      "Designed and sliced responsive web templates for 30+ client sites."
    ]
  }
];

export const projects = [
  {
    slug: "maxim-fleet-management",
    title: "Maxim Fleet Management App",
    tag: "Mobile · Fleet Ops",
    description:
      "Driver and manager mobile workflows for trip logs, expenses, approvals, and fleet operations.",
    image: "/projects/01-maxim/00-featured.png",
    year: "2024",
    role: "UI/UX Designer",
    duration: "Case study",
    team: "Myself & Product Manager",
    client: "Maxim",
    platforms: ["Android", "Web"],
    overview:
      "Maxim is a fleet management mobile application for transport and logistics teams operating truck fleets. It supports drivers and fleet managers in real time, covering daily trip logging, expense booking, FM rate approvals, and manager-level review workflows through a clean blue-and-white interface with Maxim's orange truck branding.",
    problem:
      "Fleet operators were relying on paper-based daily logs, manual expense claims, and slow approval chains for FM rates and purchase orders. Drivers needed a mobile way to log trips, upload receipts, and report emergencies, while managers needed a consolidated review workflow on the go.",
    process: [
      {
        step: "01",
        title: "Role mapping",
        body: "Separated driver tasks and manager approvals into distinct mobile workflows."
      },
      {
        step: "02",
        title: "Dashboard design",
        body: "Built an icon-led home dashboard with live trip progress and quick modules."
      },
      {
        step: "03",
        title: "Workflow forms",
        body: "Designed daily logs, expense booking, uploads, and OTP-friendly access."
      },
      {
        step: "04",
        title: "Approval patterns",
        body: "Created manager review cards and modal actions for forward, approve, or reject decisions."
      }
    ],
    features: [
      "Driver trip dashboard with progress, KM, and daily target status",
      "Daily log form for vehicle, route, KM, reason, and file upload",
      "Expense booking with category tabs, amount entry, and receipt capture",
      "Manager review panel for FM Rate Approval, PO Approval, and Driver Expense",
      "FM approval bottom sheet with transaction details and decision actions",
      "SOS access from home dashboard and profile for roadside incidents"
    ],
    outcomes: [
      { kpi: "9", label: "key screens designed" },
      { kpi: "3", label: "approval types" },
      { kpi: "7", label: "quick-access modules" },
      { kpi: "1 flow", label: "driver-to-manager ops" }
    ],
    gallery: [
      "/projects/01-maxim/01-login.png",
      "/projects/01-maxim/02-phone-app.png",
      "/projects/01-maxim/03-phone-app.png"
    ]
  },
  {
    slug: "access-accelerated-website",
    title: "Access Accelerated Website",
    tag: "Website · Global Health",
    description:
      "Public-facing website design for a World Bank partnership focused on NCD access and impact.",
    image: "/projects/02-access-website/01-hero.png",
    year: "2024",
    role: "UI/UX Designer",
    duration: "Homepage case study",
    team: "Myself & Product Manager",
    client: "Access Accelerated",
    platforms: ["Web"],
    overview:
      "Access Accelerated is a global initiative bringing together biopharmaceutical companies and the World Bank to improve access to prevention and treatment for non-communicable diseases in low- and middle-income countries. The website communicates the initiative's mission, impact data, partnerships, news, and member organisations to health professionals, policymakers, and stakeholders.",
    problem:
      "The homepage needed to balance a serious, data-driven global health mission with human storytelling, credible impact statistics, SDG alignment, partnership content, news, resources, and member organisations without overwhelming visitors.",
    process: [
      { step: "01", title: "Narrative structure", body: "Organised a long-scroll homepage from mission to impact, resources, and members." },
      { step: "02", title: "Visual hierarchy", body: "Designed clear section rhythms for policy, donor, and health stakeholder audiences." },
      { step: "03", title: "Impact storytelling", body: "Paired documentary photography with large statistics and SDG alignment cues." },
      { step: "04", title: "Action system", body: "Used orange CTAs consistently across the page to guide user engagement." }
    ],
    features: [
      "Full-width photographic hero with mission-led headline and primary CTA",
      "Who We Are and World Bank partnership content sections",
      "NCD challenge and investment impact editorial sections",
      "Global reach stats for countries and people impacted",
      "SDG alignment section with colourful wheel component",
      "News, events, resources, member logos, and newsletter footer"
    ],
    outcomes: [
      { kpi: "22", label: "countries highlighted" },
      { kpi: "22M", label: "people represented" },
      { kpi: "3", label: "SDG targets aligned" },
      { kpi: "1 page", label: "mission-to-impact story" }
    ],
    gallery: [
      "/projects/02-access-website/02-page.png",
      "/projects/02-access-website/01-page.png",
      "/projects/02-access-website/04-page.png"
    ]
  },
  {
    slug: "family-planning-app",
    title: "Family Planning App",
    tag: "Mobile Health · Public Health",
    description:
      "Mobile health app for family planning knowledge, AI counselling, nearby care, and reminders.",
    image: "/projects/03-family-planning/01-hero.jpg",
    year: "2023",
    role: "UI/UX Designer",
    duration: "Case study",
    team: "Myself & Product Manager",
    client: "Public Health Programme",
    platforms: ["iOS", "Android"],
    overview:
      "A mobile health application designed to empower individuals and families with accessible family planning knowledge, virtual counselling, nearby care discovery, reminders, monitoring, and peer support in one place.",
    problem:
      "Many individuals lack easy access to reliable family planning information, qualified counsellors, and nearby health facilities, leading to uninformed decisions and missed preventive care.",
    process: [
      { step: "01", title: "Feature mapping", body: "Grouped education, counselling, clinic discovery, reminders, and community support." },
      { step: "02", title: "Navigation design", body: "Built flat icon-led navigation with circular modules for quick access." },
      { step: "03", title: "Chatbot UX", body: "Designed Ate Melai counselling with topic lists, ratings, voice, and text input." },
      { step: "04", title: "Care access", body: "Connected map-based nearby facilities with call and directions actions." }
    ],
    features: [
      "Virtual counselling with AI-powered Ate Melai chat",
      "Voice and text input for sensitive family planning questions",
      "Near Me map for hospitals, clinics, and pharmacies",
      "CLM intervention sessions with follow-up tracking",
      "Reminders, monitoring, and adherence support",
      "Community forum and awareness hub for self-guided learning"
    ],
    outcomes: [
      { kpi: "8", label: "core features" },
      { kpi: "24/7", label: "AI counsellor access" },
      { kpi: "1 tap", label: "calls and directions" },
      { kpi: "1 app", label: "knowledge-to-care flow" }
    ],
    gallery: [
      "/projects/03-family-planning/01-hero.jpg",
      "/projects/03-family-planning/02-feature.png",
      "/projects/03-family-planning/03-screens.png",
      "/projects/03-family-planning/04-screens.png"
    ]
  },
  {
    slug: "oneimpact-clm",
    title: "OneImpact CLM",
    tag: "Website · Data Visualisation",
    description:
      "Stop TB Partnership website design for community-led monitoring, TB advocacy, and global reach.",
    image: "/projects/04-one-impact/00-hero.png",
    year: "2022",
    role: "UI/UX Designer",
    duration: "Case study",
    team: "Myself & Product Manager",
    client: "Stop TB Partnership",
    platforms: ["Web", "Mobile App"],
    overview:
      "OneImpact is the Stop TB Partnership's Community-Led Monitoring platform, designed to support the global effort to End TB by 2030. The website communicates the platform's mission, architecture, data tools, country reach, and impact to TB advocates, programme implementers, and funders.",
    problem:
      "OneImpact serves a technically diverse global health audience and needed to explain a complex multi-stakeholder monitoring system, show country implementation status, present impact data, and connect the web platform with the OneImpact Family mobile app.",
    process: [
      { step: "01", title: "Mission framing", body: "Structured the long-scroll narrative around CLM, TB response, and global impact." },
      { step: "02", title: "Ecosystem diagrams", body: "Designed hex and stakeholder diagrams to explain community-led monitoring." },
      { step: "03", title: "Data storytelling", body: "Used maps, status tables, KPIs, and 2030 charts to show programme scale." },
      { step: "04", title: "Digital showcase", body: "Presented the web platform and mobile app as one connected monitoring system." }
    ],
    features: [
      "Dark hero with OneImpact globe mark, headline stats, and partner logos",
      "CLM framework hex diagram and stakeholder triangle visualisation",
      "Country implementation status table and world map coverage layer",
      "2030 End TB progress chart with projected and actual progress",
      "OneImpact web and mobile app digital solution showcase",
      "Case studies, news corner, resource library, and partner footer"
    ],
    outcomes: [
      { kpi: "70+", label: "countries framed" },
      { kpi: "2030", label: "End TB target" },
      { kpi: "1 map", label: "global journey" },
      { kpi: "2 apps", label: "web and mobile" }
    ],
    gallery: [
      "/projects/04-one-impact/00-hero.png",
      "/projects/04-one-impact/00-inffo.png",
      "/projects/04-one-impact/01-info.png",
      "/projects/04-one-impact/02-info.png"
    ]
  },
  {
    slug: "car-climate-health-dashboard",
    title: "CAR Climate & Health Dashboard",
    tag: "Dashboard · Public Health",
    description:
      "Climate and health analytics dashboard for flood impact, FOSA facilities, and vulnerable populations.",
    image: "/projects/05-climate-dashboard/00-hero.png",
    year: "2022",
    role: "UI/UX Designer",
    duration: "Case study",
    team: "Myself & Product Manager",
    client: "Central African Republic Health Programme",
    platforms: ["Web"],
    overview:
      "The CAR Climate & Health Dashboard is a web-based analytics platform for monitoring how floods, heavy precipitation, and natural hazards affect public health infrastructure in the Central African Republic. It combines climate, FOSA facility, HIV/Malaria service, and population risk data into one explorable dashboard.",
    problem:
      "Recurring floods disrupt access to health facilities and increase disease risk, but health programme managers lacked a unified view of climate severity, facility impact, service access, and population displacement risk across siloed data sources.",
    process: [
      { step: "01", title: "Data layering", body: "Combined climate, health infrastructure, disease service, and population metrics." },
      { step: "02", title: "Map anchor", body: "Centered the experience on an interactive CAR choropleth with facility markers." },
      { step: "03", title: "Risk filters", body: "Designed tabs for flood story, cholera risk, HIV zones, and malaria zones." },
      { step: "04", title: "Impact charts", body: "Created KPI tiles, donut cards, and pre/post flood access comparisons." }
    ],
    features: [
      "Interactive CAR map with FOSA markers and layered crisis filters",
      "Impacted infrastructure KPIs for FOSA, GeneXpert, and cholera-risk latrines",
      "HIV and malaria service availability trend charts",
      "Population-at-risk radial cards for people, pregnancies, and children",
      "Pre-flood vs post-flood health service access charts",
      "Historical hazard and precipitation analysis from 1980 to 2050"
    ],
    outcomes: [
      { kpi: "89", label: "FOSA facilities" },
      { kpi: "72", label: "GeneXpert machines" },
      { kpi: "447k", label: "population at risk" },
      { kpi: "40+", label: "years of data" }
    ],
    gallery: [
      "/projects/05-climate-dashboard/00-hero.png",
      "/projects/05-climate-dashboard/01-dash.png"
    ]
  }
];

export const creativeWork = [
  {
    id: "logo",
    label: "Logo & Branding",
    icon: "PenTool",
    blurb:
      "Identity systems, marks and guidelines for startups and established brands.",
    count: "40+ identities",
    items: [
      {
        title: "Minimal wordmark system",
        meta: "Stationery \u00b7 2024",
        image:
          "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        title: "Lifestyle brand toolkit",
        meta: "Identity \u00b7 2023",
        image:
          "https://images.pexels.com/photos/12802261/pexels-photo-12802261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },
  {
    id: "infographics",
    label: "Infographics",
    icon: "BarChart3",
    blurb:
      "Turning dense data into scannable, story-driven visuals for reports & social.",
    count: "60+ graphics",
    items: [
      {
        title: "Public health impact report",
        meta: "Data viz \u00b7 2024",
        image:
          "https://images.pexels.com/photos/7947659/pexels-photo-7947659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        title: "Annual metrics one-pager",
        meta: "Print \u00b7 2023",
        image:
          "https://images.pexels.com/photos/7947963/pexels-photo-7947963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },
  {
    id: "motion",
    label: "Video & Motion",
    icon: "Video",
    blurb:
      "Promos, product explainers and training videos edited in Camtasia + After Effects.",
    count: "80+ videos",
    items: [
      {
        title: "Product launch promo",
        meta: "Motion graphics \u00b7 2024",
        image:
          "https://images.pexels.com/photos/1767783/pexels-photo-1767783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        title: "Training module series",
        meta: "Editing \u00b7 2023",
        image:
          "https://images.pexels.com/photos/29505140/pexels-photo-29505140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },
  {
    id: "ads",
    label: "Social & Paid Ads",
    icon: "Megaphone",
    blurb:
      "Google Display, Instagram & Meta ad creatives built for performance and recall.",
    count: "200+ creatives",
    items: [
      {
        title: "Instagram carousel set",
        meta: "Meta Ads \u00b7 2024",
        image:
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFkdmVydGlzaW5nfGVufDB8fHx8MTc3Njk5NzYyMXww&ixlib=rb-4.1.0&q=85&w=1200"
      },
      {
        title: "Google Display campaign",
        meta: "Performance \u00b7 2023",
        image:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxzb2NpYWwlMjBtZWRpYSUyMGFkdmVydGlzaW5nfGVufDB8fHx8MTc3Njk5NzYyMXww&ixlib=rb-4.1.0&q=85&w=1200"
      }
    ]
  },
  {
    id: "posters",
    label: "Poster Design",
    icon: "Image",
    blurb:
      "Large-format posters and event collateral \u2014 typographic and image-led.",
    count: "50+ posters",
    items: [
      {
        title: "Typographic event poster",
        meta: "Print \u00b7 2024",
        image:
          "https://images.unsplash.com/photo-1695634183707-03d9cc9aa8ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MHx8fHwxNzc2OTk3NjI1fDA&ixlib=rb-4.1.0&q=85&w=1200"
      },
      {
        title: "Outdoor campaign poster",
        meta: "Out-of-home \u00b7 2023",
        image:
          "https://images.unsplash.com/photo-1695634184273-334faca3538d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwyfHxwb3N0ZXIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MHx8fHwxNzc2OTk3NjI1fDA&ixlib=rb-4.1.0&q=85&w=1200"
      }
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Yashwantrao Chavan Maharashtra Open University (YCMOU)",
    period: "2007 — 2010"
  },
  {
    degree: "Diploma in Web Design",
    school: "EDIT Institute",
    period: "2009"
  }
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Native" },
  { name: "Marathi", level: "Native" }
];

export const stats = [
  { value: "13+", label: "Years of experience" },
  { value: "120+", label: "Shipped projects" },
  { value: "20+", label: "Countries impacted" },
  { value: "12", label: "Product teams supported" }
];
