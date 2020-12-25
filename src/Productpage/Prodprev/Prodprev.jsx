import React,{useContext} from 'react'
import ContextCart from '../CartContextjs'
import './Prodprev.css' 
import  'bootstrap/dist/css/bootstrap.min.css'
import Productpage from '../Productpage'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import {useHistory} from 'react-router-dom'

function Prodprev() {
    const {state,dispatch}=useContext(ContextCart)
    const {Cartprdctpginfo}=state
    const [pict1,setpict1]=useState(false)
    const [pict2,setpict2]=useState(false)
    const [pict3,setpict3]=useState(false)
    const history=useHistory()
    const picdivstyles={display:pict1||pict2||pict3 ? 'none' : "block"}
    
    const picbigdivstyles1={position:'absolute',left:'0',top:'0',display:pict1?'block':'none' }
    const picbigdivstyles2={position:'absolute',left:'0',top:'0',display:pict2?'block':'none' }
    const picbigdivstyles3={position:'absolute',left:'0',top:'0',display:pict3?'block':'none' }

    const picsmaldivstyles1={display:Cartprdctpginfo.pic && Cartprdctpginfo.pic2||Cartprdctpginfo.pic3?'block':'none'}
    const picsmaldivstyles2={display:Cartprdctpginfo.pic2?'block':'none'}
    const picsmaldivstyles3={display:Cartprdctpginfo.pic3?'block':'none'}


    console.log(pict1,pict2,pict3,);

    return (
        <>
            
         
          
            <div className="Cartprdctpg-maindiv">
            <div className="Cartprdctpg-title"><h2>{Cartprdctpginfo.name}</h2></div>
           <div className='prd-pg-arrow'> <BiArrowBack className='snglprod-arrow' size={32} style={{color:"black",cursor:'pointer'}}  onClick={()=>history.goBack()}/>
           </div>
            <div className='Cartprdctpg-main-picdiv'>
            <div className="Cartprdctpg-big-picdiv">
                <img src={Cartprdctpginfo.pic} style={picbigdivstyles1} className='Cartprdctpg-pic'/>
                <img src={Cartprdctpginfo.pic2} style={picbigdivstyles2} className='Cartprdctpg-pic'/>
                <img src={Cartprdctpginfo.pic3} style={picbigdivstyles3} className='Cartprdctpg-pic'/>
                <img src={Cartprdctpginfo.pic} className='Cartprdctpg-pic'style={picdivstyles}/>
                
                </div>         
            <div className="Cartprdctpg-small-picdiv">
            <div className="Cartprdctpg-picdiv1" style={picsmaldivstyles1} onClick={()=>{return setpict1(true),setpict2(false),setpict3(false)}} >< img src={Cartprdctpginfo.pic} className='Cartprdctpg-pic'/></div>
            <div className="Cartprdctpg-picdiv2" style={picsmaldivstyles2} onClick={()=>{return setpict1(false),setpict2(true),setpict3(false)}}>< img src={Cartprdctpginfo.pic2} className='Cartprdctpg-pic'/></div>
            <div className="Cartprdctpg-picdiv3" style={picsmaldivstyles3} onClick={()=>{return setpict1(false),setpict2(false),setpict3(true)}}>< img src={Cartprdctpginfo.pic3} className='Cartprdctpg-pic'/></div>    
          
            </div>   
            </div>      

            <div className="Cartprdctpg-main-titldiv">
                
            <div className="Cartprdctpg-avail-color"><h3><a className='avail'>Available</a><p  className='color'>colors :</p></h3></div>
            <div className="Cartprdctpg-ratingdiv"><a href='../Productpage'>Rating</a></div>
            <div className="Cartprdctpg-pricediv"><h3>Price :{Cartprdctpginfo.price}</h3></div>
            <div className="Cartprdctpg-branddiv"><h3>Brand : Landa</h3></div>
            
            

            <div className="product-info-table">
                <div className="info-table-items"></div>
                <div className="info-table-items"></div>
                <div className="info-table-items"></div>
                <div className="info-table-items"></div>
            </div>
            
            <div className="Cartprdctpg-buttons">
            <div className="Cartprdctpg-buynow"><button className='btn btn dark add'><Link to='/'>Buy Now</Link></button></div>
            <div className="Cartprdctpg-addtocart"><button className='btn btn dark add'onClick={()=>dispatch({type:'click',product:Cartprdctpginfo})}>Add to Cart</button></div>

            </div>

              <table className='prodpev-table'>
                  <tr>
                      <td>catagory</td>
                      <td>Ans</td>
                  </tr><tr>
                      <td>catagory</td>
                      <td>Ans</td>
                  </tr><tr>
                      <td>catagory</td>
                      <td>Ans</td>
                  </tr><tr>
                      <td>catagory</td>
                      <td>Ans</td>
                  </tr>
              </table>


            
            </div>    

                <div className="discrip-div">
                    <h2>About This product</h2>
                    <a className='discrip-div-text'>
                    86% Rayon, 11% Cotton, 3% Spandex Imported Machine Wash
                    A cowl neck and side slits distinguish this demure long-sleeve dress with a seamed hem
                    Supersoft Terry offers incredible comfort with rich rayon fibers and a gently brushed back
                    Start every outfit with Daily Ritual's range of elevated basics
                    Model is 5'11" and wearing a size Small <br/>
                    86% Rayon, 11% Cotton, 3% Spandex
                    Imported
                    Machine Wash
                    A cowl neck and side slits distinguish this demure long-sleeve dress with a seamed hem
                    Supersoft Terry offers incredible comfort with rich rayon fibers and a gently brushed back
                    Start every outfit with Daily Ritual's range of elevated basics
                    Model is 5'11" and wearing a size Small
                    </a>

                </div>
            </div>
            
          
            
            
            
           
            
        </>
    )
}

export default Prodprev
