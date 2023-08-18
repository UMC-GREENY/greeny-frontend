import React, { useEffect, useState, useRef } from "react";

//components
import MainLandigPicture from "./Home.main.landing.picture";
import MainItem from "./Home.main.item";


function Home() {
	
	return (
		<>
			<MainLandigPicture></MainLandigPicture>
			<MainItem></MainItem>
		</>
	);
}

export default Home;
