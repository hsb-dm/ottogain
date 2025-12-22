import React, { useMemo, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  MenuItem,
  IconButton,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import { useLocation } from "react-router-dom";

import navBurgerImg from "../assets/nav-burger.svg";
import navLogoImg from "../assets/nav-logo-color.svg";
import LanguageSwitcher from "./languageSwitcher";

import { useTranslation } from "react-i18next";
import "../i18n";

// nav list menu
export const navListMenuItems = [
  {
    title: "nav.home",
    href: "/",
  },
  {
    title: "nav.aboutUs",
    href: "/about-us",
  },
  {
    title: "nav.service",
    href: "/services",
  },
  {
    title: "nav.partnership",
    href: "/partnership",
  },
  {
    title: "nav.contactUs",
    href: "/contact-us",
  },
];

function NavList() {
  const { t } = useTranslation();
  const [openLangSwitcher, setopenLangSwitcher] = useState(false);

  const renderItems = navListMenuItems.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography
          variant="paragraph"
          color="white"
          className="mb-1 font-normal text-center"
        >
          {t(title)}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <ul className="flex lg:flex-row flex-col lg:items-center gap-2 mt-2 lg:mt-0 mb-4 lg:mb-0">
      <LanguageSwitcher
        openMenu={openLangSwitcher}
        setOpenMenu={setopenLangSwitcher}
      />

      <ul className="lg:hidden flex flex-col gap-1 w-full">{renderItems}</ul>
    </ul>
  );
}

function NavTabs() {
  const { t } = useTranslation();
  const location = useLocation();

  const pathName = useMemo(() => location.pathname, [location.pathname]);

  const [activeTabHref, setActiveTabHref] = useState(pathName ?? "");

  return (
    <Tabs
      value={navListMenuItems.find((el) => el.href === activeTabHref)?.title}
      className="bg-white rounded-3xl"
    >
      <TabsHeader className="py-2">
        {navListMenuItems.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            onClick={() => setActiveTabHref(href)}
            className={`mr-4 ml-2 cursor-pointer py-1.5 font-medium whitespace-nowrap px-6 rounded-3xl ${activeTabHref === href ? "bg-purple-radial text-white" : ""}`}
          >
            {t(title)}
          </a>
        ))}
      </TabsHeader>
    </Tabs>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      className={`sticky inset-0 z-10 p-1 border-0 backdrop-saturate-0 backdrop-blur-0 bg-opacity-100 transition-shadow rounded-none bg-[#26153B] w-full max-w-full lg:border-0 lg:p-4 lg:pl-24 lg:pr-24 ${
        isNavOpen ? "shadow" : ""
      }`}
    >
      <div className="relative flex items-center mx-auto text-blue-gray-900">
        <a href="/" className="mr-4 ml-2 py-1.5 cursor-pointer">
          <img src={navLogoImg.src} className="w-[5.25rem] lg:w-[9rem]" />
        </a>

        <div className="hidden lg:flex justify-center w-full">
          <NavTabs />
        </div>

        <div className="hidden lg:flex ml-auto">
          <NavList />
        </div>

        <IconButton
          size="lg"
          variant="text"
          onClick={toggleIsNavOpen}
          className="lg:hidden mr-2 ml-auto"
        >
          <img src={navBurgerImg.src} className="w-full h-full" />
        </IconButton>
      </div>

      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
