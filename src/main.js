import Vue from "vue";
import App from "./App";
import common from "@/common/index";
import uView from "uview-ui";
import store from "@/store/index";
import { router, RouterMount } from "@/common/router/index";

async function bootstrap() {
    App.mpType = "app";

    Vue.use(uView);

    Vue.use(router);

    Vue.use(common);

    const app = new Vue({
        store,
        ...App,
    });

    // #ifdef H5
    RouterMount(app, router, "#app");
    // #endif

    app.$mount();
}

bootstrap();
