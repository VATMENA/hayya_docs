import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hayya Documentation',
  tagline: 'Next-generation division headquarters for VATMENA',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.hayya.vatsim.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VATMENA', // Usually your GitHub org/user name.
  projectName: 'hayya_docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VATMENA/hayya_docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VATMENA/hayya_docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hayya Documentation',
      logo: {
        alt: 'VATMENA Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
//        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/VATMENA',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://hayya.vatsim.me',
          label: 'HQ',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Division',
          items: [
            {
              label: 'Join Us',
              href: 'https://www.vatsim.me/division/join',
            },
            {
              label: 'Area Control Centers',
              href: 'https://www.vatsim.me/division/vaccs',
            },
            {
              label: 'Staff',
              href: 'https://www.vatsim.me/division/staff',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VATSIM Middle East & North Africa. Content on this site is for simulation use only. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
