// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const path = require("path");

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Otterize",
  url: process.env.NODE_ENV === "production" ? "https://docs.otterize.com" : "http://localhost:3003/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.svg",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "otterize", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    { src: "/newsLetterSubscription.js", async: true },
    { src: "/pixels.js", async: true },
  ],
  plugins: [
    path.resolve(__dirname, 'plugins', 'verify-includes'),
    ['@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          from: '/getting-started/oss-installation',
          to: '/installation',
        },
        {
          from: '/quick-tutorials/k8s-network-policies',
          to: '/quickstart/access-control/k8s-network-policies',
        },
        {
          from: '/quick-tutorials/k8s-istio-authorization-policies',
          to: '/quickstart/access-control/k8s-istio-authorization-policies',
        },
        {
          from: '/quick-tutorials/k8s-kafka-mtls',
          to: '/quickstart/access-control/k8s-kafka-mtls',
        },
        {
          from: '/quick-tutorials/aws-eks-cni-mini',
          to: '/quickstart/access-control/aws-eks-cni-mini',
        },
        {
          from: '/quick-tutorials/k8s-kafka-mtls-cert-manager',
          to: '/quickstart/access-control/k8s-kafka-mtls-cert-manager',
        },
        {
          from: '/quick-tutorials/k8s-network-mapper',
          to: '/quickstart/visualization/k8s-network-mapper',
        },
        {
          from: '/quick-tutorials/k8s-istio-watcher',
          to: '/quickstart/visualization/k8s-istio-watcher',
        },
        {
          from: '/quick-visual-tutorials/visual-ibac-istio-authorization-policies',
          to: '/quickstart/access-control/k8s-istio-authorization-policies',
        },
        {
          from: '/quick-visual-tutorials/visual-ibac-kafka-k8s',
          to: '/quickstart/access-control/k8s-kafka-mtls',
        },
        {
          from: '/quick-visual-tutorials/visual-ibac-network-policies',
          to: '/quickstart/access-control/k8s-network-policies',
        },
        {
          from: '/quick-visual-tutorials/visual-k8s-cluster-mapping',
          to: '/quickstart/visualization/k8s-network-mapper',
        },
        // Redirect from multiple old paths to the new path
        // {
        //   to: '/docs/newDoc2',
        //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
        // },
      ],
    }],
    ["docusaurus-plugin-includes", {}],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-2EG876ZREF",
        anonymizeIP: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/otterize/docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "0f80eacea40a917650f73d6eee3e9bb3",
        indexName: "otterize",
        appId: "69PZ47MO2R",
        algoliaOptions: {},
      },
      hotjar: {
        applicationId: "3156902",
      },
      navbar: {
        logo: {
          alt: "Otterize",
          src: "img/otterize-logo-light.svg",
          srcDark: "img/otterize-logo-light.svg",
          href: "https://otterize.com",
          target: "_self",
          style: { paddingLeft: "15px" },
        },
        items: [
          {
            href: "https://otterize.com/open-source",
            label: "Open source",
            position: "right",
            target: "_self",
          },
          {
            href: "https://otterize.com/product",
            label: "Product",
            position: "right",
            target: "_self",
          },
          {
            href: "https://otterize.com/ibac",
            label: "IBAC",
            position: "right",
            target: "_self",
          },
          {
            type: "doc",
            docId: "getting-started/README",
            position: "right",
            label: "Docs",
          },
          {
            href: "https://otterize.com/pricing",
            label: "Pricing",
            position: "right",
            target: "_self",
          },
          {
            href: "https://otterize.com/team",
            label: "Team",
            position: "right",
            target: "_self",
          },
          {
            href: "https://otterize.com/blog",
            label: "Blog",
            position: "right",
            target: "_self",
          },
          {
            href: "https://github.com/otterize",
            html: '<img src="/img/github-round-logo.svg" />',
            position: "right",
            class: "navbar_external_logo_first",
          },
          {
            href: "https://joinslack.otterize.com/",
            html: '<img src="/img/slack-logo-no-border.svg" />',
            position: "right",
            class: "navbar_external_logo",
          },
          {
            href: "https://app.otterize.com",
            html: "<span class='launch_app'>Launch App</span>",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            html: `
                <div class="footer_left">

                    <div id="mailchimp_title" class="footer_signup">
                        Sign up for updates
                    </div>
                    <div class="footer_left-links">
                        <form id="mailchimp_form" class="footer_signup-form" name="embedded-subscribe-form">
                            <input id="mailchimp_email_input" style="color: white"  type="email" name="EMAIL" class="footer_signup-input" placeholder="Email address" required="">
                            <button id="mailchimp_cta" type="submit" class="footer_signup-button">
                                <img src="/img/arrow_right_alt.svg" alt="Right arrow icon" class="footer_signup-img">
                            </button>
                        </form>
                    </div>
                </div>
                `,
          },
          {
            html: `<div class="footer_right">
                            <div class="footer_right-links">
                                <a href="https://github.com/otterize/"><img src="/img/github-icon.svg" /></a>
                                <a href="https://www.linkedin.com/company/otterize"><img src="/img/linkedin-icon.svg" /></a>
                                <a href="https://joinslack.otterize.com/"><img src="/img/slack-icon.svg" /></a>
                            </div>
                            <div class="footer_privacy-policy">
                                <a href="https://otterize.com/privacy">Privacy policy</a>
                            </div>
                         </div>`,
          },
          {
            html: `<div class="footer_copyright">
                            Built with Docusaurus
                            <p />
                            © ${new Date().getFullYear()} Otterize, Inc. All rights reserved.
                        </div>`,
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
