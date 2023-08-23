import React from "react";
import nftLogo from "../../assets/NftLogo.jpg";
import nftDb from "../../assets/nftDb.png";
import nft from "../../assets/nft.png";
import dashly from "../../assets/dashly.png";
import dashlylogo from "../../assets/dashydash.jpg";
import nftmak from "../../assets/nftmak.jpg";
import contact from "../../assets/contactapp.png";
import gcLogo from "../../assets/gcLogo.png";
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
    logo: <img src={nftLogo} alt="err" className="p-2 h-[20px] " />,
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
    logo: <img src={gcLogo} alt="err" className="p-2 " />,
    git: "https://github.com/HtooKhant-vexix/Google-Contact-clone",
    link: "https://google-contact-clone.vercel.app",
    api:true
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
    logo: <img src={gcLogo} alt="err" className="p-2 " />,
    git: "https://github.com/HtooKhant-vexix/Google-Contact-clone",
    link: "https://google-contact-clone.vercel.app",
    api:true
  },
  {
    id: 4,
    title: "Contact Contact",
    desc: "Google Contacts is your online address book, integrated with Gmail, Calendar, Drive, and other Google products.",
    img: (
      <img
        src={contact}
        alt="err"
        className="object-cover  duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    logo: <img src={gcLogo} alt="err" className="p-2 " />,
    git: "https://github.com/HtooKhant-vexix/Google-Contact-clone",
    link: "https://google-contact-clone.vercel.app",
    api:true
  },
];

export default CardDetail;
