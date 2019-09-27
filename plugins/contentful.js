import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import * as contentful from "contentful";

function createClient () {
	return contentful.createClient({
		space: process.env.CTF_SPACE_ID,
		accessToken: process.env.CTF_ACCESS_TOKEN
	});
}

/**
 * Document to HTML render
 * @param {*} document 
 * @return {String}
 */
function renderer (document) {
	const options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
				`<img src="${fields.file.url}" alt="${fields.title}"/>`,
		},
	};

	return documentToHtmlString(document, options);
}

/**
 * Returns a simpler post object from raw data
 * @param {*} data 
 * @param {String} locale 
 * @return {Array}
 */
function formatPosts (data, locale) {

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
			body: renderer(post.body[locale]),
			picture: {
				url: pictureFile.url,
				id: pictureId
			}
		});
	}

	return posts;
}

export { createClient, renderer, formatPosts };
