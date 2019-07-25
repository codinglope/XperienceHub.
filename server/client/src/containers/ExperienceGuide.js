import React, { Component } from 'react'
import Hero from "../components/hero/hero";


export default class ExperienceGuide extends Component {
  render() {
    return (
      <div>
         <Hero
          videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
          h1="Experience the new."
          h2="Guide yourself to the most thrilling and calming places on earth."
         
        />
      </div>
    )
  }
}
