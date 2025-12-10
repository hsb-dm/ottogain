import { useTranslation } from "react-i18next";
import "../../i18n";
import { Button, Input, Textarea } from "@material-tailwind/react";

export function Form() {
  const { t } = useTranslation();

  return (
    <>
      <section className="px-6 py-12 bg-black grid gap-2.5 lg:gap-7 lg:grid-cols-2 lg:items-end lg:px-[6.25rem] lg:pt-[6.25rem] lg:pb-[4.3rem]">
        <article
          style={{
            background:
              "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
          }}
          className="p-[2rem] pb-[1.3rem] rounded-[20px] flex flex-col items-center relative lg:items-baseline lg:rounded-[40px] lg:p-[3.5rem] lg:pb-[4rem]"
        >
          <h2 className="text-[1.7rem] font-semibold text-left w-full lg:text-[3rem]">
            {t("contactForm.h2")}
          </h2>

          <form className="grid gap-[0.8rem] w-full mt-[1.4rem] lg:mt-[2.4rem] lg:gap-[2.2rem]">
            <Input
              size="lg"
              placeholder={t("contactForm.name")}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white rounded-xl lg:text-2xl lg:p-[1.8rem]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Input
              size="lg"
              placeholder={t("contactForm.email")}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white rounded-xl lg:text-2xl lg:p-[1.8rem]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Input
              size="lg"
              placeholder={t("contactForm.company")}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white rounded-xl lg:text-2xl lg:p-[1.8rem]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Textarea
              size="lg"
              placeholder={t("contactForm.message")}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white rounded-xl lg:text-2xl lg:p-[1.8rem]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </form>

          <div className="flex flex-end justify-end w-full mt-[1.5rem] lg:mt-[2.8rem]">
            <div className="p-[1px] rounded-full bg-[linear-gradient(to_right,_#905510_0%,_#F3CB5F_50%,_#A16B22_100%)] inline-block">
              <Button
                className="flex items-center rounded-full bg-gold-gradient text-white normal-case font-normal w-[10rem] justify-center text-[0.9rem] shadow-[0px_3px_5px_1px_rgba(0,0,0,0.3)] hover:bg-none hover:bg-black lg:text-[1.5rem] lg:w-[293px] lg:py-[1.3rem]"
                variant="text"
              >
                {t("contactForm.btn")}
              </Button>
            </div>
          </div>
        </article>

        <article
          style={{
            background:
              "linear-gradient(142.52deg, #FFFFFF 38.78%, #D4D4D4 70.83%, #FFFFFF 97.47%)",
          }}
          className="px-[1.6rem] py-[2.5rem] rounded-[20px] grid gap-3.5 relative font-semibold text-sm lg:text-2xl lg:max-h-[380px] lg:items-baseline lg:rounded-[40px] lg:px-[3.4rem] lg:py-[4.8rem]"
        >
          <div>
            <p>{t("contactForm.tower")}</p>
            <p>{t("contactForm.address")}</p>
          </div>
          <p>{t("footer.email")}</p>
          <p>{t("footer.phone")}</p>
        </article>
      </section>

      <section className="px-6 pt-6 pb-12 bg-black lg:px-[6.25rem] lg:pt-[3.125rem] lg:pb-[6.25rem]">
        <h2
          style={{ textWrap: "balance" }}
          className="text-center text-white font-semibold text-[2.5rem] lg:text-[3.5rem]"
        >
          {t("contactForm.location")}
        </h2>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.380365875!2d106.81728367355424!3d-6.213463560857357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4019a3d835f%3A0x26d6b2e1e8b73d51!2sMayapada%20Tower%202!5e0!3m2!1sen!2sid!4v1747641384991!5m2!1sen!2sid"
            width="100%"
            height="460"
            loading="lazy"
            className="rounded-2xl mt-[3.125rem] lg:rounded-[50px] lg:mt-[4.7rem]"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Form;
