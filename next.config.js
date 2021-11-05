const withImages = require('next-images');

module.exports = withImages({
    reactStrictMode: true,
    inlineImageLimit: false,
    fileExtensions: ["png", "svg"],
    images: {
        disableStaticImages: true
    }
});
