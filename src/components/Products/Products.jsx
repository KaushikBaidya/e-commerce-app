import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
import Hero from '../Hero/Hero'

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Hero />
      <Typography variant="h4" color="secondary">
        Our Products
        <hr />
      </Typography>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      <hr />
    </main>
  )
}

export default Products
