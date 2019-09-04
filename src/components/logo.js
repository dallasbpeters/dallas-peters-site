import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Logo() {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        return (
          <>
            <Image fixed={data.logoimg.childImageSharp.fixed} alt={"logo"} />
          </>
        )
      }}
    />
  )
}

const logoQuery = graphql`
  query logoQuery {
    logoimg: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Logo
