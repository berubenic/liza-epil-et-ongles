import * as React from "react"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import {
  nav,
  languageLink,
  navLinkList,
  navLink,
  active
} from "./nav-desktop.module.css"
import BookingButton from "./booking-button"

const NavDesktop = () => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation("nav")

  return (
    <nav className={nav}>
      <ul className={navLinkList}>
        <li>
          <Link to="/" className={navLink} activeClassName={active}>
            {t("home")}
          </Link>
        </li>
        <li>
          <Link to="/price-list" className={navLink} activeClassName={active}>
            {t("price-list")}
          </Link>
        </li>
      </ul>
      <BookingButton></BookingButton>
      <ul>
        {languages.map(lng => (
          <li key={lng}>
            <Link to={originalPath} language={lng} className={languageLink}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavDesktop
