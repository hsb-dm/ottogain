import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import type { handler } from "@material-tailwind/react/types/components/dialog";
import { useTranslation } from "react-i18next";

import enFlag from "../assets/nav-en.png";
import idFlag from "../assets/nav-id.png";

const LanguageSwitcher = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: handler;
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split("-")[0] as "en" | "id";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const langFlagSrc = {
    en: enFlag.src,
    id: idFlag.src,
  };

  const languages = ["en", "id"] as const;

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 text-base font-normal tracking-normal bg-white active:bg-blue-gray-50 hover:bg-blue-gray-50 rounded-full p-2 w-16 ml-2 lg:justify-normal lg:w-[8rem] lg:gap-[11.5px]"
        >
          <img
            src={langFlagSrc[currentLang]}
            className="h-[26px] w-[26px] lg:h-[39px] lg:w-[39px]"
          />

          <span className="hidden lg:block font-semibold text-lg text-black">
            {currentLang.toUpperCase()}
          </span>

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="bg-white mx-2 rounded-2xl w-10 min-w-0 -ml-3 p-1 lg:w-[8rem] lg:rounded-3xl lg:ml-0">
        <ul className="gap-2 flex-col flex focus:outline-none focus:ring-0">
          {languages.map((lng) => (
            <MenuItem
              onClick={() => changeLanguage(lng)}
              className="p-0 flex items-center gap-[11.5px] justify-center lg:justify-normal lg:p-2.5 lg:pl-1"
              key={lng}
            >
              <img
                src={langFlagSrc[lng]}
                className="h-[26px] w-[26px] lg:h-[39px] lg:w-[39px]"
              />

              <span className="hidden lg:block font-semibold text-lg text-black">
                {lng.toUpperCase()}
              </span>
            </MenuItem>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
