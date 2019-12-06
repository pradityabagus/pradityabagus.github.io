import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { withPrefix } from 'gatsby'

const SecondPage = () => (
  <Layout>
    <h1>Ping me!</h1>
    <p>You can reach me via email to dewantara@live.com</p>
    <p>
      I'm currently off the social network grid.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
