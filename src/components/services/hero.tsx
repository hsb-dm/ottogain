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
    document.title = t("serviceHero.title");
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <Navbar />

      <header className="min-h-[20rem] w-screen flex items-center bg-white relative bg-hero-service">
        <div className="container mx-auto grid items-center max-w-[1024px]">
          <div className="text-center">
            <Typography
              variant="h1"
              className="leading-tight text-white text-[2.5rem] lg:text-[3.5rem]"
            >
              {t("serviceHero.h1")}
            </Typography>

            <div className="flex justify-center mt-3 lg:mt-4">
              <div className="flex justify-center text-white font-normal text-xs items-center border rounded-full border-amber-700 px-2 py-0.5 lg:py-1.5">
                <a href="/" className="hover:underline">
                  {t("nav.home")}
                </a>

                <span className="text-sm mx-2">{">"}</span>

                <span>{t("nav.service")}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 py-12 bg-black lg:px-[6.25rem] lg:pt-[6.25rem] lg:pb-[3.125rem]">
        <article
          style={{
            background:
              "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
          }}
          className="py-[2.5rem] px-[1.6rem] rounded-[20px] lg:rounded-[40px] lg:pt-[3.5rem] lg:pb-[4.7rem] lg:px-[4.5rem]"
        >
          <img src={offerImg.src} className="lg:hidden" />
          <img src={offerImgPc.src} className="hidden lg:block lg:w-full" />

          <div className="mt-[1.5rem] lg:mt-[3.5rem]">
            <p className="text-[1.25rem] font-semibold lg:text-3xl">
              {t("serviceHero.p")}
            </p>
          </div>
        </article>
      </section>
    </ThemeProvider>
  );
}

export default Hero;
