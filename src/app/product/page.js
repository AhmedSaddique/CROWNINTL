import LayoutProvider from '@/components/LayoutProvider'
import ProductHero from '@/components/Product'
import React from 'react'

const Product = () => {
  return (
    <LayoutProvider>
      <ProductHero/>
    </LayoutProvider>
  )
}

export default Product