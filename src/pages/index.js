import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ProfileImage from '../components/profileImage'

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>
    
    <p>Hi there, I'm Praditya Bagus Dewantara. You can call me Adit, Dewo, or anyway you like it. This page is the only thing I can assure you I maintain and own.</p>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/QMP2BsGoJNg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>  
    
    <p><Link to="/contact-me/">Ping me!</Link></p>
  </Layout>
)

export default IndexPage
