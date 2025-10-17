// // src/data/projectsData.js

// export const projects = [
//   {
//     id: 1,
//     title: "eduCircle",
//     description:
//       "An assignment submission and evaluation platform where students can upload work and evaluators can give feedback and marks.",
//     tech: ["React", "Firebase", "Tailwind CSS"],
//     image: "https://ibb.co.com/Lddz0VmF", // put image in public/images folder
//     liveLink: "https://your-educircle-demo.vercel.app",
//     codeLink: "https://github.com/yourusername/educircle",
//   },
//   {
//     id: 2,
//     title: "Event Explorer",
//     description:
//       "A beginner-friendly event discovery app with a slider, upcoming events section, and Firebase authentication.",
//     tech: ["React", "React Router", "Firebase"],
//     image: "https://ibb.co.com/GvzdLbD1",
//     liveLink: "https://your-eventexplorer-demo.vercel.app",
//     codeLink: "https://github.com/yourusername/event-explorer",
//   },
//   {
//     id: 3,
//     title: "Parcel Delivery App",
//     description:
//       "A parcel management web app with cost calculation and form validation using React Hook Form and DaisyUI.",
//     tech: ["React", "React Hook Form", "Tailwind CSS"],
//     image: "https://ibb.co.com/8DNnDQ85",
//     liveLink: "https://your-parcelapp-demo.vercel.app",
//     codeLink: "https://github.com/yourusername/parcel-delivery",
//   },
// ];


export const projects = [
  {
    id: 1,
    title: "eduCircle",
    image: "../../public/23186849_6737457.jpg",
    description: "Assignment submission and evaluation platform with student uploads, grading, and feedback.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://your-educircle-demo.vercel.app",
    codeLink: "https://github.com/yourusername/educircle-client",
    challenges: [
      "Designing a secure file upload and storage flow with Firebase Storage.",
      "Synchronizing evaluator feedback and real-time status updates."
    ],
    improvements: [
      "Add role-based access control and admin dashboard.",
      "Improve UI for mobile grading workflow; add offline draft support."
    ]
  },
  {
    id: 2,
    title: "Event Explorer",
    image: "../../public/artem-beliaikin-D3sOgDBTLTU-unsplash.jpg",
    description: "Event discovery app with filters, slider, and Firebase authentication.",
    tech: ["React", "React Router", "Firebase"],
    liveLink: "https://your-eventexplorer-demo.vercel.app",
    codeLink: "https://github.com/yourusername/event-explorer-client",
    challenges: [
      "Implementing smooth transitions between filtered event lists.",
      "Balancing performance while loading event images."
    ],
    improvements: [
      "Add tagging & search, save favorite events, and pagination."
    ]
  },
  {
    id: 3,
    title: "Parcel Delivery App",
    image: "../../public/Transit warehouse.png",
    description: "Parcel booking and cost calculation system with validation using React Hook Form.",
    tech: ["React", "React Hook Form", "Tailwind CSS"],
    liveLink: "https://your-parcelapp-demo.vercel.app",
    codeLink: "https://github.com/yourusername/parcel-delivery-client",
    challenges: [
      "Accurate cost calculation across multiple inputs and edge cases.",
      "Designing intuitive form flow for sender/receiver details."
    ],
    improvements: [
      "Add admin tracking dashboard and shipment history.",
      "Integrate third-party courier APIs for live rates."
    ]
  }
];

