import * as React from "react"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import * as style from "./header.module.css"

const DesktopNav = () => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation("nav")
  return (
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
  )
}

export default DesktopNav
