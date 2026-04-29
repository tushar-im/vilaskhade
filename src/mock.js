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
    name: "Banana AI",
    use: "Visual generation & enhancement"
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
      "/projects/02-access-website/01-hero.png",
      "/projects/02-access-website/01-page.png",
      "/projects/02-access-website/02-page.png",
      "/projects/02-access-website/04-page.png"
    ]
  },
  {
    slug: "field-worker-mobile-app",
    title: "Field Worker Mobile App",
    tag: "Mobile · iOS/Android",
    description:
      "Offline-first app helping community health workers log visits on low-end devices.",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzc2OTk2MjU5fDA&ixlib=rb-4.1.0&q=85&w=1600",
    year: "2023",
    role: "Mobile UX Lead",
    duration: "6 months",
    team: "1 PM · 1 Designer · 4 Engineers",
    client: "Dure Technologies × Public Health Programme",
    platforms: ["iOS", "Android"],
    overview:
      "Native mobile app used by 8,000+ community health workers in rural districts. Optimised for ₹4,000 Android phones, intermittent connectivity and 11 regional languages.",
    problem:
      "Workers were carrying paper forms; data entry happened at end-of-week, often inaccurately. Existing apps crashed on low-end devices and required constant connectivity.",
    process: [
      { step: "01", title: "Field research", body: "Spent 3 weeks shadowing CHWs across 6 districts to map the real workflow." },
      { step: "02", title: "Constraints first", body: "Designed for 360×640 screens, 1GB RAM, intermittent 2G connectivity." },
      { step: "03", title: "Localisation", body: "Worked with translators across 11 regional languages, including RTL Urdu." },
      { step: "04", title: "Field testing", body: "Daily-build testing with 20 workers across 4 weeks before launch." }
    ],
    features: [
      "Offline-first sync — works on 2G, syncs when online",
      "Voice-input for low-literacy users",
      "11 regional languages with RTL support",
      "Battery-optimised: ~2% drain per shift"
    ],
    outcomes: [
      { kpi: "8k+", label: "active field workers" },
      { kpi: "94%", label: "form completion rate" },
      { kpi: "5×", label: "faster data entry" },
      { kpi: "4.7★", label: "Play Store rating" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?w=1600&q=85",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600&q=85"
    ]
  },
  {
    slug: "employer-analytics-suite",
    title: "Employer Analytics Suite",
    tag: "Dashboard · B2B",
    description:
      "Hiring intelligence dashboard with candidate pipelines and predictive scoring.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxVSSUyMGRhc2hib2FyZCUyMG1vY2t1cHxlbnwwfHx8fDE3NzY5OTYyNTV8MA&ixlib=rb-4.1.0&q=85&w=1600",
    year: "2022",
    role: "Senior UX Designer",
    duration: "4 months",
    team: "1 PM · 2 Designers · 5 Engineers",
    client: "B2B HR-Tech",
    platforms: ["Web"],
    overview:
      "End-to-end redesign of an employer analytics suite used by 400+ hiring managers. Modernised the IA, introduced predictive candidate scoring, and shipped a new design system.",
    problem:
      "Hiring managers were drowning in spreadsheets. The old dashboard surfaced data, not decisions. Adoption was 31% and falling.",
    process: [
      { step: "01", title: "Stakeholder map", body: "Interviewed 14 managers and 6 recruiters to pinpoint decision moments." },
      { step: "02", title: "Information architecture", body: "Restructured 80+ widgets into 6 outcome-led views." },
      { step: "03", title: "Predictive scoring UX", body: "Designed transparent scoring patterns that build trust in the model." },
      { step: "04", title: "Design system v2", body: "Built component library with light/dark modes and dense table primitives." }
    ],
    features: [
      "Outcome-led dashboards (Time-to-hire, Quality, Pipeline)",
      "Predictive candidate score with explainability",
      "Saved views, custom filters, Slack alerts",
      "Light/dark + density modes"
    ],
    outcomes: [
      { kpi: "+58%", label: "weekly active users" },
      { kpi: "−42%", label: "time-to-hire (median)" },
      { kpi: "400+", label: "hiring managers" },
      { kpi: "8.9/10", label: "CSAT score" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?w=1600&q=85",
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?w=1600&q=85",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600&q=85"
    ]
  },
  {
    slug: "ops-monitoring-console",
    title: "Ops Monitoring Console",
    tag: "SaaS · Internal Tool",
    description:
      "Multi-tenant monitoring console consolidating 14 legacy dashboards into one.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxTYWFTJTIwZGFzaGJvYXJkJTIwZGVzaWdufGVufDB8fHx8MTc3Njk5NzYyM3ww&ixlib=rb-4.1.0&q=85&w=1600",
    year: "2022",
    role: "Lead Designer",
    duration: "7 months",
    team: "1 PM · 1 Designer · 5 SREs",
    client: "Internal Platform Team",
    platforms: ["Web"],
    overview:
      "Replaced 14 legacy operations dashboards with a single multi-tenant console used by 90 SREs across 6 product lines. Cut tab-switching, mean-time-to-detect and onboarding time.",
    problem:
      "On-call engineers had 14 tabs open during incidents. MTTR was ballooning, and new SREs took 3 weeks to learn the tooling.",
    process: [
      { step: "01", title: "Workflow audit", body: "Mapped 9 incident playbooks across the 6 product lines." },
      { step: "02", title: "Data model", body: "Co-designed a unified telemetry schema with the platform team." },
      { step: "03", title: "Information density", body: "Pioneered a high-density table system optimised for 4K monitors." },
      { step: "04", title: "Rollout", body: "Phased migration with side-by-side comparisons to win SRE trust." }
    ],
    features: [
      "Unified incident timeline across all services",
      "High-density tables tuned for 4K war-room screens",
      "Saved investigations + post-mortem export",
      "Role-based views for SRE, Manager and Exec"
    ],
    outcomes: [
      { kpi: "−61%", label: "MTTR reduction" },
      { kpi: "14→1", label: "dashboards consolidated" },
      { kpi: "1 wk", label: "new SRE ramp-up time" },
      { kpi: "90", label: "engineers onboarded" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600&q=85",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85",
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?w=1600&q=85"
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
