import React from "react";
const Navbar = () => {
	return (
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar navbar-dark bg-dark">
  <div className="container">
    <a classNameName="navbar-brand bg-dark" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
    
  </div>
</nav>

    );
};


export default Navbar;