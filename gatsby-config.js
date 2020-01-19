module.exports = {
  siteMetadata: {
    title: 'Che Yen',
    author: 'maghin',
    imageUrl: 'https://i.imgur.com/Vz81GEl.png',
    description:
      'Modeling is my passion, I have been at it and will own my own clothing brand',
    keywords: `Model, Designer, photography, photo shoot, art, brand, clothing, style, fashion,  `,
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com/im.cheyen/',
    taiwan: 'https://bit.ly/2EOO2nJ',
    siteUrl: `https://che-yen.netlify.com`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Che Yen',
        short_name: 'Che',
        start_url: '/',
        background_color: '#2980b9',
        theme_color: '#2980b9',
        display: 'standalone',
        icon: 'src/images/cheMoon.png',
        orientation: 'landscape'
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-XXXXXXXX-X',
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
