import { useTranslation } from "react-i18next";

import content1Img from "../../assets/partnership/content-1.webp";
import content2Img from "../../assets/partnership/content-2.webp";

import bgPartnershipsContent from "../../assets/partnership/bg-services-content.svg";
import "../../i18n";

export default function PartnershipContent() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPartnershipsContent.src})` }}
    >
      <section className="flex flex-col items-center gap-32 px-6 lg:px-[100px] py-12 lg:py-24 text-white leading-relaxed">
        <h1 className="font-black text-[2.5rem] text-white lg:text-[3.5rem] text-center">
          {t("partnershipContent.h1")}
        </h1>

        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <img src={content1Img.src} />

          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[450px]">
              <h2 className="font-semibold text-[2.5rem] text-white lg:text-5xl lg:text-left text-center">
                {t("partnershipContent.item1.h2")}
              </h2>

              <ul className="pl-5 list-disc">
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
          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[490px]">
              <h2 className="font-semibold text-[2.5rem] text-white lg:text-5xl lg:text-left text-center">
                {t("partnershipContent.item2.h2")}
              </h2>

              <ul className="pl-5 list-disc">
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

          <img src={content2Img.src} />
        </div>
      </section>
    </div>
  );
}
