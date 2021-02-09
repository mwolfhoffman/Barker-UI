import { registerApplication, start } from "single-spa";

registerApplication(
  "vue",
  () => import("./src/vue/vue.app.js"),
  () => true // Always true because navbar is vue.
);

registerApplication(
  "react",
  () => import("./src/react/main.app.js"),
  () =>
    location.pathname.includes("feed") || location.pathname.includes("profile")
);

start();
