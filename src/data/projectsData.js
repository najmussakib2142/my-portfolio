export const projects = [

  {
    id: 1,
    title: "SimpleBlog",
    image: "https://i.ibb.co.com/C38LHXyR/simple-Blog.png",
    description:
      "A modern blogging platform where users can write, explore, and manage articles with enhanced features for search, bookmarks, profiles, and admin control.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Firebase", "MongoDB", "Mongoose", "Cloudinary", "Firebase Auth"],
    liveLink: "https://simple-blog-website-brown.vercel.app/",
    clientSide: "https://github.com/najmussakib2142/simple-blog-website",
    ServerSide: "https://github.com/najmussakib2142/simple-blog-website",
    "keyFeatures": [
      "✍️ Write & publish articles with full CRUD operations",
      "📖 Read & explore blogs with dynamic category and keyword search",
      "⭐ Bookmark your favorite blogs for quick access",
      "👤 User Profiles with Firebase authentication and secure API access",
      "🛡 Admin Role-Based Access Control (RBAC) for managing blogs",
      "⚡ Fast, responsive, and interactive UI with Tailwind CSS, DaisyUI & Framer Motion",
      "💾 MongoDB backend with server-side APIs",
      "🌐 Cloudinary image uploads for blog posts",
      "🔗 Dynamic routing for individual blog pages",
      "💻 Smooth animations and reusable components",
      "🚀 Production-ready deployment on Vercel"
    ],
    challenges: [
      "Implementing secure RBAC for admin vs regular users",
      "Ensuring real-time sync and pagination in BlogsClient",
      "Handling modal-based editing with proper DB connection",
      "Integrating Firebase Auth with Cloudinary image uploads",
      "Creating a full-featured search and category filter system"
    ],
    improvements: [
      "Add messaging or commenting features for blog posts",
      "Enable post moderation, recommendations, and trending blogs",
      "Optimize performance for larger datasets and high traffic",
      "Add analytics and dashboards for blog engagement"
    ],
  },
  {
    id: 2,
    title: "Explore BD",
    image: "https://i.ibb.co.com/FbrvgGJN/beautiful-axis-deer-from-sundarbans-tiger-reserve-india.jpg",
    description: "ExploreBD is a comprehensive Tourism Management System for Bangladesh. It serves as an online platform to help travelers explore destinations, meet tour guides, and plan trips efficiently. The project includes extensive features for Tourists, Tour Guides, and Admin users, covering all aspects from booking to management.", tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Firebase Admin",
      "Stripe",
      "TanStack Query",
      "Framer Motion",
      "JWT"
    ],
    liveLink: "https://explore-bd-admin.web.app/",
    clientSide: "https://github.com/najmussakib2142/explore-bd-client",
    ServerSide: "https://github.com/najmussakib2142/explore-bd-server",
    challenges: [
      "Implementing robust JWT authentication across the MERN stack and securing protected routes based on three distinct user roles (Tourist, Guide, Admin).",
      "Successfully integrating the Firebase Admin SDK on the Node/Express backend for secure user authentication and role management, which involved complex server-side verification.",
      "Handling sensitive real-time payment processing and webhooks using the Stripe payment gateway for tour bookings.",
      "Designing and managing distinct ways tourist spot data, data-intensive dashboard panels for Tourist, Guide and Admin to cater to varying access levels and CRUD operations.",
      "Ensuring secure handling of environment variables for both Firebase and MongoDB credentials on the server.",
      "Optimizing data fetching and state management for large datasets (e.g., packages, users) using TanStack Query to improve client-side performance."
    ],
    improvements: [
      "Implementing advanced search, filtering, and sorting features for tours and guides to improve user experience.",
      "Adding a comprehensive, multi-layered review and rating system that integrates with the user and tour guide profiles.",
      "Integrating real-time features using WebSockets (e.g., live chat support or notification system for booking updates).",
      "Refactoring the front-end for improved accessibility (A11Y) and performance optimization, potentially by exploring Server-Side Rendering (SSR).",
      "Expanding the payment options to include popular local payment gateways in Bangladesh."
    ],
  },

  {
    id: 3,
    title: "eduCircle",
    image: "https://i.ibb.co.com/7Jt7TXqS/Screenshot-2025-10-23-025813.png",
    description:
      "An assignment submission and evaluation platform enabling students to submit work and evaluators to provide feedback and grades in real time.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://edu-circle-admin.web.app/",
    clientSide: "https://github.com/najmussakib2142/edu-circle-client",
    ServerSide: "https://github.com/najmussakib2142/edu-circle-server",
    challenges: [
      "Designing a secure file upload and storage flow using Firebase Storage.",
      "Implementing evaluator feedback synchronization and live status updates.",
    ],
    improvements: [
      "Add role-based access control and a full-featured admin dashboard.",
      "Introduce offline submission drafts and mobile-optimized evaluation tools.",
    ],
  },


];
