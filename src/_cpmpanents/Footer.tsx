import React from "react";
import telegram from "../../public/telegram.png";
import youtube from "../../public/yotube.png";
import instagram from "../../public/instagram.png";

function Footer() {
  const courses = [
    "Курсы",
    "Робототехника",
    "Английский для взрослых",
    "Английский для детей",
    "Шахматы",
    "Живопись",
  ];

  const contacts = ["Контакты", "Телеграм", "Инстаграм", "Ютюб"];

  return (
    <footer className="bg-[#ffe000] container m-auto py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
              ЛОГО
            </div>
            <p className="text-gray-800 text-center md:text-left text-sm md:text-base">
              SLOGAN: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={telegram}
                  alt="Telegram"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={youtube}
                  alt="YouTube"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-black font-bold text-lg md:text-xl mb-3">
              Курсы
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col  items-center md:items-start">
            <h3 className="text-black font-bold text-lg md:text-xl mb-3">
              Контакты
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              {contacts.map((contact, index) => (
                <li key={index}>
                  {index === 0 ? (
                    <span className="text-gray-800">{contact}</span>
                  ) : (
                    <a
                      href="#"
                      className="text-gray-800 hover:text-black transition-colors"
                    >
                      {contact}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-800 text-sm md:text-base">
          <p>© {new Date().getFullYear()} JustRobotics. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
