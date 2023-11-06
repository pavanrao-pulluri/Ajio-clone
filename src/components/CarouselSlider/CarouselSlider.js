import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./CarouselSlider.css";
import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    title: "latest",
    image:
      "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-27102023-MainBanner-5090-Night-Version.gif",
  },
  {
    id: 2,
    title: "lt-2",
    image:
      "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-06112023-MainBannerDailyChanging-Z1-P6-misschasediffofopinion-flat50.jpg",
  },
  {
    id: 3,
    title: "lt-3",
    image:
      "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04112023-MainBannerDailyChanging-Z1-P2-avaasadnmx-min60.jpg",
  },
  {
    id: 4,
    title: "lt-4",
    image:
      "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04112023-MainBannerDailyChanging-Z1-P6-americaneagleUSPA-upto50.jpg",
  },
];
const CarouselSlider = () => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");
  const [currentPage] = useState(1);
  const [imageslider, setImageSlider] = useState([{}]);
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  // const handlehover = (item) => {
  //   if (loggedInUser) {
  //     navigate(`/videoplayer?videoUrl=${encodeURIComponent(item.video_url)}`);
  //   } else {
  //     navigate("/login");
  //   }
  // };

  return (
    <div className="carousel">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-container"
      >
        {data.map((item) => (
          <Carousel.Item className="carousel-item">
            <img
              // onClick={handlehover(item)}
              src={item.image}
              alt={item.title}
              width="100%"
              // height="500px"
              style={{ objectFit: "contain" }}
            />
            <Carousel.Caption className="carousel-title">
              {/* <Button
                onClick={() => handlehover(item)}
                style={{
                  background: "#8230c6",
                  color: "#fff",
                }}
              >
                Watch
              </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
