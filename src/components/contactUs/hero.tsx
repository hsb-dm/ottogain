import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import headphoneImg from "../../assets/contact-us/headphone.png";

import { useTranslation } from "react-i18next";
import "../../i18n";
import { useEffect } from "react";

export function Hero() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("contactHero.title");
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <Navbar />

      <header className="min-h-[20rem] w-screen flex items-center bg-white relative bg-hero-contact-us">
        <div className="container mx-auto grid items-center max-w-[1024px]">
          <div className="text-center">
            <Typography
              variant="h1"
              className="leading-tight text-white text-[2.5rem] lg:text-[3.5rem]"
            >
              {t("contactHero.h1")}
            </Typography>

            <div className="flex justify-center mt-3 lg:mt-4">
              <div className="flex justify-center text-white font-normal text-xs items-center border rounded-full border-amber-700 px-2 py-0.5 lg:py-1.5">
                <a href="/" className="hover:underline">
                  {t("nav.home")}
                </a>

                <span className="text-sm mx-2">{">"}</span>

                <span>{t("nav.contactUs")}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
        }}
        className="px-[1.9rem] py-[3.2rem] flex flex-col items-center lg:px-[6.25rem] lg:flex-row-reverse lg:justify-center"
      >
        <img src={headphoneImg.src} className="w-[259px] lg:mr-[6.25rem]" />

        <p className="text-center font-semibold text-xl lg:text-3xl lg:text-left">
          {t("contactHero.p")}
        </p>
      </section>
    </ThemeProvider>
  );
}

export default Hero;
