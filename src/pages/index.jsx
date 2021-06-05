import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { hero, container, intro, callOut, logoIntro } from "./index.module.css"
import Logo from "../icons/logo"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className={hero}>
        <img className={logoIntro} src="./NF-logo.png" />

        <h1 className={callOut}>Welcome to our Notes and Flowers Online!</h1>

        <p className={intro}>
          Your favorite florists FAVORITE FLORIST! Come visit us here online or
          at our shop in Dangwa! 1607 Laong Laan Road, Sampaloc, Manila.
        </p>
      </div>
      <div className={container}>
        <ProductListing products={data.shopifyCollection.products} />
      </div>
    </Layout>
  )
}
