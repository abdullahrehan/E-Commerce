import React from 'react'
import Pics from './Pics/fin.png'
import Pics2 from './Pics/w.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import  './Signin.css'
function Signin() {
    return (
        <div className='signinmainbox'>
            <div className='signin-picbox'><img className='signin-picbox-img' src={Pics}/></div>
           <div className='signin-picbox2'>
               <h2>Fashion as Unique as you Are</h2>
                <p className='signin-text'>We deals with the best Qulity for Our Costumers and have weakly awsome sales for Man and Woman Products. Free <br/>home Deleivery .Sign In to Get Started  </p>
           <div className='create-account-buton'><Link to='/signin'><button className='btn btn-dark'>Create new account</button></Link></div>
           </div> 
            <div className='signin-picbox3'><img className='signin-picbox-img3' src={Pics2}/></div>
       
        </div>
    )
}

export default Signin