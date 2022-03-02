import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dtsPlugin from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index"),
      formats: ["es", "cjs"],
      fileName: 'index',
      name: "solidAntdIcons",
    },
  },
  plugins: [solidPlugin(), dtsPlugin()],
});
