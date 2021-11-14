const withImages = require('next-images');

module.exports = withImages({
    reactStrictMode: true,
    inlineImageLimit: false,
    fileExtensions: ["png", "svg", "jpeg"],
    images: {
        disableStaticImages: true
    }
});
