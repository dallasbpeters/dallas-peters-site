import React, { useState, useEffect } from "react"
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
    <Link
      className={isScrolled ? "fixed-logo scrolled" : "fixed-logo un-scrolled"}
      to={`/`}
    >
      <svg
        height="48"
        width="48"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m106.784 200v99.883l86.549-49.941z" fill="#1e1a18" />
        <path d="m193.45 250.175v-100l-86.549 49.942z" fill="#474442" />
        <path d="m280 200.117v-99.883l-86.55 49.941z" fill="#474442" />
        <path d="m193.333 149.941v100l86.55-49.941z" fill="#1e1a18" />
        <path d="m20 250.058 86.55 49.942v-99.883z" fill="#ff5151" />
        <path d="m106.784 200.117-86.5501-50.059v100z" fill="#fc2222" />
        <path d="m106.784 100.117-86.5501-49.9416v99.8826z" fill="#fc2222" />
        <path d="m20 150.058 86.55 50.059v-100z" fill="#ff5151" />
        <path d="m106.784 0-86.5501 49.9415 86.5501 49.9415z" fill="#00fec1" />
        <path
          d="m106.667 100.117 86.549-49.9416-86.549-49.941513z"
          fill="#00e0aa"
        />
        <path d="m193.216 150.058 86.55-49.941-86.55-49.9416z" fill="#00e0aa" />
        <path
          d="m193.333 49.9415-86.549 49.9415 86.549 50.059z"
          fill="#00fec1"
        />
      </svg>
    </Link>
  )
}

export default Logo
