import { useTranslation } from "react-i18next";
import "../../i18n";

export default function AboutUsTimeline() {
  const { t } = useTranslation();

  const LeftItem = ({ date, text }: { date: string; text: string }) => {
    return (
      <>
        {/* left card */}
        <div className="flex justify-end">
          <div className="bg-[#1B0A31] p-2 lg:p-5 border border-purple-400/50 rounded-xl max-w-[320px] text-white">
            <h4 className="mb-2 font-semibold text-sm lg:text-base">{date}</h4>
            <p className="opacity-80 text-xs lg:text-sm">{text}</p>
          </div>
        </div>

        {/* center */}
        <div className="relative flex justify-center items-center">
          <span className="absolute bg-purple-400 rounded-full w-3 h-3" />
          <span className="left-0 absolute bg-purple-400/40 w-5 h-px" />
        </div>

        {/* right empty */}
        <div />
      </>
    );
  };

  const RightItem = ({ date, text }: { date: string; text: string }) => {
    return (
      <>
        {/* left empty */}
        <div />

        {/* center */}
        <div className="relative flex justify-center items-center">
          <span className="absolute bg-purple-400 rounded-full w-3 h-3" />
          <span className="right-0 absolute bg-purple-400/40 w-5 h-px" />
        </div>

        {/* right card */}
        <div className="flex justify-start">
          <div className="bg-[#1B0A31] p-2 lg:p-5 border border-purple-400/50 rounded-xl max-w-[320px] text-white">
            <h4 className="mb-2 font-semibold text-sm lg:text-base">{date}</h4>
            <p className="opacity-80 text-xs lg:text-sm">{text}</p>
          </div>
        </div>
      </>
    );
  };

  const timeline = [
    {
      date: "Mei 2021",
      text: "Inisiasi berdasarkan analisis market CFD di Indonesia dan kebutuhan akan signal provider terpercaya.",
    },
    {
      date: "Juni 2021",
      text: "Akuisisi PT Arisma Teknika Mesari sebagai fondasi legal dan operasional.",
    },
    {
      date: "Juli - Desember 2021",
      text: "Pengembangan aplikasi tahap awal dan uji coba dengan 8 signal provider pertama.",
    },
    {
      date: "Januari - Juni 2022",
      text: "Pengujian performa dan validasi signal provider, dilanjutkan dengan Grand Launching Apps tahap 1.",
    },
    { date: "Januari 2024", text: "Pencapaian: 5000+ pengguna aktif." },
    {
      date: "Juli 2025",
      text: "OTTOGAIN resmi bernaung di bawah Penasihat Berjangka berlisensi PT Arisma Teknika Mesari.",
    },
    {
      date: "November - December 2025",
      text: "Uji coba integrated solution oleh regulator dan rebranding menjadi OTTOGAIN untuk visi jangka panjang.",
    },
    {
      date: "Januari 2026",
      text: "Grand Launching Integrated Apps",
    },
  ];

  return (
    <section className="flex flex-col items-center bg-[#1B0A31] px-6 lg:px-[100px] pt-12 lg:pt-24 text-white">
      <div className="flex flex-col gap-5 mt-12">
        <div>
          <div className="flex justify-center items-center w-full">
            <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-sm">
              Our History
            </div>
          </div>

          <h2 className="mt-5 font-semibold text-white lg:text-[2.5rem] text-3xl lg:text-5xl text-center">
            {t("aboutUsTimeline.h2")}
          </h2>

          <div className="relative mx-auto mt-12 lg:mt-24 py-10 lg:py-20 max-w-6xl">
            {/* vertical line */}
            <div className="top-0 left-1/2 absolute bg-purple-400/40 w-px h-full -translate-x-1/2" />

            <div className="gap-y-20 grid grid-cols-[1fr_40px_1fr]">
              {timeline.map((item, i) => (
                <div key={i} className="contents">
                  {i % 2 === 0 ? (
                    <LeftItem {...item} />
                  ) : (
                    <RightItem {...item} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
