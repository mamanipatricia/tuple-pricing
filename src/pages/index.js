import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Main from '../components/main'
import Testimonial from '../components/testimonials'
import Register from '../components/register'

const IndexPage = () => (
    <Layout>
        <SEO title="Tuple" />
        <Main />
        <Testimonial />
        <Register />

        {/*   
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage
