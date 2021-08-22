import React,{useState} from 'react'
import ContextCart from '../../CartContextjs'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import {TiShoppingCart } from 'react-icons/ti'
import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaTrash} from "react-icons/fa";
import {useHistory} from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import './Cart.css'

function Cart() {
    const {state,dispatch}=useContext(ContextCart)
    const history=useHistory()
    return (    
   <>
     
        
        <div className="Cartpage-maindiv">
        <div><BiArrowBack size={32} style={{color:"black",cursor:'pointer'}}  onClick={()=>history.goBack()}/> </div>

        <div className="Cartpage-cartdiv">
            <h2 style={{color:'black'}}>Your Cart <TiShoppingCart size={39}/></h2>

            <div className='cart-table-div'>
                <table className='cart-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
        <th>Quantity {state.allproducts.qty}</th>
        <th>Del</th>
                        </tr>
                    </thead>
    
            {state.allproducts.map((State,index)=>(
                    
                    <tbody >
                        <tr>
            <th >{index+1}</th>          
                            <td>{State.name}</td>
                            <td>{State.price}$</td>
            <td className='qty-td'> 
            <button className="btn-danger bkgblr qtybtn"  onClick={()=>dispatch({type:'inc',State,index,quantity:State.qty2})}>+</button>
            
            {State.qty2}
            
            <button className="btn-danger bkgblr qtybtn" onClick={()=>dispatch({type:'dec',State,index,quantity:State.qty2})}>-</button>
            
            </td>

                        <td>
                    
                            <button className="btn btn-danger bkgblr" type="button" onClick={()=>dispatch({type:'deleteitemcartpg',State,price:State.price,quantity:State.qty2})}><FaTrash/></button>
                        
                  
                    </td>
                    </tr>
                    </tbody>
                    ))}
                    </table>



                    </div>









        </div>   
            
        
        </div>
    </>
    )
}

export default Cart
