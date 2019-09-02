import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `dallas`,
          `peters`,
          `user experience`,
          `design`,
          `Austin`,
          `Texas`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            I love to help people make things for the web. I've been doing this
            for over ten years.
          </h2>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>The web is better with friends.</figcaption>
          </figure>

          <h3 id="dynamic-styles">Back On The Scene...</h3>
          <p>
            Being freshly back on the freelance scene its taking me just a
            little while to get my site back in order but I promise to have it
            soon!
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "john-schnobrich-FlPc9_VocJ4-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
