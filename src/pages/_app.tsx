import "styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@components/header";
import theme from "@styles/theme";
import { pageview } from "@lib/gtag";
import { META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "@components/footer";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: unknown) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className='cursor'>
        <CustomCursor
          targets={[".link", ".your-css-selector"]}
          customClass='custom-cursor'
          dimensions={50}
          fill='#FFF'
          smoothness={{
            movement: 0.35,
            scale: 0.2,
            opacity: 0.3,
          }}
        />
        <Head>
          <title>{META.title}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
    </>
  );
}
