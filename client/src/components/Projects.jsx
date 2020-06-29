import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div className="section-projects">
        <div id="projects" />
        <div className="section-projects__heading">
          <h1 className="heading-primary__huge-2">Projects</h1>
          
        </div>
        
        <div className="row u-margin-bottom-medium">
        
          <div className="col-lg-4 col-md-6">
            <div className="project-circle">
                <img className="project-circle__image" alt="jamoproject" src="./images/jamo-project.png"></img>
                <div className="project-circle__caption">
                <h4 className="project-circle__caption-text">My Portfolio</h4>
                <a href="https://jmr-portfolio-site.herokuapp.com/"><button className="btn btn-small btn-hovergrey">View Site >></button></a>
                </div>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="project-circle">
                <img className="project-circle__image" src="./images/mindd-unravelled.png" alt="mindunravelled"></img>
                <div className="project-circle__caption">
                <h4 className="project-circle__caption-text">A Mind Unravelled</h4>
                <a href="https://github.com/jamiesonreinhard"><button className="btn btn-small btn-hovergrey">GitHub Pages >></button></a>
                </div>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="project-circle">
                <img className="project-circle__image" src="./images/FFL_site.png" alt="fflsite"></img>
                <div className="project-circle__caption">
                <h4 className="project-circle__caption-text">FFL Social Network</h4>
                <a href="https://github.com/jamiesonreinhard"><button className="btn btn-small btn-hovergrey">GitHub Pages >></button></a>
                </div>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="project-circle">
                <img className="project-circle__image" src="./images/jamo-project.png" alt="jamiesonproject"></img>
                <div className="project-circle__caption">
                <h4 className="project-circle__caption-text">My Portfolio</h4>
                <a href="https://github.com/jamiesonreinhard"><button className="btn btn-small btn-hovergrey">GitHub Pages >></button></a>
                </div>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="project-circle">
                <img className="project-circle__image" src="./images/mindd-unravelled.png" alt="mdunravelled"></img>
                <div className="project-circle__caption">
                <h4 className="project-circle__caption-text">A Mind Unravelled</h4>
                <a href="https://github.com/jamiesonreinhard"><button className="btn btn-small btn-hovergrey">GitHub Pages >></button></a>
                </div>
             
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="project-circle">
                <img className="project-circle__image" src="./images/FFL_site.png" alt="HHSFantasy"></img>
                <div className="project-circle__caption">
                <h4 className="project-circle__caption-text">FFL Social Network</h4>
                <a href="https://github.com/jamiesonreinhard"><button className="btn btn-small btn-hovergrey">GitHub Pages >></button></a>
                </div>
             
            </div>
          </div>
        </div>
        
        {/* <div className="arrow">
          <a className="arrow__style"  href="#contact">
          <img className="arrow" src="./icons/icons8-expand-arrow-96.png" alt="arrow"></img>
          </a>
        </div> */}
        
      </div>
    );
  }
}
