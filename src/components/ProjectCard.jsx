import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      <figure className="h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map(t => <span key={t} className="badge badge-outline">{t}</span>)}
        </div>
        <div className="mt-4 flex gap-2">
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Live</a>
          <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">Code</a>
          <Link to={`/projects/${project.id}`} className="btn btn-sm">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
