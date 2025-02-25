const gatsbyTransformerRemark = {
  resolve: `gatsby-transformer-remark`,
}

const gatsbySourceFilesystem =
{
  resolve: 'gatsby-source-filesystem',
  options: {
    "name": "content",
    "path": `${__dirname}/src/content/`
  },
  __key: "pages"
}

module.exports = {
  siteMetadata: {
    title: `BRP Developer Portal`,
    siteUrl: `https://brp-api.github.io/devportal`
  },
  plugins: [
    gatsbyTransformerRemark,
    gatsbySourceFilesystem
  ],
  pathPrefix: "/devportal",
};