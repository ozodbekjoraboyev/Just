import React, { useState, type ReactNode } from "react";
import logo from "../../public/logo.svg";
import { Dropdown, Menu } from "antd";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Home, Mail, PencilLine, User } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = (lng: any) => i18n.changeLanguage(lng);

  const courseMenu = (
    <Menu
      items={[
        { key: "1", label: t("robotics") },
        { key: "2", label: t("english") },
        { key: "3", label: t("painting_kids") },
        { key: "4", label: t("painting_adults") },
      ]}
      className="animate-fadeIn"
    />
  );

  const NavItem = ({ children }: { children: ReactNode }) => (
    <p className="hover:text-[#ffe000] transition-all duration-300 cursor-pointer hover:scale-105">
      {children}
    </p>
  );

  return (
    <div>
      <div className="h-1 bg-[#ffe000] shadow-2xl shadow-amber-300 animate-pulse" />

      <nav className="bg-black container mx-auto p-4 text-white flex items-center justify-between relative">
        <div className="bg-[#ffe000] rounded-full w-12 h-12 flex items-center justify-center hover:rotate-180 transition-transform duration-500">
          <img src={logo} alt="Logo" className="w-8 h-8" />
        </div>

        <div className="hidden md:flex gap-8 lg:gap-12 items-center">
          <NavItem>{t("home")}</NavItem>
          <NavItem>{t("about")}</NavItem>
          <Dropdown overlay={courseMenu} placement="bottomLeft" arrow>
            <p className="cursor-pointer flex items-center gap-2 border border-amber-400 px-3 py-1 rounded-2xl hover:text-[#ffe000] hover:bg-black hover:border-amber-300 transition-all duration-300">
              {t("courses")}
              <DownOutlined
                className="animate-bounce"
                style={{ animationDuration: "2s" }}
              />
            </p>
          </Dropdown>

          <NavItem>{t("contact")}</NavItem>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          <button className="bg-[#ffe000] text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-md shadow-yellow-300">
            {t("call")}
          </button>

          <div className="flex items-center gap-3">
            {["ru", "en", "uz"].map((lng) => (
              <div
                key={lng}
                onClick={() => changeLang(lng)}
                className={`px-3 py-1 rounded font-semibold cursor-pointer transition-all ${
                  i18n.language === lng
                    ? "bg-[#ffe000] text-black shadow-md shadow-yellow-300"
                    : "text-[#ffe000] hover:scale-105"
                }`}
              >
                {lng.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <CloseOutlined className="text-2xl" />
            ) : (
              <MenuOutlined className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black z-50 p-4 animate-slideDown">
            <div className="flex flex-col gap-4">
              <div className=" flex items-center gap-4">
                <Home />
                <NavItem> {t("home")}</NavItem>
              </div>
              <div className=" flex items-center gap-4">
                <PencilLine />
                <NavItem>{t("about")}</NavItem>
              </div>
              <Dropdown overlay={courseMenu} placement="bottomLeft" arrow>
                <p className="cursor-pointer flex items-center gap-2 border border-amber-400 px-3 py-1 rounded-2xl hover:text-[#ffe000] hover:bg-black hover:border-amber-300 transition-all duration-300">
                  <Mail /> {t("courses")}
                  <DownOutlined
                    className="animate-bounce"
                    style={{ animationDuration: "2s" }}
                  />
                </p>
              </Dropdown>
              <div className=" flex items-center gap-4">
                <User />
                <NavItem>{t("contact")}</NavItem>
              </div>

              <button className="bg-[#ffe000] text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-all duration-300 mt-4 shadow-md shadow-yellow-300">
                {t("call")}
              </button>

              <div className="flex gap-4 justify-center mt-4">
                {["ru","en", "uz"].map((lng) => (
                  <div
                    key={lng}
                    onClick={() => changeLang(lng)}
                    className={`px-3 py-1 rounded font-semibold cursor-pointer transition-all ${
                      i18n.language === lng
                        ? "bg-[#ffe000] text-black shadow-md shadow-yellow-300"
                        : "text-[#ffe000] hover:scale-105"
                    }`}
                  >
                    {lng.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-1 bg-[#ffe000] shadow-lg shadow-amber-300 animate-pulse" />
    </div>
  );
}

export default React.memo(Navbar);
