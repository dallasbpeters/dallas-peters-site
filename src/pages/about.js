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

      <article className="post-content page-template">
        <h2>Hi. I'm Dallas. I love to help people make things for the web.</h2>
        <hr />
        <div className="bio row">
          <div className="col-4">
            <figure className="bio--figure">
              <Img fluid={data.dallasBioPhoto.childImageSharp.fluid} />
            </figure>
          </div>
          <div className="col-8">
            <h3>About Me</h3>
            <p>
              Being freshly back on the freelance scene its taking me just a
              little while to get my site back in order but I promise to have it
              soon!
            </p>
          </div>
        </div>
        {/* end bio row */}
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
    dallasBioPhoto: file(relativePath: { eq: "dallas-profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
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
