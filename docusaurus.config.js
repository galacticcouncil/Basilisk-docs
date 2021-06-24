module.exports = {
  title: "Basilisk Docs",
  tagline: "Let's learn this",
  url: "https://docs.bsx.fi",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.png",
  organizationName: "galacticcouncil", // Usually your GitHub org/user name.
  projectName: "Basilisk-docs", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: "Basilisk Documentation",
      logo: {
        alt: "Basilisk logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: "https://bsx.fi",
          label: "Basilisk Homepage",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/S8YZj5aXR6",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/bsx_finance",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intergalactic, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/galacticcouncil/Basilisk-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru', 'es', 'fr', 'cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
      ru: {
        label: 'русский',
      },
      es: {
        label: 'español',
      },
      fr: {
        label: 'français',
      },
      cn: {
        label: '中文',
      }
    },
  },
};
