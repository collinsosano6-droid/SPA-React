// FormField is a small reusable piece: a label plus a text box.
// We use it twice in the form (once for Title, once for Description).
//
// Props it receives:
//   id        - links the label to the input (needs to be unique)
//   label     - the text shown above the box
//   value     - what is currently typed in the box
//   onChange  - a function to call whenever the user types
//   multiline - if true, show a bigger box (textarea) instead of one line
function FormField({ id, label, value, onChange, multiline }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>

      {multiline ? (
        // Big box for longer text
        <textarea
          id={id}
          rows="4"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        // Normal one-line box
        <input
          id={id}
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </div>
  );
}

export default FormField;