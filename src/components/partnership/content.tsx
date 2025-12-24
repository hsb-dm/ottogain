import { useTranslation } from "react-i18next";

import content1Img from "../../assets/partnership/content-1.webp";
import content2Img from "../../assets/partnership/content-2.webp";
import steps1Img from "../../assets/partnership/steps-1.webp";
import steps2Img from "../../assets/partnership/steps-2.webp";

import bgPartnershipsContent from "../../assets/partnership/bg-services-content.svg";
import card1Img from "../../assets/home/why-card1.svg";
import card2Img from "../../assets/partnership/why-card2.svg";
import card3Img from "../../assets/home/why-card3.svg";
import "../../i18n";

export default function PartnershipContent() {
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
  ];

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPartnershipsContent.src})` }}
    >
      {/* Content */}
      <section className="flex flex-col items-center gap-16 lg:gap-32 px-6 lg:px-[100px] py-12 lg:py-24 text-white leading-relaxed">
        <h1 className="font-black text-white lg:text-[3.5rem] text-3xl text-center">
          {t("partnershipContent.h1")}
        </h1>

        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <img src={content1Img.src} />

          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[450px]">
              <h2 className="font-semibold text-white text-2xl lg:text-5xl lg:text-left text-center">
                {t("partnershipContent.item1.h2")}
              </h2>

              <ul className="space-y-2 lg:space-y-4 pl-2 lg:pl-5 text-xs lg:text-base list-disc">
                <li>
                  <span className="mr-1 font-bold">
                    {t("partnershipContent.item1.ul.1.bold")}
                  </span>
                  {t("partnershipContent.item1.ul.1.li")}
                </li>

                <li>
                  <span className="mr-1 font-bold">
                    {t("partnershipContent.item1.ul.2.bold")}
                  </span>
                  {t("partnershipContent.item1.ul.2.li")}
                </li>

                <li>
                  <span className="mr-1 font-bold">
                    {t("partnershipContent.item1.ul.3.bold")}
                  </span>
                  {t("partnershipContent.item1.ul.3.li")}
                </li>

                <li>
                  <span className="mr-1 font-bold">
                    {t("partnershipContent.item1.ul.4.bold")}
                  </span>
                  {t("partnershipContent.item1.ul.4.li")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[490px]">
              <h2 className="font-semibold text-white text-2xl lg:text-5xl lg:text-left text-center">
                {t("partnershipContent.item2.h2")}
              </h2>

              <ul className="space-y-2 lg:space-y-4 pl-2 lg:pl-5 text-xs lg:text-base list-disc">
                <li>
                  <span className="mr-1 font-bold">
                    {t("partnershipContent.item1.ul.1.bold")}
                  </span>
                  {t("partnershipContent.item1.ul.1.li")}
                </li>

                <li>
                  <span className="mr-1 font-bold">
                    {t("partnershipContent.item1.ul.2.bold")}
                  </span>
                  {t("partnershipContent.item1.ul.2.li")}
                </li>

                <li>
                  <span className="mr-1 font-bold">
                    {t("partnershipContent.item1.ul.3.bold")}
                  </span>
                  {t("partnershipContent.item1.ul.3.li")}
                </li>

                <li>
                  <span className="mr-1 font-bold">
                    {t("partnershipContent.item1.ul.4.bold")}
                  </span>
                  {t("partnershipContent.item1.ul.4.li")}
                </li>
              </ul>
            </div>
          </div>

          <img src={content2Img.src} className="order-1 lg:order-2" />
        </div>
      </section>

      {/* How */}
      <section className="px-6 lg:px-[100px] py-12">
        <div className="flex flex-col justify-center items-center mx-auto container">
          <h1 className="font-black text-white lg:text-[3.5rem] text-3xl text-center">
            {t("partnershipHow.h1")}
          </h1>

          <section className="lg:flex-row gap-8 grid lg:grid-cols-3 mt-[3rem] lg:mt-[4.7rem] max-w-[960px]">
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="relative flex flex-col justify-center items-center bg-[#1B0A31] border border-[#BB7CE4] rounded-xl h-[310px] lg:h-[391px] text-white"
              >
                <div className="flex justify-center items-center pt-6 w-full h-[150px] lg:h-[200px]">
                  <img
                    src={card.imgSrc}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="lg:flex lg:flex-col justify-center lg:mt-4 2xl:mt-0 px-6 pb-0 lg:pb-6 lg:max-w-[664px] lg:h-full">
                  <div className="text-center">
                    <h2 className="font-bold text-xl lg:text-2xl">
                      {t(`partnershipHow.card${idx + 1}.h3`)}
                    </h2>

                    <p
                      className="mt-[0.9rem] text-xs lg:text-base lg:text-left text-center"
                      style={{ textWrap: "balance" }}
                    >
                      {t(`partnershipHow.card${idx + 1}.p`)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>

      {/* Steps */}
      <section className="flex flex-col items-center gap-32 px-6 lg:px-[100px] py-12 lg:py-24 text-white leading-relaxed">
        <div className="gap-9 grid lg:grid-cols-2">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[625px]">
              <h2 className="font-semibold text-white text-3xl lg:text-5xl lg:text-left text-center">
                {t("partnershipSteps.item1.h3")}
              </h2>

              <ol className="space-y-6 max-w-[500px] marker:text-[#BB7CE4] list-decimal list-inside">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-semibold text-[#BB7CE4] text-xl lg:text-2xl">
                      {i}.
                    </span>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-xl lg:text-2xl">
                        {t(`partnershipSteps.item1.li${i}.h4`)}
                      </h4>
                      <p className="font-normal text-xs lg:text-base">
                        {t(`partnershipSteps.item1.li${i}.p`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <img src={steps1Img.src} className="order-1 lg:order-2" />
        </div>

        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <img src={steps2Img.src} />

          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[450px]">
              <h2 className="font-semibold text-white text-3xl lg:text-5xl lg:text-left text-center">
                {t("partnershipSteps.item2.h3")}
              </h2>

              <ol className="space-y-6 max-w-[500px] marker:text-[#BB7CE4] list-decimal list-inside">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-semibold text-[#BB7CE4] text-xl lg:text-2xl">
                      {i}.
                    </span>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-xl lg:text-2xl">
                        {t(`partnershipSteps.item2.li${i}.h4`)}
                      </h4>
                      <p className="font-normal text-xs lg:text-base">
                        {t(`partnershipSteps.item2.li${i}.p`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
