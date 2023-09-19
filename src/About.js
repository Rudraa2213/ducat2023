import React, { Fragment } from "react";
import { BsFillBalloonFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function Abc() {
  
  return (
    //navbar navbar-expand-lg bd-navbar sticky-top
    <nav className="sticky-top bg-opacity-75" style={{height:"10vh",fontFamily:'Poppins ,sans-serift',color:'#ffffff',backgroundColor:"#1c1c70"}}>
  <div className="container-fluid">
    <div className="fs-4" style={{paddingTop:'1rem',paddingLeft:'10rem'}}>
    <a className="navbar-brand" href="/"><BsFillBalloonFill/>Rudraa's Portfolio</a>
    </div>
    <div className="container-fluid mr-3">
    <ul style={{display:'flex',listStyle:'none',justifyContent:'space-around',marginLeft:'50rem',marginTop:'-1.5rem'}}>
      <li><a className="navbar-brand" href="/">Home</a></li>
      <li><a className="navbar-brand" href="/">About</a></li>
      <li><a className="navbar-brand" href="/">Service</a></li>
      <li><a className="navbar-brand" href="/">Project</a></li>
      <li><a className="navbar-brand" href="/">Contact Me</a></li>
    </ul>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>

</nav>
  );
}

export default Abc

export function Abcd(){
    return "Abcd Is Called Abcd is name export function"
}
export function Xyz(){
    return <h1>Heading One</h1>;
}
export function Contact(){

  const a=50;
  const b=70;
  return <Fragment>
    <p style={{color:"orange",fontSize:`${a}px`}}>Hello This is paragraph</p>
    <h1 style={{color:'red',backgroundColor:'blue'}}>All Good</h1>

    {b ? "ok":"no"}
  </Fragment>;
}

