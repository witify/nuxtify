import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import * as contentful from "contentful";

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
	space: process.env.CTF_SPACE_ID,
	accessToken: process.env.CTF_CDA_ACCESS_TOKEN
};

export function createClient () {
	return contentful.createClient(config);
}

/**
 * Document to HTML render
 * @param {*} document 
 * @return {String}
 */
export function renderer (document) {
	return documentToHtmlString(document);
}

/**
 * Returns a simpler post object from raw data
 * @param {*} data 
 * @param {String} locale 
 * @return {Array}
 */
export function formatPosts (data, locale) {

	let posts = [];

	for (let i = 0; i < data.items.length; i++) {
		let post = data.items[i].fields;
		let pictureId = Object.values(post.picture)[0].sys.id;
		let picture = data.includes.Asset.find(a => a.sys.id == pictureId).fields;
		let pictureFile = Object.values(picture.file)[0];
    
		posts.push({
			title: post.title[locale],
			slug: post.slug[locale],
			description: post.description ? post.description[locale] : undefined,
			body: documentToHtmlString(post.body[locale]),
			picture: {
				url: pictureFile.url,
				id: pictureId
			}
		});
	}

	return posts;
}
