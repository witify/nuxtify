
import axios from "axios";

class Squidex {

	constructor() {
    
		this.TOKEN_LIFETIME = 3 * 60; // 3 hours
    
		this.host = "https://cloud.squidex.io";
		this.baseURL = `${this.host}/api/content/${process.env.SQUIDEX_CLIENT}`;

		this.token = null;
		this.lastUpdate = 0;
	}

	async init() {
		if (this.token == null || this.currentTimestamp() >= this.lastUpdate + this.TOKEN_LIFETIME) {
			this.token = await this.getToken();
			this.lastUpdate = this.currentTimestamp();
		}
	}
  
	async getToken() {
		let response = await axios.post(
			`${this.host}/identity-server/connect/token`,
			`grant_type=client_credentials&client_id=${process.env.SQUIDEX_CLIENT}:default&client_secret=${process.env.SQUIDEX_SECRET}&scope=squidex-api`, {
				headers: {
					"content-type": "application/x-www-form-urlencoded"
				}
			});
  
		return response.data.access_token;
	}

	currentTimestamp() {
		return Math.floor(Date.now() / 1000 / 60); // in minutes
	}

	asset(id) {
		return `${this.host}/api/assets/${id}`;
	}

	async makeRequest(request) {
		await this.init();
		if (request.headers === undefined) {
			request.headers = {};
		}
		request.headers.Authorization = `Bearer ${this.token}`;
		return await axios(request);
	}

	async getFirstItem(page) {
		let response = await this.makeRequest({
			method: "get",
			url: `${this.baseURL}/${page}`
		});

		return response.data.items[0].data;
	}

	async homepage(locale) {
		let data = await this.getFirstItem("homepage");

		return {
			seo_title: this.getFirst(data.seo_title, locale) || this.getFirst(data.title, locale),
			seo_description: this.getFirst(data.seo_description, locale) || this.getFirst(data.title, locale),
			title: this.getFirst(data.title, locale),
			text: this.getFirst(data.text, locale),
		};
	}

	async about(locale) {
		let data = await this.getFirstItem("about");

		return {
			seo_title: this.getFirst(data.seo_title, locale) || this.getFirst(data.title, locale),
			seo_description: this.getFirst(data.seo_description, locale) || this.getFirst(data.title, locale),
			title: this.getFirst(data.title, locale),
			text: this.getFirst(data.text, locale),
		};
	}

	async blog(locale) {
		let data = await this.getFirstItem("blog");

		return {
			seo_title: this.getFirst(data.seo_title, locale) || this.getFirst(data.title, locale),
			seo_description: this.getFirst(data.seo_description, locale) || this.getFirst(data.title, locale),
			title: this.getFirst(data.title, locale),
			text: this.getFirst(data.text, locale),
		};
	}

	async posts(locale) {
		let response = await this.makeRequest({
			method: "get",
			url: `${this.baseURL}/post`
		});

		let data = response.data.items;

		return data.map(post => this.formatPost(post, locale));
	}

	async post(slug, locale) {
		let response = await this.makeRequest({
			method: "get",
			url: `${this.baseURL}/post?$filter=data/slug/${locale} eq '${slug}'`
		});

		return response.data.items[0];
	}

	async globals() {
		let data = await this.getFirstItem("globals");

		return {
			footerText: data.footerText,
			address: data.address,
			email: data.email,
			phone: data.phone
		};
	}

	formatPost(post, locale) {
		post = post.data;
		return {
			seo_title: this.getFirst(post.seo_title, locale) || this.getFirst(post.title, locale),
			seo_description: this.getFirst(post.seo_description, locale) || this.getFirst(post.title, locale),
			slug: this.getFirst(post.slug, locale),
			title: this.getFirst(post.title, locale),
			text: this.getFirst(post.text, locale),
			picture: post.picture.iv[0],
		};
	}

	getFirst(data, key) {
		if (data == null) {
			return null;
		}
		if (data[key] != undefined) {
			return data[key];
		}
		return Object.values(data)[0];
	}
}

export { Squidex };
