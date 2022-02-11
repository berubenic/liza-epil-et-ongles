import * as React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import * as style from "./mobile-nav.module.css"
import BookingButton from "./booking-button"

const MobileNav = () => {
  const { languages, originalPath } = useI18next()
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
      <BookingButton></BookingButton>
    </nav>
  )
}

export default MobileNav
