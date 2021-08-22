import React from 'react'
import Showproducts from './Showproducts'
import Productsinfo from './Productinfo'
import { useContext } from 'react'
import ContextCart from '../CartContextjs'
import './product.css'
import {useHistory} from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
function Products() {

    const {state,dispatch}=useContext(ContextCart)
    const history=useHistory()
    return (
        <div className='product-main'>

        <div><BiArrowBack size={32} style={{color:"black",cursor:'pointer'}}  onClick={()=>history.goBack()}/> </div>
       <Productsinfo >
       <Showproducts></Showproducts>
       </Productsinfo> 

        </div>
    )
}

export default Products
