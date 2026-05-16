const baseUrl = import.meta.env.BASE_URL || "/";

// Projects data from resume
export const projects = [
  {
    id: "homelens-real-estate",
    Title: "HomeLens - Real Estate Platform",
    Description:
      "Built an interactive platform with 50+ property listings, reducing search latency by 20% via optimized database routing. Developed a mobile-first UI with TailwindCSS, improving cross-device rendering speed by 15%. Integrated secure backend APIs with advanced multi-parameter search.",
    TechStack: ["React.js", "Node.js", "TailwindCSS", "APIs"],
    Img: `${baseUrl}project-digit.png`,
    Link: "https://github.com/Nishant-coder425/HomeLens",
    Github: "https://github.com/Nishant-coder425/HomeLens",
  },
  {
    id: "blog-management",
    Title: "Blog Management System",
    Description:
      "Architected a full-stack Node.js/MongoDB blogging app capable of handling 200+ concurrent user sessions. Implemented CRUD operations securing data storage for 100+ user profiles and articles. Delivered an optimized front-end interface achieving 25% faster page load times.",
    TechStack: ["Node.js", "MongoDB", "Express", "HTML/CSS"],
    Img: `${baseUrl}project-coexist.png`,
    Link: "https://github.com/Nishant-coder425",
    Github: "https://github.com/Nishant-coder425",
  },
  {
    id: "ibm-generative-ai",
    Title: "IBM - Generative AI",
    Description:
      "Developed an end-to-end Generative AI project as part of IBM SkillsBuild's project-based learning program. Applied concepts of large language models, prompt engineering, and AI-driven workflows to build practical AI solutions. Demonstrated understanding of GenAI principles through hands-on implementation.",
    TechStack: ["Python", "Generative AI", "IBM SkillsBuild", "LLM"],
    Img: `${baseUrl}project-digit.png`,
    Link: "https://github.com/Nishant-coder425/IBM-Generative_Ai",
    Github: "https://github.com/Nishant-coder425/IBM-Generative_Ai",
  },
];

// Certificates data — all 8 certificates
export const certificates = [
  {
    id: "cert-1",
    Title: "Certificate 1",
    Issuer: "",
    Img: `${baseUrl}certificates/certificate-1.png`,
  },
  {
    id: "cert-2",
    Title: "Certificate 2",
    Issuer: "",
    Img: `${baseUrl}certificates/certificate-2.jpg`,
  },
  {
    id: "cert-3",
    Title: "Certificate 3",
    Issuer: "",
    Img: `${baseUrl}certificates/certificate-3.jpg`,
  },
  {
    id: "cert-4",
    Title: "Certificate 4",
    Issuer: "",
    Img: `${baseUrl}certificates/certificate-4.jpg`,
  },
  {
    id: "cert-5",
    Title: "Certificate 5",
    Issuer: "",
    Img: `${baseUrl}certificates/certificate-5.jpg`,
  },
  {
    id: "cert-6",
    Title: "Certificate 6",
    Issuer: "",
    Img: `${baseUrl}certificates/certificate-6.jpg`,
  },
  {
    id: "cert-7",
    Title: "Certificate 7",
    Issuer: "",
    Img: `${baseUrl}certificates/certificate-7.jpg`,
  },
  {
    id: "cert-8",
    Title: "Certificate 8",
    Issuer: "",
    Img: `${baseUrl}certificates/certificate-8.jpg`,
  },
];
