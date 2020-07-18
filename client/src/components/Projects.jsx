import React, { Component } from "react";

export default class Projects extends Component {

  
  
  render() {

    var myProjects = {
      portfolio: {
        imgName: 'jamo-project',
        alt: 'jamoproject',
        url: 'https://jmr-portfolio-site.herokuapp.com/',
        caption: 'My Portfolio'
      },
      mindUnravelled: {
        imgName: 'mindd-unravelled',
        alt: 'mindunravelled',
        url: 'https://jmr-portfolio-site.herokuapp.com/',
        caption: 'A Mind Unravelled',
      },
      hhsFantasy: {
        imgName: 'FFL_site',
        alt: 'FFL',
        url: 'https://jmr-portfolio-site.herokuapp.com/',
        caption: 'HHS Fantasy'
      }
    }
    
    return (
      <div className="section-projects">
        <div id="projects" />
        <div className="section-projects__heading">
          <h1 className="heading-primary__huge-2">Projects</h1>
          
        </div>
        
            <div className="row u-margin-bottom-medium">
              {Object.keys(myProjects).map(key => {
                const project = myProjects[key]
                return <div className="col-lg-4 col-md-6">
            <div className="project-circle">
                <img className="project-circle__image" alt={project.alt} src={'./images/' + project.imgName + '.png'}></img>
                <div className="project-circle__caption">
                <h4 className="project-circle__caption-text">{project.caption}</h4>
                <a href={project.url}><button className="btn btn-small btn-hovergrey">View Site >></button></a>
                </div>
            </div>
          </div>
              })}
            </div>
        
      </div>
    );
  }
}
