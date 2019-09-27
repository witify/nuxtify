const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");
require('dotenv').config();

import config from "./config/general";

const contentful = require("contentful");
import { formatPosts } from "./plugins/contentful";

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
			{ name: "msapplication-TileColor", content: "#ffffff"},
			{ name: "theme-color", content: "#ffffff"},
			{ property: "og:image", content: "/thumbnail.jpg"},
			{ property: "og:type", content: "website"}
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
			{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
			{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
			{ rel: "manifest", href: "/site.webmanifest" },
			{ rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#000000" },
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
    WEBSITE_NAME: process.env.WEBSITE_NAME || 'Nuxtify',
    WEBSITE_URL: process.env.WEBSITE_URL || 'http://localhost',
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
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

			const client = contentful.createClient({
				space: process.env.CTF_SPACE_ID,
				accessToken: process.env.CTF_ACCESS_TOKEN
			});
    
			let posts = await client.getEntries({
				content_type: "post",
				order: "-sys.createdAt",
				locale: "*"
			});

			let locales = [
				{iso: "fr-CA", route: "/fr/blog/"},
				{iso: "en-US", route: "/blog/"},          
			];
      
			return locales.map(locale => {
				return formatPosts(posts, locale.iso).map(post => {
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
		"~/plugins/global.js",
		"~/plugins/contentful",
		"~/plugins/utils",
		//{ src: '~plugins/crisp.js', ssr: false }
	],

	/*
  |--------------------------------------------------------------------------
  | Modules
  |--------------------------------------------------------------------------
  */

	modules: [
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
