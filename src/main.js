import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Calendar from "primevue/calendar";
library.add(fas, fab, far);

createApp(App)
  .component("Calendar", Calendar)
  .component("fa", FontAwesomeIcon)
  .use(PrimeVue)
  .use(router)
  .mount("#app");
