import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { withPrefix } from 'gatsby'

const SecondPage = () => (
  <Layout>
    <h1>I am sorry...</h1>
    <p>Due to my condition, I am sorry that I close all my personal communication channel. Some people might say it's easy to overcome my issues. Unfortunately for me, it isn't.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
