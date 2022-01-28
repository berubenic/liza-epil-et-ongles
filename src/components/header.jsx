import * as React from "react"
import PropTypes from "prop-types"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const Header = ({ siteTitle }) => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation("header")
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h2>{t("description")}</h2>
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
