import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

// If this is a *project page* repo (e.g., quantum-ml-site), set base to `/<repo>/`.
// If it's a *user page* repo (USERNAME.github.io), set base to "/".
const isProjectPage = false; // change to false for USERNAME.github.io
export default defineConfig({
  base: isProjectPage ? "/quantum-ml-site/" : "/",
  plugins: [react(), tailwind()],
});
