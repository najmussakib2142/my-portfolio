import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
// import Projects from "./Projects";
// import { projects } from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if(!project) return <div className="pt-24 container mx-auto px-6">Project not found.</div>;

  return (
    <div className="pt-24 container mx-auto px-6 pb-20">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-gray-700 mb-4">{project.description}</p>

      <div className="mb-4">
        <h3 className="font-semibold">Main Tech Stack</h3>
        <div className="flex gap-2 mt-2">
          {project.tech.map(t => <span key={t} className="badge badge-outline">{t}</span>)}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Challenges Faced</h3>
        <ul className="list-disc pl-6 mt-2">
          {project.challenges.map((c,i) => <li key={i} className="text-gray-700">{c}</li>)}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Potential Improvements & Future Plans</h3>
        <ul className="list-disc pl-6 mt-2">
          {project.improvements.map((i, idx) => <li key={idx} className="text-gray-700">{i}</li>)}
        </ul>
      </div>

      <div className="flex gap-3 mt-6">
        <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
        <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-outline">Client Code</a>
        <Link to="/projects" className="btn">Back to Projects</Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
