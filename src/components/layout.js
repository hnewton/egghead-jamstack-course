import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/style.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex flex-col flex-1 md:justify-center max-w-5xl mx-auto px-4 py-8 md:p-8 w-full">
          {children}
        </div>

        <footer className="bg-blue-darkest">
          <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
              Created by{" "}
              <a
                href="https://khaledgarbaya.net"
                className="font-bold no-underline text-white"
              >
                Khaled Garbaya
              </a>
            </p>

            <p>
              <a
                href="https://github.com/Khaledgarbaya/learnjamstack"
                className="font-bold no-underline text-white"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
