/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // @ts-expect-error read
  plugins: [react(), tsconfigPaths(), svgr({ exportAsDefault: true })],
  server: {
    open: true,
    port: 5174,
    cors: false,
  },
});
