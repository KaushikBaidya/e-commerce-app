import React from 'react'
import {
  AppBar,
  IconButton,
  Badge,
  Toolbar,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import mart from '../../assets/mart.png'
import useStyles from './styles'

const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={mart}
              alt="e-commerce"
              height="25px"
              className={classes.image}
            />
            E-Commerce-App
          </Typography>
          <div className={classes.grow} />
          <div className="classes.button">
            <IconButton aria-label="show-cart-items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
