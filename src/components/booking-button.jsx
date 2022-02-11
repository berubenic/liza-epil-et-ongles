import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import * as style from "./mobile-nav.module.css"

const BookingButton = () => {
  const { t } = useTranslation("nav")
  return (
    <a
      href="https://www.facebook.com/liza.epil.et.ongles/"
      target="_blank"
      rel="noreferrer"
      className={style.bookingButton}
    >
      {t("book")}
    </a>
  )
}

export default BookingButton
