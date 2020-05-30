import React from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

function App(){
    return(
        <div className="appdiv">
            <Navigation />
            <Hero />
            <About />
            <Resume />
            <Projects />
        </div>

    );
}

export default App;