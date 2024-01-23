import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
export default function Banner() {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "8%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px black solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "10px 0",
              }
        }
      >
        0 {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "2%",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px black solid",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      fontSize: "12px",
                    }
              }
            >
              0 {i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div>
      <Slider className="sliderbanner" {...settings}>
        <Link to="#">
          <div className="w-full">
            <img
              src="./assets/banner/bannerone.png"
              className="w-full"
              alt="bannerone"
            />
          </div>
        </Link>
        <Link to="#">
          <div className="w-full">
            <img
              src="./assets/banner/bannertwo.png"
              className="w-full"
              alt="bannertwo"
            />
          </div>
        </Link>
        <Link to="#">
          <div className="w-full">
            <img
              src="./assets/banner/bannerone.png"
              className="w-full"
              alt="bannerone"
            />
          </div>
        </Link>
      </Slider>
    </div>
  );
}
