// useState lets a component remember data between renders
import { useState } from "react";

// Import the other components and the starting data
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectsPanel from "./components/ProjectsPanel";
import { initialProjects } from "./data";

// Import the styles
import "./App.css";

// App is the top component. Both the form (adds projects) and the list
// (shows projects) need the projects array, so it is stored here, in
// their closest shared parent.
function App() {
  // projects = the current list, setProjects = the function that changes it.
  // The list starts out as the data from data.js.
  const [projects, setProjects] = useState(initialProjects);

  // This function is passed down to ProjectForm as a prop.
  // The form calls it when the user adds a new project.
  function addProject(title, description) {
    // Build a new project object. Date.now() gives a unique number for the id.
    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
    };

    // Make a new array with the new project first, followed by the old ones.
    // We never change the old array directly; we give React a new one.
    setProjects([newProject, ...projects]);
  }

  return (
    <>
      <Header />
      <main className="container">
        {/* Give the form the addProject function */}
        <ProjectForm onAddProject={addProject} />

        {/* Give the panel the list of projects */}
        <ProjectsPanel projects={projects} />
      </main>
    </>
  );
}

export default App;