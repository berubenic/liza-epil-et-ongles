import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { companyContainer, companyName, companyLogo } from "./header.module.css"
import MobileNav from "./mobile-nav"
import DesktopNav from "./desktop-nav"
import { Media } from "gatsby-plugin-fresnel"

const Header = () => {
  return (
    <header>
      <div className={companyContainer}>
        <StaticImage
          src="../images/logo.svg"
          alt=""
          width={80}
          className={companyLogo}
        />
        <h1>
          <Link to="/" className={companyName}>
            Épil et Ongles
          </Link>
        </h1>
      </div>
      <Media lessThan="lg">
        <MobileNav />
      </Media>
      <Media greaterThanOrEqual="lg">
        <DesktopNav />
      </Media>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
