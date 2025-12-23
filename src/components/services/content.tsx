import { useTranslation } from "react-i18next";

import proof1Img from "../../assets/home/proof-1.webp";
import proof2Img from "../../assets/home/proof-2.webp";
import proof3Img from "../../assets/home/proof-3.webp";

import proof1Popup from "../../assets/home/proof1-popup.webp";
import proof2Popup from "../../assets/home/proof2-popup.webp";
import proof3Popup from "../../assets/home/proof3-popup.webp";

import content1Img from "../../assets/services/content-1.webp";
import content2Img from "../../assets/services/content-2.webp";
import content3Img from "../../assets/services/content-3.webp";

import bgServicesContent from "../../assets/services/bg-services-content.svg";

import "../../i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
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

export default function ServiceContent() {
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
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center border border-purple-400/50 border-t-2"
      style={{ backgroundImage: `url(${bgServicesContent.src})` }}
    >
      {/* List of Services */}
      <section className="flex flex-col items-start gap-32 px-6 lg:px-[100px] py-12 lg:py-24 text-white leading-relaxed">
        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <img src={content1Img.src} />

          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[450px]">
              <h2 className="font-semibold text-[2.5rem] text-white lg:text-5xl lg:text-left text-center">
                {t("serviceContent.item1.h2")}
              </h2>

              <p>{t("serviceContent.item1.p")}</p>

              <ul className="pl-5 list-disc">
                <li>{t("serviceContent.item1.ul.1")}</li>
                <li>{t("serviceContent.item1.ul.2")}</li>
                <li>{t("serviceContent.item1.ul.3")}</li>
                <li>{t("serviceContent.item1.ul.4")}</li>
                <li>{t("serviceContent.item1.ul.5")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[490px]">
              <h2 className="font-semibold text-[2.5rem] text-white lg:text-5xl lg:text-left text-center">
                {t("serviceContent.item2.h2")}
              </h2>

              <p>{t("serviceContent.item2.p")}</p>

              <div>
                <p className="font-extrabold">
                  {t("serviceContent.item2.ul1.header")}
                </p>

                <ul className="pl-5 list-disc">
                  <li>{t("serviceContent.item2.ul1.1")}</li>
                  <li>{t("serviceContent.item2.ul1.2")}</li>
                  <li>{t("serviceContent.item2.ul1.3")}</li>
                </ul>
              </div>

              <div>
                <p className="font-extrabold">
                  {t("serviceContent.item2.ul2.header")}
                </p>

                <ul className="pl-5 list-disc">
                  <li>{t("serviceContent.item2.ul2.1")}</li>
                  <li>{t("serviceContent.item2.ul2.2")}</li>
                  <li>{t("serviceContent.item2.ul2.3")}</li>
                  <li>{t("serviceContent.item2.ul2.4")}</li>
                </ul>
              </div>
            </div>
          </div>

          <img src={content2Img.src} />
        </div>

        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <img src={content3Img.src} />

          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[450px]">
              <div className="bg-[#BB7CE4]/10 px-11 py-10 rounded-3xl">
                <p>{t("serviceContent.item3.p")}</p>

                <ul className="pl-5 list-disc">
                  <li>{t("serviceContent.item3.ul.1")}</li>
                  <li>{t("serviceContent.item3.ul.2")}</li>
                  <li>{t("serviceContent.item3.ul.3")}</li>
                  <li>{t("serviceContent.item3.ul.4")}</li>
                  <li>{t("serviceContent.item3.ul.5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Proofs */}
      <section className="relative lg:flex-row gap-12 lg:gap-28 grid mx-auto lg:my-[4.7rem] mt-[3rem] px-8 pb-12 container">
        <h2 className="font-semibold text-white text-3xl lg:text-5xl text-center">
          {t("serviceProofs.h2")}
        </h2>

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
    </div>
  );
}
