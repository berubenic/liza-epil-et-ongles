import * as React from "react"
import PropTypes from "prop-types"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { elastic as Menu } from "react-burger-menu"
import * as style from "./header.module.css"

const Header = ({ siteTitle, pageWrapId, outerContainerId }) => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation("header")
  return (
    <header>
      <h1 className={style.companyName}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Menu
        pageWrapId={pageWrapId}
        outerContainerId={outerContainerId}
        width={"100%"}
      >
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="#">{t("services")}</Link>
            </li>
            <li>
              <Link to="#">{t("gallery")}</Link>
            </li>
            <li>
              <Link to="#">{t("blog")}</Link>
            </li>
            <li>
              <Link to="#">{t("contact")}</Link>
            </li>
          </ul>
          <ul className={style.languages}>
            {languages.map(lng => (
              <li key={lng}>
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Menu>
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
