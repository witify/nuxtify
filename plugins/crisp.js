export default ({ app }) => {

	/*
    ** Seulement exécuté côté client et en mode production
    */
	if (process.env.NODE_ENV !== "production") return;
    
	window.$crisp = [];
	window.CRISP_WEBSITE_ID = "f6aabf2c-d70e-45c5-82db-b3b6bc7afab9";

	(function() {
		var d = document;
		var s = d.createElement("script");

		s.src = "https://client.crisp.chat/l.js";
		s.async = 1;
		d.getElementsByTagName("head")[0].appendChild(s);
	})();
};
