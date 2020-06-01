import React, {Component} from "react";

import Hero from "./Hero";
import Navigation from "./Navigation";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render(){
    return (
      <div className="appdiv">
        <Navigation />
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}
