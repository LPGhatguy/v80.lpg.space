export default class Post {
	constructor(metadata) {
		Object.assign(this, metadata);
	}

	route() {
		return `/post/${ this.slug() }`
	}

	slug() {
		return `${ this.date[0] }-${ this.date[1] }-${ this.date[2] }-${ this.id }`;
	}
}