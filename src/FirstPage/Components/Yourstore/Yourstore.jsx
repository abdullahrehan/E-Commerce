import React from 'react'
import  './Yourstore.css'
import Bag from './Bag2.png'
import Boxes from './Bag.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
function Yourstore() {
    return (
        <div className='Yourstore-maindiv'>
            <div className="yorstore-subdiv1"><img src={Bag} className='bag-pic'/></div>
            <div className="yorstore-subdiv2">
                <h2>Create Your Own Store</h2>
                <a style={{color:'black'}} className="yorstore-text">Grow Your Buisness With us. Create your own  online <br/>store to start selling with us.</a>
               <br/> <div className='Yourstore-button'><Link to='/signin'><button className='btn btn-dark'>Create Online Store</button></Link></div>
                </div>
            <div className="yorstore-subdiv3"><img src={Boxes} className='boxes-pic'/></div>
        </div>
    )
}

export default Yourstore
