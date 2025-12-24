import { useTranslation } from "react-i18next";

import Navbar from "../navbar";
import hero from "../../assets/services/hero.webp";

import "../../i18n";
import ThemeProvider from "../theme-provider";

export default function ServiceHero() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Navbar />

      <header className="flex flex-col justify-center items-center bg-hero bg-cover bg-center min-h-[600px]">
        <section className="flex lg:flex-row flex-col justify-between items-center mx-auto pt-7 text-white container">
          <div className="flex flex-col gap-5 lg:max-w-[450px]">
            <div className="flex justify-center lg:justify-start items-center w-full">
              <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-sm">
                Our Services
              </div>
            </div>

            <h1 className="max-w-[470px] font-black text-[2.5rem] text-white lg:text-[3.5rem] lg:text-left text-center">
              {t("serviceHero.h1")}
            </h1>
          </div>

          <img src={hero.src} className="mt-10 lg:mt-0" />
        </section>
      </header>
    </ThemeProvider>
  );
}
