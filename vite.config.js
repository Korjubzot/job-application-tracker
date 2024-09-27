import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.js"],
  },
  define: {
    // eslint-disable-next-line no-undef
    "process.env": process.env,
    // TODO fix this issue, preferably by reconfiguring how envs are imported
  },
});
