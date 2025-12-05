export const projects = [

  {
    id: 1,
    title: "SimpleBlog",
    image: "https://i.ibb.co.com/gMFwbgrX/Screenshot-2025-12-05-070130.png",
    description:
      "A modern blogging platform where users can write, explore, and manage articles with enhanced features for search, bookmarks, profiles, and admin control.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion","Firebase", "MongoDB", "Mongoose", "Cloudinary", "Firebase Auth"],
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
    description:
      "A tourism discovery platform showcasing destinations across Bangladesh with maps, packages, stories, and booking options.",
    tech: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://explore-bd-admin.web.app/",
    clientSide: "https://github.com/najmussakib2142/explore-bd-client",
    ServerSide: "https://github.com/najmussakib2142/explore-bd-server",
    challenges: [
      "Integrating responsive map components for regional exploration.",
      "Ensuring smooth UI transitions and optimized image loading.",
    ],
    improvements: [
      "Add search and filter features for tours.",
      "Include a review system and user-generated stories.",
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
