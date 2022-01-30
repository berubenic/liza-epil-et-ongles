/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Header from "./header"

const Layout = ({ children }) => {
  const { t } = useTranslation("layout")

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="outer-container">
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <main id="page-wrap">{children}</main>
        <footer>
          © {new Date().getFullYear()}, {t("footer")}
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>, Nicholas Bérubé
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
