import Vue from "vue";

export const loadData = async ({ commit }) => {
	const response = await Vue.http.get("");
	const data = response.body;
	// console.log(data);
	if (!data) return;
	commit("setStocks", data.stocks);
	commit("setPortfolio", data.portfolio);
	commit("setFunds", data.funds);
};
