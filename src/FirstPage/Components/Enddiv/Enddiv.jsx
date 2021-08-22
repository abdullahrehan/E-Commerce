import React from 'react'
import './Enddiv.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Getit from'./getit.png'
import { FaFacebook } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import {Link} from 'react-scroll'



function Enddiv() {
    return (
        <div className="Enddiv-maindiv">
            <div className="Enddiv-divno1"><button className='btn btn-dark edge'><Link to="header" smooth={true} duration={1000}>Back To Top</Link></button></div>
            <div className="Enddiv-divno2">
            <div className="Enddiv-divno2-1">
                <h3>Get to Know us</h3>
                <a>Carrer <br/>Blogs<br/> Our Products<br/> Gmail: abdullahre... <br/> Mobile no : 03103722753</a>
                </div>
            <div className="Enddiv-divno2-2">
                <h3>Sell with us</h3>
                <a>Create your own store <br/>Sell Products with us <br/>Contact for further information </a>
                </div>
            <div className="Enddiv-divno2-3">
                <h3>Our Payments</h3>
                <a >HBL Credit Card <br/>Easypaisa <br/>Jaizcash <br/> </a>
                </div>
            <div className="Enddiv-divno2-4"><h3>Our other Projects</h3>
            <a>
                Amazon and COVID-19 <br/>
                Your Account<br/>
                Your Orders<br/>
                Shipping Rates & Policies<br/>
                Returns & Replacements<br/>
                Manage Your Content and Devices
                Amazon Assistant</a>
            </div>   
            <div className='getit'><img src={Getit}/></div>
            <h4 className='followus-titl'>Follow us</h4>
            <div className='followus'><FaFacebook className='follow-icon'/> <ImWhatsapp className='follow-icon'/> <SiInstagram className='follow-icon'/></div>
            </div>

        </div>
    )
}

export default Enddiv
