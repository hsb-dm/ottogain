import { Button } from "@material-tailwind/react";

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

import proof1Img from "../../assets/home/proof-1.webp";
import proof2Img from "../../assets/home/proof-2.webp";
import proof3Img from "../../assets/home/proof-3.webp";

import proof1Popup from "../../assets/home/proof1-popup.webp";
import proof2Popup from "../../assets/home/proof2-popup.webp";
import proof3Popup from "../../assets/home/proof3-popup.webp";

import arrowLeft from "../../assets/services/arrow-left.svg";
import arrowRight from "../../assets/services/arrow-right.svg";

import { useTranslation } from "react-i18next";
import "../../i18n";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

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
      className="relative flex flex-col items-center lg:items-baseline p-[2.6rem] lg:px-[3.4rem] lg:py-[4rem] rounded-[20px] lg:rounded-[40px] max-w-[340px] lg:max-w-[395px] h-[422px] lg:h-[32.2rem]"
    >
      <img
        src={iconSrc}
        className="top-[1rem] right-[1rem] absolute w-[3.7rem] h-[3.7rem]"
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
            <h3 className="mt-[1.4rem] font-bold text-[2rem] lg:text-[2.5rem]">
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

const proofImages = [
  {
    imgSrc: proof1Img,
    popupSrc: proof1Popup,
  },
  {
    imgSrc: proof2Img,
    popupSrc: proof2Popup,
  },
  {
    imgSrc: proof3Img,
    popupSrc: proof3Popup,
  },
];

export function Proof() {
  const { t } = useTranslation();
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="bg-[#1B0A31] px-6 lg:px-[100px] py-12">
      <section className="relative lg:flex-row gap-[1.5rem] grid mt-[3rem] lg:mt-[4.7rem]">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3, // lg and above
            },
          }}
          pagination={{
            el: ".service-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".service-nav-next",
            prevEl: ".service-nav-prev",
          }}
          spaceBetween={27}
          className="lg:grid-cols-3 max-w-full"
        >
          {proofImages.map(({ imgSrc, popupSrc }, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <img
                src={imgSrc.src}
                onMouseEnter={() => setModalImg(popupSrc.src)}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {modalImg && (
          <div
            className="z-[9999] fixed inset-0 flex justify-center items-center bg-black/80 p-6"
            onClick={() => setModalImg(null)}
          >
            <div
              className="max-h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={modalImg} className="w-auto max-w-full h-auto" />
            </div>
          </div>
        )}
        <div className="flex justify-center service-pagination"></div>
      </section>
    </section>
  );
}

export default Proof;
