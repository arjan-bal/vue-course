import stocks from "../../../data/stocks";

const state = {
	stocks: [],
};

const getters = {
	stocks: (state) => {
		// return state.stocks;
		return state.stocks;
	},
};

const mutations = {
	setStocks: (state, stocks) => {
		state.stocks = stocks;
	},
	randomizeStocks: (state) => {
		state.stocks.forEach((stock) => {
			stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
		});
	},
};

const actions = {
	initStocks: ({ commit }) => {
		commit("setStocks", stocks);
	},
	randomizeStocks: ({ commit }) => {
		commit("randomizeStocks");
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
};
