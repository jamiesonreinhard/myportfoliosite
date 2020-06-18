import React, { Component } from 'react'

export default class BackgroundVid extends Component {
    render() {
        return (
            
                <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="/videobg/Stars.mp4" type="video/mp4" />
            Your browser is not supported
          </video>
        </div>
            
        )
    }
}
