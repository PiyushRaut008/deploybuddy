/* ============================================
   DESIGN GALLERY DATA FILE
   ============================================
   
   HOW TO ADD A NEW DESIGN:
   1. Copy one of the design objects below
   2. Paste it at the end of the array (before the closing bracket)
   3. Update ID, title, and thumbnail URL
   
   ============================================ */

const DESIGNS = [
  {
    id: "DGN-001",
    title: "Minimalist E-commerce Theme",
    shortDesc: "A clean, modern, and minimal e-commerce design perfect for fashion, lifestyle, or boutique brands.",
    fullDesc: "This minimalist e-commerce theme focuses on high-quality product imagery and typography. It offers a seamless shopping experience with intuitive navigation, a clean cart interface, and beautifully structured product detail pages. Perfect for brands that want a premium, uncluttered aesthetic.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Clean Typography", "Responsive Grid Layout", "Minimalist Cart UI", "High-conversion Checkout"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    category: "E-commerce"
  },
  {
    id: "DGN-002",
    title: "SaaS Dashboard Dark Mode",
    shortDesc: "A sleek, dark-themed dashboard template for SaaS products, featuring data visualization components.",
    fullDesc: "Designed for modern software-as-a-service platforms, this dark mode dashboard template includes beautifully crafted charts, tables, and metric cards. The dark aesthetic reduces eye strain for power users while maintaining a highly professional and tech-forward appearance.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Dark Mode Default", "Interactive Charts", "Data Tables", "User Profile Management"],
    techStack: ["React", "Tailwind CSS", "Chart.js"],
    category: "Dashboard"
  },
  {
    id: "DGN-003",
    title: "Modern Corporate Landing Page",
    shortDesc: "A professional and trustworthy landing page design for corporate agencies and B2B services.",
    fullDesc: "This corporate landing page is built to convert. It features a strong hero section, clear value propositions, trust signals (like client logos and testimonials), and prominent calls-to-action. The design is structured to guide visitors through your corporate narrative smoothly.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Strong Hero Section", "Testimonials Slider", "Service Cards", "SEO Optimized Structure"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    category: "Landing Page"
  },
  {
    id: "DGN-004",
    title: "Creative Portfolio Template",
    shortDesc: "A dynamic, grid-based portfolio template for creatives, photographers, and agencies.",
    fullDesc: "Showcase your work with this highly visual, creative portfolio template. It uses an asymmetrical grid and smooth scrolling animations to create a memorable browsing experience. Perfect for visual artists who want their work to take center stage without distractions.",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Masonry Grid", "Smooth Scrolling", "Lightbox Gallery", "Minimalist Navigation"],
    techStack: ["HTML5", "SCSS", "GSAP"],
    category: "Portfolio"
  }
];
