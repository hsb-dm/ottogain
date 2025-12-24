import { useTranslation } from "react-i18next";
import "../i18n";

import navLogoImg from "../assets/nav-logo.svg";
import { navListMenuItems } from "./navbar";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1B0A31] text-white text-sm">
      <div className="bg-[#BB7CE4] w-full h-[1px]" />

      <section className="mx-auto px-4 pt-10 pb-16 container">
        <h2 className="font-bold">{t("footer.risk.title1")}</h2>
        <p className="mt-6">{t("footer.risk.content1")}</p>

        <h2 className="mt-12 font-bold">{t("footer.risk.title2")}</h2>
        <p className="mt-6">{t("footer.risk.content2")}</p>
      </section>

      <div className="bg-[#BB7CE4] w-full h-[1px]" />

      <section className="relative mx-auto px-4 pt-0 pb-6 text-white text-sm container">
        <div className="lg:flex lg:justify-between lg:gap-[4.9rem] lg:mt-[2.5rem]">
          <img
            src={navLogoImg.src}
            className="pt-8 lg:pt-0 w-[5.2rem] lg:w-[8.8rem] h-full"
          />

          <nav className="mt-[2.5rem] lg:mt-0 lg:min-w-[100px]">
            <h2 className="font-bold">{t("footer.linksTitle")}</h2>

            <ul className="gap-2 lg:gap-3 grid grid-cols-2 lg:grid-cols-1 mt-[0.7rem]">
              {navListMenuItems.map(({ title, href }) => (
                <a href={href} key={title} className="cursor-default">
                  <div className="inline hover:underline cursor-pointer">
                    {t(title)}
                  </div>
                </a>
              ))}
            </ul>
          </nav>

          <div className="mt-12 lg:mt-0">
            <h2 className="font-bold">{t("footer.contactUs")}</h2>

            <div className="gap-2 lg:gap-3 grid grid-cols-1 mt-[0.7rem]">
              <p className="max-w-[280px]">{t("footer.address")}</p>
              <p>{t("footer.email")}</p>
              <p>{t("footer.phone")}</p>
              <p>{t("footer.phone2")}</p>
            </div>
          </div>
        </div>

        <div className="mt-[2.8rem]">
          <p className="lg:block mt-4 lg:mt-5 text-center lg:text-right">
            {t("footer.copyright")}
          </p>
        </div>
      </section>
    </footer>
  );
}
