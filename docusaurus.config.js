const path = require("path");

module.exports = {
  title: 'Crypto Comix!',
  tagline: 'A community owned and operated comic shop',
  url: 'https://burrrata.github.io',
  baseUrl: '/crypto-comix/',
  favicon: 'img/favicon.ico',
  organizationName: 'burrrata', // Usually your GitHub org/user name.
  projectName: 'crypto-comix', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Crypto Comix",
      logo: {
        alt: 'Crypto Comix!',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs',
          activeBasePath: 'docs/',
          label: '📜 Docs',
          position: 'right'
        },
        {
          href: 'https://rinkeby.aragon.org/#/cryptocomixxx/',
          label: '🐄 CAO Example',
          position: 'right',
        },
        {
          href: 'https://github.com/JurisProject/crypto-comix',
          label: '💻 GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '🔭 Overview',
              to: 'docs/',
            },
            {
              label: '🗺️ Cooperative Structure',
              to: 'docs/doc3',
            },
            {
              label: '🚀 Deployment Instructions',
              to: 'docs/doc6',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '💬 Chat',
              href: 'https://discord.gg/259a376',
            },
            {
              label: '💻 Source Code',
              href: 'https://github.com/burrrata/crypto-comix',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '📰 Blog',
              to: 'blog',
            },
            {
              label: '🦜 Twitter',
              href: 'https://twitter.com/',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/burrrata/crypto-comix/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/burrrata/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/scss/index.scss'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, "./node_modules/docusaurus-plugin-sass")],
};
