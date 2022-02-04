import * as React from "react"
import PropTypes from "prop-types"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import * as style from "./header.module.css"
import MobileNav from "./mobile-nav"
import DesktopNav from "./desktop-nav"
import { Media } from "gatsby-plugin-fresnel"

const Header = ({ siteTitle, pageWrapId, outerContainerId }) => {
  const { t } = useTranslation("header")
  return (
    <header>
      <h1 className={style.companyName}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Media lessThan="lg">
        <MobileNav
          pageWrapId={pageWrapId}
          outerContainerId={outerContainerId}
        />
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
