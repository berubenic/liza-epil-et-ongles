import * as React from "react"
import PropTypes from "prop-types"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const Header = ({ siteTitle }) => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation("header")
  return (
    <header>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <ul>
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
        <ul className="languages">
          {languages.map(lng => (
            <li key={lng}>
              <Link to={originalPath} language={lng}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
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
