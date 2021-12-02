import './App.css';
import Navbar from "./components/Navbar"
import PackingList from "./components/PackingList";
import Form from "./components/Form"
import Weather from "./components/Weather"
import Covid from "./components/Covid"

function App() {
  return (
     
    <div className="App">
      <Navbar/>
      <PackingList/>
      <Form/>
      <Weather/>
      <Covid/>
    </div>
  );
}
export default App


