import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root =
	"https://vue-course-5eaa3-default-rtdb.firebaseio.com/data.json";
Vue.config.productionTip = false;
Vue.http.interceptors.push((req, next) => {
	console.log(req);
	if (req.method === "POST") {
		req.method = "PUT";
	}
	next();
});

new Vue({
	render: (h) => h(App),
}).$mount("#app");
