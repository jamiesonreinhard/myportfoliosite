import React from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import About from "./About";

function App(){
    return(
        <div>
            <Navigation />
            <Hero />
            <About />
        </div>

    );
}

export default App;