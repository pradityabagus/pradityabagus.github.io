import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { withPrefix } from 'gatsby'

const SecondPage = () => (
  <Layout>
    <h1>I am sorry...</h1>
    <p>I am currently experiencing mental instability. In order to keep my sanity, I am completely off all personal communication channel. Including social media and email. I'll update my new contact info in this page. Thank you.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
