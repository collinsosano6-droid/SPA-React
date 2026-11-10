import { useState } from "react";
import SearchBar from "./SearchBar";
import ProjectList from "./ProjectList";

// The second card in the design: the search bar and the list together.
// Prop: projects - the full list of projects from App.
function ProjectsPanel({ projects }) {
  // What the user has typed in the search box.
  // The search bar and the filtering both use it, and this component is
  // their closest shared parent, so the state lives here.
  const [searchTerm, setSearchTerm] = useState("");

  // Make the search ignore capital letters and extra spaces
  const search = searchTerm.trim().toLowerCase();

  // Keep only the projects whose title or description contains the search text.
  // This is worked out every time the component renders, so we don't need
  // to store the filtered list in state.
  const visibleProjects = projects.filter(function (project) {
    const titleMatches = project.title.toLowerCase().includes(search);
    const descriptionMatches = project.description.toLowerCase().includes(search);
    return titleMatches || descriptionMatches;
  });

  return (
    <section className="card projects-card">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={visibleProjects} />
    </section>
  );
}

export default ProjectsPanel;