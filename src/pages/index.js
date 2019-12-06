import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ProfileImage from '../components/profileImage'

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>
    
    <p>Hi there, I'm Praditya Bagus Dewantara. You can call me Adit, Dewo, or anyway you like it. This page is the only thing I can assure you I maintain and own.</p>

    <p>I can write thousand pages about me and my life, but at the end I'm just a human being. We change everyday. As for me and many other people, trying to be better than yesterday. No matter how concise my writing, it's just a writing. Talk with me, join me for a coffee, see me in real life, because: 

    </p>
    
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
