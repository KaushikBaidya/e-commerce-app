import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './hero.css'

const images = [
  {
    url:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1545470941-1630430ba8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
]

const Hero = () => {
  return (
    <div className="hero">
      <SimpleImageSlider
        width={1200}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default Hero
