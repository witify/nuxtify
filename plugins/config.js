export default ({ app }, inject) => {
	inject("config", {
		app: {
			name: process.env.WEBSITE_NAME,
			url: process.env.WEBSITE_URL,
		},
		socials: {
			facebook: "https://facebook.com",
			twitter: "https://twitter.com",
			dribbble: "https://dribbble.com",
			linkedin: "https://linkedin.com",
		}
	});
};
