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
          "label": "Cooperative Structure",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://github.com/JurisProject/crypto-comix",
          "label": "GitHub",
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
              "label": "Cooperative Structure",
              "to": "docs/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/JurisProject/crypto-comix"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            }
          ]
        }
      ]
    }
  },
  "title": "Crypto Comix!",
  "tagline": "The First DAO Owned Local Comic Shop",
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
          "editUrl": "https://github.com/JurisProject/crypto-comix/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/JurisProject/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/testingtesting123/Documents/Dev/burrrata/crypto-comix/src/scss/index.scss"
        }
      }
    ]
  ]
};