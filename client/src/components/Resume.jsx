import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <div className="section-resume">
        <div id="resume" />
        <div className="section-resume__heading">
          <h1 className="heading-primary__huge-1">resume</h1>
        </div>
        <div className="row u-margin-bottom-big">
          <div className="col-lg-12 col-md-12">
            <div className="experience-box">
              <h3 className="heading-primary__sub mb-5">
                Experience & Education
              </h3>
              <p className="about-box__text mb-5">
                My professional career didn't begin in the realm of software
                engineering, but it did prepare me for all types of
                collaborative environments. I spent 3.5 years running finance
                departments for hotels with Marriott and Vail Resorts. These
                experiences required me to build skills in leadership, time
                management, and accountability, along with the technical skills
                required to maintain the books. After hotels, I launched a
                consulting business where I earned work in the following areas;
                supporting payroll, producing video content, and building
                websites for a broker-dealer; managing luxury hotel sales for a
                cocktail mixer company. Then, I decided to dive head first into
                coding with Le Wagon, the number one rated bootcamp worldwide on
                SwitchUp.
              </p>
              <div className="row mt-5">
                <div className="col-lg-6 col-md-12">
                  <div className="experience-box-alt">
                    <h4 className="heading-tertiary mb-5">Professional</h4>
                    <hr className="hr-style" />
                    <ul className="experience-box-alt__list">
                      <li className="experience-box-alt__item">
                        <img
                          alt="marriott"
                          src="./images/marriottbetter.png"
                          className="experience-box-alt__icon"
                        ></img>
                        <p className="experience-box__captions">
                          Marriott International - Assistant Director of Finance
                          | 3 years of service
                        </p>
                      </li>
                      <li className="experience-box-alt__item">
                        <img
                          alt="vail"
                          src="./images/vail.png"
                          className="experience-box-alt__icon"
                        ></img>
                        <p className="experience-box__captions">
                          Vail Resorts - Area Assistant Director of Finance | 1
                          year of service
                        </p>
                      </li>
                      <li className="experience-box-alt__item">
                        <img
                          alt="rhino-consulting"
                          src="./images/circle-cropped.png"
                          className="experience-box-alt__icon"
                        ></img>
                        <p className="experience-box__captions">
                          Rhino Consulting LLC - Owner
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="experience-box-alt">
                    <h4 className="heading-tertiary mb-5">Education</h4>
                    <hr className="hr-style" />
                    <ul className="experience-box-alt__list">
                      <li className="experience-box-alt__item">
                        <img
                          alt="lewagon"
                          src="./images/lewagon.png"
                          className="experience-box-alt__icon"
                        ></img>
                        <p className="experience-box__captions">
                          Le Wagon - Full Stack Web Development Bootcamp
                        </p>
                      </li>

                      <li className="experience-box-alt__item">
                        <img
                          alt="udemy"
                          src="./images/udemy.png"
                          className="experience-box-alt__icon"
                        ></img>
                        <p className="experience-box__captions">
                          Udemy -2020 Full Stack Bootcamp | Complete JavaScript
                          Course 2020 | MERN Stack | Learn to Code with Ruby
                        </p>
                      </li>
                      <li className="experience-box-alt__item">
                        <img
                          alt="CU-Boulder"
                          src="./images/Colorado_Buffaloes_logo.png"
                          className="experience-box-alt__icon"
                        ></img>
                        <p className="experience-box__captions mb-5">
                          University of Colorado, Leeds School of Business - BS
                          Finance
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <button className="btn btn-hovergrey">
                  <a href="https://www.linkedin.com/in/jamiesonreinhard/">
                    <img
                      alt="linkedin"
                      src="./icons/linkedin.svg"
                      className="social-icon"
                    ></img>
                    <span className="btn-text">Find me on LinkedIn</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
