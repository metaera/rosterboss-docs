const title = 'RosterBoss.app'
const description = 'The Only Employee Scheduling Solution That Uses Artificial Intelligence To Do the Work For You!'

module.exports = {
  base: '/',
  title,
  description,

  head: [
    ['link', {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/static/apple-touch-icon.png',
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/static/favicon-32x32.png',
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/static/favicon-16x16.png',
    }],
    ['link', {
      rel: 'manifest',
      href: '/static/site.webmanifest',
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/static/safari-pinned-tab.svg',
      color: '#c34c5c',
    }],
    ['link', {
      rel: 'shortcut icon',
      href: '/static/favicon.ico',
    }],
    ['meta', {
      name: 'apple-mobile-web-app-title',
      content: 'RosterBoss.app',
    }],
    ['meta', {
      name: 'application-name',
      content: 'RosterBoss.app',
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#c34c5c',
    }],
    ['meta', {
      name: 'theme-color',
      content: '#ffffff',
    }],
    ['meta', {
      property: 'og:title',
      content: title,
    }],
    ['meta', {
      property: 'og:description',
      content: description,
    }],
    ['meta', {
      property: 'og:image',
      content: '/static/social/og-image.jpg',
    }]
  ],

  themeConfig: {
    logo: 'static/favicon-32x32.png',

    repo: 'metaera/rosterboss',

    docsDir: 'docs',
    docsBranch: 'main',

    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: false,

    algolia: {
      apiKey: '5c7a8963fe98b01f54456d5a9a3819fd',
      indexName: 'rosterbossdocs',
    },

    nav: [
      {
        text: 'Development',
        link: '/guide/development/setup/',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    },
  },
}

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [
        {
          text: 'Overview',
          link: '/guide/',
        },
      ],
    },
    {
      text: 'Development',
      children: [
        {
          text: 'Setup',
          link: '/guide/development/setup/',
        },
        {
          text: 'Access',
          link: '/guide/development/access/',
        },
      ],
    },
  ]
}
