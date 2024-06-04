import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"

/*import Navbar from "./component/Navbar.jsx";*/

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const seasonsCard=[
		{
		  season: "Spring",
		  text: "Spring brings a burst of life and color. Flowers start to bloom, days get longer, and the weather becomes warmer, inviting us to enjoy nature at its finest.",
		  img: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3ByaW5nfGVufDB8fDB8fHww"
		},
		{
		  season: "Summer",
		  text: "Summer is the season of sun and fun. With long, hot days, it's the perfect time to go to the beach, enjoy outdoor activities, and relax under the bright sun.",
		  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D"
		},
		{
		  season: "Autumn",
		  text: "Autumn paints the landscape in warm, golden hues. Leaves fall from the trees, the weather gets cooler, and it's the ideal season for peaceful walks and reflecting on the passing year.",
		  img: "https://images.unsplash.com/photo-1608363808404-b8c9d969cf42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXV0dW1tfGVufDB8fDB8fHww"
		},
		{
		  season: "Winter",
		  text: "Winter brings a blanket of snow and a festive atmosphere. The days are short and cold, perfect for enjoying a cup of hot chocolate by the fire and celebrating the holidays with family.",
		  img: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D"
		}
	  ];
	  
	return (
		<div>
				<Navbar/>
	
				<Jumbotron/>

				<div className="container card-group mb-5 text-center row-cols-sm-1 row-cols-md-1 row-cols-lg-4 row-cols-xl-4">
					{
					seasonsCard.map((seasonSingle)=> {
						return <Card title={seasonSingle.season} desciption={seasonSingle.text} image={seasonSingle.img}/>
					})}
				</div>
		
				<Footer/>	

		</div>	
	);
};

export default Home;
