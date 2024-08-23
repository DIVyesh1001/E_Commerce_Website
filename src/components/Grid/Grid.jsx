import React from 'react'
import './Grid.css'
import GridItem from '../GridItem/GridItem'
import gridImage1 from './gridImage1.jpeg'
import gridImage2 from './gridImage2.jpeg'
import gridImage3 from './gridImage3.jpeg'
import gridImage4 from './gridImage4.jpeg'

function Grid() {


  return (
    <div className="grid-container">
        <p >Items that folks are excited about lately</p>
    <div className='grid'>
      <GridItem title='Dark Point Pencil' image={gridImage1}/>
      <GridItem title='Montex Pen' image={gridImage2}/>
      <GridItem title='Classmate Notebook' image={gridImage3}/>
      <GridItem title='Korean Litrature' image={gridImage4}/>
    </div>
    </div>
  )
}

export default Grid
