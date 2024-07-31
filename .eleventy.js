const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            style: "expanded"
        }
    });

    eleventyConfig.addPassthroughCopy("src/**/*.svg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/CNAME");

    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};