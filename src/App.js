import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import { About } from "./pages/About";
import Nav from "./components/Nav";
import ColorsToggler from "./components/ColorsToggler";
import SlidingNav from "./components/SlidingNav"

function App() {
  const [activeColor, setActiveColor] = useState("var(--skin-color)");
  const [isNightMode, setIsNightMode] = useState(true);

  useEffect(() => {
    const storedIsNightMode = localStorage.getItem('isNightMode');
    if (storedIsNightMode !== null) {
      setIsNightMode(JSON.parse(storedIsNightMode));
    }
  }, []);

  const toggleNightMode = () => {
    const newIsNightMode = !isNightMode;
    setIsNightMode(newIsNightMode);

    localStorage.setItem('isNightMode', JSON.stringify(newIsNightMode));
  };

  return (
    
    <div className="App">
      <Router>
      <Nav isNightMode={isNightMode} activeColor={activeColor}/>
       <SlidingNav isNightMode={isNightMode} activeColor={activeColor}/> 
      <ColorsToggler
        setActiveColor={setActiveColor}
        toggleNightMode={toggleNightMode}
      />
     
        <Routes>
          <Route
            path="/"
            element={
              <Home activeColor={activeColor} isNightMode={isNightMode} />
            }
          />
          <Route
            path="/about"
            element={
              <About activeColor={activeColor} isNightMode={isNightMode} />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects activeColor={activeColor} isNightMode={isNightMode} />
            }
          />
          <Route
            path="/contacts"
            element={
              <Contacts activeColor={activeColor} isNightMode={isNightMode} />
            }
          />
        </Routes>
        </Router>
    </div>
    
  );
}

export default App;
