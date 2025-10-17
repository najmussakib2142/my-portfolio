// src/pages/Projects.jsx

import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
