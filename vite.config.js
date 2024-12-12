import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/wtwr_project/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});