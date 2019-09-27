import { Squidex } from "~/services/squidex";

export default ({ app }, inject) => {
	inject("squidex", new Squidex);  
};
