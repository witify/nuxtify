const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");
import { Squidex } from "./services/squidex";
require("dotenv").config();

import config from "./config/general";

module.exports = {

	/*
  |--------------------------------------------------------------------------
  | Head
  |--------------------------------------------------------------------------
  */

	head: {
		titleTemplate: "%s - " + config.app.name,
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
      
			// Twitter Card Meta
			// Doc: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html
			{ name: "twitter:card", content: "summary" },
			//{ name: "twitter:site", value: "@witify" },
			//{ name: "twitter:creator", value: "@witify" },

			// OpenGraph Meta
			// Doc: http://ogp.me/
			{ hid: "og:url", name: "og:url", content: process.env.URL },
			{ hid: "og:type", name: "og:type", content: "website" },
			{ hid: "og:image", name: "og:image", content: process.env.URL + "/thumbnail.jpg" },
			{ hid: "og:image:type", name: "og:image:type", content: "image/jpg" },
			{ hid: "og:image:alt", name: "og:image:alt", content: process.env.NAME +" Logo" },
      
			// Favicons
			{ name: "msapplication-TileColor", content: "#ffffff"},
			{ name: "theme-color", content: "#ffffff"},
		],
		link: [
			// Favicons
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
			{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
			{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
			{ rel: "manifest", href: "/site.webmanifest" },
			{ rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#000000" },
      
			// Material Design Icons
			{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.6.95/css/materialdesignicons.min.css" },
		],
	},

	/*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

	loading: { color: "#1100FF" },

	/*
  |--------------------------------------------------------------------------
  | CSS
  |--------------------------------------------------------------------------
  */

	css: [
		"@/assets/sass/main.scss",
	],

	/*
  |--------------------------------------------------------------------------
  | Cache
  |--------------------------------------------------------------------------
  */

	cache: true,

	/*
  |--------------------------------------------------------------------------
  | Environnement variables
  |--------------------------------------------------------------------------
  */
  
	env: {
		URL: process.env.URL || "http://localhost:3000",
		NAME: process.env.NAME || "Nuxtify",
		SQUIDEX_CLIENT: process.env.SQUIDEX_CLIENT,
		SQUIDEX_SECRET: process.env.SQUIDEX_SECRET,
		MAILER_TOKEN: process.env.MAILER_TOKEN
	},
  
	/*
  |--------------------------------------------------------------------------
  | Build config
  |--------------------------------------------------------------------------
  */

	build: {

		analyze: false,
    
		extend (config, { isDev }) {
			if (isDev && process.client) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				});
			}

			if (!isDev) {
				config.plugins.push(
					new PurgecssPlugin({
						paths: glob.sync([
							path.join(__dirname, "./pages/**/*.vue"),
							path.join(__dirname, "./layouts/**/*.vue"),
							path.join(__dirname, "./components/**/*.vue")
						]),
						whitelist: ["html", "body"],
						whitelistPatterns: [/nuxt-/, /-enter$/, /-leave-active$/, /-enter-active$/, /aos/]
					})
				);
			}
		}
	},
  
	/*
  |--------------------------------------------------------------------------
  | Generate config
  |--------------------------------------------------------------------------
  */

	generate: {
		routes: async function () {
      
			let squidex = new Squidex;

			let response = await squidex.makeRequest({
				method: "get", 
				url: `${squidex.baseURL}/post`
			});
      
			let posts = response.data.items;
      
      
			let locales = [
				{iso: "fr", route: "/fr/blog/"},
				{iso: "en", route: "/blog/"},
			];
      
			return locales.map(locale => {
				return posts.map(post => {
					post = squidex.formatPost(post, locale.iso);
					return {
						route: locale.route + post.slug,
						payload: post
					};
				});
			}).reduce((acc, current) => {
				return acc.concat(current);
			}, []);
		}
	},

	/*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  */

	plugins: [
		"~/plugins/config",
		"~/plugins/seo",
		"~/plugins/squidex",
		"~/plugins/utils",
		"~/plugins/jsonld",
		//{ src: '~plugins/crisp.js', ssr: false }
	],

	/*
  |--------------------------------------------------------------------------
  | Modules
  |--------------------------------------------------------------------------
  */

	modules: [
		"@nuxtjs/axios",
		"@nuxtjs/component-cache",
		"@nuxtjs/dotenv",
		//'@nuxtjs/sentry',
		//'@nuxtjs/google-gtag',
		//'nuxt-facebook-pixel-module',
		["nuxt-i18n", {
			defaultLocale: "en",
			locales: [
				{
					code: "en",
					iso: "en-US",
					name: "English",
					file: "en.js"
				},
				{
					code: "fr",
					iso: "fr-CA",
					name: "Français",
					file: "fr.js"
				},
			],
			lazy: true,
			langDir: "lang/",
			seo: false,
			vueI18n: {
				fallbackLocale: "en"
			}
		}]
	],

	/*
  |--------------------------------------------------------------------------
  | Sentry config
  |--------------------------------------------------------------------------
  */

	sentry: {
		dsn: "PRIVATE_DNS",
		public_dns: "PUBLIC_DNS",
		disabled: process.env.NODE_ENV !== "production",
		disableClientSide: process.env.NODE_ENV !== "production",
	},

	/*
  |--------------------------------------------------------------------------
  | Facebook Pixel config
  |--------------------------------------------------------------------------
  */

	facebook: {
		track: "PageView",
		pixelId: "FACEBOOK_PIXEL_ID",
		disabled: false
	},

	/*
  |--------------------------------------------------------------------------
  | Google Tag config
  |--------------------------------------------------------------------------
  */

	"google-tag": {
		id: "GOOGLE_ID"
	}
};
