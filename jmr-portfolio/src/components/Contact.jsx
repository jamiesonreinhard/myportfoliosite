import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  constructor() {
      super()

      this.state = {
        fullName: "",
        email: "",
        message: "",
        submitted: false
      };
    
      this.handleChange = this.handleChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }
  
  

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      submitted: true
    })

    const { fullName, email, message, submitted } = this.state

    axios({
      method: "POST",
      url:"http://localhost:3001/send",
      data: {
        fullName,
        email,
        message
      }
    }).then((response)=>{
      if (response.data.msg === 'success'){
          this.resetForm()
      }else if(response.data.msg === 'fail'){
          alert("Message failed to send.")
      }
  })
  }

  resetForm(){
    this.setState({
      fullName: "",
        email: "",
        message: "",
        submitted: false
    })
}



  render() {
    const { fullName, submitted } = this.state
    let submitMessage = <h4 className="heading-four">Thanks for submitting, {fullName}</h4>;

    return (
      
      <div className="section-contact">
        <div className="form-box">
        
       
          <form>
            <div className="form-group">
              <label className="form-box__label" htmlFor="name">
                Your Name
              </label>
              <input
                className="form-box__input form-control"
                type="text"
                name="fullName"
                id="name"
                placeholder="Name"
                autoComplete="off"
                value={this.state.fullName}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label className="form-box__label" htmlFor="email">
                Your Email
              </label>
              <input
                name="email"
                className="form-box__input form-control"
                type="text"
                id="email"
                placeholder="Email Address"
                autoComplete="off"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label className="form-box__label" htmlFor="message">
                How can we help each other?
              </label>
              <textarea
                name="message"
                rows="5"
                className="form-box__input form-control"
                type="text"
                id="message"
                placeholder="Your Message"
                autoComplete="off"
                value={this.state.message}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <button
                onClick={(e) => this.onSubmit(e)}
                type="submit"
                className="btn btn-hovergrey"
              >
                Send
              </button>
            </div>
          </form>
          {this.state.submitted && submitMessage}
        </div>
      </div>
    );
  }
}
