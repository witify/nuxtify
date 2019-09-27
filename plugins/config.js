export default ({ app }, inject) => {
	inject("config", {
		app: {
			name: process.env.NAME,
			url: process.env.URL,
		},
		socials: {
			facebook: "https://facebook.com",
			twitter: "https://twitter.com",
			dribbble: "https://dribbble.com",
			linkedin: "https://linkedin.com",
		}
	});
};
