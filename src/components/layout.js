/* eslint-disable */

import React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"
import DarkModeToggle from "./darkmodeToggle"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            // eslint-disable-next-line
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <a href="mailto:dallaspeters@gmail.com">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            {/* <Link className="site-head-logo" to={`/`}>
              {title}
            </Link> */}
            <Logo />
          </div>

          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.behance.net/dallaspeters"
                title="Behance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
              <a
                href="https://twitter.com/dp_design_co"
                title="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                @dp_design_co
              </a>
              <a
                href="https://sourcerer.io/dallasbpeters"
                title="Sourcerer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sourcerer
              </a>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy;&nbsp;
        {new Date().getFullYear()}&nbsp;<Link to={`/`}>{title}</Link>
        &nbsp;&mdash;&nbsp;Built with &nbsp;
        <span role="img" aria-label="red heart">
          ❤️
        </span>
        &nbsp;in Austin, TX.
      </footer>
    </div>
  )
}

export default Layout
