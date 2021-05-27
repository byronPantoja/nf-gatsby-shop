import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { container, intro, callOut } from "./index.module.css"

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
      <div className={container}>
        <h1 className={intro}>
          Welcome to our Notes and Flowers GatsbyJS + Shopify Demo Build.
        </h1>
        <p className={callOut}>
          So this is the first time I got to build on the cloud, pretty cool!
        </p>
      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
