import React from 'react'
import  Header from '../'
// import Sidebar from "../Sidebar/Sidebar.jsx"
// import ImgSlidefrntpg from './ImgSlidefrntpg/ImgSlidefrntpg'
// import Firstdivforsale from './Firstdivforsale/Firstdivforsale'
// import Signin from './Signin/Signin'
// import Topselling from './Topselling/Topselling'
// import Yourstore from './Yourstore/Yourstore'
// import Watchlist from './Watchlist/Watchlist'
// import Enddiv from '../Enddiv/Enddiv.jsx'
// import SigninFoam from './SigninFoam/SigninFoam.jsx'


import './scndpg.css'
import '../../Productpage/Components/ShowProducts/node_modules/bootstrap/dist/css/bootstrap.min.css'


function Secoundpg() {


    let signinpg=()=>{
        document.getElementById("Signin-page").classList.toggle('dsply')
        document.body.classList.toggle('bdy')
    }


    return (
        <>
        <div className='productpage'>
        
        <div onClick={signinpg}  className='header'><Header></Header></div>
        {/* <div className='sidebar'> <Sidebar></Sidebar></div>
        <div className='imgslider'><ImgSlidefrntpg></ImgSlidefrntpg> </div>
        <div className="firstdivforsale"><Firstdivforsale></Firstdivforsale></div>
        <div className='signinbox'><Signin/> </div>    
        <div className='Topselling-box'><Topselling/> </div>     
        <div className='Yourstore-box'><Yourstore/> </div>     
        <div className='Watchlist-box'><Watchlist/> </div>     
        <div className='Enddiv-box'><Enddiv></Enddiv> </div>    
        <div className='Signin-page' id="Signin-page"><SigninFoam/></div> 
  */}
        </div>


       
        
        </>
    )
}

export default Secoundpg
