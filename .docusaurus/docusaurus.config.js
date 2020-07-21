export default {
  "plugins": [
    "/home/testingtesting123/Documents/Dev/burrrata/crypto-comix/node_modules/docusaurus-plugin-sass"
  ],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Crypto Comix",
      "logo": {
        "alt": "Crypto Comix!",
        "src": "img/logo.png"
      },
      "links": [
        {
          "to": "docs",
          "activeBasePath": "docs/",
          "label": "📜 Docs",
          "position": "right"
        },
        {
          "href": "https://rinkeby.aragon.org/#/cryptocomixxx/",
          "label": "🐄 CAO",
          "position": "right"
        },
        {
          "href": "https://github.com/JurisProject/crypto-comix",
          "label": "💻 GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "🔭 Overview",
              "to": "docs/"
            },
            {
              "label": "🗺️ Cooperative Structure",
              "to": "docs/doc3"
            },
            {
              "label": "🚀 Deployment Instructions",
              "to": "docs/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "💬 Chat",
              "href": "https://discord.gg/259a376"
            },
            {
              "label": "💻 Source Code",
              "href": "https://github.com/burrrata/crypto-comix"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "📰 Blog",
              "to": "blog"
            },
            {
              "label": "🦜 Twitter",
              "href": "https://twitter.com/"
            }
          ]
        }
      ]
    }
  },
  "title": "Crypto Comix!",
  "tagline": "A community owned and operated comic shop",
  "url": "https://burrrata.github.io",
  "baseUrl": "/crypto-comix/",
  "favicon": "img/favicon.ico",
  "organizationName": "burrrata",
  "projectName": "crypto-comix",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/home/testingtesting123/Documents/Dev/burrrata/crypto-comix/sidebars.js",
          "editUrl": "https://github.com/burrrata/crypto-comix/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/burrrata/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/testingtesting123/Documents/Dev/burrrata/crypto-comix/src/scss/index.scss"
        }
      }
    ]
  ]
};