import { useTranslation } from "react-i18next";
import "../i18n";

import navLogoImg from "../assets/nav-logo.svg";
import { navListMenuItems } from "./navbar";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-top p-6 pt-0 bg-black text-white text-sm relative lg:px-[6.25rem]">
      <div className="bg-white w-full h-[1px]" />

      <img
        src={navLogoImg.src}
        className="h-full w-[5.2rem]  mt-[3.75rem] lg:w-[8.8rem]"
      />

      <div className="lg:flex lg:gap-[4.9rem] lg:mt-[2.5rem]">
        <div>
          <p className="mt-[2.8rem] lg:mt-0" style={{ textWrap: "balance" }}>
            {t("footer.address")}
          </p>
          <p className="mt-[2.8rem] lg:mt-[1.4rem]">{t("footer.email")}</p>
          <p className="mt-[2.8rem] lg:mt-[1.4rem]">{t("footer.phone")}</p>
        </div>

        <nav className="mt-[2.5rem] lg:mt-0 lg:min-w-[100px]">
          <h2 className="font-bold">{t("footer.linksTitle")}</h2>

          <ul className="mt-[0.7rem] grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-3">
            {navListMenuItems.map(({ title, href }) => (
              <a href={href} key={title} className="cursor-default">
                <div className="inline cursor-pointer hover:underline">
                  {t(title)}
                </div>
              </a>
            ))}
          </ul>
        </nav>

        <div className="mt-[2.5rem] lg:mt-0">
          <h2 className="font-bold">{t("footer.riskTitle")}</h2>

          <div className="font-extralight">
            <p className="mt-[0.7rem]">{t("footer.riskDesc")}</p>
            <p className="mt-[0.7rem]">{t("footer.riskDesc2")}</p>
          </div>
        </div>
      </div>

      <div className="mt-[2.8rem]">
        <div className="bg-white w-full h-[2px]" />

        <p className="mt-4 lg:hidden">{t("footer.copyrightMobile")}</p>
        <p className="mt-4 hidden lg:block lg:text-center lg:mt-5">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
