import * as React from "react"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { elastic as Menu } from "react-burger-menu"
import * as style from "./header.module.css"

const MobileNav = ({ pageWrapId, outerContainerId }) => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation("header")
  return (
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
  )
}

export default MobileNav
