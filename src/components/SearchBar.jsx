// The search box at the top of the project list.
// Props:
//   searchTerm     - the text currently in the box
//   onSearchChange - a function to call when the user types
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search Projects"
        aria-label="Search projects"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;