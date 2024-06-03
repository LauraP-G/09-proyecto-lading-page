import React from "react";


const Card = (cardProp) => {
  

	return (
    
        <div className="card m-1 border">   
              <img src={cardProp.image} className="card-img-top w-100" alt="{cardProp.title}"/>
              <div className="card-img-top w-100">
                    <h5 className="card-title  text-center">{cardProp.title}</h5>
                    <p className="card-text  text-center">{cardProp.desciption}</p>
                </div>
                <div className="w-100 p-2 d-flex justify-content-center bg-light mt-auto">
                    <a href="#" className="btn btn-primary  text-center">Find Out More</a>
                </div>
        </div>
      
    );
};

export default Card;