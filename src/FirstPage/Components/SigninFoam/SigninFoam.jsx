import React,{useState,useContext} from 'react'
import {ImCross} from "react-icons/im";
import {GrGoogle} from "react-icons/gr";
import {FaFacebookSquare as Fb} from "react-icons/fa";
import ContextCart from '../../../Productpage/CartContextjs'
import './SigninFoam.css'
import cloud from './a.png'
import { useHistory } from 'react-router-dom';
function SigninFoam() {
    const {state,dispatch}=useContext(ContextCart)
    let [login,setlogin]=useState(true)
    let [Sigin,setsignin]=useState(true)
    let history=useHistory()

    const Signinv= {display: login ? "block": "none" , width:"100%", height:"100%" ,cursor: "pointer"}
    const Loginv = {display: Sigin ? "none" : "block", width:"100%", height:"100%" ,cursor: "pointer"}



    return (
        <>
        <div className='Signin-page'>
        <img className='cloud' src={cloud}/>
        <ImCross className='signin-cross' style={{color:'white',cursor:'pointer'}} size={25} onClick={()=>history.goBack()}/>
        <div className="siginfoam">
        
        <div className="signinfoam-divno1">
            <h5>You will need a free <br/>
                account to do that
            </h5>
        </div>

        <div className="signinfoam-divno2">
            <button className='btn btn-dark foambtn'>
                <Fb size={26} className="fb-icon"/>
                    <a className='signinfbtext'>
                        {login ?'Signup':"Login"} with facebook
                    </a>
            </button>
        </div>

        <div className="signinfoam-divno3">
            <button className='btn btn-dark foambtn'>
                <GrGoogle size={22} className="ggl-icon"/>
                    <a className='signingogletext'>
                        {login ?'Signup':"Login"}  With Google
                    </a>
            </button>
        </div>

        <div className="signinfoam-divno4">
            "we will send you welcome emails and never post"
        </div>
        
        <div className="signinfoam-divno5"></div>
        
        <div className="signinfoam-divno6">
            <div 
                className="signin-title" id="signin-title" 
                onClick={()=>{setlogin(true);setsignin(true)}}
                style={{ borderBottom: login? '2px solid white' :'0px solid black',
                transition:'0.2s'}}>
                                Sign In
            </div>

            <div 
                className="login-title"
                id="login-title"
                onClick={()=>{setsignin(false);setlogin(false)}} 
                style={{ borderBottom: Sigin? '0px solid black' :'2px solid white',
                transition:'.2s'}}>
                    Log In
                </div>
            </div>
           
        <div style={Signinv}  id='signin'>
            <div className="signinfoam-divno7"><input type="text" class="inputstyl" placeholder="Full Name"/></div>
            <div className="signinfoam-divno8"><input type="text" class="inputstyl" placeholder="Email"/></div>
            <div className="signinfoam-divno9"><input type="text" class="inputstyl" placeholder="Password"/></div>
            <div className="signinfoam-divno10"><a className='receivemail' style={{marginTop:'4%'}}><input type='checkbox' /> Received welcome emails</a></div>
            <div className="signinfoam-divno11"><button className='btn btn-dark foambtn2'>Sign Up</button></div>
        </div>

        <div style={Loginv} id='login' >
            <div className="signinfoam-divno12"><input type="text" class="inputstyl" placeholder="Email"/></div>
            <div className="signinfoam-divno13"><input type="text" class="inputstyl" placeholder="Password"/></div>
            <div className="signinfoam-divno14"><a href="#" style={{color:'white',borderBottom:'1 px solid white'}}>Forget Password ?</a></div>
            <div className="signinfoam-divno15"><button className='btn btn-dark foambtn2'>Log In</button></div>
            </div>
        </div>
        </div>

        </>
    )
}

export default SigninFoam
