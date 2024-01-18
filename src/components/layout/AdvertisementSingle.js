import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Image from "./image";
export default function AdvertisementSingle() {
  const adds = "./assets/Ads_4.png";
  return (
    <>
      <Container>
        <div className="my-32 mt-[130px]">
          <div className="w-full ">
            <Link to="https://www.google.com/" target="_blank">
              <Image imagesrc={adds} alt="advertisement" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
