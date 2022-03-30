const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Hydrobiologie - MUNI`,
    description:
      "Skupina hydrobiologie na Ústavu botaniky a zoologie Masarykovy univerzity",
    url: "https://botzool-hydra.netlify.com", // No trailing slash allowed!
    image: "/images/ecdyonurus_head.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "static/images/ecdyonurus_head.jpg",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        rehypePlugins: [
          // Generate heading ids for rehype-autolink-headings
          [require.esm("rehype-slug")],
          // To pass options, use a 2-element array with the
          // configuration in an object in the second element
          [require.esm("rehype-autolink-headings"), { behavior: "wrap" }],
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images/`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify",
  ],
  pathPrefix: "/muni-hydroweb",
};
