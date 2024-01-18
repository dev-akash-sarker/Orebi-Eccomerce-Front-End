import React from "react";
import Container from "./Container";
import Headings from "./Heading";
// eslint-disable-next-line no-unused-vars
import Flex from "./Flex";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function OrebiNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={
          className +
          " absolute text-black top-[37%] -translate-y-1/2 right-7 z-20 w-16 h-16 rounded-full"
        }
        style={{
          ...style,
          display: "block",
          background: "rgba(0,0,0,.20)",
          color: "#fff",
        }}
        onClick={onClick}
      >
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaLongArrowAltRight fontSize={33} />
        </div>
      </div>
    </>
  );
}
function OrebiPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={
          className +
          " absolute text-black top-[37%] -translate-y-1/2 left-0 z-20 w-16 h-16 rounded-full"
        }
        style={{
          ...style,
          display: "block",
          background: "rgba(0,0,0,.20)",
          color: "#fff",
        }}
        onClick={onClick}
      >
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaLongArrowAltLeft fontSize={33} />
        </div>
      </div>
    </>
  );
}

export default function Newarrivel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <OrebiNextArrow />,
    prevArrow: <OrebiPrevArrow />,
  };
  return (
    <>
      <div className="mt-8">
        <Container>
          <Headings title="New Arrivals" />
          <Slider className="gap-10 md:gap-x-10" {...settings}>
            <div className="sm:max-w-[300px]  md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={false}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="Black"
              />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={false}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="Black"
              />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={false}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="Black"
              />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={false}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="Black"
              />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={false}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="Black"
              />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={false}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="Black"
              />
            </div>
          </Slider>

          {/* <Flex className="sm:flex sm:max-md:flex-wrap sm:max-md:justify-between md:gap-x-10 ">
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={false}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="Black"
              />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={true}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="Black"
              />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={false}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
                prouctcolor="yellow"
              />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src="./assets/cap.png"
                badge={true}
                productname="Basic Crew Neck Tee"
                productprice="40.50"
              />
            </div>
          </Flex> */}
        </Container>
      </div>
    </>
  );
}
