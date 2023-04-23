import React from "react";

const Logo = () => {
  return (
    <div>
      <span
        style={{
          color: "#e77c2f",
          fontWeight: "bold",
          textDecoration: "underline",
          textDecorationColor: "purple",
          textUnderlineOffset: "5px",
        }}
      >
        Cloud
      </span>
      <span
        style={{
          color: "purple",
          fontWeight: "bold",
          textDecoration: "underline",
          textDecorationColor: "#e77c2f",
          textUnderlineOffset: "5px",
        }}
      >
        NoteBook
      </span>
    </div>
  );
};

export default Logo;
