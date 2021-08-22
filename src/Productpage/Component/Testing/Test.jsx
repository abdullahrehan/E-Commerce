import React,{useState} from 'react'
import _ from 'lodash'

function Test(props) {

 const {onpagechange,productperpages,totalpages}=props

    
    
    const pagesarr=_.range(1,totalpages/productperpages+1)
  const pages=[...pagesarr]
    console.log("pages"+pages);
    return (
<nav >
  <ul class="pagination">
  
    {pages.map((page)=>{ return  <li class="page-item"><a class="page-link"  style={{color:'black'}} onClick={()=> onpagechange(page)}>{page}</a></li>})
   
  } 
   
  
  </ul>
</nav>
    )
}

export default Test
