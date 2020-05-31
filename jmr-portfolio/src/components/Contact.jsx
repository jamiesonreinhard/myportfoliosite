import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="section-contact">
        <div className="form-box">
        <h3 className="heading-tertiary mb-5">Contact Me</h3>
          <form>
            <div class="form-group">
              <label className="form-box__label" for="formGroupExampleInput">Your Name</label>
              <input
                className="form-box__input"
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
                autocomplete="off"
              />
            </div>
            <div class="form-group">
              <label className="form-box__label" for="formGroupExampleInput">Your Email</label>
              <input
                className="form-box__input"
                type="email"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group">
              <label className="form-box__label" for="formGroupExampleInput">How can we help each other?</label>
              <textarea
                className="form-box__input"
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Your Message"
                rows="8"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
