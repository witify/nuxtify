export default ({ route }, inject) => {
	inject("seo", {

		head (data) {

			let headData = {
				title: undefined,
				meta: [{
					hid: "og:url",
					name: "og:url",
					content: process.env.URL + route.path
				}]
			};
      
			if (data.title !== undefined) {
        
				let title = data.title + " - " + process.env.NAME;
        
				headData.title = title;
				headData.meta.push({
					hid: "og:title",
					name: "og:title",
					content: title
				});
			}
      
			if (data.description !== undefined) {
				headData.meta.push({
					hid: "description",
					name: "description",
					content: data.description
				});
				headData.meta.push({
					hid: "og:description",
					name: "og:description",
					content: data.description
				});
			}
      
			return headData;
		}
    
	});
};
