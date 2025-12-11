import proof1Img from "../../assets/home/proof-1.webp";
import proof2Img from "../../assets/home/proof-2.webp";
import proof3Img from "../../assets/home/proof-3.webp";

import proof1Popup from "../../assets/home/proof1-popup.webp";
import proof2Popup from "../../assets/home/proof2-popup.webp";
import proof3Popup from "../../assets/home/proof3-popup.webp";

import monitorIcon from "../../assets/home/icon-monitor.svg";
import robotIcon from "../../assets/home/icon-robot.svg";
import userIcon from "../../assets/home/icon-user.svg";

import { useTranslation } from "react-i18next";
import "../../i18n";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (modalImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalImg]);

  return (
    <section className="bg-[#1B0A31] px-6 lg:px-[100px] py-12">
      <section className="relative lg:flex-row gap-[1.5rem] grid mx-auto mt-[3rem] lg:mt-[4.7rem] container">
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
            <SwiperSlide
              key={index}
              className="hover:opacity-80 cursor-pointer"
            >
              <img
                src={imgSrc.src}
                onClick={() => setModalImg(popupSrc.src)}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center service-pagination"></div>

        <section className="relative mt-24 p-2 rounded-2xl w-full">
          {/* Glow Layer */}
          <div className="-z-10 absolute inset-0 bg-[#BB7CE4] opacity-40 blur-xl rounded-2xl"></div>

          {/* Actual card */}
          <div className="flex lg:flex-row flex-col justify-evenly items-center gap-4 bg-[#F8F8F80D] p-7 border border-[#BB7CE4]/30 rounded-2xl">
            <div className="flex justify-start lg:justify-center items-center gap-6 w-full">
              <img src={userIcon.src} alt="icon user" />
              <div className="text-white">
                <div className="font-semibold text-5xl">99+</div>
                <div>{t("proof.userAmount")}</div>
              </div>
            </div>

            <div className="flex justify-start lg:justify-center items-center gap-6 w-full">
              <img src={robotIcon.src} alt="icon robot" />
              <div className="text-white">
                <div className="font-semibold text-5xl">21</div>
                <div>{t("proof.signalAmount")}</div>
              </div>
            </div>

            <div className="flex justify-start lg:justify-center items-center gap-6 w-full">
              <img src={monitorIcon.src} alt="icon monitor" />
              <div className="text-white">
                <div className="font-semibold text-5xl">07</div>
                <div>{t("proof.connectedBroker")}</div>
              </div>
            </div>
          </div>
        </section>

        {modalImg && (
          <div
            className="z-[9999] fixed inset-0 flex justify-center items-center bg-black/80 p-6"
            onClick={() => setModalImg(null)}
          >
            {/* Close button */}
            <button
              className="top-6 lg:top-6 right-6 lg:right-12 z-[10000] absolute bg-hero px-2 rounded-full font-bold text-white text-3xl"
              onClick={() => setModalImg(null)}
            >
              &times;
            </button>

            <div
              className="max-h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={modalImg} className="w-auto max-w-full h-auto" />
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

export default Proof;
