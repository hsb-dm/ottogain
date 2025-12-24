import { useTranslation } from "react-i18next";

import Navbar from "../navbar";
import "../../i18n";
import ThemeProvider from "../theme-provider";

export default function ContactUsHero() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Navbar />

      <header className="flex flex-col justify-center items-center bg-hero bg-cover bg-center min-h-[600px]">
        <section className="flex flex-col justify-between items-center gap-4 mx-auto px-6 py-24 text-white container">
          <div className="flex justify-center items-center w-full">
            <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-sm">
              Our Contact
            </div>
          </div>

          <h1 className="max-w-[1200px] font-black text-white lg:text-[3.5rem] text-3xl text-center">
            {t("contactUsHero.h1")}
          </h1>

          <p className="max-w-[635px] text-white/90 text-sm lg:text-xl text-center">
            {t("contactUsHero.p")}
          </p>
        </section>
      </header>
    </ThemeProvider>
  );
}
