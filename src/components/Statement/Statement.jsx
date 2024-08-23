import React from 'react'
import './Statement.css'
import {Link} from 'react-router-dom'
function Statement() {
  return (
    <div className='statement-container'>
        <div className='statement-image'>
            <div className='statement-text'>
                <p>We believe in <br /> the power of pen.</p>
                {/* <p>power of pen and pencil</p> */}
            </div>
            <Link to='/aboutus'><button name='Button'>About_us</button></Link>
        </div>
      {/* <img src='src\components\Statement\background.jpg' alt='statement image' className='statement-image'/> */}
    </div>
  )
}

export default Statement
