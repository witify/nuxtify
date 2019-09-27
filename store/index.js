import { createClient } from "~/plugins/contentful";

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
	async nuxtServerInit ({ commit }) {
		const client = createClient();
    
		let data = await client.getEntries({
			content_type: "globals",
			locale: "*",
			limit: 1
		});
    
		let globals = data.items[0].fields;
    
		globals = {
			phone: globals.phone,
			email: globals.email,
			address: globals.address,
			footerText: globals.footerText
		};
        
		commit("setGlobals", globals);
	}
};

function getFirst(data, key) {
	if (data[key] === undefined) {
		return Object.values(data)[0];
	}
	return data[key];
}