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
    title: `Basisregistratie`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    gatsbyTransformerRemark,
    gatsbySourceFilesystem
  ]
};