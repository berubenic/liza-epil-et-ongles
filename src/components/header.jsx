import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
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
        <StaticImage
          src="../images/logo.jpg"
          width={65.73}
          alt={t("logo-alt")}
          style={{ margin: `1rem` }}
        />
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
