import React from 'react'
import './footer.css'

const Footer = () => {
  let y = new Date().getFullYear()

  return (
    <div className="fixed">
      <p> All Rights Reserved To E-Commerce-App {y}</p>
    </div>
  )
}

export default Footer
