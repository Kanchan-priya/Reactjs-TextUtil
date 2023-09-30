import "./App.css";
import About from "./component/About";
import NavBar from "./component/NavBar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtil" aboutText="About" />
      <div className="container mb-3">
        <TextForm heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
     
    </>
  );
}

export default App;
