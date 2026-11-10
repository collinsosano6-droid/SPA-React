import ProjectCard from "./ProjectCard";

// Shows all the projects it is given, one card each.
// Prop: projects - the list to display (already filtered by the search).
function ProjectList({ projects }) {
  // If the list is empty, show a friendly message instead
  if (projects.length === 0) {
    return <p className="empty-state">No projects match your search.</p>;
  }

  return (
    <ul className="project-list">
      {/* .map() turns each project into a ProjectCard.
          React needs a unique "key" on each item in a list. */}
      {projects.map(function (project) {
        return (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </ul>
  );
}

export default ProjectList;