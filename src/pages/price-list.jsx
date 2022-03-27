import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PriceItem from "../components/price-item"
import {
  pageHeader,
  pageTitle,
  pageDescription,
  priceListContainer,
  priceListItemContainer
} from "./price-list.module.css"

const priceListData = require("../documents/general-pricing-list-fr.json")

const PriceListPage = ({ data }) => {
  const { t } = useTranslation("price-list")
  const language = data.locales.edges[0].node.language
  const services = []

    return (
        <Layout>
          <Seo title={t("SEOtitle")} language={language} />
          <div className={pageHeader}>
            <h1 className={pageTitle}>{t("title")}</h1>
            <p className={pageDescription}>{t("description")}</p>
          </div>
          <div className={priceListContainer}>
              {
                priceListData.services.map((service) => (
                  <div className={priceListItemContainer}>
                    <PriceItem name={service.name} subServices={service.subServices}></PriceItem>
                  </div>
                ))
              }
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
  }
`

export default PriceListPage