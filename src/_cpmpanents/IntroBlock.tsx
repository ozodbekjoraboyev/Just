import React from "react";
import bot from "../../public/bot.png";
import bgImage from "../../public/bgImage.png";
import { useTranslation } from "react-i18next";
import Contakt from "./Contakt";

function IntroBlock() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-black container m-auto relative overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={bgImage}
          alt="background"
        />

        <div className="relative z-10 container mx-auto md:flex flex-col md:flex-row items-center justify-between px-4 py-16">
          <div className="bg-white p-8 rounded-lg max-w-[500px] w-full mx-auto md:ml-12">
            <h1 className="text-5xl  font-bold text-gray-900 mb-6">
              JustRobotics
            </h1>
            <p className="text-xl md:text-3xl text-gray-700 mb-8">
              {t("intro.subtitle")}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {t("intro.freeLesson")}
            </p>
            <Contakt />
          </div>

          <div className="relative mt-10 md:mt-0">
            <img src={bot} alt="robot" className="max-w-[500px] w-full" />
          </div>
        </div>
      </div>

      <div className="bg-black  container m-auto py-16">
        <div className="container max-w-[1200px]  flex-wrap mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
          <div
            className="bg-[#ffe000] h-32 w-80 flex flex-col justify-center items-center text-xl font-semibold text-black rounded hover:bg-yellow-300 transition"
            style={{ boxShadow: "0 0 20px rgba(251, 191, 46, 0.9)" }}
          >
            300+{" "}
            <span className="text-base font-normal">{t("intro.students")}</span>
          </div>

          <div
            className="bg-[#ffe000] h-32 w-80 flex flex-col justify-center items-center text-xl font-semibold text-black rounded hover:bg-yellow-300 transition"
            style={{ boxShadow: "0 0 20px rgba(251, 191, 46, 0.9)" }}
          >
            25+{" "}
            <span className="text-base font-normal">{t("intro.teachers")}</span>
          </div>

          <div
            className="bg-[#ffe000] h-32 w-80 flex flex-col justify-center items-center text-xl font-semibold text-black rounded hover:bg-yellow-300 transition"
            style={{ boxShadow: "0 0 20px rgba(251, 191, 46, 0.9)" }}
          >
            60+{" "}
            <span className="text-base font-normal">{t("intro.groups")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(IntroBlock);
