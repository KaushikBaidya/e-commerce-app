import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Nike shoes.',
    price: '$4',
    image:
      'https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102',
  },
  {
    id: 2,
    name: 'Shoes',
    description: 'Adidas shoes.',
    price: '$6',
    image:
      'https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/20/e41252058ef39d1ad226d75c9f1e6a96_original.jpeg?impolicy=abp_cdn&imwidth=720',
  },
]

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
