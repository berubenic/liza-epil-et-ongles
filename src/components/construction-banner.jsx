import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import {
  constructionContainer,
  description,
} from "./construction-banner.module.css"

const ConstructionBanner = () => {
  const { t } = useTranslation("construction")

  return (
    <div className={constructionContainer}>
      <StaticImage src="../images/construction-tools.svg" width={64} />
      <p className={description}>{t("construction")}</p>
      <StaticImage src="../images/construction-tools.svg" width={64} />
    </div>
  )
}

export default ConstructionBanner
