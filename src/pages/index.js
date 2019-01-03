import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ProfileImage from '../components/profileImage'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
      <ProfileImage />
    </div>
    <h1>Welcome</h1>
    
    <p>Hi there, I'm Praditya Bagus Dewantara. You can call me Adit, Dewo, or anyway you like it. To keep things simple, I only maintain this page and my <a href="https://linkedin.com/in/praditya-bagus-dewantara-28ba02152">LinkedIn</a> account.</p>

    <p>I can write thousand pages about me and my life, but at the end I'm just a human being. We change everyday. As for me and many other people, trying to be better than yesterday. No matter how concise my writing, it's just a writing. Talk with me, join me for a coffee, see me in real life, because: </p>
    
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
