import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { footer, link } from "./footer.module.css"

const Footer = () => {
  const { t } = useTranslation("footer")

  return (
    <footer className={footer} >
      © {new Date().getFullYear()}, {t("footer")}
      {` `}
      <a href="https://www.gatsbyjs.com" className={link}>
        Gatsby
      </a>
      , Nicholas Bérubé
    </footer>
  )
}

export default Footer
