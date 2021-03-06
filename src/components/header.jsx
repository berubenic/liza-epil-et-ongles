import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import {
  header,
  companyContainer,
  companyName,
  companyLogo,
  navContainer,
} from "./header.module.css"
import NavMobile from "./nav-mobile"
import NavDesktop from "./nav-desktop"
import { Media } from "gatsby-plugin-fresnel"

const Header = () => {
  return (
    <header className={header}>
      <div className={companyContainer}>
        <StaticImage
          src="../images/logo.webp"
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
      <div className={navContainer}>
        <Media lessThan="lg">
          <NavMobile />
        </Media>
        <Media greaterThanOrEqual="lg">
          <NavDesktop />
        </Media>
      </div>
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
