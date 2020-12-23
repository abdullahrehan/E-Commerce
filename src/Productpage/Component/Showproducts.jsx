import React,{useState} from 'react'
import'./Showproducts.css'
import Test from './Testing/Test'
import { useContext } from 'react';
import {Context} from './Context'
import {pagination} from './paginationfunction/Pagination'
import ContextCart from '../CartContextjs'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import Picman from './mannew2.png'


function Showproducts() {
    
    const {state,dispatch}=useContext(ContextCart)
    const [currentpage,setpage]=useState(1)
    const values=useContext(Context)
    const productperpage=15;
    let itemss=pagination(values,currentpage,productperpage)
    const it=itemss.tag
    const searchresult=itemss.includes(state.inputfield)
   
    let newitemss=itemss.filter((item)=> {
        
        return item.tag.find((it)=>it===state.inputfield)
    
    })


    if(newitemss.length===0){newitemss=itemss}
    console.log(searchresult+'searchsresult');
   
    const change=(page)=>{setpage(page)}
   


    return (

    <React.Fragment className='prodiv'>
          
   <div className='model-pic'><img src={Picman}/></div>
        <div className='ProductContainer'>
       {
       newitemss.map((produc,index)=>{return( 
        <div className='ProductCart-main'>   
        <div className='ProductCart'>     
            <div className='ProductPic'><Link to='/items'><img src={produc.pic} className='image' onClick={()=>dispatch({type:'Cartprdctpg',produc,index})}/></Link> </div>
            <div className='ProductStatus'><div className='status '>{produc.status}</div></div>
            <div className='ProductName'><b>{produc.name}</b></div> 
            <div className='ProductPrice'>Price:<b>{produc.price}</b></div> 
            <div className='ProductButton'><button onClick={()=>dispatch({type:'click',product:produc})} style={{borderRadius:'0px',paddingTop:"1%",fontWeight:"200"}} className='btn btn-danger brdr'><b> Add to Cart </b></button></div> 
        <div className='Producthover' >Preview </div>              
        </div>
        </div>
        )})
}
      
        </div><Test totalpages={values.length} productperpages={productperpage} onpagechange={change}></Test>    
      
    


    </React.Fragment>
    )
}

export default Showproducts
