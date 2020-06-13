import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="section-hero">
        <img
          alt="hero" 
          className="section-hero__img"
          src="./images/piney-cutout.png"
        ></img>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="/videobg/Stars.mp4" type="video/mp4" />
            Your browser is not supported
          </video>
        </div>
        <div className="section-hero__text-box">
          <h1 className="heading-primary">Hi, I'm Jamieson</h1>
          <h2 className="heading-primary__sub mb-4">I code in...</h2>
          <img
            alt="js" 
            className="js-icon icon"
            src="./icons/icons8-javascript-96.png"
          ></img>
          <img
            alt="node" 
            className="node-icon icon"
            src="./icons/icons8-nodejs-96.png"
          ></img>
          <img
            alt="react" 
            className="react-icon icon"
            src="./icons/icons8-react-100.png"
          ></img>
          <img
            alt="ruby" 
            className="ruby-icon icon"
            src="./icons/icons8-ruby-programming-language-30.png"
          ></img>
          <img
            alt="html" 
            className="html-icon icon"
            src="./icons/icons8-html-5-96.png"
          ></img>
          <img alt="css" 
          className="css-icon icon" src="./icons/icons8-css3-96.png"></img>
        </div>

        {/* <div className="arrow">
          <a className="arrow__style" href="#about">
          <img alt="arrow" 
          className="arrow" src="./icons/icons8-expand-arrow-96.png"></img>
          </a>
        </div> */}
      </div>
    );
  }
}
