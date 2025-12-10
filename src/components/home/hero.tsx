import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import heroArrow from "../../assets/home/hero-arrow.svg";
import { useTranslation } from "react-i18next";

import legalImg1 from "../../assets/home/legal-bappebti.png";
import legalImg2 from "../../assets/home/legal-icdx.png";
import legalImg3 from "../../assets/home/legal-ich.png";
import legalImg4 from "../../assets/home/legal-aspebtindo.png";

export function Hero() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Navbar />

      <header className="h-full w-screen place-items-center bg-white relative px-6 pt-28 pb-0 bg-hero lg:pt-48 lg:px-[100px]">
        <div className="mx-auto grid items-center">
          <Typography
            variant="h1"
            className="leading-tight text-center text-white text-[2.5rem] lg:text-[3.5rem]"
          >
            {t("hero.h1")}
          </Typography>

          <div className="mt-32 flex justify-center">
            <a href="#cta">
              <Button className="flex items-center" variant="text">
                <div className="p-1 border-[1.5px] rounded-full border-white w-[49px] h-[49px] flex justify-center items-end lg:w-[64px] lg:h-[64px]">
                  <img
                    src={heroArrow.src}
                    className="h-[20px] lg:h-[26px] animate-float lg:animate-float-lg"
                  />
                </div>
              </Button>
            </a>
          </div>

          <div className="mt-4 text-white text-center border-t-[1px] border-b-[1px] border-white py-4 lg:flex lg:justify-evenly lg:items-center lg:py-[2.5rem] lg:mt-6">
            <p className="text-sm lg:text-4xl lg:max-w-[212px] lg:text-left">
              {t("hero.legal")}
            </p>

            <div className="flex gap-2 h-6 mt-4 justify-between lg:h-[3rem] lg:gap-[3.125rem] lg:mt-0">
              <img src={legalImg1.src} />
              <img src={legalImg2.src} />
              <img src={legalImg3.src} />
              <img src={legalImg4.src} />
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default Hero;
