/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { t } = useTranslation("layout")

  return (
    <>
      <div id="outer-container">
        <Header />
        <main id="page-wrap">{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
