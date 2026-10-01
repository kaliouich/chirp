import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Build output goes to dist/, which is the folder the deploy step uploads to S3.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
