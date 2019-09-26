export default ({ app }, inject) => {
	inject("utils", {
		currentLocaleISO () {
			return app.i18n.locales.find(l => l.code == app.i18n.locale).iso;
		},
		limit (str, length, ending) {
			if (length == null) {
				length = 100;
			}
			if (ending == null) {
				ending = "...";
			}
			if (str.length > length) {
				return str.substring(0, length - ending.length) + ending;
			} else {
				return str;
			}
		}
	});
};
