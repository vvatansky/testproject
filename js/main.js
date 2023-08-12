const obj = {
	name: 'Jon',
	hello() {
		console.log("Hello, I'm " + this.name);
	},
	rename(name) {
		this.name = name;
	}
};
