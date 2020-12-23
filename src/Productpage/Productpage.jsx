import React from 'react'
import Products from './Component/Products'
import  Prodprev from './Prodprev/Prodprev'
import  Relateditm from './Component/Relateditm/Relateditm'
import ContextCart from './CartContextjs'
import Cart from './Component/Cart/Cart'
import './Productpage.css'
import { useContext } from 'react'

function Allproducts() {
    const {state,dispatch}=useContext(ContextCart) 
    return (        
        <div className='productpage-maindiv'>
       
            <div className='div4'><Products></Products></div>
            <div className="productpage-div6"><Cart></Cart></div>
            
        </div>  
     

    )
}

export default Allproducts
