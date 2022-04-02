import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ReactUtterences from 'react-utterances'

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	const utterancesRepo = 'tkhwang/tkhwang-blog-utterances-comment'
	return (
		<Layout>
			<Helmet>
				<title>{frontmatter.title}</title>
				<meta name="description" content={frontmatter.metaDescription} />
			</Helmet>
			<div className="blog-post-container">
				<article className="post">
					{!frontmatter.thumbnail && (
						<div className="post-thumbnail">
							<h1 className="post-title">{frontmatter.title}</h1>
							<div className="post-meta">{frontmatter.date}</div>
						</div>
					)}
					{!!frontmatter.thumbnail && (
						<div className="post-thumbnail" style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}>
							<h1 className="post-title">{frontmatter.title}</h1>
							<div className="post-meta">{frontmatter.date}</div>
						</div>
					)}
					<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
					<br />
					<br />
					<ReactUtterences repo={utterancesRepo} type={'url'} />
				</article>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				thumbnail
				metaDescription
			}
		}
	}
`
