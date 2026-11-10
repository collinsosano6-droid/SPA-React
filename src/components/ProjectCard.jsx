// Shows one project: a picture box on the left, text on the right.
// Props:
//   title       - the project's name
//   description - a short summary of the project
function ProjectCard({ title, description }) {
  return (
    <li className="project-card">
      {/* A box with an X, like the placeholder image in the design */}
      <div className="project-image" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
        </svg>
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ProjectCard;