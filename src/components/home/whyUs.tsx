import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import card1Icon from "../../assets/home/why-card1-icon.png";
import card2Icon from "../../assets/home/why-card2-icon.png";
import card3Icon from "../../assets/home/why-card3-icon.png";
import "../../i18n";

export function WhyUs() {
  const { t } = useTranslation();

  const cards = [
    {
      iconSrc: card1Icon.src,
    },
    {
      iconSrc: card2Icon.src,
    },
    {
      iconSrc: card3Icon.src,
    },
  ];

  return (
    <section className="px-6 py-12 bg-black lg:px-[100px]">
      <h2 className="text-center text-white font-semibold text-[2.5rem] lg:text-[3.5rem]">
        {t("whyUs.h2")}
      </h2>

      <section className="mt-[3rem] grid gap-[1.5rem] lg:flex-row lg:mt-[4.7rem] lg:grid-cols-3">
        {cards.map((card, idx) => (
          <article
            key={idx}
            style={{
              background:
                "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
            }}
            className="p-[3rem] pr-[2rem] rounded-[20px] h-[310px] flex items-center relative lg:h-[32.2rem] lg:items-baseline lg:rounded-[40px] lg:py-[4rem] lg:px-[3.4rem]"
          >
            <img
              src={card.iconSrc}
              className="absolute w-[4.3rem] h-[4.3rem] top-[1rem] right-[1rem]"
            />

            <div className="lg:max-w-[664px] lg:flex lg:flex-col lg:h-full lg:justify-between lg:mt-4 2xl:mt-0">
              <div>
                <h2 className="text-[2rem] font-bold w-[10rem] lg:text-[3rem]">
                  {t(`whyUs.card${idx + 1}.h3`)}
                </h2>

                <p
                  className="text-[0.9rem] text-left mt-[0.9rem] font-semibold lg:text-[1.5rem]"
                  style={{ textWrap: "balance" }}
                >
                  {t(`whyUs.card${idx + 1}.p`)}
                </p>
              </div>

              <a href="/services">
                <div className="p-[1px] rounded-full bg-[linear-gradient(to_right,_#905510_0%,_#F3CB5F_50%,_#A16B22_100%)] inline-block mt-5 lg:mt-[1.75rem] lg:w-full">
                  <Button
                    className="flex items-center rounded-full bg-gold-gradient text-white normal-case font-normal w-[10rem] justify-center text-[0.9rem] shadow-[0px_3px_5px_1px_rgba(0,0,0,0.3)] hover:bg-none hover:bg-black lg:text-[1.5rem] lg:w-full lg:py-[1rem]"
                    variant="text"
                  >
                    {t(`whyUs.cardCta`)}
                  </Button>
                </div>
              </a>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default WhyUs;
