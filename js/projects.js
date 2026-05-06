/* ============================================
   PROJECT DATA FILE
   ============================================
   
   HOW TO ADD A NEW PROJECT:
   1. Copy one of the project objects below
   2. Paste it at the end of the array (before the closing bracket)
   3. Update ALL fields with your project's info
   4. Add screenshot URLs to the "screenshots" array
   5. That's it! Both homepage cards AND detail pages update automatically.
   
   ============================================ */

const PROJECTS = [
  {
    id: "PRJ-001",
    title: "AI Data Analyst Agent",
    shortDesc: "A state of the art, fully autonomous Business Intelligence (BI) platform built purely in Python. Acts as your personal AI data analyst.",
    fullDesc: "The AI Data Analyst Agent is a complete, self-hosted alternative to expensive BI tools. It acts as a 24/7 autonomous data team. The application is built on a modular, highly intelligent Python backend with a premium Streamlit frontend interface. It features an Ingestion & Sanitization Engine, Analytical & Statistical Engine, Machine Learning & NLP Engine, and an Export & Reporting Module. Users simply upload a raw .csv or .xlsx file and interact with their data using plain English and an intuitive point-and-click interface, with zero coding required.",
    price: "₹399",
    thumbnail: "images/prj001/ThumbnaiL001 (2).png",
    screenshots: [
      "images/prj001/1.jpg",
      "images/prj001/2.jpg",
      "images/prj001/3.jpg",
      "images/prj001/4.jpg"
    ],
    demoVideo: "https://youtu.be/8sbjAsayswk?si=Tifr0MfAl6QSOD78",
    problemStatement: `In today's fast-paced business environment, making data-driven decisions is crucial, yet companies face several major hurdles:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>High Costs & Vendor Lock-in:</strong> Enterprise Business Intelligence tools (like Tableau, Power BI) and modern AI analytics platforms require expensive, recurring monthly SaaS subscriptions.</li>
      <li><strong>Steep Learning Curve:</strong> Performing advanced analytics, predictive modeling (Machine Learning), and deep data exploration usually requires hiring expensive data scientists or learning complex Python/SQL.</li>
      <li><strong>Time-Consuming Manual Prep:</strong> Analysts spend up to 80% of their time just cleaning dirty data—fixing corrupt dates, handling missing values, and standardizing formats.</li>
      <li><strong>Data Privacy Risks:</strong> Uploading sensitive financial or customer data to third-party cloud AI tools poses significant security and compliance risks.</li>
    </ul>`,
    solution: `<strong>How This Project Solves It:</strong><br/>
    The AI Data Analyst Agent is a complete, self-hosted alternative to expensive BI tools. It acts as a 24/7 autonomous data team.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
      <li><strong>Zero Subscription Fees:</strong> Once purchased, you own the source code. No recurring SaaS fees, saving thousands of dollars annually.</li>
      <li><strong>100% Data Privacy:</strong> The application runs locally or on your own private server. Your sensitive business data never leaves your machine.</li>
      <li><strong>No Coding Required:</strong> It democratizes data. Users simply upload a raw .csv or .xlsx file and interact with their data using plain English and an intuitive point-and-click interface.</li>
      <li><strong>Instant Auto-Cleansing:</strong> The system automatically scrubs and sanitizes dirty datasets instantly upon upload, saving hours of tedious manual prep work.</li>
    </ul>
    <strong>The Approach & Architecture (How it works):</strong><br/>
    The application is built on a modular, highly intelligent Python backend with a premium Streamlit frontend interface:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Ingestion & Sanitization Engine:</strong> Leverages Pandas and dynamic Regex heuristics to automatically map column types (e.g., detecting Dates vs. Financials) and cleanse the data (fixing casing, dropping empty rows, handling NaNs).</li>
      <li><strong>Analytical & Statistical Engine:</strong> Employs NumPy, Seaborn, and Matplotlib to mathematically evaluate the dataset. It detects extreme anomalies using Interquartile Range (IQR) logic and dynamically generates high-fidelity charts based on the user's global filters.</li>
      <li><strong>Machine Learning & NLP Engine:</strong> Uses scikit-learn to allow users to build on-the-fly Linear Regression predictive models via a visual interface—no code required. A rule-based Natural Language interface translates user business questions into instant mathematical calculations.</li>
      <li><strong>Export & Reporting Module:</strong> Compiles the session's insights, charts, and cleansed data into structured CSVs, Markdown, or rendered PDF reports using FPDF2.</li>
      <li><strong>Premium Frontend UI:</strong> A highly customized Streamlit web application injected with custom CSS to mimic a modern, high-end SaaS platform.</li>
    </ul>`,
    features: [
      "Automated Data Cleansing (fixes dates, casing, formats)",
      "Intelligent Outlier Detection (mathematical evaluation, Boxplots)",
      "\"Chat with Dataset\" Interface (instant calculated answers)",
      "No-Code Machine Learning (predictive models via visual UI)",
      "Strategic Business Insights (root-cause business resolutions)",
      "Dynamic Global Slicers (auto-generated sidebar filters)",
      "Download Center (export cleansed data, Markdown, PDF)"
    ],
    techStack: ["Streamlit", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "FPDF2", "Markdown"],
    category: "Dashboard"
  },
  {
    id: "PRJ-002",
    title: "Auto ML Studio",
    shortDesc: "Built a multi-agent AutoML system that automates the entire machine learning pipeline while ensuring interpretability and reliability. The system not only selects the best model but also explains its decisions using SHAP and detects data drift to maintain performance over time. Designed as a full-stack solution with real-world ML system principles.",
    fullDesc: "Developed a full-stack, production-oriented Multi-Agent Explainable AutoML System designed to automate and enhance the machine learning workflow. The system handles end-to-end processes including data preprocessing, feature engineering, model training, and intelligent model selection based on performance and stability. A key highlight of the project is the integration of Explainable AI using SHAP, enabling clear insights into model decisions and feature importance. Additionally, the system incorporates data drift detection to monitor changes in incoming data and ensure long-term model reliability in real-world scenarios. Built using a modular multi-agent architecture, each component operates independently while contributing to a scalable and maintainable pipeline. The project also includes a full-stack implementation with an interactive frontend dashboard, backend APIs, and database integration for storing results and tracking analysis history. This project demonstrates strong capabilities in machine learning, system design, and MLOps by combining automation, interpretability, and continuous monitoring in a single platform.",
    price: "₹399",
    thumbnail: "images/prj002/thumbnail002.png",
    screenshots: [
      "images/prj002/1.jpeg",
      "images/prj002/2.jpeg",
      "images/prj002/3.jpeg",
      "images/prj002/4.jpeg"
    ],
    demoVideo: "https://youtu.be/1oVKwChFAQY?si=WNvgTZY9JUctdIjw",
    problemStatement: "Building robust machine learning pipelines is traditionally a manual, time-consuming process requiring deep expertise. Furthermore, many automated ML tools act as 'black boxes', failing to provide interpretability into how models make decisions, which is critical for trust and compliance in enterprise environments.",
    solution: "Auto ML Studio provides an end-to-end, multi-agent automated machine learning pipeline that not only selects the best performing models but also prioritizes explainability. It integrates SHAP (SHapley Additive exPlanations) to transparently show feature importance and model reasoning. The built-in drift detection ensures the model remains reliable in production over time.",
    features: [
      "Cinematic hero with particle background",
      "Filterable project gallery with animations",
      "Animated skill progress bars",
      "Blog / articles section",
      "Testimonials carousel",
      "Working contact form (FormSubmit)",
      "SEO optimized with meta tags",
      "Blazing fast performance (95+ Lighthouse)"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Particles.js", "Python", "Scikit-Learn", "Numpy", "Pandas"],
    category: "Portfolio"
  },
  {
    id: "PRJ-003",
    title: "Smart College Chatbot",
    shortDesc: "A production-ready, AI-powered conversational assistant designed for educational institutions to automate student and parent inquiries.",
    fullDesc: "The Smart College Chatbot is a production-ready, AI-powered conversational assistant designed specifically for educational institutions (universities, colleges, and schools). Built using Natural Language Processing (NLP) and Machine Learning (ML), it automates the handling of repetitive student and parent inquiries. The system seamlessly processes natural language questions about admissions, fee structures, courses, placements, faculty, and more, delivering instant, accurate responses 24/7. Complete with a modern dark-mode UI, a robust Flask backend, and integrated query logging, it is a fully functional, plug-and-play solution ideal for modernizing institutional communication.",
    price: "₹299",
    thumbnail: "images/prj003/thumbnail003.png",
    screenshots: [
      "images/prj003/1.png",
      "images/prj003/2.png",
      "images/prj003/3.png",
      "images/prj003/4.png"
    ],
    demoVideo: "https://youtu.be/NKqXB-L0oFY?si=JmAr-suVTp7alWnM",
    problemStatement: `Educational institutions are bombarded daily with hundreds of repetitive inquiries from prospective students, current students, and parents. Questions like "How do I apply?", "What is the fee structure?", or "When are the exams?" consume a massive amount of administrative time.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Administrative Bottlenecks:</strong> Human staff cannot efficiently manage high volumes of repetitive queries, leading to delayed responses.</li>
      <li><strong>Poor User Experience:</strong> Applicants and students often have to wait hours or days for answers, or navigate complex websites to find basic information.</li>
      <li><strong>Lack of 24/7 Support:</strong> Human counselors are only available during office hours, leaving off-hours inquiries unattended.</li>
    </ul>`,
    solution: `<strong>How it Solves the Problem:</strong><br/>
    The Smart College Chatbot acts as an automated, tireless virtual counselor.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
      <li><strong>Instant Query Resolution:</strong> It instantly understands user questions and replies with accurate, predefined answers, eliminating wait times.</li>
      <li><strong>24/7 Availability:</strong> It runs continuously, providing critical information to prospective students regardless of the time or day.</li>
      <li><strong>Reduced Workload:</strong> By handling up to 80% of routine inquiries automatically, it frees up administrative staff to focus on complex, high-value counseling tasks.</li>
      <li><strong>Smart Fallback:</strong> If a user asks something entirely unrelated or complex, the bot detects low confidence and politely redirects them to human support (e.g., an email address).</li>
    </ul>
    <strong>The Technical Approach (How it Works):</strong><br/>
    The project is built on a modular, lightweight, and highly accurate Machine Learning pipeline without relying on expensive external APIs (like OpenAI), ensuring zero recurring costs and complete data privacy.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Knowledge Base (Intent Mapping):</strong> The brain of the bot is a customizable JSON dataset (intents.json). It maps various ways users might ask a question (patterns) to specific categories (intents) and provides appropriate responses.</li>
      <li><strong>NLP Preprocessing Pipeline:</strong> When a user types a message, the system first applies spell-correction (pyspellchecker). It then cleans the text using NLTK by lowercasing, removing punctuation, tokenizing, removing stopwords, and applying Porter Stemming to extract the root meaning of words.</li>
      <li><strong>Feature Extraction & Machine Learning:</strong> The cleaned text is converted into numerical vectors using a TF-IDF vectorizer. A trained Logistic Regression classifier (via scikit-learn) then analyzes these vectors to predict the user's intent with a specific confidence score.</li>
      <li><strong>Backend & API (Flask):</strong> A lightweight Python Flask server loads the pre-trained ML models. It exposes a RESTful API (/chat) that accepts user messages, runs them through the ML pipeline, and returns the predicted response in milliseconds.</li>
      <li><strong>Frontend User Interface:</strong> A sleek, responsive, vanilla HTML/CSS/JS frontend provides a dark-themed chat window that communicates with the Flask API seamlessly via AJAX/Fetch.</li>
      <li><strong>Analytics & Logging:</strong> Every interaction is logged (timestamp, message, detected intent, confidence) in JSON format (logs/queries.log). This allows administrators to track popular queries, identify missing information, and continuously improve the bot.</li>
    </ul>`,
    features: [
      "Natural Language Processing (NLP) pipeline (NLTK, stemming)",
      "Spell-correction & text preprocessing",
      "TF-IDF & Logistic Regression classification",
      "Customizable intents.json knowledge base",
      "Lightweight Flask REST API (/chat)",
      "Dark-themed, responsive chat UI",
      "Automated query logging & analytics",
      "Smart human-fallback for low-confidence queries"
    ],
    techStack: ["Python", "Flask", "scikit-learn", "NLTK", "JavaScript", "HTML/CSS"],
    category: "AI / ML"
  },
  {
    id: "PRJ-004",
    title: "AI-Powered Intelligent Task Assignment System",
    shortDesc: "A comprehensive Machine Learning web application designed to automate the triage and assignment of software development tasks.",
    fullDesc: "A comprehensive, end-to-end Machine Learning web application designed to automate the triage and assignment of software development tasks. By simply entering a natural-language task description (e.g., 'Login page crashes on special characters'), the system leverages advanced NLP and classification models to instantly predict task priority, determine the task type, estimate story points, and intelligently assign the task to the most suitable team member based on role fit, current workload capacity, and experience level.",
    price: "₹399",
    thumbnail: "images/prj004/Thumbnail004.png",
    screenshots: [
      "images/prj004/1.png",
      "images/prj004/2.png",
      "images/prj004/3.png",
      "images/prj004/4.png"
    ],
    demoVideo: "https://youtu.be/5WSe1vUmbuA?si=CLbbzzYkcfWxW-IQ",
    problemStatement: `In busy software development and project management teams, manually triaging issues is a time-consuming and highly subjective process. Project managers and tech leads often spend countless hours reading through tickets, determining their severity, estimating the effort required, and deciding who should handle them.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Prone to Bottlenecks:</strong> Manual workflow creates delays in task resolution.</li>
      <li><strong>Uneven Workload Distribution:</strong> Leads to burnout for top performers.</li>
      <li><strong>Suboptimal Assignments:</strong> Tasks are given to developers without the ideal skill set or available capacity.</li>
    </ul>`,
    solution: `<strong>How it Solves the Problem:</strong><br/>
    This system completely automates the project management triage process using Machine Learning. When a new ticket is submitted, the AI instantly analyzes the text and performs the following:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
      <li><strong>Classifies Severity & Type:</strong> It uses trained models to determine how critical the task is (High/Medium/Low) and what type of work it involves (Bug/Improvement/Other).</li>
      <li><strong>Estimates Effort:</strong> It calculates the estimated effort (Story Points) based on priority bands and keyword heuristics.</li>
      <li><strong>Smart Delegation:</strong> It uses a weighted algorithm to scan the team roster in real-time, evaluating everyone's current workload, role preference, and experience.</li>
      <li><strong>Transparent Reasoning:</strong> It instantly assigns the task to the perfect candidate and provides a detailed, human-readable explanation of why that specific person was chosen.</li>
    </ul>
    <strong>Technical Approach & Architecture:</strong><br/>
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Natural Language Processing (NLP):</strong> Utilizes TF-IDF vectorization and NLTK for text preprocessing, extracting meaningful features and intent from raw task descriptions.</li>
      <li><strong>Machine Learning Models:</strong> Priority Prediction is powered by a Random Forest Classifier trained on a balanced dataset of 18,000 JIRA issues. Type Prediction is powered by a Multinomial Naive Bayes classifier trained on 8,000 labelled issues.</li>
      <li><strong>Data Balancing:</strong> Implements SMOTE (Synthetic Minority Over-sampling Technique) during training to ensure the predictive models are highly accurate and not biased towards majority classes.</li>
      <li><strong>Smart Assignment Algorithm:</strong> A custom weighted scoring function that balances Workload Ratio (prevents burnout), Role Fit (routes bugs to QA/Backend, UI to Frontend), and Experience Level (routes critical tasks to senior developers).</li>
      <li><strong>Beautiful Web Interface:</strong> Built with Streamlit, featuring a premium glassmorphism dark-mode UI, custom CSS animations, real-time workload tracking sidebars, and persistent JSON data storage.</li>
    </ul>`,
    features: [
      "Automated task triage and classification",
      "Severity and issue type prediction",
      "Story point and effort estimation",
      "Intelligent team member delegation",
      "Real-time workload capacity tracking",
      "Transparent AI reasoning explanations",
      "Premium dark-mode glassmorphism UI",
      "Persistent data storage and logging"
    ],
    techStack: ["Python", "Streamlit", "scikit-learn", "NLTK", "TF-IDF", "SMOTE", "JSON"],
    category: "AI / ML"
  },
  {
    id: "PRJ-005",
    title: "Smart Student Performance Analytics System",
    shortDesc: "A robust, full-stack web application designed to transform raw academic scores into actionable insights using Python and MongoDB.",
    fullDesc: "The Student Performance Analytics System is a robust, full-stack web application designed to move beyond basic data storage and transform raw academic scores into actionable insights. Built with a powerful Python analytics engine and a flexible NoSQL database, this system tracks student CGPA across multiple semesters, visualizes academic trajectories, and provides instant comparative analysis. It is the perfect solution for educational institutions, educators, and developers looking for a ready-to-deploy analytics dashboard.",
    price: "₹299",
    thumbnail: "images/prj005/ThumbNail005 (2).png",
    screenshots: [
      "images/prj005/1.png",
      "images/prj005/2.png",
      "images/prj005/3.png",
      "images/prj005/4.png"
    ],
    demoVideo: "https://youtu.be/Y6xEMOs_OZY?si=nc9RtOkacWRK4sk9",
    problemStatement: `Educational institutions generate vast amounts of academic data every semester, but it is typically stored in static spreadsheets or basic databases without any meaningful analysis.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Lack of Insight:</strong> Teachers and students struggle to visualize long-term performance trends or identify specific weak areas.</li>
      <li><strong>Delayed Interventions:</strong> Spotting a declining academic trajectory across hundreds of students is difficult, meaning students who need help often go unnoticed until it's too late.</li>
      <li><strong>Manual Overhead:</strong> Calculating class averages, ranking students, and generating performance graphs manually across 8 semesters is incredibly time-consuming and prone to errors.</li>
    </ul>`,
    solution: `<strong>How it Solves the Problem:</strong><br/>
    This project automates academic data processing to generate immediate, actionable insights. By inputting a student's semester-wise CGPA, the system instantly processes the data against the entire class roster.
    <br/><br/>
    Instead of just showing raw scores, the application generates a comprehensive Performance Dashboard that calculates class averages, detects whether a student's trend is improving or declining, pinpoints their weakest semester, and generates a dynamic graphical comparison of the student versus the class average.
    <br/><br/>
    <strong>Technical Approach & Architecture:</strong><br/>
    This application is built with a modern, scalable tech stack, making it highly valuable for buyers looking for production-ready code:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Backend Framework (Flask):</strong> Provides a lightweight, fast, and scalable server infrastructure to handle routing, form submissions, and API logic.</li>
      <li><strong>NoSQL Database (MongoDB):</strong> Offers a flexible schema that easily handles students with varying amounts of semester data (e.g., handles missing semester data gracefully without breaking the system).</li>
      <li><strong>Analytics Engine (NumPy):</strong> Utilizes advanced mathematical processing (np.polyfit) for slope analysis to mathematically determine performance trends (Improving 📈, Declining 📉, or Stable ➖). It also calculates class averages and handles NaN (missing) values efficiently.</li>
      <li><strong>Dynamic Visualization (Matplotlib):</strong> Generates comparative performance graphs on-the-fly. The backend dynamically draws a plot comparing the student to the class average, converts it to a base64 string, and serves it directly to the frontend without needing to save image files locally.</li>
      <li><strong>Frontend (HTML/CSS):</strong> A clean, responsive user interface for seamless data entry (CRUD operations) and dashboard viewing.</li>
    </ul>`,
    features: [
      "Semester-wise CGPA tracking & analysis",
      "Dynamic performance trend detection (Improving/Declining)",
      "Instant class average comparisons",
      "On-the-fly graphical visualization (Matplotlib Base64)",
      "Weakest semester pinpointing",
      "Flexible NoSQL data handling for missing semesters",
      "Advanced mathematical processing (NumPy polyfit)",
      "Clean, responsive CRUD interface"
    ],
    techStack: ["Python", "Flask", "MongoDB", "NumPy", "Matplotlib", "HTML/CSS"],
    category: "Data Analytics"
  },
  {
    id: "PRJ-006",
    title: "Event Attendance Tracker & Management System",
    shortDesc: "A robust, web-based Event Attendance Tracker built with Python (Flask) and MongoDB.",
    fullDesc: "A robust, web-based Event Attendance Tracker built with Python (Flask) and MongoDB. This application provides a centralized platform for administrators, event coordinators, and educational institutions to seamlessly create events, manage student registrations, and track real-time attendance. With an intuitive dashboard and secure admin access, it simplifies the process of organizing college events, workshops, or seminars, ensuring accurate record-keeping and easy data retrieval.",
    price: "₹299",
    thumbnail: "images/prj006/thumb.jpeg",
    screenshots: [
      "images/prj006/1.png",
      "images/prj006/2.png",
      "images/prj006/3.png",
      "images/prj006/4.png"
    ],
    demoVideo: "https://youtu.be/QBDzd7YeHyk?si=2vFtPqiZWrvuaruh",
    problemStatement: `Managing event attendance manually using paper registers, Google Forms, or disjointed spreadsheets is time-consuming, prone to errors, and difficult to scale. Event coordinators and institutions often struggle with:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Data Loss & Inaccuracy:</strong> Paper records can be lost or damaged, and manual data entry leads to typos and duplicated efforts.</li>
      <li><strong>Scattered Information:</strong> Tracking students across multiple events, different colleges, or various branches is chaotic without a unified database.</li>
      <li><strong>Reporting Inefficiency:</strong> Generating post-event reports, calculating total turnouts, or quickly verifying if a specific student attended an event requires tedious manual sorting.</li>
      <li><strong>Lack of Analytics:</strong> It is difficult to get a quick overview of how many total events were hosted or how many unique colleges participated.</li>
    </ul>`,
    solution: `<strong>How it solves the problem:</strong><br/>
    This system digitizes and automates the entire attendance tracking workflow, transforming it into a seamless digital experience:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
      <li><strong>Centralized Dashboard:</strong> Offers a bird's-eye view of vital metrics, including total events hosted, total student footprint, and the number of participating colleges.</li>
      <li><strong>Streamlined Event Management:</strong> Allows admins to easily create, manage, and delete events, storing detailed coordinator contact information.</li>
      <li><strong>Efficient Attendance Logging:</strong> Provides a quick-entry system to log comprehensive student details (Name, Roll No, Branch, College, Semester, Contact). Instant updating or deletion of records is supported.</li>
      <li><strong>Advanced Filtering & Verification:</strong> Features a built-in tool to instantly verify if a specific student attended an event, with filtering by branch, semester, or college.</li>
      <li><strong>One-Click CSV Export:</strong> Eliminates manual reporting by allowing admins to export complete, formatted event attendance lists directly to CSV files.</li>
      <li><strong>Secure Access:</strong> Ensures data privacy by restricting operations behind a secure, key-based admin login system.</li>
    </ul>
    <strong>Technical Approach & Architecture:</strong><br/>
    The project is built on a modern, fast, and scalable technology stack:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Backend Framework:</strong> Python (Flask) provides a lightweight, highly customizable server-side architecture.</li>
      <li><strong>Database:</strong> MongoDB (NoSQL) utilizes pymongo for a flexible, document-based schema that stores complex data efficiently.</li>
      <li><strong>Frontend UI:</strong> HTML, CSS, JavaScript (Jinja2 Templates) delivers a clean, responsive interface with flash messaging for user feedback.</li>
      <li><strong>Security & Authentication:</strong> Implements secure Flask session management and custom decorator-based routing (@login_required).</li>
      <li><strong>Data Handling:</strong> Leverages Python's native csv and io libraries for seamless, in-memory CSV file generation and downloading without cluttering the server's file system.</li>
    </ul>`,
    features: [
      "Centralized analytics dashboard (events, footprint, colleges)",
      "Comprehensive event & coordinator management",
      "Quick-entry student logging system",
      "Advanced verification and filtering tools",
      "One-click complete CSV export",
      "Secure key-based admin login (@login_required)",
      "Flash messaging for instant user feedback",
      "Flexible document-based MongoDB schema"
    ],
    techStack: ["Python", "Flask", "MongoDB", "pymongo", "HTML", "CSS", "Jinja2"],
    category: "Management"
  },
  {
    id: "PRJ-007",
    title: "AI Resume Analyzer & Smart Interview Simulator",
    shortDesc: "A powerful, standalone web application providing instant, intelligent feedback on resumes and an interactive interview coach.",
    fullDesc: "The AI Resume Analyzer & Smart Interview Simulator is a powerful, standalone web application designed to help job seekers land their dream roles. It provides instant, intelligent feedback on resumes (including ATS scoring and formatting checks) and acts as an interactive interview coach. Built entirely with rule-based NLP algorithms in Python, it requires no external APIs (like OpenAI) to function, making it lightning-fast, highly cost-effective, and completely private for users.",
    price: "₹299",
    thumbnail: "images/prj007/thumbnail.jpeg",
    screenshots: [
      "images/prj007/1.jpeg",
      "images/prj007/2.jpeg",
      "images/prj007/3.jpeg",
      "images/prj007/4.jpeg"
    ],
    demoVideo: "https://youtu.be/3JQYs0mQ87M?si=QMMrY3T3-juTkggl",
    problemStatement: `Navigating the modern job market is highly competitive and often frustrating for candidates. Job seekers face three major hurdles:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>The ATS Black Hole:</strong> Many candidates get rejected automatically because their resumes are poorly formatted or lack the right keywords to pass Applicant Tracking Systems (ATS).</li>
      <li><strong>Blind Skill Gaps:</strong> Candidates often apply for roles without knowing what specific technical skills they are missing compared to industry standards.</li>
      <li><strong>Lack of Interview Practice:</strong> Practicing for interviews usually requires an expensive human coach or relying on generic question lists online, without receiving personalized, constructive feedback on their answers.</li>
    </ul>`,
    solution: `<strong>How It Solves the Problem:</strong><br/>
    This project acts as an all-in-one career preparation assistant, solving the above problems through intelligent automation:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
      <li><strong>Deep Resume Analysis & ATS Scoring:</strong> The system parses uploaded resumes (PDF, DOCX, TXT) and evaluates them against strict ATS criteria. It calculates a comprehensive score based on skill breadth, action verbs, quantifiable achievements, section coverage, and formatting structure.</li>
      <li><strong>Intelligent Job Prediction & Skill Gap Detection:</strong> Based on extracted skills, the engine predicts the top 5 best-fit job roles for the candidate. It allows users to select a target role and instantly reveals "Skill Gaps" (missing required and preferred skills) with actionable suggestions on what to learn next.</li>
      <li><strong>Smart Interview Simulator:</strong> It generates a customized, interactive interview session featuring Technical, HR, and Scenario-based (STAR method) questions tailored to the candidate's predicted role.</li>
      <li><strong>Real-time Answer Evaluation:</strong> As the user answers questions, the local engine evaluates responses based on keyword matching, length/depth, relevance, and logical structure, providing an instant score (0-10) and motivational feedback on how to improve.</li>
    </ul>
    <strong>Technical Approach & Architecture:</strong><br/>
    The application is built to be lightweight, modular, and easy to deploy, using a clean backend architecture without relying on expensive third-party AI APIs.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Backend Framework:</strong> Python, Flask.</li>
      <li><strong>Data Parsing:</strong> PyPDF2 (for PDFs), python-docx (for Word documents).</li>
      <li><strong>Text Extraction Module:</strong> Securely handles file uploads and extracts raw text while ignoring unreadable formats.</li>
      <li><strong>NLP & Rules Engine (engine.py):</strong> Uses custom Regular Expressions (RegEx) and advanced rule-based logic to categorize skills, detect action verbs, and evaluate formatting.</li>
      <li><strong>Data Models (data_models.py):</strong> Operates on a vast, pre-configured local dictionary of skill categories, job roles, ATS keywords, and role-specific interview questions.</li>
      <li><strong>Scoring Algorithm:</strong> Uses weighted algorithms to calculate Resume Scores, ATS compatibility, and Interview Answer quality (evaluating keyword hits, ideal point coverage, and logic indicators).</li>
    </ul>`,
    features: [
      "Deep Resume Analysis & ATS Scoring",
      "Action Verb & Formatting Evaluation",
      "Intelligent Job Role Prediction",
      "Skill Gap Detection & Suggestions",
      "Smart Interactive Interview Simulator",
      "Real-time Answer Evaluation & Feedback",
      "100% Local Rule-based NLP Engine ($0 API Costs)",
      "Secure File Parsing (PDF, DOCX, TXT)"
    ],
    techStack: ["Python", "Flask", "NLP (Rule-based)", "PyPDF2", "python-docx", "HTML", "CSS", "JavaScript"],
    category: "AI / ML"
  },
  {
    id: "PRJ-008",
    title: "Pro QR Code Studio",
    shortDesc: "A fully offline, modern Windows desktop application to generate unlimited, customizable, and high-resolution QR codes with zero subscription fees. Includes full Python source code and a ready-to-run .exe.",
    fullDesc: "Tired of online QR code generators that charge monthly subscriptions, inject tracking links, or limit your high-resolution downloads? Pro QR Code Studio is a robust, production-ready desktop application built for Windows. It empowers individuals, agencies, and businesses to generate unlimited, fully customizable QR codes 100% offline. Whether you need standard PNGs for social media or scalable SVGs for professional printing, this tool does it all instantly—with no internet connection required. By purchasing this product, you receive the fully functional compiled software (.exe) AND the complete, well-documented Python source code, giving you the freedom to use it as-is, resell it, or modify it for your own clients.",
    price: "₹199",
    thumbnail: "images/prj008/Thumbnail008.png",
    screenshots: [
      "images/prj008/1.png",
      "images/prj008/2.png",
      "images/prj008/3.png",
      "images/prj008/4.png"
    ],
    demoVideo: "https://youtu.be/zavb7Ha-zxo?si=i0vVcsUOQ5X-zDPD",
    problemStatement: `If you run a business, an agency, or frequently use QR codes, you likely face these common frustrations:
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li><strong>Subscription Traps:</strong> Most "free" online generators hold high-resolution formats (like SVG) or advanced customizations (like adding a center logo) behind expensive monthly paywalls.</li>
      <li><strong>Privacy Risks:</strong> Web-based generators often track the data you input or redirect your QR codes through their own analytics servers, compromising your data privacy.</li>
      <li><strong>Link Expiration (Dynamic Scams):</strong> Many online tools trick users into creating "dynamic" QR codes that break after a trial period unless you pay up.</li>
      <li><strong>Internet Dependency:</strong> You cannot generate QR codes reliably if you have a poor or nonexistent internet connection.</li>
    </ul>`,
    solution: `<strong>How This Software Fixes It:</strong><br/>
    This software completely eliminates the reliance on third-party web services by bringing the generation engine directly to your desktop.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
      <li><strong>One-Time Purchase, Unlimited Use:</strong> Pay once and generate millions of QR codes. No subscriptions, no hidden fees, no expiring links.</li>
      <li><strong>100% Offline & Private:</strong> Zero API calls and no tracking. All generation happens locally on your machine, ensuring your data is completely secure.</li>
      <li><strong>Vector Quality Downloads:</strong> Unlocks the ability to download in .SVG format for lossless scaling in Adobe Illustrator or professional printing.</li>
      <li><strong>White-Label Ready:</strong> Because you get the source code, you can easily rebrand this tool and offer it as a service or product to your own audience.</li>
    </ul>
    <strong>Technical Approach & Architecture (For Developers):</strong><br/>
    For buyers interested in the source code, this application is built with clean, modular, and maintainable Python architecture.
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
      <li><strong>UI Framework:</strong> Built using tkinter heavily styled with ttkbootstrap to achieve a modern, responsive, and flat design aesthetic.</li>
      <li><strong>Generation Engine:</strong> Utilizes the robust qrcode library combined with Pillow (PIL) for deep pixel manipulation, color replacement, and logo embedding.</li>
      <li><strong>Vector Generation:</strong> Integrates svgwrite to handle crisp, scalable vector graphics generation directly from the QR matrix.</li>
      <li><strong>Local Storage:</strong> Implements a lightweight JSON-based history manager (history_manager.py) to handle session saving without heavy database overhead.</li>
      <li><strong>Packaging:</strong> Includes a pre-configured .spec file and detailed CLI instructions to seamlessly bundle the app into a standalone Windows .exe using PyInstaller.</li>
    </ul>
    <strong>What You Get in the Download:</strong><br/>
    <ul style="margin-top: 12px; padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
      <li>Complete, well-commented Python Source Code (app.py, qr_engine.py, etc.)</li>
      <li>requirements.txt for easy dependency installation</li>
      <li>A pre-compiled, ready-to-use .exe file for Windows</li>
      <li>Detailed Documentation & Setup Guide (README.md)</li>
    </ul>`,
    features: [
      "URL & Text Support (Auto-detects input type)",
      "Extensive Customization (Foreground/Background colors)",
      "Center Logo Integration (Embed business logos)",
      "High-Res Exports (PNG, JPG, Vector SVG)",
      "Error Correction Control (Low to High)",
      "Smart History Manager (Save/reload sessions)",
      "Modern UI with Dark Mode toggle",
      "Portable standalone .exe file (No installation)"
    ],
    techStack: ["Python", "Tkinter", "ttkbootstrap", "qrcode", "Pillow (PIL)", "svgwrite", "PyInstaller"],
    category: "Desktop App"
  }
];
