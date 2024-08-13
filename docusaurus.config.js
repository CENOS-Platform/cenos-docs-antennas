/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CENOS Radio Frequency Docs',
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
      title: 'CENOS Radio Frequency',
      logo: {
        alt: 'Cenos Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://www.cenos-platform.com/radio-frequency-simulation-software',
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
    googleTagManager: {
      containerId: 'GTM-P7SHFH8H',
    },
    // algolia: {
    //   appId: 'TEL58RDMQQ',
    //   apiKey: 'fec7e73e384b37585cf920a8a8281eb4',
    //   indexName: 'cenos_docs_antennas',
    //   searchParameters: {},
    // },
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
