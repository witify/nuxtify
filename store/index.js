export const state = () => ({
	globals: {
		address: null,
		phone: null,
		email: null,
		footerText: null
	}
});

export const mutations = {
	setGlobals (state, globals) {
		state.globals = globals;
	}
};

export const getters = {
	globals: (state) => (locale) => {
		return {
			address: getFirst(state.globals.address, locale),
			phone: getFirst(state.globals.phone, locale),
			email: getFirst(state.globals.email, locale),
			footerText: getFirst(state.globals.footerText, locale)
		};
	}
};

export const actions = {
	async nuxtServerInit ({ commit }, { app }) {
		commit("setGlobals", await app.$squidex.globals());
	}
};

function getFirst(data, key) {
	if (data == null) {
		return null;
	}
	if (data[key] === undefined) {
		return Object.values(data)[0];
	}
	return data[key];
}