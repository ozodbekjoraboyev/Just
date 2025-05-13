import React from "react";
import rasm1 from "../../public/rasm1.png";
import rasm2 from "../../public/rasm2.png";
import rasm3 from "../../public/rasm3.png";
import rasm4 from "../../public/rasm4.png";
import rasm5 from "../../public/rasm5.png";
import bgImage from "../../public/bgImage2.png";
import bgImage3 from "../../public/bgImage3.png";
import { useTranslation } from "react-i18next";

// Kartalar uchun rasmlar va IDlar
const card = [
  { id: 1, cardKey: "robotics", cardImg: rasm1 },
  { id: 2, cardKey: "painting_kids", cardImg: rasm2 },
  { id: 3, cardKey: "painting_adults", cardImg: rasm3 },
  { id: 4, cardKey: "english_kids", cardImg: rasm4 },
  { id: 5, cardKey: "chess", cardImg: rasm5 },
];

function Card() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <p className="text-lg w-full  container mx-auto p-8 text-black m-auto leading-relaxed">
        <span className="font-bold text-xl inline-block mr-2">
          JustRobotics
        </span>
        – {t("description_part_1")}{" "}
        <span className="font-bold text-xl inline-block mr-2">
          JustRobotics
        </span>{" "}
        – {t("description_part_2")}
      </p>
      <div className="container bg-black m-auto relative">
        <h1 className="text-[#ffe000] text-4xl font-bold text-center max-w-[350px] pb-12 m-auto pt-12">
          {t("author_courses_title")}
        </h1>
        <div className="relative text-black">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={bgImage}
            alt="background"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4 z-10 relative">
            {card.map((item) => (
              <div
                key={item.id}
                className="bg-[#ffe000] p-6 rounded-lg shadow-xl text-center"
              >
                <img
                  src={item.cardImg}
                  alt={item.cardKey}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="font-semibold text-xl">{t(item.cardKey)}</p>
              </div>
            ))}
          </div>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
            src={bgImage3}
            alt="background"
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
