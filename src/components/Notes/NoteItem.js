import React from "react";

const NoteItem = (props) => {

  const {note}=props;
  const hanndleEdit = () => {
    console.log(note.id);
  };
  const handleDelete = () => {
    console.log(note.id);

  }; 
  //  const handleExpand = () => {
  //   console.log(note.id);

  // };

  return (    
       
    <div className="noteItem">
      <div className="title">        
        <h3>{note.title} </h3>{" "}
        {/* <button className="expand" onClick={handleExpand}>
          {" "}
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
        </button> */}
      </div>
      <h3 className="desc">
       {note.content}
      </h3>
      <div className="icons">
        <button onClick={hanndleEdit}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
   
  );
};

export default NoteItem;
