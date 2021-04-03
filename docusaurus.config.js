/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ycash is the future of cash',
  tagline: 'Ycash is a digital currency for empowering local communities around the globe',
  url: 'https://y.cash',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yecdev', // Usually your GitHub org/user name.
  projectName: 'ydot', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ycash',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ycash_logo_001_256x256.png',
      },
      items: [
        {
          activeBasePath: 'use',
          label: 'Use Ycash',
          position: 'left',
          items: [
            {
              label: "Wallets",
              to: "/wallets",
            },
            {
              label: "Get Ycash",
              to: "/get-ycash"
            },
            {
              label: "Pay With Ycash",
              to: "/pay-with-ycash"
            },
          ],
        },
        {
          activeBasePath: 'learn',
          label: 'Learn',
          position: 'left',
          items: [
            {
              label: "What is Ycash?",
              to: "/what-is-ycash",
            },
            {
              label: "Fact Sheet",
              to: "/fact-sheet",
            },
            {
              label: "Blockchain Explorers",
              to: "/explorers",
            },
            {
              label: "Shielded Transactions",
              to: "/shielded-transactions"
            },
            {
              label: "Mine Ycash",
              to: "/mining"
            },
            {
              label: "Wry (Wrapped Ycash)",
              to: "/wry"
            },
            {
              label: "Developers",
              to: "/dev"
            },
            {
              label: "Contributors",
              to: "/contributors"
            }
          ],
        },
        {
          activeBasePath: 'social',
          label: 'Social',
          position: 'left',
          items: [
            {
              label: "Forums",
              to: "/forums"
            },
            {
              label: "News",
              to: "/news"
            },

          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Use Ycash',
          items: [
            {
              label: 'Wallets',
              to: '/wallets',
            },
            {
              label: 'Get Ycash',
              to: '/get-ycash',
            },
            {
              label: 'Pay With Ycash',
              to: '/get-ycash',
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'What is Ycash?',
              to: '/what-is-ycash',
            },
            {
              label: 'Fact Sheet',
              to: '/fact-sheet',
            },
            {
              label: 'Pay With Ycash',
              to: '/get-ycash',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/YcashFoundation',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Yz8rW7P',
            },
            {
              label: 'Telgram',
              href: 'https://t.me/YcashFoundation',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/ycashtalk',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://ycash.medium.com',
            },
            {
              label: 'YecDev on GitHub',
              href: 'https://github.com/yecdev',
            },
            {
              label: 'Ycash Foundation on GitHub',
              href: 'https://github.com/ycashfoundation',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ycash Foundation`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', /*'zh', 'ru', 'fr'*/],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      zh: {
        label: '简体中文',
        direction: 'ltr'
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
    },
  },
  plugins: ['@docusaurus/plugin-ideal-image'],
};
