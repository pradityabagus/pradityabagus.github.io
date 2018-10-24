import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
// import './layout.css'

import Typography from 'typography'
import twinPeaks from 'typography-theme-twin-peaks'

const typography = new Typography(twinPeaks)

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          },
          buildTimeZone
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Hello there, this is my personal website.' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
          <div style={{margin:'60px 10px auto'}}>
          Updated on: {data.site.buildTimeZone}
          </div>
        </div>
        <div>
          
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
