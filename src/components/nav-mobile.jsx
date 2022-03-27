import * as React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import {
  nav,
  languageList,
  languageLink,
  navLinkList,
  navLink,
  active
} from "./nav-mobile.module.css"
import BookingButton from "./booking-button"

const NavMobile = () => {
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
      <ul className={languageList}>
        {languages.map(lng => (
          <li key={lng}>
            <Link to={originalPath} language={lng} className={languageLink}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
      <BookingButton></BookingButton>
    </nav>
  )
}

export default NavMobile
