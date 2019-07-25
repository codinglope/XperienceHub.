import React from "react";
//import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

const CustomNavbar = () => {
  return (
    <Navbar className="nav" bg="dark" variant="dark">
      <Navbar.Brand href="/">ExperienceHub.</Navbar.Brand>
      <Navbar.Brand href="/FlyHigh">FlyHigh</Navbar.Brand>
      <Navbar.Brand href="/SleepDeep">SleepDeep</Navbar.Brand>
      <Navbar.Brand href="/ExperienceGuide">ExperienceGuide</Navbar.Brand>
      <Navbar.Brand href="/Signup">Signup</Navbar.Brand>
      <Navbar.Brand href="/Login">Login</Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;
