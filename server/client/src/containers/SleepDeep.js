import React, { Component } from 'react'
import Hero from "../components/hero/hero"

export default class SleepDeep extends Component {
  render() {
    return (
      <div>
         <Hero
          videosrc="https://pixabay.com/videos/download/video-24216_medium.mp4"
          h1="SleepDeep"
          h2="Whether luxurious, comfortable or just exciting. You choose."
        />
      </div>
    )
  }
}