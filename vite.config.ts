import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves a project site from https://<owner>.github.io/<repo>/,
// so base must match the repository name exactly. Set it to "/" if you deploy
// to a custom domain instead.
export default defineConfig({
  plugins: [react()],
  base: "/PixelCodec/",
});
