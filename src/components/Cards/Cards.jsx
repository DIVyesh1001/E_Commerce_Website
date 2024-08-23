import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div className='card'>
        <div className='card-img-container' >
          <img src={props.image} alt="Card Image" className='card-img' />
        </div>
        <div className='card-text'>
          <div>{props.title}</div>
        </div>
    </div >
  )
}

export default Cards
