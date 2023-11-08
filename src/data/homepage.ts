import { Homepage, responsiveBreakpoints } from "@/helpers/types";

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
      dataSet: [
        { width: 350, height: 220, screen: responsiveBreakpoints.sm },
        { width: 385, height: 242, screen: responsiveBreakpoints.md },
        { width: 420, height: 264, screen: responsiveBreakpoints.lg },
        { width: 700, height: 440, screen: responsiveBreakpoints.xl },
        { width: 700, height: 440, screen: responsiveBreakpoints.xxl },
        { width: 700, height: 440, screen: responsiveBreakpoints.xxl },
      ],
    },
    content:
      "By making drawings of lost historical places, you can both contribute to the cultural heritage and earn MATIC.",
    buttons: [
      {
        id: 1,
        text: "Create",
        href: "/create",
        variant: "bannerPoly_button--pink",
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
      dataSet: [
        { width: 350, height: 300, screen: responsiveBreakpoints.sm },
        { width: 350, height: 300, screen: responsiveBreakpoints.md },
        { width: 420, height: 360, screen: responsiveBreakpoints.lg },
        { width: 490, height: 420, screen: responsiveBreakpoints.xl },
        { width: 560, height: 480, screen: responsiveBreakpoints.xxl },
        { width: 660, height: 580, screen: responsiveBreakpoints.xxl },
      ],
    },
    buttons: [
      {
        id: 1,
        text: "Marketplace",
        href: "/marketplace",
        variant: "bannerPoly_button--pink",
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
      dataSet: [
        { width: 350, height: 700, screen: responsiveBreakpoints.sm },
        { width: 250, height: 500, screen: responsiveBreakpoints.md },
        { width: 280, height: 560, screen: responsiveBreakpoints.lg },
        { width: 315, height: 630, screen: responsiveBreakpoints.xl },
        { width: 350, height: 700, screen: responsiveBreakpoints.xxl },
        { width: 350, height: 700, screen: responsiveBreakpoints.xxl },
      ],
    },
    buttons: [
      {
        id: 1,
        text: "Marketplace",
        href: "/marketplace",
        variant: "bannerPoly_button--pink",
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
        variant: "bannerPoly_button--pink",
      },
    ],
  },
};
