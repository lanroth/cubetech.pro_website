const eleventySass = require("eleventy-sass")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            style: "expanded"
        }
    })

    const copiedFileTypes = [
        "jpg",
        "jpeg",
        "png",
        "svg",
        "ico",
        "pdf",
        "webmanifest",
        "xml",
        "txt",
        "css",
        "js",
        "webp",
        "avif",
        "woff2",
        "woff",
        "eot",
        "ttf",
        "otf",
    ]

    copiedFileTypes.forEach(fileType => eleventyConfig.addPassthroughCopy(`src/**/*.${fileType}`))

    eleventyConfig.addPassthroughCopy("src/CNAME")

    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}