import React from 'react'
import GridItem from '../GridItem/GridItem'
import {products} from './productData.json'
import './CardProducts.css'

function CardProducts() {
  return (
    <div className='products'>
      <div className='product-image'>
        <p>Back to School Products</p>
      </div>
      <div className='product-grid'>
        {products.map((val,ind)=>{
          return <GridItem key={ind} image={val.src} title={val.title} />
        })}
      </div>
    </div>
  )
}

export default CardProducts
