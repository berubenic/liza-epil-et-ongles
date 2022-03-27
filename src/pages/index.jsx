import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Media } from "gatsby-plugin-fresnel"
import {
  introContainer,
  serviceBannerContainer,
} from "./index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServiceBanner from "../components/service-banner"
import ContactBannerMobile from "../components/contact-banner-mobile"
import ContactBannerDesktop from "../components/contact-banner-desktop"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { t } = useTranslation("index")
  const language = data.locales.edges[0].node.language

  return (
    <Layout>
      <Seo title={t("SEOtitle")} language={language} />
      <div className={introContainer}>
        <h1>{t("greeting")}</h1>
        <p>{t("description")}</p>
      </div>
      <div className={serviceBannerContainer}>
        <ServiceBanner title="nails" imageToGet={data.nailsServiceImage} />
        <ServiceBanner title="wax" imageToGet={data.waxServiceImage} />
        <ServiceBanner
          title="pedicure"
          imageToGet={data.pedicureServiceImage}
        />
        <ServiceBanner
          title="manicure"
          imageToGet={data.manicureServiceImage}
        />
      </div>
      <Media lessThan="lg">
        <div>
          <ContactBannerMobile></ContactBannerMobile>
        </div>
      </Media>
      <Media greaterThanOrEqual="lg">
        <ContactBannerDesktop></ContactBannerDesktop>
      </Media>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    nailsServiceImage: file(
      extension: { eq: "webp" }
      name: { eq: "nails-service-banner" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
    waxServiceImage: file(
      extension: { eq: "webp" }
      name: { eq: "wax-service-banner" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
    pedicureServiceImage: file(
      extension: { eq: "webp" }
      name: { eq: "pedicure-service-banner" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
    manicureServiceImage: file(
      extension: { eq: "webp" }
      name: { eq: "manicure-service-banner" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage
