import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact(), tsconfigPaths()],
  server: { port: 8008 },
});
