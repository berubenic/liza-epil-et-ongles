import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = () => {
  const { t } = useTranslation("index")

  return (
    <Layout>
      <Seo title={t("title")} />
      <h1>{t("greeting")}</h1>
      <p>{t("description")}</p>
    </Layout>
  )
}

export default IndexPage

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
