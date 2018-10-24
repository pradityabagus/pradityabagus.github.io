import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { withPrefix } from 'gatsby'

const SecondPage = () => (
  <Layout>
    <h1>Ping me!</h1>
    <p>You can reach me via email to dewantara@live.com</p>
    <p>I'm aware of <a href="https://medium.freecodecamp.org/how-does-pretty-good-privacy-work-3f5f75ecea97">PGP</a> cryptography technique. You should too. If you want to send something confidential to me, you can encrypt it with <a href={withPrefix('pgp.txt')}>my public key</a></p>
    <p>
      Oh ya, I'm actively <a href="http://twitter.com/pradityabgs">tweeting</a>. And (maybe) will be writing something on <a href="https://medium.com/@pradityabagus">my medium</a>. As part of the awesome developer community, I also have a <a href="https://github.com/pradityabagus">Github account</a>. Mainly I stars awesome repositories. This webpage is hosted on there too.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
