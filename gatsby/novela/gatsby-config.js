module.exports = {
	siteMetadata: {
		title: `rtfm().then(d => { power = practice(d) })`,
		name: `tkhwang`,
		siteUrl: `https://tkhwang.me`,
		description: `My personal learning on-the-fly and on-demand.`,
		hero: {
			heading: `rtfm().then(d => { power = practice(d) })`,
			maxWidth: 1024,
		},
		social: [
			{
				name: `twitter`,
				url: `https://twitter.com/tkhwang`,
			},
			{
				name: `github`,
				url: `https://github.com/tkhwang`,
			},
			{
				name: `instagram`,
				url: `https://instagram.com/tkhwang`,
			},
		],
	},
	plugins: [
		{
			resolve: '@narative/gatsby-theme-novela',
			options: {
				contentPosts: 'content/posts',
				contentAuthors: 'content/authors',
				basePath: '/',
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Novela by Narative`,
				short_name: `Novela`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `standalone`,
				icon: `src/assets/favicon.png`,
			},
		},
	],
}
