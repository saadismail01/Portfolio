// All portfolio copy lives here. Keep it consistent with src/assets/Saad_Ismail_CV.pdf —
// no invented dates, metrics, clients or proficiency levels.

export const profile = {
  name: "Saad Ismail",
  title: "Technical Project & Product Coordinator",
  focus: ["Web Technology", "Technical Coordination", "AI-Assisted Workflows"],
  summary:
    "Computer Science graduate working across IT operations, web technology and digital products. I coordinate with developers and designers, review web implementations, track and verify fixes, and translate business requirements into clear technical tasks. I work hands-on with AI tools such as Claude, Codex and ChatGPT for coding, research, documentation and troubleshooting — and review and test what they produce — and also generate videos with AI. Currently strengthening my foundations in SQL, Python and data engineering.",
  availability:
    "Open to suitable IT, digital product and technology operations opportunities in Germany and across Europe.",
  location: "Lebanon",
  email: "saadismail001@gmail.com",
  linkedin: "https://www.linkedin.com/in/saad-ismail01",
  github: "https://github.com/saadismail01",
};

export const facts = [
  { label: "Education", value: "B.Sc. Computer Science" },
  { label: "Current role", value: "Capital Academy, since May 2024" },
  { label: "Product", value: "Co-founder, Menuify" },
  { label: "Languages", value: "Arabic (native), English, French" },
];

export const capitalAcademy = {
  role: "IT & Technical Project Coordinator",
  company: "Capital Academy",
  url: "https://capitalacademy.ai/en",
  urlLabel: "capitalacademy.ai",
  period: "May 2024 – Present",
  location: "Started in Dubai · now remote from Lebanon",
  description:
    "Digital education platform for finance, economics, investing and trading. The product brings together an online learning management system, video courses, digital books and certificate-based learning pathways.",
  areasLabel: "Platform areas I work across",
  areas: [
    "Learning management system",
    "Video learning & content protection",
    "Digital books & resources",
    "Certificate pathways",
    "Student pages & dashboards",
    "Payments & checkout",
    "AI-related features",
    "Testing & production support",
  ],
  responsibilities: [
    "Coordinate and follow up website and platform development with developers and designers, from requirement to release.",
    "Translate business and operational requirements into clear technical tasks across the LMS, course pages, books, video learning, certificates and checkout.",
    "Review Figma designs against the implemented React interfaces and report visual, functional and implementation gaps.",
    "Track bugs with clear reproduction steps, coordinate fixes and verify the outcome; support testing of new features and production releases.",
    "Support colleagues with software, technical and internal workflow issues, and organise internal tasks in Word and Excel.",
    "Use AI tools to understand unfamiliar code and concepts, investigate errors, break down requirements and draft documentation and bug reports — reviewing and testing the results before relying on them.",
  ],
  stack: ["React", "Figma", "QA & release testing", "Bug tracking", "Requirements", "Word & Excel", "AI-assisted research & documentation"],
};

export const menuify = {
  role: "Co-Founder · Product Development & Digital Solutions",
  company: "Menuify",
  url: "https://www.menuify-qr.com/",
  urlLabel: "menuify-qr.com",
  period: "Current",
  problem:
    "Many small businesses share products through social media messages and take orders by hand. Menuify gives them an organised online presence: a digital menu or catalogue shared by link or QR code, with orders sent to WhatsApp or managed in an online store.",
  features: [
    "QR menus & digital catalogues",
    "Shareable business pages",
    "WhatsApp ordering",
    "Product & category management",
    "Online store with cart, orders & stock",
    "Coupons, staff roles & sales analytics",
    "English / Arabic interface",
  ],
  contribution: [
    "Product direction and positioning",
    "Turning business and customer requirements into practical features",
    "Coordinating technical development with my development partner",
    "Evaluating the product experience and business workflows",
    "Pricing, packaging and service definition",
    "Marketing strategy and customer acquisition",
    "Exploring expansion into new business sectors",
  ],
  why:
    "Menuify means thinking about a product from every side — customer experience, operational workflows, features, technical implementation and commercial positioning.",
};

export const earlierRoles = [
  { role: "Web Developer", org: "Freelance, with a development partner", period: "2021 – Present" },
  { role: "Front-End Developer", org: "Project-based development work", period: "2022 – 2024" },
  { role: "Coding Educator", org: "BrightChamps Academy", period: "2022 – 2024" },
  { role: "Internships", org: "Verozone Solutions EG · Genius House · Jinan University", period: "2022 – 2023" },
];

export type CaseStudy = {
  title: string;
  context: string;
  url: string;
  urlLabel: string;
  visual: "lms" | "menuify";
  /** Shown in the browser-frame address bar of the card visual. */
  address: string;
  problem: string;
  role: string;
  shipped: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Capital Academy LMS",
    context: "Digital education · since May 2024",
    url: "https://capitalacademy.ai/en",
    urlLabel: "capitalacademy.ai",
    visual: "lms",
    address: "capitalacademy.ai",
    problem:
      "A finance and trading education startup needed one platform for courses, digital books, podcasts, certificates and paid subscriptions — delivered by external developers and designers who needed clear direction.",
    role:
      "Coordinated between the business and the development and design team: requirements, Figma-vs-React review, bug tracking, release testing and integration follow-up.",
    shipped: [
      "LMS with 65+ courses & 5 certificate programmes",
      "Video learning, digital books & podcasts",
      "Subscriptions & team licences",
      "Payments, protected video & certificates",
      "AI finance chatbot & AI video",
    ],
  },
  {
    title: "Menuify",
    context: "Co-founded digital product",
    url: "https://www.menuify-qr.com/",
    urlLabel: "menuify-qr.com",
    visual: "menuify",
    address: "menuify-qr.com",
    problem:
      "Small businesses in Lebanon and Syria often share products through social media messages and take orders by hand, with no organised online presence.",
    role:
      "Co-founder leading product direction, pricing and go-to-market, and coordinating development with my development partner.",
    shipped: [
      "QR menus & digital catalogues",
      "WhatsApp ordering",
      "Online store with cart, orders & stock",
      "Coupons, staff roles & sales analytics",
      "English / Arabic interface",
    ],
  },
];

export type WorkItem = {
  title: string;
  context: string;
  description: string;
  tags: string[];
  url?: string;
  urlLabel?: string;
};

export const work: WorkItem[] = [
  {
    title: "Management Systems",
    context: "SEG Company",
    description: "Frontend for three internal management systems — Sam, Tom and Meters KEnergy — with API-driven interfaces.",
    tags: ["React", "Angular", "TypeScript"],
  },
  {
    title: "Kime",
    context: "Verozone Solutions EG · internship",
    description: "Frontend contribution to a marketing website (Nov 2022 – Jan 2023).",
    tags: ["React", "JavaScript"],
  },
  {
    title: "Card Bank",
    context: "Personal project",
    description: "Responsive online-banking landing page.",
    tags: ["React", "Tailwind CSS"],
    url: "https://bank-web-wj7d.vercel.app/",
    urlLabel: "View live",
  },
];

export const skills = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "Syncfusion"] },
  { group: "Backend", items: ["PHP", "Laravel"] },
  { group: "Data", items: ["SQL", "MySQL", "Prisma"] },
  { group: "Foundations", items: ["API concepts", "Web application architecture", "Responsive interfaces", "System analysis", "Software testing"] },
  { group: "Tools", items: ["Git & GitHub", "Figma", "Word, Excel & PowerPoint", "Windows, macOS & Linux"] },
];

export const aiWorkflows = {
  intro:
    "I use AI tools as working assistants, not as a replacement for judgement. Every output is reviewed, tested or checked against the source before I rely on it or pass it on.",
  tools: ["Claude", "Codex", "ChatGPT", "AI video generation"],
  areas: [
    { title: "AI-assisted coding", text: "Writing, reading and debugging code with Claude, Codex and ChatGPT — every change reviewed and tested." },
    { title: "AI video generation", text: "Creating videos with AI generation tools." },
    { title: "Research & troubleshooting", text: "Investigating errors, exploring possible causes and comparing solutions." },
    { title: "Requirements & task breakdown", text: "Clarifying requirements and splitting complex work into concrete steps." },
    { title: "Documentation & communication", text: "Drafting bug reports and documentation that work for technical and non-technical readers." },
    { title: "Product research", text: "Researching features and comparing expected behaviour with the actual implementation." },
    { title: "Workflow & learning", text: "Speeding up repetitive tasks and getting up to speed with new tools." },
  ],
};

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: "Jinan University, Tripoli, Lebanon",
  period: "2020 – 2023",
  note: "GPA 80/100",
};

export const development = {
  intro: "Building towards data engineering as a specialisation. These are current learning areas, not professional experience.",
  items: [
    "SQL & relational databases",
    "Database design & relationships",
    "Python",
    "Data manipulation & transformation",
    "ETL / ELT pipelines",
    "Data warehousing",
    "Workflow orchestration (Apache Airflow)",
  ],
};
