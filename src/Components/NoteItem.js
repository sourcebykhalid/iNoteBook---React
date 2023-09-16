import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
      </div>

      <div className="buttons my-2 " style={{ fontSize: "14px" }}>
        <input
          type="button"
          className="mx-2"
          value="View"
          style={{
            backgroundColor: "#c1deda",
            color: "#1b1c1c",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
        <input
          type="button"
          className="mx-2"
          value="Edit"
          style={{
            backgroundColor: "steelblue",
            color: "#1b1c1c",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
        <input
          type="button"
          value="Delete"
          onClick={() => {
            deleteNote(note._id);
          }}
          style={{
            backgroundColor: "red",
            color: "#1b1c1c",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default NoteItem;
