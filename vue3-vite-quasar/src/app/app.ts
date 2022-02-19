import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import router from "./router";
import App from "./App.vue";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

export function initApp(): void {
  const app = createApp(App);
  app.use(router);
  app.use(createPinia());
  app.use(Quasar, { plugins: {} });
  app.mount("#app");
}
