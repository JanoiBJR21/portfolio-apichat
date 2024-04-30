import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Services } from "./components/pages/Services";
import { Portfolio } from "./components/pages/Portfolio";
import { Contact } from "./components/pages/Contact";
// import { Home,About,Services,Portfolio,Contact } from "./components/pages";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
