import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handleupclicks = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleupclick}>
        Click button to convert in uppercase
      </button>

      <button className="btn btn-primary" onClick={handleupclicks}>
        Click button to convert in lowercase
      </button>
      </div>

      <div className="container">
    <h3>Your text summery</h3>
    <p> {text.split(" ").length} words and {text.length} character</p>
    <p> {0.008*text.split(" ").length} Mitnues</p>
    <h3>Preview</h3>
    <p> {text} </p>
      </div>
    </>
  );
}
