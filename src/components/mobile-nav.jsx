import * as React from "react"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import * as style from "./mobile-nav.module.css"

const MobileNav = () => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation("nav")
  return (
    <nav className={style.nav}>
      <ul className={style.languages}>
        {languages.map(lng => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
      <a
        href="https://www.facebook.com/liza.epil.et.ongles/"
        target="_blank"
        rel="noreferrer"
        className={style.bookingButton}
      >
        {t("book")}
      </a>
    </nav>
  )
}

export default MobileNav
