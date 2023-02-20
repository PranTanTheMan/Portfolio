import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import Hero from "@components/hero";
import About from "@components/about";
import Work from "@components/work";
import Experience from "@components/experience";
import Contact from "@components/contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a delay of 2 seconds before setting isLoading to false
    const delay = 2000;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <PuffLoader color={"#ffed29"} loading={isLoading} />
        </div>
      ) : (
        <>
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
