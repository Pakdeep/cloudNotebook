import React from "react";

const NoteItem = () => {
  const hanndleEdit = (id) => {
    console.log("Edit button is clicked");
  };
  const handleDelete = (id) => {
    console.log("Delete button is clicked");
  }; 
   const handleExpand = (id) => {
    console.log("Expand button is clicked");
  };

  return (
    <div className="noteItem">
      <div className="title">
        <h3>This is title </h3>{" "}
        <button className="expand" onClick={handleExpand}>
          {" "}
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
        </button>
      </div>
      <h3 className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
        provident assumenda corrupti quis facilis, amet recusandae quisquam
        dignissimos iure qui. Rem quae corporis ratione assumenda accusamus
        fugit numquam nihil aspernatur dolores molestiae. Illo perferendis cum
        asperiores, commodi officiis laudantium facere sit distinctio expedita
        totam? At quasi quidem voluptas. Itaque, esse.
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
