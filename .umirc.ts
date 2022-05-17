import { defineConfig } from "dumi";
export default defineConfig({
  title: "link-hub",
  favicon: "/favicon.png",
  logo: "/favicon.png",
  outputPath: "docs-dist",
  hash: true,
  base: "/link-hub",
  publicPath: "/link-hub-lib/",
  exportStatic: {},
  dynamicImport: {},
  theme: {
    "@c-primary": "red"
  },
  mode: "site",
  resolve: {
    previewLangs: ["jsx", "tsx"]
  } 
  // more config: https://d.umijs.org/config
});
