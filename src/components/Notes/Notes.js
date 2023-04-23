import React from "react";
import NoteItem from "./NoteItem";
import "./notes.scss";
const Notes = () => {
  return (
    <div className="notes">
      <div className="note-container">
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </div>
    </div>
  );
};

export default Notes;
