import React from "react";
import NoteItem from "./NoteItem";
import "./notes.scss";
import { useSelector } from "react-redux";

const Notes = () => {
  const notes=useSelector((state)=>state.add)
  return (
    <div className="notes">
      <div className="note-container">
      {
      notes.map((note) => {
        return(
          <NoteItem key={note.id} note={note} />       
          )
          
      })
    }
      </div>
    </div>
  );
};

export default Notes;
