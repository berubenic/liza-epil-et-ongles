import * as React from "react"
import { graphql } from "gatsby"

const PriceListPage = ({ data }) => {
    return (
        <p>Hi!</p>
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