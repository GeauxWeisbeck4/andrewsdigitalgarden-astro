import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";
import netlify from "@astrojs/netlify/edge-functions";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), alpinejs(), mdx()],
});
