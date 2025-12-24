import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

import { Button, Typography } from "@material-tailwind/react";

import { useTranslation } from "react-i18next";
import "../../i18n";
import Footer from "../footer";

export function HeroSectionFour() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <Navbar />

      <header className="h-screen min-h-screen w-screen bg-white">
        <div
          className="relative h-screen flex align-center flex-col justify-center text-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1650692201357-3b1b15469952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')`,
          }}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 z-0"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-7xl z-[5]"
          >
            {t("404")}
          </Typography>

          <div className="w-auto mx-auto z-[5]">
            <div className="flex items-center">
              <a href="./">
                <Button color="dark" className="w-full px-4">
                  Go Home
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <Footer />
    </ThemeProvider>
  );
}

export default HeroSectionFour;
