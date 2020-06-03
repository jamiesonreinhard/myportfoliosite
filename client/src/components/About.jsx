import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="section-about">
      <div id="about"/>
       
       <div className="section-about__heading">
              <h1 className="heading-primary__huge">developer</h1>
            </div>

        <div className="row">
          
          <div className="col-lg-6 col-md-12">
         
            <div className="about-box">
            
              <h3 className="heading-tertiary mb-5">Why Coding?</h3>
              <p className="about-box__text">
              In the months prior to beginning my coding journey, a good bit of soul searching resulted in the conclusion that I needed more creativity in my career. While my prior profession provided stability and growth, it just wasn't all that exciting. Coding is a gateway to a world full of many possibilities, and an opportunity to be challenged and learn every day. I'm a visual person with a passion for design, and I can't wait to bring my skills to any interesting projects out there. <br /> <br />Equally important, coding opens up so many alternate avenues in life. My interests in travel and work-life balance drew me to software development because of the possibility of remote work, automation, and simply living and thinking outside the box.              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
           
            <div className="about-box">
                {/* <img src="./images/skiing.jpg" className="about-box-img__1"></img> */}
                <img alt="golf" src="./images/golf.jpg" className="about-box-img__2"></img>
              <h3 className="heading-tertiary mb-5">Lifestyle</h3>
              <p className="about-box__text">
                Life is all about what you do, why you do it, and who you do it with. We're blessed with a short time to enjoy all that our little universe has to offer, and we have to make the best of it! <br /> <br /> I'm a believer that one key to a good life is to be a creater before you are a consumer. Humans thrive on accomplishment, recognition, and on proving to themselves that they can always go a little bit further. I look forward to using coding as a vehicle to create, and to continue experiencing all the wonders of life through a new lens.  <br /><br /> I personally thrive on skiing, travelling, exercise, and sharing good times with good friends.
              </p>
            </div>
          </div>
        </div>
        <div className="arrow">
          <a className="arrow__style" href="#resume">
          <img alt ="arrow" className="arrow" src="./icons/icons8-expand-arrow-96.png"></img>
          </a>
        </div>
      </div>
    );
  }
}
