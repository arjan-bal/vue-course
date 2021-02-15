const state = {
	counter: 0,
};

const getters = {
	doubleCounter: (state) => {
		return state.counter * 2;
	},
};

const mutations = {
	increment: (state, payload) => {
		state.counter += payload;
	},
	decrement: (state, payload) => {
		state.counter -= payload;
	},
};

const actions = {
	increment: (context, payload) => {
		setTimeout(() => {
			context.commit("increment", payload);
		}, 2000);
	},
	decrement: (context, payload) => {
		setTimeout(() => {
			context.commit("decrement", payload);
		}, 1000);
	},
};

export default {
	state,
	mutations,
	getters,
	actions,
};
