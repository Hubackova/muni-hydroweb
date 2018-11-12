module.exports = {
  siteMetadata: {
    title: `Hydrobiologie - MUNI`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
        path: `${__dirname}/static/images/`,
        name: `images`,
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-remark`,
  ],
    pathPrefix: "/muni-hydroweb"

}