import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Home from "../../image/home.jpg";
import sorting from "../../image/sorting.png";
import todo from "../../image/todo.png";
import Yarr from "../../image/yarr.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="projects">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Home} alt="" />
          <span
            className="text"
            style={{
              paddingTop: "20px",
              fontSize: "30px",
              color: darkMode ? "white" : "",
            }}
          >
            College Event management
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sorting} alt="" />
          <span
            className="text"
            style={{
              paddingTop: "20px",
              fontSize: "30px",
              color: darkMode ? "white" : "",
            }}
          >
            Sorting Visualizer
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Yarr} alt="" />
          <span
            className="text"
            style={{
              paddingTop: "20px",
              fontSize: "30px",
              color: darkMode ? "white" : "",
            }}
          >
            Yarr-A Virtual Friend
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={todo} alt="" />
          <span
            className="text"
            style={{
              paddingTop: "20px",
              fontSize: "30px",
              color: darkMode ? "white" : "",
            }}
          >
            React To-Do list
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
