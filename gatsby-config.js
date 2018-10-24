module.exports = {
    pathPrefix: "/rendahlemak-website",
  siteMetadata: {
    title: 'Hi there! I\'m adit',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e87d24',
        theme_color: '#e87d24',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Asia/Jakarta',
        format: 'ddd, DD MMM YYYY hh:mm A',
      },
    },
  ],
}
