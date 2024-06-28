import React from "react";
import List from "./todo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<List />
		</div>
	);
};

export default Home;
