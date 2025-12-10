import card1Icon from "../../assets/services/why-card1-icon.png";
import card2Icon from "../../assets/services/why-card2-icon.png";
import card3Icon from "../../assets/services/why-card3-icon.png";
import card4Icon from "../../assets/services/why-card4-icon.png";
import card5Icon from "../../assets/services/why-card5-icon.png";

import card1Img from "../../assets/services/why-card1-img.webp";
import card2Img from "../../assets/services/why-card2-img.webp";
import card3Img from "../../assets/services/why-card3-img.webp";
import card4Img from "../../assets/services/why-card4-img.webp";
import card5Img from "../../assets/services/why-card5-img.webp";

import arrowLeft from "../../assets/services/arrow-left.svg";
import arrowRight from "../../assets/services/arrow-right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTranslation } from "react-i18next";
import "../../i18n";
import { useState } from "react";

const cards = [
  {
    iconSrc: card1Icon.src,
    imgSrc: card1Img.src,
  },
  {
    iconSrc: card2Icon.src,
    imgSrc: card2Img.src,
  },
  {
    iconSrc: card3Icon.src,
    imgSrc: card3Img.src,
  },
  {
    iconSrc: card4Icon.src,
    imgSrc: card4Img.src,
  },
  {
    iconSrc: card5Icon.src,
    imgSrc: card5Img.src,
  },
];

type CardProps = {
  iconSrc: string;
  imgSrc: string;
  h3: string;
  p: string;
};

function Card({ iconSrc, imgSrc, h3, p }: CardProps) {
  const [isHoveredOrClicked, setisHoveredOrClicked] = useState(false);

  return (
    <article
      onMouseEnter={() => setisHoveredOrClicked(true)}
      onMouseLeave={() => setisHoveredOrClicked(false)}
      onClick={() => setisHoveredOrClicked(!isHoveredOrClicked)}
      style={{
        background: isHoveredOrClicked
          ? "linear-gradient(142.52deg, #FFFFFF 1.29%, #D4D4D4 35.26%, #FFFFFF 63.49%)"
          : "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
      }}
      className="p-[2.6rem] rounded-[20px] h-[422px] max-w-[340px] flex flex-col items-center relative lg:max-w-[395px] lg:h-[32.2rem] lg:items-baseline lg:rounded-[40px] lg:py-[4rem] lg:px-[3.4rem]"
    >
      <img
        src={iconSrc}
        className="absolute w-[3.7rem] h-[3.7rem] top-[1rem] right-[1rem]"
      />

      <img src={imgSrc} className={isHoveredOrClicked ? "hidden" : ""} />

      <div
        className={`lg:max-w-[664px] lg:flex lg:flex-col lg:h-full lg:justify-between lg:mt-4 2xl:mt-0`}
      >
        <div>
          <div
            className={`transition-all duration-500 ease-in-out transform flex flex-col items-center
              ${isHoveredOrClicked ? "translate-y-0 opacity-100" : "translate-y-4 opacity-100"}`}
          >
            <h3 className="text-[2rem] font-bold mt-[1.4rem] lg:text-[2.5rem]">
              {h3}
            </h3>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out transform ${
              isHoveredOrClicked
                ? "opacity-100 translate-y-0 max-h-[300px]"
                : "opacity-0 translate-y-4 max-h-0 overflow-hidden"
            }`}
          >
            <p
              className={`text-[0.9rem] text-left mt-[0.9rem] font-semibold lg:text-[1.5rem]`}
              style={{ textWrap: "balance" }}
            >
              {p}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function WhyUs() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-12 bg-black lg:px-[100px]">
      <h2 className="text-center text-white font-semibold text-[2.5rem] lg:text-[3.5rem]">
        {t("serviceWhy.h2")}
      </h2>

      <section className="relative mt-[3rem] grid gap-[1.5rem] lg:flex-row lg:mt-[4.7rem]">
        {/* Shadow Left */}
        <div
          style={{
            background:
              "linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
            opacity: 0.7,
          }}
          className="hidden lg:block absolute top-0 left-0 h-full w-[350px] z-[5]"
        ></div>

        {/* Shadow Right */}
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
            opacity: 0.7,
          }}
          className="hidden lg:block absolute top-0 right-0 h-full w-[350px] z-[5]"
        ></div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={"auto"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".service-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".service-nav-next",
            prevEl: ".service-nav-prev",
          }}
          centeredSlides={true}
          spaceBetween={27}
          loop
          className="max-w-full lg:grid-cols-3"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx} className="!w-auto justify-center">
              <Card
                iconSrc={card.iconSrc}
                imgSrc={card.imgSrc}
                h3={t(`serviceWhy.card${idx + 1}.h3`)}
                p={t(`serviceWhy.card${idx + 1}.p`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="service-nav-prev hidden cursor-pointer lg:flex shadow z-[5] w-16 h-16 bg-white items-center justify-center absolute -left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 rounded-full">
          <img src={arrowLeft.src} />
        </div>
        <div className="service-nav-next hidden cursor-pointer lg:flex shadow z-[5] w-16 h-16 bg-white items-center justify-center absolute -right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 rounded-full">
          <img src={arrowRight.src} />
        </div>

        <div className="service-pagination flex justify-center"></div>
      </section>
    </section>
  );
}

export default WhyUs;
