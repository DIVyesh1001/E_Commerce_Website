import React from 'react'
import './Categories.css'
import Cards from '../Cards/Cards'
import Image1 from './image1.jpeg'
import Image2 from './image2.jpeg'
import Image3 from './image3.jpeg'


function Categories() {


  return (
    <div className='categories'>
      <p>Shop by Category</p>
      <div className='category-cards'>
        <Cards title="Hard Bound Notebooks" image={Image1}/>
        <Cards title="Soft Bound Notebooks" image={Image2}/>
        <Cards title="Colorful Notebooks" image={Image3}/>
      </div>
    </div>
  )
}

export default Categories
