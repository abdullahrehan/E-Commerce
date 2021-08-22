import React,{useReducer} from 'react'
import ContextCart from './CartContextjs'
import ReducerCart from './ReducerCart'
function CartContext(props) {

    const [state,dispatch]=useReducer(ReducerCart,{allproducts:[],qty:0,totalprice:0,Cartpg:false,Cartprdctpg:false,Cartprdctpginfo:[],cartdiv:false,activecreateacc:false,sidebarinfo:[],inputfield:''})


    return (
        <div>
            <ContextCart.Provider value={{state,dispatch}}>
            {props.children}
            </ContextCart.Provider>
        </div>
    )
}

export default CartContext

