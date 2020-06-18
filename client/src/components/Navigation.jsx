import React, { Component } from "react";


const addActive = function() {

  const links = document.getElementsByClassName('nav-link');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("activeLink");
      current[0].className = current[0].className.replace(" activeLink", "");
      this.className += " activeLink";
    });
  }
  

}



export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
      <div id="home"/>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <a className="navbar-brand" href="/">
            JMR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link activeLink" href="#home" onClick={addActive}>
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={addActive}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume" onClick={addActive}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={addActive}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={addActive}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
