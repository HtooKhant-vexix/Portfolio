import React from "react";
import nftLogo from "../../assets/logo2.png";
import nft from "../../assets/nft.png";
const CardDetail = [
  {
    id: 1,
    title: "NFT Marketplace",
    desc: "Buy and sell digital art NFT collection. Everything you need to build, host, scale amazing dapps free by creating account.",
    img: (
      <img
        src={nft}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: <img src={nftLogo} alt="err" className="p-2 ps-3 " />,
    dl: 0,
    git: "https://github.com/HtooKhant-vexix/NFT-Market",
    link: "https://nft-market-cyan.vercel.app",
  },
  {
    id: 1,
    title: "NFT Marketplace",
    desc: "Buy and sell digital art NFT collection. Everything you need to build, host, scale amazing dapps free by creating account",
    img: (
      <img
        src={nft}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: <img src={nftLogo} alt="err" className="p-2 ps-3 " />,
    dl: 2,
  },
  {
    id: 1,
    title: "NFT Marketplace",
    desc: "Buy and sell digital art NFT collection. Everything you need to build, host, scale amazing dapps free by creating account",
    img: (
      <img
        src={nft}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: <img src={nftLogo} alt="err" className="p-2 ps-3 " />,
    dl: 4,
  },
  {
    id: 1,
    title: "NFT Marketplace",
    desc: "Buy and sell digital art NFT collection. Everything you need to build, host, scale amazing dapps free by creating account",
    img: (
      <img
        src={nft}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: <img src={nftLogo} alt="err" className="p-2 ps-3 " />,
  },
];

export default CardDetail;
