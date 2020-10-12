import React, { Component } from "react";


export default class Home extends Component {
  render() {
    return (
      <div className="section-hero">
        
        
        
        <div className="section-hero__text-box">
        <div>
        <div>
        <h1 className="heading-primary mr-5">Hi, I'm Jamieson</h1>
        
        </div>
        <div className="flex-heading">
        <img src="images/piney-cutout1.png" className="avatar"></img>
        <h2 className="heading-primary__sub mb-4">I code in...</h2>
        </div>
        
        </div>
         
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
