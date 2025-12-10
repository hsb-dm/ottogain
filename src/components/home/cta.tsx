import { Button } from "@material-tailwind/react";
import ctaImg from "../../assets/home/cta-img.webp";

import { useTranslation } from "react-i18next";
import "../../i18n";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="px-6 py-12 bg-black lg:px-[100px]">
      <article
        style={{
          background:
            "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
        }}
        className="py-9 pb-0 px-6 rounded-[20px] lg:rounded-[40px] lg:items-center lg:p-0 lg:relative lg:grid lg:grid-cols-12"
      >
        <div className="lg:pl-[4.5rem] lg:py-[5.9rem] lg:col-span-7">
          <h2
            className="text-[2rem] font-bold lg:text-[3.5rem] lg:max-w-[664px]"
            style={{ textWrap: "balance" }}
          >
            {t("cta.h2")}
          </h2>

          <div className="lg:max-w-[601px]">
            <div className="bg-gold-gradient w-full h-[2px] mt-[1.2rem] shadow-[0px_3px_5px_1px_rgba(0,0,0,0.3)] lg:h-[4px] lg:shadow-none" />

            <p className="text-[0.9rem] mt-[0.9rem] font-semibold lg:text-[1.5rem]">
              {t("cta.p")}
            </p>
          </div>

          <a href="/contact-us">
            <div className="p-[1px] rounded-full bg-[linear-gradient(to_right,_#905510_0%,_#F3CB5F_50%,_#A16B22_100%)] inline-block mt-5 lg:mt-[1.75rem]">
              <Button
                className="flex items-center rounded-full bg-gold-gradient text-white normal-case font-normal w-[10rem] justify-center text-[0.9rem] shadow-[0px_3px_5px_1px_rgba(0,0,0,0.3)] hover:bg-none hover:bg-black lg:text-[1.5rem] lg:w-[293px] lg:py-[1rem]"
                variant="text"
              >
                {t("cta.btn")}
              </Button>
            </div>
          </a>
        </div>

        <div className="flex -mr-6 lg:mr-0 lg:relative lg:h-full lg:col-span-5">
          <img
            src={ctaImg.src}
            className="mt-[1.5rem] lg:absolute lg:bottom-0 lg:right-0"
          />
        </div>
      </article>
    </section>
  );
}

export default CTA;
