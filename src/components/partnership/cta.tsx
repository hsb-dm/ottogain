import { useTranslation } from "react-i18next";
import ctaBg from "../../assets/home/cta-bg.svg";
import envelopeIcon from "../../assets/partnership/envelope-open.svg";
import "../../i18n";

export default function Cta() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-[#1B0A31] bg-cover bg-center px-6 lg:px-[100px] pt-24 pb-36"
      style={{ backgroundImage: `url(${ctaBg.src})` }}
    >
      <div className="flex flex-col justify-center items-center mx-auto text-white container">
        <div className="flex justify-center items-center">
          <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-sm lg:text-2xl">
            Otto Gain Smart Solution
          </div>
        </div>

        <h2 className="mt-14 max-w-[920px] font-semibold text-3xl lg:text-5xl text-center">
          {t("partnershipCta.h2")}
        </h2>

        <p className="mt-10 max-w-[600px] text-sm lg:text-xl text-center">
          {t("partnershipCta.p1")}
        </p>
        <p className="mt-10 max-w-[600px] text-sm lg:text-xl text-center">
          {t("partnershipCta.p2")}
        </p>

        <div className="flex gap-5 mt-5 max-w-[600px] text-sm lg:text-xl text-center">
          <img src={envelopeIcon.src} /> partnership@ottogain.com
        </div>
      </div>
    </section>
  );
}
