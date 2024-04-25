import * as React from "react";
import "../styles/general.css";

export default function Todo() {
  const [label, setLabel] = React.useState("Learn React!");
  const [completed, setCompleted] = React.useState(false);
  const [editing, setEditing] = React.useState(false);

  const handleCheckboxClick = () => setCompleted(!completed);
  const handleEditClick = () => setEditing(!editing);

  return (
    <div className="todo flex flex-row">
      <label htmlFor="checkbox" className="flex flex-row">
        <div>
          <input
            type="checkbox"
            id="checkbox"
            checked={completed}
            onChange={handleCheckboxClick}
          />
          <span />
        </div>
        {editing === true ? (
          <input type="text" value={label} />
        ) : (
          <span>{label}</span>
        )}
      </label>
      <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
    </div>
  );
}
