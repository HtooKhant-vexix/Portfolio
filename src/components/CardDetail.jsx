import React from "react";
import nftLogo from "../assets/logo2.png";
import img from "../assets/62d530867556588cd0f37242_hero-bg.webp";
const CardDetail = [
  {
    id: 1,
    title: "NFT Marketplace",
    desc: "Buy and sell digital art NFT collection. Everything you need to build, host, scale amazing dapps free by creating account",
    img: (
      <img
        src={img}
        alt="err"
        className="object-cover hover:scale-105 duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: <img src={nftLogo} alt="err" className="p-2 ps-3 " />,
  },
];

export default CardDetail;
