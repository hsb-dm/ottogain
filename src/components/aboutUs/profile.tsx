import profileImg from "../../assets/about-us/profile-img.webp";
import profileImgPc from "../../assets/about-us/profile-img-pc.webp";
import navLogo from "../../assets/nav-logo-color.svg";

import { useTranslation } from "react-i18next";
import "../../i18n";

const cards = [
  {
    h3: "aboutProfile.card1.h3",
    p: "aboutProfile.card1.p",
  },
  {
    h3: "aboutProfile.card2.h3",
    p: "aboutProfile.card2.p",
  },
];

export function Profile() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-12 bg-black lg:px-[6.25rem] lg:pt-[6.25rem] lg:pb-[6.25rem]">
      <h2
        style={{ textWrap: "balance" }}
        className="text-center text-white font-semibold text-[2.5rem] lg:text-[3.5rem]"
      >
        {t("aboutProfile.h2")}
      </h2>

      <section className="pb-[3.125rem] lg:flex lg:items-center lg:gap-[1.9rem] lg:pt-[4.7rem]">
        <article
          style={{
            background:
              "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
          }}
          className="p-[1.6rem] rounded-[20px] mt-[3.125rem] lg:rounded-[40px] lg:p-[2.25rem] lg:pt-[1.7rem] lg:mt-0 lg:!bg-none lg:!bg-white lg:flex-1"
        >
          <img src={navLogo.src} className="w-[5.5rem] lg:w-[8.9rem]" />

          <div className="mt-[1.25rem]">
            <img src={profileImg.src} className="lg:hidden" />
            <img src={profileImgPc.src} className="hidden lg:block lg:w-full" />
          </div>
        </article>

        <div className="lg:w-[525px]">
          <p className="text-[0.9rem] font-semibold text-white mt-[1.5rem] lg:text-2xl lg:mt-0 lg:font-normal lg:leading-7">
            {t("aboutProfile.p")}
          </p>
          <p className="text-[0.9rem] font-semibold text-white mt-[0.9rem] lg:text-2xl lg:mt-[1.5rem] lg:font-normal lg:leading-7">
            {t("aboutProfile.p2")}
          </p>
        </div>
      </section>

      <section className="pt-[1.25rem] grid gap-2.5 lg:grid-cols-2 lg:gap-7">
        {cards.map(({ h3, p }) => (
          <article
            key={h3}
            style={{
              background:
                "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
            }}
            className="px-[2.6rem] py-[3.25rem] rounded-[20px] flex items-center relative lg:items-baseline lg:rounded-[40px] lg:p-[3.5rem] lg:pb-[4rem]"
          >
            <div className="lg:max-w-[664px] lg:flex lg:flex-col lg:h-full lg:justify-between lg:mt-4 2xl:mt-0">
              <div>
                <h2 className="text-[2rem] font-bold w-[10rem] lg:text-[3rem]">
                  {t(h3)}
                </h2>

                <p
                  className="text-[0.9rem] text-left mt-[0.9rem] font-semibold lg:text-[1.5rem]"
                  style={{ textWrap: "balance" }}
                >
                  {t(p)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Profile;
