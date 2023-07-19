import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

type HeaderPropTypes = {
  setToggleState : React.Dispatch<React.SetStateAction<boolean>>
  toggleState : boolean
}

function Header({setToggleState,toggleState} : HeaderPropTypes) {
  return (
    <React.Fragment>
          {toggleState && <Sidebar/>}
             <div className='logo'>
             Crypto$Verse
             </div>
        <header className='navBar'>
          <div className="left-side">
            <span className="hamburger" onClick={()=>setToggleState(e=>!e)} >
            <i className="fa-solid fa-bars"></i>
            </span>
             <Link to='/'>
             Home
             </Link>
          </div>
             <div className='right-side'>
             <Link to='/top-250' style={{paddingRight:"2rem"}} className='home-link'>
             Top 250 crypto
             </Link>
             <Link to='trending-crypto'>Trending Crypto</Link>
             </div>
        </header>
    </React.Fragment>
  )
}

export default Header