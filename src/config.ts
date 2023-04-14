// google analytics measurement id
const GA_TRACKING_ID = "";

type MetaType = {
  title: string;
  lang: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
};

const META: MetaType = {
  title: "Pranith's Portfolio",
  lang: "en-us",
  description: "Portfolio created by Pranith Molakalapalli ",
  url: "https://www.prani.tech",
  image: "/PortfolioBanner.svg",
  tags: [
    "nextjs",
    "typescript",
    "chakraui",
    "google analytics",
    "eslint",
    "jest",
    "styled components",
    "icons",
    "react",
    "portfolio",
    "pranith",
    "molakalapalli",
  ],
};

export { GA_TRACKING_ID, META };
