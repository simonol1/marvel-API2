import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div className='header'>
        <Link to='/'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmOQXn9ai3iH3IcyHW7bHPmaBUF6AI_HLZWFXJZ3_kF94CpN-' id='header_image'/></Link>
     </div>
   )
}

export default Header