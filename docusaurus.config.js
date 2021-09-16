/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CENOS Antenna Design Docs',
  tagline: 'The tagline of my site',
  url: 'https://ad.cenos-platform.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cenos', // Usually your GitHub org/user name.
  projectName: 'cenos-docs-antennas', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CENOS Antenna Design',
      logo: {
        alt: 'Cenos Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://www.cenos-platform.com/antenna-design',
          label: 'CENOS Home',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} CENOS`,
    },
    gtag: {
      trackingID: 'G-NZL2ED8GXN',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
