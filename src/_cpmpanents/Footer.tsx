import React from "react";
import { useTranslation } from "react-i18next";
import telegram from "../../public/telegram.png";
import youtube from "../../public/yotube.png";
import instagram from "../../public/instagram.png";

function Footer() {
  const { t } = useTranslation();

  // Explicitly define these as arrays of strings
  const courses: any = t("footer.courses", { returnObjects: true });
  const contacts: any = t("footer.contactLinks", { returnObjects: true });

  return (
    <footer className="bg-[#ffe000] container m-auto py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
              {t("footer.logo")}
            </div>
            <p className="text-gray-800 text-center md:text-left text-sm md:text-base">
              {t("footer.slogan")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={telegram}
                  alt={t("footer.telegram")}
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={youtube}
                  alt={t("footer.youtube")}
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={instagram}
                  alt={t("footer.instagram")}
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-black font-bold text-lg md:text-xl mb-3">
              {t("footer.coursesTitle")}
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              {courses.map((course: string, index: number) => (
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
              {t("footer.contactsTitle")}
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              {contacts.map((contact: string, index: number) => (
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
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
