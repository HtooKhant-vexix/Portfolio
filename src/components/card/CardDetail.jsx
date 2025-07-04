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
import book from "../../assets/book.jpg";
import bookcv from "../../assets/bookcv.png";
import pos from "../../assets/pos.png";

const CardDetail = [
  {
    id: 8,
    title: "POS System",
    desc: "A POS website streamlines sales operations by managing inventory, creating receipts, and analyzing sales data.",
    img: (
      <img
        src={pos}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    // logo: <img src={pos} alt="err" className="p-2" />,
    dl: 0,
    git: "https://github.com/HeinZarNe/workshop-pos",
    // git: "https://github.com/HtooKhant-vexix/NFT-Market",
    link: "https://teamf-pos.netlify.app/",
    api: true,
  },
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
    dl: 0.2,
    git: "https://github.com/liansun96/NFT-Marketplace-Team",
    // git: "https://github.com/HtooKhant-vexix/NFT-Market",
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
    dl: 0.4,
    // git: "https://github.com/HtooKhant-vexix/NFT-Marketplace-Dashboard",
    git: "https://github.com/liansun96/NFT-Marketplace-Dashboard",
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
    dl: 0,
    // git: "https://github.com/HtooKhant-vexix/Dashly-Dashboad",
    git: "https://github.com/chanmyae-aung/dashly-dashboard-team-i",
    link: "https://dashly-dashboad.vercel.app",
  },
  {
    id: 5,
    title: "Api Mini Pj",
    desc: "CRUD practice project with  API integration and state management with Redux tookit.",
    img: (
      <img
        src={api}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: false,
    dl: 0.2,
    git: "https://github.com/HtooKhant-vexix/rtk-pra",
    link: "https://rtk-pra.vercel.app/",
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
    id: 4,
    title: "Bookmark",
    desc: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly.Foodie website is a simple front-end project that using Html,Css,Javascript, Bootstrap and Wow.js",
    img: (
      <img
        src={bookcv}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    dl: 0,
    logo: <img src={book} alt="err" className="p-2 flex mt-7" />,
    git: "https://github.com/HtooKhant-vexix/Bookmark",
    link: "https://6504b4a425bea321149fd34e--bright-faun-75d155.netlify.app",
    api: false,
  },
  {
    id: 7,
    title: "Contact Clone",
    desc: "Google Contacts is your online address book, integrated with Gmail, Calendar, Drive, and other Google products.",
    img: (
      <img
        src={contact}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    dl: 0.2,
    logo: <img src={gcLogo} alt="err" className="p-2 " />,
    // git: "https://github.com/HtooKhant-vexix/Google-Contact-clone",
    git: "https://github.com/Hk-Ko/contact-app-clone",
    // link: "https://google-contact-clone.vercel.app",
    link: "https://contact-app-clone-b485.vercel.app",
    api: true,
  },
];

// NOTE: If this array grows large, consider using virtualization in CardList for performance.

export default CardDetail;
