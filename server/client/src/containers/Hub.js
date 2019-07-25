import React, { Component } from 'react'
import Hero from "../components/hero/hero";


export default class Hub extends Component {
  render() {
    return (
      <div>
         <Hero
          videosrc="https://pixabay.com/videos/download/video-24216_medium.mp4"
          h1="ExperienceHub."
          h2="This is the time to make changes."
          h3="Changing perspectives. In your life. Now."
        />
      </div>
    )
  }
}