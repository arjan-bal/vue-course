import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { store } from "./store/store";
import VueResource from "vue-resource";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root =
	"https://vue-course-5eaa3-default-rtdb.firebaseio.com/stock-data.json";
const router = new VueRouter({ routes, mode: "history" });

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
