import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <React.Fragment>
        <header className='navBar'>
             <Link to='/' className='logo'>
             CryptoTracker
             </Link>
             <div>
             <Link to='/' style={{paddingRight:"2rem"}} className='home-link'>
             Home
             </Link>
             <Link to='trending-crypto'>Trending Crypto</Link>
             </div>
        </header>
    </React.Fragment>
  )
}

export default Header