module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tiptap-image-reproduce/'
    : '/',
    outputDir: 'docs'
}