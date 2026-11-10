App
│  state: projects, nextId
│  handler: addProject({ title, description })
│
├── Header
│     props: none
│
├── ProjectForm
│     props:  onAddProject          (function, from App)
│     state:  title, description, error
│     │
│     ├── FormField  (Title)
│     │     props: id="project-title", label="Title",
│     │            value={title}, onChange={setTitle}
│     │
│     └── FormField  (Description)
│           props: id="project-description", label="Description",
│                  value={description}, onChange={setDescription},
│                  multiline
│
└── ProjectsPanel
      props:  projects              (array, from App)
      state:  searchTerm
      derived: visibleProjects      (filtered copy of projects)
      │
      ├── SearchBar
      │     props: searchTerm, onSearchChange={setSearchTerm}
      │
      └── ProjectList
            props: projects={visibleProjects}
            │
            └── ProjectCard  (one per project)
                  props: key={project.id},
                         title={project.title},
                         description={project.description}