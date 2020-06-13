import React, { useRef, Component } from "react";

export default class Scroll extends Component {
  render() {
    return (
      <div className="scroll-arrow">
        <a className="arrow__style">
          <img
            className="arrow"
            src="./icons/icons8-expand-arrow-96.png"
            alt="arrow"
          ></img>
        </a>
      </div>
    );
  }
}
