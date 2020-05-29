import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="section-about">
       
       <div className="section-about__heading">
              <h1 className="heading-primary__sub">About Jamieson</h1>
            </div>

        <div className="row">
          <div className="col-lg-4 col-md-12">
         
            <div className="section-about__box">
              <h3 className="heading-tertiary">Experience</h3>
              <p className="section-about__box-text">
               Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
         
            <div className="section-about__box">
              <h3 className="heading-tertiary">Projects</h3>
              <p className="section-about__box-text">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
           
            <div className="section-about__box">
              <h3 className="heading-tertiary">Lifestyle</h3>
              <p className="section-about__box-text">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
