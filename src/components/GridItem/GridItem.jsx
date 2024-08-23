import React from 'react'
import './GridItem.css'

function GridItem(prop) {
  return (
    <div className='grid-item'>
        <div className='grid-img-container' >
          <img src={prop.image} alt="Card Image" className='grid-img' />
        </div>
        <div className='grid-text'>
          <div>{prop.title}</div>
        </div>
    </div >
  )
}

export default GridItem
