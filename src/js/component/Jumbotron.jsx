import React from "react";

const Jumbotron = () => {
	return (
    <div className="container" >
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 bg-light col-12">
          <div className="container-fluid py-5 ">
            <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
            <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sunt dolore eligendi aut odit tempora praesentium vel vero facilis debitis! Praesentium incidunt et tempore dicta consectetur maxime autem minus fuga.</p>
            <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
          </div>
        </div>
        </div>
    );
};

export default Jumbotron;