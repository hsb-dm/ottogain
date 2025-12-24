import { useTranslation } from "react-i18next";
import "../../i18n";
import { Button, Input, Textarea } from "@material-tailwind/react";
import bgContactForm from "../../assets/partnership/bg-services-content.svg";
import envelopeIcon from "../../assets/icons/envelope-open.svg";
import mapMarkerIcon from "../../assets/icons/map-marker.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";

import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

export function Form() {
  const { t } = useTranslation();

  function NeedSelect() {
    const [value, setValue] = useState<string | undefined>("");

    return (
      <Select
        value={value}
        onChange={(val) => setValue(val)}
        className="bg-white/10 lg:p-[1.8rem] !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-xl text-white/70 lg:text-xl"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        menuProps={{
          className: "text-xl",
        }}
      >
        <Option value="" className="p-2">
          <div className="px-4">{t("contactForm.purpose")}</div>
        </Option>

        <Option value="registrasi" className="p-2">
          <div className="px-4">{t("contactForm.registration")}</div>
        </Option>

        <Option value="signal-provider" className="p-2">
          <div className="px-4">Signal Provider</div>
        </Option>

        <Option value="deposit" className="p-2">
          <div className="px-4">Deposit</div>
        </Option>

        <Option value="withdrawal" className="p-2">
          <div className="px-4">Withdrawal</div>
        </Option>

        <Option value="legal" className="p-2">
          <div className="px-4">Legal</div>
        </Option>

        <Option value="lainnya" className="p-2">
          <div className="px-4">{t("contactForm.others")}</div>
        </Option>
      </Select>
    );
  }

  return (
    <>
      <section
        className="flex flex-col gap-2.5 lg:gap-28 lg:grid lg:grid-cols-2 bg-cover bg-center px-6 lg:px-[6.25rem] py-12 lg:pt-[6.25rem] lg:pb-20"
        style={{ backgroundImage: `url(${bgContactForm.src})` }}
      >
        <article className="relative flex flex-col justify-center items-center lg:items-baseline bg-[#1B0A31] p-[2rem] lg:px-11 lg:pt-8 pb-[1.3rem] lg:pb-16 border border-[#BB7CE4]/30 rounded-[20px] lg:rounded-[40px]">
          <form className="gap-[0.8rem] lg:gap-[2.2rem] grid mt-[1.4rem] lg:mt-[2.4rem] w-full">
            <Input
              size="lg"
              placeholder={t("contactForm.name")}
              className="bg-white/10 lg:p-[1.8rem] !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-xl text-white lg:text-xl"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Input
              size="lg"
              placeholder={t("contactForm.email")}
              className="bg-white/10 lg:p-[1.8rem] !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-xl text-white lg:text-xl"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Input
              size="lg"
              placeholder={t("contactForm.whatsapp")}
              className="bg-white/10 lg:p-[1.8rem] !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-xl text-white lg:text-xl"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <NeedSelect />
          </form>

          <div className="flex justify-center items-center w-full">
            <Button className="bg-gradient-to-r from-[#C47EFC] to-[#0F17C3] mt-16 px-16 py-4 font-semibold normal-case">
              {t("contactForm.send")}
            </Button>
          </div>
        </article>

        <article className="relative flex flex-col justify-center items-center gap-7 lg:grid rounded-[20px] lg:rounded-[40px] text-white">
          <h2 className="pt-8 lg:pt-0 font-semibold text-3xl lg:text-5xl lg:text-left text-center">
            {t("contactUsForm.h2")}
          </h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9434.393062338417!2d106.78414750734926!3d-6.174427664205013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f74ca2c1fefb%3A0x66eb07e0fb3775c1!2sSOHO%20Podomoro%20City!5e0!3m2!1sen!2sid!4v1766391310189!5m2!1sen!2sid"
            width="94%"
            height="259"
            loading="lazy"
            className="rounded-3xl"
          ></iframe>

          <div className="font-semibold text-2xl lg:text-3xl">HQ Office</div>

          <div className="flex flex-col gap-5 max-w-[350px] text-sm lg:text-base">
            <div className="flex gap-5">
              <img
                src={mapMarkerIcon.src}
                alt="map marker icon"
                className="w-4"
              />
              <span>
                Soho Podomorocity lt.16 Central Park Area Jl. S Parman-Jakarta
                barat Indonesia
              </span>
            </div>

            <div className="flex gap-5">
              <img src={whatsappIcon.src} alt="whatsapp icon" className="w-4" />
              <span>+62811-3118-6888</span>
            </div>

            <div className="flex gap-5">
              <img src={phoneIcon.src} alt="phone icon" className="w-4" />
              <span>021-5035-1688</span>
            </div>

            <div className="flex gap-5">
              <img src={envelopeIcon.src} alt="envelope icon" className="w-4" />
              <span>support@ottogain.com</span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Form;
