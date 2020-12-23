import React,{useContext} from 'react'
import  Header from './Components/Header/Header.jsx'
 import Sidebar from "./Components/Sidebar/Sidebar.jsx"
 import ImgSlidefrntpg from './Components/ImgSlidefrntpg/ImgSlidefrntpg'
 import Firstdivforsale from './Components/Firstdivforsale/Firstdivforsale'
 import Signin from './Components/Signin/Signin'
 import Topselling from './Components/Topselling/Topselling'
import Yourstore from './Components/Yourstore/Yourstore'
import Watchlist from './Components/Watchlist/Watchlist'
 import Enddiv from './Components/Enddiv/Enddiv.jsx'
import SigninFoam from './Components/SigninFoam/SigninFoam.jsx'
import cloud from './a.png'
import ContextCart from '../Productpage/CartContextjs'
import './FirstPageweb.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Secoundpg() {
    
    const {state,dispatch}=useContext(ContextCart)

  
    return (

<>
    <div className='productpage'>
  
        <div className='imgslider'><ImgSlidefrntpg></ImgSlidefrntpg> </div>
        <div className="firstdivforsale"><Firstdivforsale></Firstdivforsale></div>
        <div className='signinbox'><Signin/> </div>    
        <div className='Topselling-box'><Topselling/> </div>     
        <div className='Yourstore-box'><Yourstore/> </div>     
        <div className='Watchlist-box'><Watchlist/> </div>     
     
   </div>
   
        
</>
)}

export default Secoundpg
