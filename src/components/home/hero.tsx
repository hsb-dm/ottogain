import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { useTranslation } from "react-i18next";

import heroIllustration1 from "../../assets/home/hero-illustration1.webp";
import heroIllustration2 from "../../assets/home/hero-illustration2.webp";
import heroIllustration3 from "../../assets/home/hero-illustration3.webp";

export function Hero() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Navbar />

      <header className="bg-hero w-screen h-full min-h-[600px]">
        <div className="relative flex flex-col place-items-center mx-auto px-8 lg:px-12 pt-8 lg:pt-12 pb-0 container">
          <div className="flex place-items-center">
            <img
              src={heroIllustration1.src}
              className="hidden lg:block -mb-64 w-[336px] h-[324px]"
            />

            <div className="items-center grid mx-auto">
              <div className="flex justify-center items-center w-full">
                <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-sm">
                  OTTOGAIN
                </div>
              </div>

              <Typography
                variant="h1"
                className="mt-5 font-black text-white text-3xl lg:text-5xl text-center leading-tight"
              >
                {t("hero.h1")}
              </Typography>

              <Typography
                variant="p"
                className="mt-4 text-white text-sm lg:text-xl text-center leading-tight"
              >
                {t("hero.p")}
              </Typography>
            </div>

            <img
              src={heroIllustration2.src}
              className="hidden lg:block w-[364px] h-[334px]"
            />
          </div>

          <Button className="bg-gradient-to-r from-[#C47EFC] to-[#0F17C3] mt-5 font-semibold normal-case">
            {t("hero.ctaButton")}
          </Button>

          <img
            src={heroIllustration3.src}
            className="mt-6 lg:mt-12 w-[954px]"
          />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default Hero;
