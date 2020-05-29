import React from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import About from "./About";
import Resume from "./Resume";

function App(){
    return(
        <div className="appdiv">
            <Navigation />
            <Hero />
            <About />
            <Resume />
        </div>

    );
}

export default App;