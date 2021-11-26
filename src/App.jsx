import React from "react"
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Form from "./components/Form"
import Weather from "./components/Weather"
import Covid from "./components/Covid"
function App() {
  return (
     
    <div className="App">
      <Navbar/>
      <Main/>
      <Form/>
      <Weather/>
      <Covid/>
    </div>
  );
}
export default App


