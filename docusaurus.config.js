const buildType = process.env.BUILD_TYPE;

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  title: "Docusaurus Search",
  tagline:
    "An offline/local search example using @easyops-cn/docusaurus-search-local",
  url: "https://easyops-cn.github.io",
  baseUrl: "/",
  onBrokenLinks: 'warn',
  favicon: "img/favicon.ico",
  organizationName: "omargalal97", // Usually your GitHub org/user name.
  projectName: "build", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Docusaurus Search",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: '/docs/intro',
          activeBasePath: "docs",
          label: 'docs',
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },

        {
          href: "https://github.com/omargalal97/build",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/omargalal97/build",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/omargalal97/build",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/omargalal97/build",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexDocs: true,
        indexPages: true,
        language: 'en', // or any other language you are using
        hashed: true,
      }),
    ],
  ],
};
