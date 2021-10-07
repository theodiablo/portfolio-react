module.exports = {
  siteMetadata: {
    siteUrl: "https://theo.camboulive.solutions",
    title: "Théo Camboulive - Tech for Good",
    author: "Théo Camboulive",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Merriweather:400,300,300italic,400italic,700,700italic",
            "Merriweather+Sans:400,700",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "en",
        langKeyForNull: "en",
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-T8VW35DESW"],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // Enable or disable Service Workers. Can be interesting?
    //"gatsby-plugin-offline",
  ],
};
