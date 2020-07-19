const path = require("path");

module.exports = {
  title: 'Crypto Comix!',
  tagline: 'The First DAO Owned Local Comic Shop',
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
          to: 'docs',activeBasePath: 'docs/', label: 'Cooperative Structure', position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/JurisProject/crypto-comix',
          label: 'GitHub',
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
              label: 'Cooperative Structure',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/JurisProject/crypto-comix',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
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
            'https://github.com/JurisProject/crypto-comix/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/JurisProject/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/scss/index.scss'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, "./node_modules/docusaurus-plugin-sass")],
};
