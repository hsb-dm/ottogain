import { useTranslation } from "react-i18next";

import Navbar from "../navbar";

import excellencesMainImg from "../../assets/home/excellences-main.webp";
import hero from "../../assets/about-us/hero.webp";

import "../../i18n";
import ThemeProvider from "../theme-provider";

export default function AboutUsHero() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Navbar />

      <header className="flex flex-col justify-center items-center bg-hero bg-cover bg-center">
        <section className="flex flex-col items-start px-6 lg:px-[100px] py-12 lg:py-24 text-white">
          <div className="gap-5 grid lg:grid-cols-2">
            <div className="flex flex-col gap-5 mt-12 pl-4 lg:pl-0 max-w-[450px]">
              <div>
                <div className="flex justify-center lg:justify-start items-center w-full">
                  <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-sm">
                    About Us
                  </div>
                </div>

                <h1 className="mt-3 max-w-[470px] font-black text-[2.5rem] text-white lg:text-[3.5rem] lg:text-left text-center">
                  {t("aboutUsHero.h1")}
                </h1>
              </div>

              <p className="text-white">{t("aboutUsHero.p")}</p>
            </div>

            <img src={hero.src} className="max-h-[650px]" />
          </div>
        </section>
      </header>
    </ThemeProvider>
  );
}
