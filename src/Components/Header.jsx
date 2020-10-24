import React from 'react'
import './Header.css'
import logo from '../Pics/logo512.png'
function Header() {
    return (

        < >
            <div id='header'>
            <p id='txt'> <a >Web Developers</a></p>
            <p id='react'>Created with React  <img src={logo} className='logo'/></p>
            </div>
        
        </>
    )
}

export default Header
