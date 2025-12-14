import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

import companyLogosImg from "../../assets/home/company-logos.svg";
import ctaBg from "../../assets/home/cta-bg.svg";
import "../../i18n";

export default function Cta() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-[#1B0A31] bg-cover bg-center px-6 lg:px-[100px] py-24"
      style={{ backgroundImage: `url(${ctaBg.src})` }}
    >
      <div className="mx-auto container">
        <div className="flex justify-center items-center">
          <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-sm lg:text-2xl">
            Otto Gain Smart Solution
          </div>
        </div>

        <h2 className="mt-2 font-semibold text-white text-3xl lg:text-5xl text-center">
          {t("cta.h2.1")} <br /> {t("cta.h2.2")}
        </h2>

        <p className="mt-7 text-gray-400 text-xl text-center">{t("cta.p")}</p>

        <div className="flex justify-center items-center w-full">
          <Button className="bg-gradient-to-r from-[#C47EFC] to-[#0F17C3] mt-16 font-semibold normal-case">
            {t("cta.btn")}
          </Button>
        </div>

        <img src={companyLogosImg.src} alt="company logos" className="mt-24" />
      </div>
    </section>
  );
}
