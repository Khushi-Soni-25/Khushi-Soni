/* ============================================================
   ALL SITE CONTENT LIVES HERE. Edit this file only.
   - A link left as "" is hidden automatically.
   - Images: replace the sample file in /assets with your own
     (keep the same file name), or change the path below.
   ============================================================ */
window.SITE = {
  name: "Khushi Soni",
  first: "Khushi",
  last: "Soni",
  initials: "KS",
  title: "IT student · AI/ML developer",
  location: "Ahmedabad, India",
  pitch: "IT student building <strong>AI-powered applications</strong> with RAG, NLP and recommendation systems.",
  email: "khushisoni2526@gmail.com",

  /* ---- YOUR LINKS: paste them between the quotes ---- */
  github: "https://github.com/Khushi-Soni-25",    // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/khushi-soni-ks",  // e.g. "https://www.linkedin.com/in/your-id"
  resume: "assets/khushi-soni-resume.pdf",

  /* ---- PROFILE PHOTO (sample: replace assets/profile-sample.svg, 4:5, 800x1000 or bigger) ---- */
  photo: "assets/profile-sample.png",
  photoCaption: "Khushi Soni",

  about: [
    "I'm an Information Technology student at Ahmedabad Institute of Technology with hands-on experience in AI/ML, Natural Language Processing and software development.",
    "I build AI-powered applications using Python, RAG, FastAPI, Flask and recommendation systems. Most recently I worked as an AI/ML Developer at KULM India Solutions, where I built a Lawyer AI chatbot, and I'm exploring Artificial Intelligence and Machine Learning.",
    "I enjoy turning data and language models into practical, efficient tools, and I work best when analysing a problem carefully and collaborating on the solution."
  ],

  skills: [
    { group: "Languages", items: [["Python", "python"], ["PHP", "php"], ["JavaScript", "javascript"], ["HTML", "html5"], ["CSS", "css3"]] },
    { group: "AI / ML", items: [["Machine Learning"], ["Prompt Engineering"], ["NLP"], ["Recommendation Systems"], ["RAG"]] },
    { group: "Frameworks", items: [["Flask", "flask"], ["FastAPI", "fastapi"], ["Streamlit", "streamlit"], ["LangChain"]] },
    { group: "Libraries", items: [["Pandas", "pandas"], ["NumPy", "numpy"], ["Scikit-learn", "scikitlearn"], ["Matplotlib", "matplotlib"], ["Seaborn"], ["OpenCV", "opencv"]] },
    { group: "Databases", items: [["MySQL", "mysql"], ["MongoDB", "mongodb"]] },
    { group: "Tools & Platforms", items: [["Git", "git"], ["GitHub", "github"], ["VS Code", "vscode"], ["MS Office"]] }
  ],

  experience: [
    {
      id: "vault", role: "AI & Prompt Engineering Intern", org: "Vault of Codes", year: "2026",
      when: "Jun 2026 – Jul 2026", where: "Remote",
      summary: "Learning how to get useful work out of large language models.",
      bullets: [
        "Gained practical knowledge of Artificial Intelligence, Generative AI and Prompt Engineering through structured learning and hands-on exercises.",
        "Explored LLM-based applications, prompt design techniques, response generation, summarization and AI-assisted content creation."
      ],
      stack: ["Generative AI", "Prompt Engineering", "LLMs"]
    },
    {
      id: "kulm", role: "AI/ML Developer", org: "KULM India Solutions Pvt. Ltd.", year: "2026",
      when: "Feb 2026 – May 2026", where: "Ahmedabad, Gujarat",
      summary: "Built a legal-query chatbot, from NLP pipeline to backend.",
      bullets: [
        "Developed a Lawyer AI chatbot, handling AI-based legal query processing, NLP, RAG implementation and intent classification using Python and FastAPI.",
        "Worked on backend development, MongoDB integration and data retrieval using FastAPI."
      ],
      stack: ["Python", "FastAPI", "RAG", "NLP", "MongoDB"]
    },
    {
      id: "webify", role: "Web Development Intern", org: "Webify Company", year: "2023",
      when: "Jul 2023 – Aug 2023", where: "Ahmedabad, Gujarat",
      summary: "First professional web project: a demo e-commerce site.",
      bullets: [
        "Developed BS EngiTech, a demo e-commerce website showcasing engineering materials and related product information.",
        "Gained hands-on experience in HTML, CSS, JavaScript, PHP, MongoDB and responsive web development."
      ],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MongoDB"]
    }
  ],

  /* ---- PROJECTS ----
     demo = your deployed/live URL, repo = your GitHub repo URL (leave "" to hide the button).
     shots = up to any number of screenshots (sample files are in assets/projects). */
  projects: [
    {
      slug: "projectpilot-ai", num: "01", year: "2026", type: "Product",
      title: "ProjectPilot AI", tagline: "AI/ML project recommendation system",
      blurb: "Suggests student projects based on domain, skills, interests and timeline.",
      badge: "",
      bullets: [
        "Developed an AI/ML-based recommendation platform that suggests student projects based on domain, skills, interests and timeline using TF-IDF and cosine similarity.",
        "Processed 3,300+ project records using Python, Pandas, NumPy and Scikit-learn to generate personalized project roadmaps with relevant skills, datasets, APIs and learning resources."
      ],
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "TF-IDF"],
      demo: "https://pilotai-platform.vercel.app/",   // deployed link, e.g. "https://projectpilot.example.com"
      repo: "https://github.com/Khushi-Soni-25/Project-Pilot-AI.git",   // GitHub link, e.g. "https://github.com/you/projectpilot-ai"
      shots: ["assets/projects/P1.jpeg","assets/projects/P2.png","assets/projects/P3.png","assets/projects/P4.png","assets/projects/P5.png","assets/projects/P6.png","assets/projects/P7.png","assets/projects/P8.png"]    
    },
    {
      slug: "scholar-bridge", num: "02", year: "2026", type: "AI / ML",
      title: "Scholar Bridge",
      tagline: "AI-powered scholarship recommendation engine",
      blurb: "An intelligent platform that helps students discover scholarships through personalized eligibility matching and hybrid AI recommendations.",
      badge: "Ongoing",
      bullets: [
        "Developed an AI-powered scholarship recommendation platform using Python, FastAPI, and MongoDB, helping students discover relevant scholarship opportunities based on their academic profiles and eligibility criteria.",
        "Implemented rule-based eligibility matching, Random Forest machine learning, NLP-based similarity analysis, and hybrid recommendation ranking to deliver personalized scholarship recommendations with transparent eligibility explanations."
      ],
      stack: ["Python", "FastAPI", "MongoDB", "Machine Learning", "NLP"],
      demo: "https://scholar-bridge-aicw.vercel.app/",
      repo: "https://github.com/Khushi-Soni-25/Scholar-Bridge.git",
      shots: ["assets/projects/S1.png","assets/projects/S2.png","assets/projects/S3.png","assets/projects/S4.png","assets/projects/S5.png","assets/projects/S6.png","assets/projects/S7.png"]
    },
    {
      slug: "voltrent", num: "03", year: "Ongoing", type: "Product",
      title: "VoltRent", tagline: "EV battery rental system",
      blurb: "Battery rental and emergency delivery connecting users, dealers and delivery services.",
      badge: "",
      bullets: [
        "Developed an EV battery rental and emergency delivery platform connecting users, dealers and delivery services using PHP, Python and MySQL.",
        "Integrated AI/ML modules for battery health assessment, demand prediction, and intelligent battery/dealer recommendations."
      ],
      stack: ["PHP", "Python", "MySQL", "Machine Learning"],
      demo: "https://rent-a-volt.vercel.app/",
      repo: "https://github.com/Khushi-Soni-25/VoltRent.git",
      shots: ["assets/projects/EV.jpeg","assets/projects/E1.png","assets/projects/E2.png","assets/projects/E3.png","assets/projects/E4.png","assets/projects/E5.png","assets/projects/E6.png","assets/projects/E7.png","assets/projects/E8.png","assets/projects/E9.png","assets/projects/E10.png","assets/projects/E11.png"]
    },
    {
      slug: "lawyer-ai", num: "04", year: "2026", type: "System",
      title: "Lawyer AI", tagline: "AI-powered legal assistance platform",
      blurb: "A full-stack legal assistant with grounded, retrieval-based answers.",
      badge: "",
      bullets: [
        "Developed a full-stack legal assistance platform featuring user authentication, multi-turn chat, document uploads, password reset, chat history and grounded legal information retrieval.",
        "Implemented PDF/text extraction with OCR fallback and RAG-based retrieval to generate context-aware responses using available legal information."
      ],
      stack: ["Python", "FastAPI", "RAG", "NLP", "OCR"],
      demo: "",
      repo: "https://github.com/Khushi-Soni-25/Lawyer_AI.git",
      shots: ["assets/projects/Lawyer_AI.png"]
    },
    {
      slug: "bs-engitech", num: "05", year: "2023", type: "Product",
      title: "BS EngiTech Store", tagline: "E-commerce platform for engineering parts",
      blurb: "A full-stack store for precision engineering parts with server-side pricing.",
      badge: "",
      bullets: [
        "Developed a full-stack e-commerce platform for precision engineering parts, featuring a 21-product catalogue across 6 categories, search, filters, sorting, product pages, a persistent cart, checkout, and a custom-quote request form.",
        "Implemented bulk-quantity discounts, GST and delivery-charge calculation on the server, with transactional order placement and stock locking so prices and stock cannot be tampered with from the browser."
      ],
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MongoDB"],
      demo: "https://bsengitech.vercel.app/",
      repo: "https://github.com/Khushi-Soni-25/BS-EngiTech.git",
      shots: ["assets/projects/BS.png","assets/projects/B1.png","assets/projects/B2.png","assets/projects/B3.png","assets/projects/B4.png","assets/projects/B5.png","assets/projects/B6.png","assets/projects/B7.png","assets/projects/B8.png"]
    }
  ],

  /* ---- EDUCATION (plain list, no images) ---- */
  education: [
    { title: "B.E. Information Technology", place: "Ahmedabad Institute of Technology · GTU", meta: "7th semester · SPI 8.09 · CPI 7.32 · Ongoing" },
    { title: "Diploma in Information Technology", place: "Government Polytechnic, Ahmedabad · GTU", meta: "SPI 7.82 · CPI 8.70 · 2024" },
    { title: "Secondary School Certificate (SSC)", place: "Shree Muktajivan High School · GSEB", meta: "86.75% · 95.96 percentile · 2020" }
  ],

  /* ---- AWARDS & ACHIEVEMENTS ----
     To add one, copy a { ... }, block and paste it below.
     img = photo/certificate image (sample files in assets/awards), link = optional URL, note = optional description. */
  awards: [
    {
      title: "Rajya Puraskar (Governor Award)", place: "Bharat Scouts & Guides", meta: "",
      note: "Conferred by Hon'ble Governor of Gujarat Shri Acharya Devvrat Ji, in recognition of leadership, community service and active participation.",
      img: "assets/awards/BSG.jpeg", link: ""
    },
    {
      title: "NCC 'C' Certificate, A Grade", place: "Army Wing · 1 Gujarat Girls Battalion NCC", meta: "",
      note: "Earned through Army Wing training, demonstrating leadership, discipline and teamwork.",
      img: "assets/awards/NCC.jpeg", link: ""
    },
    {
      title: "Civil Defence Basic Training", place: "Government of Gujarat", meta: "",
      note: "",
      img: "assets/awards/CD_Certy.jpeg", link: ""
    },
    {
      title: "Water Conservation article", place: "U-Report India (UNICEF) · Mission LIFE", meta: "",
      note: "Authored an article published on the official UNICEF U-Report India website.",
      img: "assets/awards/Article.png", link: ""
    }
  ],

  /* ---- CERTIFICATIONS ----
     To add one, copy a { ... }, block and paste it below.
     img and link are optional (delete the line or leave "" to hide). */
  certifications: [
    { title: "AI Career for Women (AICW)", place: "Microsoft", meta: "Ongoing", link: "" },
    { title: "Industry-Led Minor/Honors Course in AI/ML", place: "Infosys Springboard · G.T.U.", meta: "Ongoing", link: "" },
    { title: "Explore Machine Learning using Python", place: "Infosys Springboard", meta: "", link: "" },
    { title: "Introduction to Generative AI", place: "Google Cloud via Coursera & Simplilearn", meta: "", link: "" }
  ],

  /* ---- VOLUNTEER EXPERIENCE (shown on volunteer.html) ----
     img is optional. Copy a { ... }, block to add more. */
  volunteer: [
    {
      role: "Technical Coordinator", org: "The GEG Global Foundation", when: "Jun 2026 – Present", where: "Remote",
      bullets: ["Provide technical assistance, address basic technical queries, and manage website content updates to support smooth digital operations."],
      img: ""
    },
    {
      role: "Social Media Champion Team Member", org: "U-Report India – UNICEF", when: "Apr 2023 – Sep 2023", where: "Remote",
      bullets: ["Created impactful digital content for U-Report India and authored a Water Conservation article published on the official UNICEF U-Report India website under the Mission LIFE."],
      img: ""
    },
    {
      role: "Ranger – Governor Award Recipient", org: "Bharat Scouts & Guides (BSG)", when: "Jan 2023 – Present", where: "Ahmedabad, Gujarat",
      bullets: ["Received the Rajya Puraskar, conferred by Hon'ble Governor of Gujarat Shri Acharya Devvrat Ji, in recognition of leadership, community service and active participation."],
      img: ""
    },
    {
      role: "Lance Corporal – Army Wing", org: "National Cadet Corps (NCC)", when: "2021 – 2024", where: "Ahmedabad, Gujarat",
      bullets: ["Earned the NCC 'C' Certificate with an A Grade through Army Wing training, demonstrating leadership, discipline and teamwork."],
      img: ""
    }
  ]
};
