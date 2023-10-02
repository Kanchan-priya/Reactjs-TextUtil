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

  const handleclear = () => {
    let newText ="";
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }



  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'dark'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange} style={{backgroundColor:props.mode==='dark'? '#042743':'white', color:props.mode==='dark'? 'white':'dark'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleupclick}>
        Convert in Uppercase
      </button>

      <button className="btn btn-primary mx-1" onClick={handleupclicks}>
        Convert in lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleclear}>
        Clear text
      </button>
      <button type="submit" onClick={speak} className="btn btn-primary mx-1">Speak</button>
      </div>

      <div className="container" style={{color:props.mode==='dark'? 'white':'dark'}}>
    <h3>Your text summery</h3>
    <p> {text.split(" ").length} words and {text.length} character</p>
    <p> {0.008*text.split(" ").length} Mitnues</p>
    <h3>Preview</h3>
    <p> {text.length>0? text :"Enter your text here"} </p>
      </div>
    </>
  );
}
