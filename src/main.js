import "@/assets/css/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

const app = createApp(App);
app.use(router);
app.use(VuePlyr, {
    plyr: {
        controls: ["play", "progress", "volume", "fullscreen"],
        autoplay: true,
    }, // Configurações opcionais do Plyr
});
app.mount("#app");
