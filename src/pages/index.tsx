import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import Hero from "@components/hero";
import About from "@components/about";
import Work from "@components/work";
import Experience from "@components/experience";
import Contact from "@components/contact";
import Header from "@components/header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a delay of 2 seconds before setting isLoading to false
    const delay = 1500;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <HashLoader size={"100px"} color={"#ffed29"} loading={isLoading} />
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Work />
          <Experience />
          <Contact />
        </>
      )}
    </div>
  );
}
