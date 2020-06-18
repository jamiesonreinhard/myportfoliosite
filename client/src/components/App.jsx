import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Scroll from "./Scroll";



function App() {
  return (
    <div className="appdiv">
   
      <Scroll />
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    
      
    </div>
  );
}

export default App;
