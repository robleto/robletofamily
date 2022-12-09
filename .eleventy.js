
module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/_data");
	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addWatchTarget("src/scss/");
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};