import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

function Logo() {
  const [isScrolled, setIsScrolled] = useState()

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY > 180)
    }
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        return (
          <Link
            className={
              isScrolled ? "fixed-logo scrolled" : "fixed-logo un-scrolled"
            }
            to={`/`}
          >
            <Image fixed={data.logoimg.childImageSharp.fixed} alt={"logo"} />
          </Link>
        )
      }}
    />
  )
}

const logoQuery = graphql`
  query logoQuery {
    logoimg: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Logo
