import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import offerImg from "../../assets/services/offer.webp";
import offerImgPc from "../../assets/services/offer-pc.webp";

import { useTranslation } from "react-i18next";
import "../../i18n";
import { useEffect } from "react";

export function Hero() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("aboutHero.title");
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <Navbar />

      <header className="min-h-[20rem] w-screen flex items-center bg-white relative bg-hero-about-us">
        <div className="container mx-auto grid items-center max-w-[1024px]">
          <div className="text-center">
            <Typography
              variant="h1"
              className="leading-tight text-white text-[2.5rem] lg:text-[3.5rem]"
            >
              {t("aboutHero.h1")}
            </Typography>

            <div className="flex justify-center mt-3 lg:mt-4">
              <div className="flex justify-center text-white font-normal text-xs items-center border rounded-full border-amber-700 px-2 py-0.5 lg:py-1.5">
                <a href="/" className="hover:underline">
                  {t("nav.home")}
                </a>

                <span className="text-sm mx-2">{">"}</span>

                <span>{t("nav.aboutUs")}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default Hero;
