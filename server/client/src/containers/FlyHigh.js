import React, { Component } from "react";
import Hero from "../components/hero/hero";
import FlightsForm from "../components/Flights/FlightsForm";
import FlightsList from "../components/Flights/FlightsList";

export default class FlyHigh extends Component {
  state = {
    flightsDataInbound: [],
    flightsDataOutbound: []
  };

  refreshflightsList = response => {
      this.setState ({
        flightsDataInbound: response.flightsDataInbound,
        flightsDataOutbound: response.flightsDataOutbound
      }) 
  };

  render() {
    return (
      <div>
        <Hero
          videosrc="https://pixabay.com/videos/download/video-10816_medium.mp4"
          h1="Change perceptions."
          h2="Choose where. Fly high."
        />

        <FlightsForm refreshflightsList={this.refreshflightsList} />
        <FlightsList inboundFlights={this.state.flightsDataInbound} outboundFlights={this.state.flightsDataOutbound}/>
      </div>
    );
  }
}
