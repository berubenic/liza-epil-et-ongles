import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import {
  serviceBannerContainer,
  serviceImage,
  serviceTitle,
  serviceDescription,
} from "./service-banner.module.css"

const ServiceBanner = ({ title, imageToGet }) => {
  const image = getImage(imageToGet)
  const { t } = useTranslation("service")
  return (
    <div className={serviceBannerContainer}>
      <GatsbyImage image={image} className={serviceImage} />
      <h2 className={serviceTitle}>{t(`${title}`)}</h2>
      <p className={serviceDescription}>{t(`${title}-description`)}</p>
    </div>
  )
}

export default ServiceBanner
