import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"



const Page3 = () => {
    return (
        <Layout>
            <Seo title="About Us" />
            <h1>Who we are</h1>
            <p>At G and G Painting our customers come first!</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
};

export default Page3;
