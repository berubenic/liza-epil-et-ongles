import * as React from "react"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const DesktopNav = () => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation("nav")
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t("home")}</Link>
        </li>
      </ul>
      <ul>
        {languages.map(lng => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNav
