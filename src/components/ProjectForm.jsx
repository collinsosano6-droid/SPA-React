import { useState } from "react";
import FormField from "./FormField";

// The form where the user types a new project.
// Prop: onAddProject - a function from App that adds the project to the list.
function ProjectForm({ onAddProject }) {
  // Only this form needs to know what is typed in the boxes,
  // so this state is kept here instead of in App.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // Runs when the user clicks "Add"
  function handleSubmit(event) {
    // Stop the browser from refreshing the page
    event.preventDefault();

    // If either box is empty (ignoring spaces), show a message and stop
    if (title.trim() === "" || description.trim() === "") {
      setError("Enter a title and a description to add a project.");
      return;
    }

    // Send the new project up to App
    onAddProject(title.trim(), description.trim());

    // Empty the boxes and clear any old error message
    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <section className="card form-card">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Each box shows the state value and updates it when typed in */}
        <FormField
          id="project-title"
          label="Title"
          value={title}
          onChange={setTitle}
        />

        <FormField
          id="project-description"
          label="Description"
          value={description}
          onChange={setDescription}
          multiline={true}
        />

        {/* Only show the error message if there is one */}
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default ProjectForm;