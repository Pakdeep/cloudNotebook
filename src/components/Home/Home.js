import React from "react";
import "./home.scss";
import Notes from "../Notes/Notes";
import Logo from "../../Logo";
import Footer from "../Footer/Footer";
const Home = () => {
  const handleChange=(e)=>{
    console.log(e.target.value)
  }
  const hanldeSubmit=(e)=>{
    e.preventDefault();
    console.log("submit button is clicked")
  }
  return (   
    <>
    <div className="home">
     <h1 style={{
      marginTop:"10px"
     }}><Logo/></h1> 
      <h1>Create Note</h1>
      <form action="">
        <div className="input-label">
          <label htmlFor="title">Note Title</label>
          <input type="text" name="title" id="title" onChange={handleChange}/>
        </div>
        <div className="input-label">
          <label htmlFor="description">Note Description</label>
          <textarea
            name="description"
            id="description"
            cols="10"
            rows="5"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" onClick={hanldeSubmit}>Add Note</button>
      </form>
      <h1 style={{
        marginTop:"20px"
      }}>Your Notes</h1>
      <Notes />
    </div>
    <Footer/>
    </> 
  );
};

export default Home;
