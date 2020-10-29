module.exports = {
  siteMetadata: {
    title: `UNiD Docs`,
    description: ``,
    keywords: [`gatsby`, `theme`, `react`],
    author: `CollaboGate`,
    siteUrl: `https://gatsby-starter-catalyst.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Introduction`,
        link: `/`,
        type: `internal`, //internal or anchor
        location: `left`,
        subMenu: [
          {
            name: `Web of Trust`,
            link: `/intro/trust`,
            type: `internal`,
          },
          {
            name: `Digital Identity`,
            link: `/intro/digital-identity`,
            type: `internal`,
          },
          {
            name: `Use Cases`,
            link: `/intro/usecases`,
            type: `internal`,
          }
        ],
      },
      {
        name: `UNiD Platform`,
        link: `/unid`,
        type: `internal`, //internal or anchor
        location: `left`,
        subMenu: [
          {
            name: `UNiD Core`,
            link: `/unid/core`,
            type: `internal`,
          },
          {
            name: `UNiD Drivers`,
            link: `/unid/drivers`,
            type: `internal`,
          },
          {
            name: `UNiD Extensions`,
            link: `/unid/extensions`,
            type: `internal`,
          },
          {
            name: `Developer Tools`,
            link: `/unid/developer-tools`,
            type: `internal`,
          },
        ]
      },
      {
        name: `Tenant`,
        link: `/tenant`,
        type: `internal`, //internal or anchor
        location: `left`,
        subMenu: [
          {
            name: `Tenant Setup`,
            link: `/tenant/setup`,
            type: `internal`,
          }
        ]
      },
      {
        name: `Tutorial`,
        link: `/tutorial`,
        type: `internal`, //internal or anchor
        location: `left`,
        subMenu: [
          {
            name: `Quick Start`,
            link: `/tutorial/quick-start`,
            type: `internal`,
          },
          {
            name: `Getting Started`,
            link: `/tutorial/getting-started`,
            type: `internal`,
          },
          {
            name: `DID Operation`,
            link: `/tutorial/did-operation`,
            type: `internal`,
          },
          {
            name: `Verifiable Credential`,
            link: `/tutorial/verifiable-credential`,
            type: `internal`,
          },
          {
            name: `DID-Auth`,
            link: `/tutorial/did-auth`,
            type: `internal`,
          }
        ]
      },
      {
        name: `VC Data`,
        link: `/vc-data`,
        type: `internal`, //internal or anchor
        location: `left`,
      },
    ],
    socialLinks: [
      {
        name: `Github`,
        link: `https://www.github.com/getunid`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // useKatex: false,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
      },
    },
    `gatsby-theme-catalyst-header-side`, // Try `gatsby-theme-catalyst-header-side`
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
