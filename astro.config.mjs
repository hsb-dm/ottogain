import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import astroI18next from "astro-i18next";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), astroI18next()],
  // site: "https://creativetimofficial.github.io",
  base: "/",
});
