import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="section-hero">
        <div className="section-hero__text-box">
          <h1 className="heading-primary">Hi, I'm Jamieson</h1>
          <h2 className="heading-primary__sub">I code in...</h2>
        </div>
        <img className="react-icon" src="./icons/icons8-react-100.png"></img>
        <img className="js-icon" src="./icons/icons8-javascript-96.png"></img>
        <img className="ruby-icon" src="./icons/icons8-ruby-programming-language-30.png"></img>
        <img className="html-icon" src="./icons/icons8-html-5-96.png"></img>
        
      </div>
    );
  }
}
