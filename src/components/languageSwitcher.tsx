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

  const languages = ["id", "en"] as const;

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex lg:justify-normal items-center gap-1 lg:gap-[11.5px] bg-white hover:bg-blue-gray-50 active:bg-blue-gray-50 ml-2 p-2 rounded-full w-16 lg:w-[8rem] font-normal text-base tracking-normal"
        >
          <img
            src={langFlagSrc[currentLang]}
            className="w-[26px] lg:w-[39px] h-[26px] lg:h-[39px]"
          />

          <span className="hidden lg:block font-semibold text-black text-lg">
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

      <MenuList className="bg-white mx-2 -ml-3 lg:ml-0 p-1 rounded-2xl lg:rounded-3xl w-10 lg:w-[8rem] min-w-0">
        <ul className="flex flex-col gap-2 focus:outline-none focus:ring-0">
          {languages.map((lng) => (
            <MenuItem
              onClick={() => changeLanguage(lng)}
              className="flex justify-center lg:justify-normal items-center gap-[11.5px] p-0 lg:p-2.5 lg:pl-1"
              key={lng}
            >
              <img
                src={langFlagSrc[lng]}
                className="w-[26px] lg:w-[39px] h-[26px] lg:h-[39px]"
              />

              <span className="hidden lg:block font-semibold text-black text-lg">
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
