module.exports = {
  siteTitle: 'Supari 守破離 for Fun and Profit',
  siteDescription: 'Learn, Practice and Repeat.',
  authorName: 'tkhwang',
  twitterUsername: 'tkhwang',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `

  What I like :
  likes unique, beautiful,

  `,
  siteUrl: 'https://tkhwang.netlify.com',
  disqusSiteUrl: 'https://tkhwang.netlify.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/blog', // Note: it must *not* have a trailing slash.
  siteCover: '/images/nikita-kachanovsky-445394-unsplash.jpg',
  googleAnalyticsId: 'UA-53228773-4',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 8,
  disqusShortname: 'tkhwang-netlify',
  headerLinks: [
    {
      label: '✍️  Blog',
      url: '/',
    },
    {
      label: '🗄 Projects',
      url: '/projects',
    },

    {
      label: '👨🏻‍💻 About',
      url: '/about',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'Netlify',
    url: 'https://netlify.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: '✍️  Blog',
        url: '/',
      },
      {
        label: '🗄 Projects',
        url: '/projects',
      },
      {
        label: '👨🏻‍💻 About',
        url: '/about',
      },
    ],
    [
      'Follow the author',
      {
        label: 'Github',
        url: 'https://github.com/tkhwang',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Website',
        url: 'https://tkhwang.netlify.com',
        iconClassName: 'fa fa-globe',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/tkhwang',
        iconClassName: 'fa fa-twitter',
      },
      {
        label: 'Instgram',
        url: 'https://instagram.com/tkhwang',
        iconClassName: 'fa fa-instagram',
      },
    ],
  ],
}
