import React from "react";
import "./Quotes.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profile1 from "../../image/profile1.jpg";
import profile2 from "../../image/profile2.jpg";
import profile3 from "../../image/profile3.jpg";
import profile4 from "../../image/profile4.jpg";
function Quotes() {
  const quotes = [
    {
      img: profile3,
      text: "Logic will get you from A to B, Imagination will take you Everywhere..... - Albert Einstein",
    },
    {
      img: profile1,
      text: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. - Steve Jobss",
    },
    {
      img: profile2,
      text: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. - Bill Gates ",
    },
    {
      img: profile4,
      text: "Take the stones people throw at you and use them to build a monument.... - Ratan Tata",
    },
  ];
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Quotes that </span>
        <span>inspire </span>
        <span>me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {quotes.map((quote, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={quote.img} alt="" />
                <span>{quote.text}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Quotes;
