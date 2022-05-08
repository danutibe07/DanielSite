import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import './App.css';
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
  <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
      </Routes>
  </Router>
   
  );
}

export default App;
