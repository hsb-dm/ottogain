import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

import card1Img from "../../assets/home/why-card1.svg";
import card2Img from "../../assets/home/why-card2.svg";
import card3Img from "../../assets/home/why-card3.svg";
import card4Img from "../../assets/home/why-card4.svg";
import "../../i18n";

export function WhyUs() {
  const { t } = useTranslation();

  const cards = [
    {
      imgSrc: card1Img.src,
    },
    {
      imgSrc: card2Img.src,
    },
    {
      imgSrc: card3Img.src,
    },
    {
      imgSrc: card4Img.src,
    },
  ];

  return (
    <section className="bg-[#1B0A31] px-6 lg:px-[100px] py-12">
      <div className="mx-auto container">
        <div className="flex justify-center items-center">
          <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-2xl">
            Smart Solution
          </div>
        </div>

        <h2 className="mt-2 font-semibold text-[2.5rem] text-white lg:text-5xl text-center">
          {t("whyUs.h2")}
        </h2>

        <section className="lg:flex-row gap-[1.5rem] grid lg:grid-cols-4 mt-[3rem] lg:mt-[4.7rem]">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="relative flex flex-col justify-center items-center bg-[#1B0A31] p-6 border border-[#BB7CE4] rounded-xl lg:rounded-[40px] h-[310px] lg:h-[431px] text-white"
            >
              <div className="flex justify-center items-center w-full max-w-[250px] h-[150px] lg:h-[200px]">
                <img
                  src={card.imgSrc}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="lg:flex lg:flex-col justify-center lg:mt-4 2xl:mt-0 lg:max-w-[664px] lg:h-full">
                <div className="text-center">
                  <h2 className="font-bold text-[2rem] lg:text-2xl">
                    {t(`whyUs.card${idx + 1}.h3`)}
                  </h2>

                  <p
                    className="mt-[0.9rem] text-[0.9rem] lg:text-base text-left"
                    style={{ textWrap: "balance" }}
                  >
                    {t(`whyUs.card${idx + 1}.p`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

export default WhyUs;
