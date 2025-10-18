import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match: [
          "https://www.amazon.co.jp/*",
          "https://booklog.jp/item/1/*",
          "https://www.oreilly.co.jp/books/*",
          "https://www.seshop.com/product/detail/*",
          "https://book.impress.co.jp/books/*",
          "https://gihyo.jp/book/*",
        ],
        grant: "none",
      },
      styleImport: true,
    }),
  ],
});
