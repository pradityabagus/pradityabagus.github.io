import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>
    
    <p>This is my personal webpage. The home of my online public identity.</p>
    <div style={{ maxWidth: '200px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <blockquote>
      <p>
        "We know more than we can tell" 
      </p>
      <footer>
        —Michael Polanyi
      </footer>
    </blockquote>
    <Link to="/contact-me/">Ping me!</Link>
  </Layout>
)

export default IndexPage
