import React from "react";
import Banner from "../components/layout/Banner";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Advertisement from "../components/layout/Advertisement";
import Newarrivel from "../components/layout/Newarrivel";
import Bestseller from "../components/layout/Bestseller";
import AdvertisementSingle from "../components/layout/AdvertisementSingle";
import Offers from "../components/layout/Offers";

export default function home() {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertisement />
      <Newarrivel />
      <Bestseller />
      <AdvertisementSingle />
      <Offers />
    </>
  );
}
