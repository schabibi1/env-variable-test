import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from "./Teaser"

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
  },
})

const Layout = ({ children }) => {
  console.log(
    "👋 layout.js | process.env.GATSBY_PREVIEW_STORYBLOK: ",
    process.env.GATSBY_PREVIEW_STORYBLOK
  )
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
