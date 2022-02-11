import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import {
  introMobileContainer,
  serviceBannerContainer,
} from "./index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServiceBanner from "../components/service-banner"
import ContactBanner from "../components/contact-banner"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { t } = useTranslation("index")

  return (
    <Layout>
      <Seo title={t("title")} />
      <div className={introMobileContainer}>
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
      <div>
        <ContactBanner></ContactBanner>
      </div>
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
      extension: { eq: "jpg" }
      name: { eq: "nails-service-banner" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
    waxServiceImage: file(
      extension: { eq: "jpg" }
      name: { eq: "wax-service-banner" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
    pedicureServiceImage: file(
      extension: { eq: "jpg" }
      name: { eq: "pedicure-service-banner" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
    manicureServiceImage: file(
      extension: { eq: "jpg" }
      name: { eq: "manicure-service-banner" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage
