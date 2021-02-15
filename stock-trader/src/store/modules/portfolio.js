const state = {
	funds: 10000,
	portfolio: [],
};

const mutations = {
	buyStock(state, { stockId, quantity, stockPrice }) {
		const record = state.portfolio.find((element) => element.id === stockId);
		if (record) {
			record.quantity += quantity;
		} else {
			state.portfolio.push({ id: stockId, quantity });
		}
		state.funds -= quantity * stockPrice;
	},
	sellStock(state, { stockId, quantity, stockPrice }) {
		const record = state.portfolio.find((element) => element.id === stockId);
		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.portfolio.splice(state.portfolio.indexOf(record), 1);
		}
		state.funds += quantity * stockPrice;
	},
	setPortfolio(state, portfolio) {
		state.portfolio = portfolio;
	},
	setFunds(state, funds) {
		state.funds = funds;
	},
};

const actions = {
	sellStock({ commit }, order) {
		commit("sellStock", order);
	},
	buyStock: ({ commit }, order) => {
		commit("buyStock", order);
	},
};

const getters = {
	stockPortfolio(state, getters) {
		return state.portfolio.map((portfolioStock) => {
			const stock = getters.stocks.find(
				(stock) => stock.id === portfolioStock.id
			);
			return {
				id: portfolioStock.id,
				name: stock.name,
				quantity: portfolioStock.quantity,
				price: stock.price,
			};
		});
	},
	funds(state) {
		return state.funds;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
