// import React from 'react';

// const Skills = () => {
//     return (
//         <div>
//             <section id="skills" className="py-16 px-4 bg-base-100">
//                 <div className="max-w-5xl mx-auto text-center">
//                     <h2 className="text-3xl font-bold mb-10">Skills</h2>

//                     {/* 🧩 Technical Skills */}
//                     <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
//                     <div className="max-w-lg mx-auto text-left space-y-4">
//                         {[
//                             { name: "HTML", level: 90 },
//                             { name: "CSS", level: 85 },
//                             { name: "JavaScript", level: 80 },
//                             { name: "React", level: 75 },
//                             { name: "Tailwind CSS", level: 85 },
//                         ].map((skill) => (
//                             <div key={skill.name}>
//                                 <div className="flex justify-between mb-1">
//                                     <span>{skill.name}</span>
//                                     <span>{skill.level}%</span>
//                                 </div>
//                                 <progress
//                                     className="progress progress-primary w-full"
//                                     value={skill.level}
//                                     max="100"
//                                 ></progress>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="my-10 border-t border-gray-300"></div>

//                     {/* 💬 Soft Skills */}
//                     <h3 className="text-xl font-semibold mb-6 text-primary">Soft Skills</h3>
//                     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//                         {[
//                             "Problem-Solving",
//                             "Communication",
//                             "Team Collaboration",
//                             "Time Management",
//                             "Adaptability",
//                             "Continuous Learning",
//                         ].map((skill) => (
//                             <div
//                                 key={skill}
//                                 className="card bg-base-100 shadow-sm border border-gray-200 py-4"
//                             >
//                                 <p className="font-medium">{skill}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Skills;