import { Button } from "@material-tailwind/react";
import ctaImg from "../../assets/services/cta-img.png";

import { useTranslation } from "react-i18next";
import "../../i18n";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section
      id="cta"
      className="px-6 py-12 bg-black lg:px-[6.25rem] lg:pb-[6.25rem]"
    >
      <article
        style={{
          background:
            "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
        }}
        className="px-[1.6rem] py-[2rem] rounded-[20px] lg:shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] lg:items-center lg:pt-[3.6rem] lg:pr-[3.1rem] lg:pl-[4.5rem] lg:pb-[3.75rem] lg:relative lg:flex lg:flex-row-reverse lg:rounded-[40px]"
      >
        <img src={ctaImg.src} className="px-4 lg:w-[250px]" />

        <div>
          <div className="mt-[2rem]">
            <p className="text-[1.25rem] font-semibold lg:text-[1.5rem]">
              {t("serviceCta.p")}
            </p>
          </div>

          <a href="/contact-us">
            <div className="p-[1px] rounded-full bg-[linear-gradient(to_right,_#905510_0%,_#F3CB5F_50%,_#A16B22_100%)] inline-block mt-5 lg:mt-[2.5rem]">
              <Button
                className="flex items-center rounded-full bg-gold-gradient text-white normal-case font-normal w-[11rem] justify-center text-[0.9rem] shadow-[0px_3px_5px_1px_rgba(0,0,0,0.3)] hover:bg-none hover:bg-black lg:text-[1.5rem] lg:w-[293px] lg:py-[1rem]"
                variant="text"
              >
                {t("serviceCta.btn")}
              </Button>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
}

export default CTA;
