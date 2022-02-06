import * as React from "react"
import PropTypes from "prop-types"
import logo from "../images/logo.svg"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import * as style from "./header.module.css"
import MobileNav from "./mobile-nav"
import DesktopNav from "./desktop-nav"
import { Media } from "gatsby-plugin-fresnel"

const Header = () => {
  const { t } = useTranslation("header")
  return (
    <header>
      <div className={style.companyContainer}>
        <img src={logo} alt={t("logo-alt")} className={style.companyLogo} />
        <h1>
          <Link to="/" className={style.companyName}>
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
