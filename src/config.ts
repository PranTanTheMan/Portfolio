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
  url: "",
  image: "/logo.png",
  tags: [
    "nextjs",
    "typescript",
    "chakraui",
    "google analytics",
    "eslint",
    "jest",
    "styled components",
    "icons",
  ],
};

export { GA_TRACKING_ID, META };
