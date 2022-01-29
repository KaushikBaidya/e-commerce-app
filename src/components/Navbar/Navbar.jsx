import React from 'react'
import {
  AppBar,
  IconButton,
  Badge,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import mart from '../../assets/mart.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            variant="h4"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/"
          >
            <img
              src={mart}
              alt="e-commerce"
              height="25px"
              className={classes.image}
            />
            Surprise!
          </Typography>
          <Typography
            className={classes.menu}
            variant="subtitle1"
            color="inherit"
            component={Link}
            to="/about"
          >
            About
          </Typography>
          <Typography
            className={classes.menu}
            variant="subtitle1"
            color="inherit"
            component={Link}
            to="/contact"
          >
            Contact
          </Typography>
          {/* <div className={classes.grow} /> */}

          {location.pathname === '/' && (
            <div className="classes.button">
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show-cart-items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
