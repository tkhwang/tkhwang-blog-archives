/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: `tkhwang.me`,
		description: `rtfm().then((data) => practice(data)).then((knowledge) => develop(knowledge))`,
		siteUrl: `https://tkhwang.me/`,
		home: {
			title: `tkhwang.me`,
			description: `rtfm().then((data) => practice(data)).then((knowledge) => develop(knowledge))`,
		},
		/* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
		w3l_dom_key: `5e609f7a2d23fCF_Domain_verify`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/_data`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false,
						},
					},
					{
						resolve: 'gatsby-remark-emojis',
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'UA-30027142-1',
				head: true,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
			  fonts: [
				`Noto Sans KR`, `Black Han Sans`, `Do Hyeon`
			  ],
			  display: 'swap'
			}
		  },
		  {
			resolve: `gatsby-plugin-disqus`,
			options: {
			  shortname: `tkhwang-kr`
			}
		  },
	],
}
