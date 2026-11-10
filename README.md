# Personal Project Showcase App

A small website built with **React** that shows a list of projects. You can add
new projects with a form and search through them as you type. The page adjusts
to fit phones, tablets, and computers.

## Features:

- **Project list:** shows each project with an image placeholder, a title, and a description
- **Add a project:** fill in a title and description, then click **Add**
- **Search:** type in the search bar to filter the list right away
- **Responsive design:** works on small and large screens
- **Tests:** automated tests check that the main features work

## Built with:

- [React](https://react.dev/) (using functional components and the `useState` hook)
- [Vite](https://vitejs.dev/) to run the project
- Plain CSS for styling
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for tests

## Getting started

You need [Node.js](https://nodejs.org/) installed on your computer.

1. **Download the project** (replace the link with your own repository):

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install the packages:**

   ```bash
   npm install
   ```

3. **Start the app:**

   ```bash
   npm run dev
   ```

4. Open the link shown in the terminal (usually `http://localhost:5173`).

## How to use the app

- **Add a project:** type a title and a description, then click **Add**. The new
  project appears at the top of the list. If a box is empty, you will see an
  error message instead.
- **Search for a project:** type in the **Search Projects** box. The list shows
  only projects whose title or description matches. If nothing matches, you will
  see a message saying so.



## Project structure

```
src/
├── App.jsx                  The main component; holds the list of projects
├── App.css                  All the styling
├── data.js                  The starting list of projects
├── components/
│   ├── Header.jsx           The page title
│   ├── ProjectForm.jsx      The "Add Project" form
│   ├── FormField.jsx        A label and text box, used twice in the form
│   ├── ProjectsPanel.jsx    The card that holds the search bar and the list
│   ├── SearchBar.jsx        The search box
│   ├── ProjectList.jsx      Loops through the projects
│   └── ProjectCard.jsx      One project (image, title, description)
└── __tests__/
    └── App.test.jsx         The tests
```

## How the components fit together

```
App
├── Header
├── ProjectForm
│   └── FormField (used for Title and for Description)
└── ProjectsPanel
    ├── SearchBar
    └── ProjectList
        └── ProjectCard (one for each project)
```

### Props (data passed down)

| Component | Props it receives |
|---|---|
| `ProjectForm` | `onAddProject` |
| `FormField` | `id`, `label`, `value`, `onChange`, `multiline` |
| `ProjectsPanel` | `projects` |
| `SearchBar` | `searchTerm`, `onSearchChange` |
| `ProjectList` | `projects` |
| `ProjectCard` | `title`, `description` |

`Header` does not need any props.

## How state works

State is data that a component remembers and that can change. This app uses only
the `useState` hook. Each piece of state is kept in the **closest parent** of
all the components that need it:

| State | Where it lives | Why there |
|---|---|---|
| `projects` | `App` | The form adds to it and the list shows it |
| `searchTerm` | `ProjectsPanel` | The search bar changes it and the list is filtered with it |
| `title`, `description`, `error` | `ProjectForm` | Only the form uses them |

The filtered list is not stored in state. It is worked out each time the page
updates, from `projects` and `searchTerm`.

## Changing the starting projects

Open `src/data.js` and edit the `initialProjects` list. Each project needs an
`id` (a unique number), a `title`, and a `description`:

```js
{
  id: 4,
  title: "My New Project",
  description: "A short description of the project.",
}
```

New projects added with the form are not saved. They disappear when you refresh
the page.

## Changing the colors

All the colors are listed at the top of `src/App.css` in the `:root` section.
Change a color there and it updates everywhere in the app.

## Ideas for improving it

- Save projects so they stay after a refresh (try `localStorage`)
- Add a button to delete a project
- Add an image link field to the form
- Add a link to each project's website

## Author

Collins Osano
