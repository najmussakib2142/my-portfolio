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
    // ServerSide: "https://github.com/najmussakib2142/simple-blog-website",
    keyFeatures: [
      "Create, edit, and delete blog posts with full CRUD functionality",
      "Search and filter blogs by category and keywords",
      "Bookmark favorite articles for quick access",
      "Secure user authentication with Firebase",
      "Admin-only access for managing and moderating blogs",
      "Image uploads handled securely via Cloudinary",
      "Responsive and animated UI built with Tailwind CSS and Framer Motion"
    ],

    challenges: [
      "Implementing secure role-based access control for admin and users",
      "Managing pagination and real-time updates for blog listings",
      "Synchronizing Firebase authentication with backend APIs",
      "Handling modal-based editing without breaking data consistency"
    ],

    improvements: [
      "Add comments and user interaction on blog posts",
      "Introduce blog recommendations and trending sections",
      "Optimize performance for large numbers of posts",
      "Add analytics for views and engagement"
    ]
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
    keyFeatures: [
      "Role-based dashboards for Tourists, Guides, and Admins",
      "Secure authentication using JWT and Firebase Admin SDK",
      "Tour booking and payment processing with Stripe",
      "Admin controls for managing users, tours, and destinations",
      "Efficient data fetching and caching with TanStack Query",
      "Responsive UI with smooth animations"
    ],

    challenges: [
      "Designing secure authentication for multiple user roles",
      "Integrating Stripe payments and handling sensitive transactions",
      "Managing complex dashboards with different permissions",
      "Optimizing performance for large datasets",
      "Safely handling environment variables and credentials"
    ],

    improvements: [
      "Advanced search and filtering for tours and guides",
      "Review and rating system for guides and destinations",
      "Real-time notifications or live chat features",
      "Accessibility (A11Y) and performance improvements",
      "Support for local Bangladeshi payment gateways"
    ]
  },

  {
    id: 3,
    title: "EduCircle",
    image: "https://i.ibb.co.com/7Jt7TXqS/Screenshot-2025-10-23-025813.png",
    description:
      "A full-featured assignment management and evaluation platform with secure submissions, real-time status tracking, and a modern responsive dashboard for students and evaluators.",
    tech: [
      "React",
      "Express",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudinary",
      "Node.js",
      "Firebase Authentication",
      "MongoDB"
    ],
    liveLink: "https://edu-circle-admin.web.app/",
    clientSide: "https://github.com/najmussakib2142/edu-circle-client",
    ServerSide: "https://github.com/najmussakib2142/edu-circle-server",
    keyFeatures: [
      "Secure assignment submission with file uploads",
      "Role-based access for students and evaluators",
      "Real-time status updates for submissions",
      "Evaluator feedback and grading workflow",
      "Responsive dashboards for all user roles"
    ],

    challenges: [
      "Designing a secure submission and evaluation flow",
      "Keeping assignment status and feedback in sync",
      "Building dashboards that work well on all devices",
      "Migrating to Cloudinary for secure file handling"
    ],

    improvements: [
      "Add analytics for assignment performance",
      "Offline draft saving for submissions",
      "Notification system for submission and feedback updates"
    ]
  },


];
