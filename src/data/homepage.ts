import { Homepage } from "@/helpers/types";

export const HomepageData: Homepage = {
  banner: {
    id: "banner",
    slogan: "Can Blockchain Save Cultural Heritage?",
    image: {
      src: "https://res.cloudinary.com/droheqpxn/image/upload/v1654553001/hefore/homepage4_de1x8h.png",
      alt: "Banner Image",
    },
    buttons: [
      {
        id: 1,
        text: "Explore",
        href: "/explore",
        variant: "banner_button--pink",
      },
      {
        id: 2,
        text: "Create",
        href: "/create",
        variant: "banner_button--white",
      },
    ],
  },
  banner2: {
    id: "banner2",
    headline: "Create and sell your NFTs",
    image: {
      src: "https://res.cloudinary.com/droheqpxn/image/upload/v1654568169/hefore/homepage10_kzt1yn.png",
      alt: "Banner Image",
    },
    content:
      "By making drawings of lost historical places, you can both contribute to the cultural heritage and earn MATIC.",
    buttons: [
      {
        id: 1,
        text: "Create",
        href: "/create",
        variant: "banner2_button--pink",
      },
    ],
  },
  banner3: {
    id: "banner3",
    headline: "Buy NFTs and create your portfolio",
    content:
      "By making drawings of lost historical places, you can both contribute to the cultural heritage and earn MATIC.",
    image: {
      src: "https://res.cloudinary.com/droheqpxn/image/upload/v1654644782/hefore/Frame_47_skwlqk.png",
      alt: "Banner Grid Image",
    },
    buttons: [
      {
        id: 1,
        text: "Marketplace",
        href: "/marketplace",
        variant: "banner2_button--pink",
      },
    ],
  },
  banner4: {
    id: "banner4",
    headline: "Buy NFTs and create your portfolio",
    content:
      "By making drawings of lost historical places, you can both contribute to the cultural heritage and earn MATIC.",
    image: {
      src: "https://res.cloudinary.com/droheqpxn/image/upload/v1655342900/hefore/Frame44_zko4g9.png",
      alt: "Banner Grid Image",
    },
    buttons: [
      {
        id: 1,
        text: "Marketplace",
        href: "/marketplace",
        variant: "banner2_button--pink",
      },
    ],
  },
  banner5: {
    id: "banner5",
    headline: "Want to learn more about Lost Worlds? Read our Whitepaper",
    buttons: [
      {
        id: 1,
        text: "Whitepaper",
        href: "/whitepaper",
        variant: "banner2_button--pink",
      },
    ],
  },
};
