import React from 'react'
import  './Firstdivforsale.css'
import Im from './Pics/asr.jpg'
import Im2 from './Pics/com.jpg'
import Im3 from './Pics/ass43.jpg'
import Im4 from './Pics/woman.jpg'
import Im5 from './Pics/wmn2.jpg'
import Im6 from './Pics/wmn3.jpg'
import Im7 from './Pics/wmn4.jpg'
import {Link} from 'react-router-dom'
import Productpage from '../../../Productpage/Productpage'
import Sidebar from '../Sidebar/Sidebar'
function Firstdivforsale() {


    const smoredata=[
        {title:"Computer Access..",Pic:Im2},
        {title:"Shop by Catagory",Pic:Im},
        {title:"Mens Clothes",Pic:Im3},
      


    ]

    return (

        <div className='maindivfdfs' id="firstdivforsale">
           
           {smoredata.map((Smordata)=>(
             <><div className="fdfds-divno1">

         
           <div className="fdfds-divno2"><h3>{Smordata.title}</h3></div>
           <div className="fdfds-divno3"><a style={{color:'white'}} ><Link to='/products' className='seemore'>See more</Link></a></div>
           <div className="fdfds-divno4"><img src={Smordata.Pic} className='amzbasic'/></div>
           </div></>
           ))}

            <div className="fdfds-divno1 ext">
                <div className="fdfds-divno2"><h3>Women Clothes</h3></div>
                <div className="fdfds-divno3"><a  style={{color:'white'}} className='seemore'>See more</a></div>
                <div className="fdfds-divno4">
                <div className="inndiv">
                <div className="fdfds-inndiv1"><img src={Im4}/></div>  
                <div className="fdfds-inndiv2"><img src={Im5}/></div>
                <div className="fdfds-inndiv3"><img src={Im6}/></div>
                <div className="fdfds-inndiv4"><img src={Im7}/></div>
                </div>
                </div>
            </div>
           
        </div>
    )
}

export default Firstdivforsale
