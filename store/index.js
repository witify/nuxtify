export const state = () => ({
	globals: {
		address: null,
		phone: null,
		email: null,
		footerText: null
	},
	socialMedia: []
});

export const mutations = {
	setGlobals (state, globals) {
		state.globals = globals;
	},
	setSocialMedia (state, socialMedia) {
		state.socialMedia = socialMedia;
	}
};

export const getters = {
	globals: (state) => (locale) => {
		return {
			logo: state.globals.logo,
			logoWhite: state.globals.logoWhite,
			logoBlack: state.globals.logoBlack,
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
		commit("setSocialMedia", await app.$squidex.socialmedia());
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