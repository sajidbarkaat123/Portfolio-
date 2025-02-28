import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import jsconfigPaths from 'vite-jsconfig-paths'
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  plugins: [ jsconfigPaths(), remix({
    routes(defineRoutes) {
      return defineRoutes(route => {
        route('/', 'routes/home/route.js', { index: true });
      });
    },
  }), netlifyPlugin()],
});
