import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-Trust%20Marker.jpg"
        alt="label"
        width={"100%"}
        style={{ marginTop: "30px" }}
      />
    </div>
  );
};

export default Home;
