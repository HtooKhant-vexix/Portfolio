import React from "react";
import nftLogo from "../../assets/NftLogo.jpg";
import nftDb from "../../assets/nftDb.png";
import nft from "../../assets/nft.png";
import dashly from "../../assets/dashly.png";
import dashlylogo from "../../assets/dashydash.jpg";
import nftmak from "../../assets/nftmak.jpg";
import contact from "../../assets/contactapp.png";
import gcLogo from "../../assets/gcLogo.png";
import api from "../../assets/api.png";
import foodie from "../../assets/foodie.png";
import foodieIcon from "../../assets/ficon.png";
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
    logo: <img src={nftLogo} alt="err" className="p-2" />,
    dl: 0,
    git: "https://github.com/HtooKhant-vexix/NFT-Market",
    link: "https://nft-market-cyan.vercel.app",
  },
  {
    id: 2,
    title: "NFT-Market Dashboard",
    desc: "Explore admin dashboard for Customize, secure, and integrate seamlessly for efficient admin management. ",
    img: (
      <img
        src={nftDb}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: <img src={nftmak} alt="err" className="p-2 " />,
    dl: 0.2,
    git: "https://github.com/HtooKhant-vexix/NFT-Marketplace-Dashboard",
    link: "https://nft-marketplace-dashboard-red.vercel.app",
  },
  {
    id: 3,
    title: "Dashly Dashboard",
    desc: "Optimize your e-commerce business with our intuitive dashboard. Effortlessly manage products, order and customer insights for data-driven dessions.",
    img: (
      <img
        src={dashly}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: <img src={dashlylogo} alt="err" className="p-2 " />,
    dl: 0.4,
    git: "https://github.com/HtooKhant-vexix/Dashly-Dashboad",
    link: "https://dashly-dashboad.vercel.app",
  },
  {
    id: 4,
    title: "Contact Clone",
    desc: "Google Contacts is your online address book, integrated with Gmail, Calendar, Drive, and other Google products.",
    img: (
      <img
        src={contact}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    dl: 0,
    logo: <img src={gcLogo} alt="err" className="p-2 " />,
    git: "https://github.com/HtooKhant-vexix/Google-Contact-clone",
    link: "https://google-contact-clone.vercel.app",
    api: true,
  },
  {
    id: 5,
    title: "Api Mini Pj",
    desc: "CRUD practice project with  API integration and state management with useReducer hook.",
    img: (
      <img
        src={api}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: false,
    dl: 0.2,
    git: "https://github.com/HtooKhant-vexix/react-ecommerce.git",
    link: "https://famous-seahorse-caaef7.netlify.app/",
    api: true,
  },
  {
    id: 6,
    title: "Foodie",
    desc: "Foodie website is a simple front-end project that using Html,Css,Javascript, Bootstrap and Wow.js",
    img: (
      <img
        src={foodie}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    dl: 0.4,
    logo: <img src={foodieIcon} alt="err" className="p-2 " />,
    git: "https://github.com/HtooKhant-vexix/Foodie.git",
    link: "https://lambent-halva-987309.netlify.app/",
    api: false,
  },
  {
    id: 7,
    title: "Foodie",
    desc: "Foodie website is a simple front-end project that using Html,Css,Javascript, Bootstrap and Wow.js",
    img: (
      <img
        src={foodie}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    dl: 0.4,
    logo: <img src={foodieIcon} alt="err" className="p-2 " />,
    git: "https://github.com/HtooKhant-vexix/Foodie.git",
    link: "https://lambent-halva-987309.netlify.app/",
    api: false,
  },
];

export default CardDetail;
