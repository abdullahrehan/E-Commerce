import React from 'react'
import'./Showproducts.css'
import  {Button} from 'react-bootstrap/Button'
import { useContext } from 'react';
import {Context} from './Context'
function Showproducts() {
    const values=useContext(Context)

 
    return (
        <>
        <div className='ProductContainer'>
       {
   values.map((produc)=>{return(
    

    <div className='ProductCart'>
    <div className='ProductPic'><a href={onclick=''}><img src={produc.pic} className='image' alt=''/></a></div> 
    <div className='ProductStatus'><div className='status '>{produc.status}</div></div>
    <div className='ProductName'><b>{produc.name}</b></div> 
    <div className='ProductPrice'>Price:<b>{produc.price}</b></div> 
    <div className='ProductButton'><button className='btn btn btn-danger'><b> Add to Cart </b></button></div> 
    <div className='Producthover'>Preview </div>              
    </div>
    


)})
       }</div>
       
    
            
        </>
    )
}

export default Showproducts
