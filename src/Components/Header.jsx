import React from 'react'

function Header() {
  return (
    <div>
      {/* ======= Header ======= */}
<header id="header">
  <div className="container">
    <h1><a href="index.html">Emily Jones</a></h1>
    {/* Uncomment below if you prefer to use an image logo */}
    {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
    <h2>I'm a passionate <span>graphic designer</span> from New York</h2>
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link active" href="header">Home</a></li>
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#resume">Resume</a></li>
        <li><a className="nav-link" href="#services">Services</a></li>
        <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
        <li><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
    <div className="social-links">
      <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
    </div>
  </div>
</header>{/* End Header */}

    </div>
  )
}

export default Header
