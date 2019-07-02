const config = require("./src/config/basics")

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      // options: {
      //   name: `content`,
      //   path: `${__dirname}/src/content/`,
      // },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // supports only JPG and PNG
              maxWidth: 1000,
              linkImagesToOriginal: true,
              showCaptions: false,
              quality: 60,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsTrackingID,
      },
    },
  ],
}
