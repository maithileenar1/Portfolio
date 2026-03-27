const portfolioData = {
    personal: {
        name: "Maithilee Dolharkar",
        title: "Technology Graduate | Machine Learning | Data Analysis",
        location: "Melbourne, VIC",
        phone: "(+61) 469 387 557",
        email: "maithilee478@gmail.com",
        linkedin: "https://www.linkedin.com/in/maithilee-dolharkar-647b581ba/",
        profileImage: "image.png"
    },
    summary: "Master of Data Science graduate (Deakin University, Jun 2026) with two years of professional experience in software development, data engineering, and analytics across enterprise and government domains. Proficient in Python, SQL, Azure, and Agile/SDLC delivery. Eager to contribute across software engineering, QA, and data governance rotations. Experienced in AWS and API Testing, with a strong emphasis on optimizing customer experience utilizing database management techniques. Holds full Australian work rights and is available to commence July 2026.",
    skills: {
        "Languages & Scripting": ["Python (Pandas, Scikit-learn, PySpark)", "SQL", "R", "AL Language"],
        "ML & AI": ["Supervised/Unsupervised Learning", "Time-Series Forecasting", "SMOTE", "Gradient Boosting", "Classification Models"],
        "Data Engineering": ["ETL Pipelines", "Medallion Architecture", "Delta Lake", "Star Schema"],
        "Cloud & Platforms": ["Microsoft Azure", "Microsoft Fabric", "Microsoft Dynamics 365", "Power BI (DAX)"],
        "Development & Tools": ["Git", "Agile/Scrum", "Streamlit", "Plotly"],
        "Domains": ["Healthcare Analytics", "Retail Analytics", "CRM Operations", "Risk & Assurance"]
    },
    experience: [
        {
            title: "Data Analyst",
            company: "NextOn Foods Private Limited",
            location: "Pune, India",
            period: "Aug 2023 – Apr 2024",
            responsibilities: [
                "Designed and maintained ETL data pipelines processing 50,000+ rows of sales data, built demand forecasting models, and delivered 5+ Power BI dashboards which reduced stock wastage by 12% and cutting manual reporting time by 22%.",
                "Applied structured testing and validation at each pipeline stage, ensuring data accuracy and integrity for stakeholder reporting; followed best practices aligned with SDLC principles, incorporating API Testing protocols to enhance data flow efficiency."
            ],
            certificates: [
                { name: "Experience Certificate", file: "NextOnfoods.pdf" }
            ]
        },
        {
            title: "Software Trainee — Data & CRM",
            company: "Xebia (Client: GAC Business Solution)",
            location: "Hyderabad, India",
            period: "Aug 2022 – Jun 2023",
            responsibilities: [
                "Developed and tested AL language solutions within Microsoft Dynamics 365, integrated Power BI dashboards, and improved data accuracy across sales and operations by 10% using Microsoft Azure cloud platforms.",
                "Worked within an Agile/Scrum delivery framework across a multidisciplinary team, contributing to sprint planning, defect resolution, and stakeholder reporting, building the collaborative, client-focused skills central to graduate programs, with a focus on enhancing customer experience through innovative mobile application features."
            ],
            certificates: [
                { name: "Completion Certificate", file: "internshipletter.pdf" }
            ]
        }
    ],
    projects: [
        {
            title: "Australian Healthcare & Hospital Performance Analytics Platform",
            tech: ["Microsoft Fabric", "Data Engineering"],
            details: [
                "Architected a Microsoft Fabric Medallion pipeline ingesting 800,000+ records from 5 Australian government health APIs, with automated quality gates blocking refresh on failures.",
                "Built Bronze-to-Silver PySpark transformation layer across 8 Delta tables, standardising multi-format sources (REST API, CSV, Excel) with full audit trail and lineage tracking.",
                "Designed Gold star schema with Row-Level Security by State/LHN, enabling governed analytics access for cross-government stakeholders across hospital, PBS, and Medicare datasets.",
                "Produced end-to-end technical documentation across all pipeline stages covering architecture, transformation logic, and error resolution for a production healthcare analytics platform."
            ]
        },
        {
            title: "DataBytes Discount Mate — AI-Powered Supermarket Deal Prediction",
            tech: ["Python", "SQL", "Agile"],
            details: [
                "Built an end-to-end ML application using Python scripting and SQL queries across 471,495 price records from 5 supermarket chains which demonstrated full SDLC delivery from design through to deployment.",
                "Resolved a 2.07:1 class imbalance through iterative model testing and evaluation, improving recall from 14% to 81% applying systematic QA thinking to algorithm refinement.",
                "Deployed an interactive Streamlit web application with real-time predictions and seasonal trend analysis, showcasing practical software engineering and front-end delivery skills."
            ]
        },
        {
            title: "Survival Prediction for Liver Cirrhosis",
            tech: ["Clinical ML", "Testing & Validation", "Risk Classification"],
            details: [
                "Built and benchmarked 6 classification models on clinical data, applying rigorous testing methodology to select the optimal model (Logistic Regression, F1-weighted: 0.7436) — mirroring QA practices of defect identification and iterative refinement.",
                "Applied dual feature importance methodology (ANOVA F-test + Permutation Importance) to validate model reliability, demonstrating the analytical and quality assurance mindset valued in technology roles."
            ]
        }
    ],
    education: [
        {
            degree: "Master of Data Science",
            institution: "Deakin University, Melbourne",
            period: "Expected Jun 2026",
            details: "WAM: 8 | Relevant coursework: Machine Learning, Data Engineering, Statistical Modelling, Mathematics for AI",
            certificate: "DeakinMemo.pdf"  // Replace with your PDF path e.g. "assets/certs/masters_certificate.pdf"
        },
        {
            degree: "BTech in Computer Science Engineering",
            institution: "CMR Engineering College, India",
            period: "Graduated",
            details: "CGPA: 7.74",
            certificate: "BachelorsGraduationCertificate.pdf"// Replace with your PDF path e.g. "assets/certs/btech_certificate.pdf"
        }
    ],
    achievements: [
        {
            period: "Jul 2023",
            items: [
                {
                    title: "GovHack Australia — Honourable Mention",
                    description: "Identified $15M in regenerative economy potential and projected 25% carbon emission reduction through smart infrastructure analysis for Victoria's green transit strategy.",
                    image: "GH.png",
                    link: "https://www.linkedin.com/feed/update/urn:li:activity:7274901392098496512/", // Replace with the LinkedIn post link showing winners
                    linkLabel: "View on LinkedIn"
                },


                {
                    title: "Event Volunteer",
                    description: "Volunteered at F1 Australian Grand Prix, Australian Open, and major Melbourne sporting events with Spark Event Group. Gained hands-on experience in large-scale event operations, crowd management, and team coordination across high-pressure environments.",
                    image: "yum1.png",
                    link: null,
                    linkLabel: null
                }
            ]
        }
    ]
};
// Accessible globally via classic script tag
