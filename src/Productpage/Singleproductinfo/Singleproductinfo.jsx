import React from 'react'
import  Prodprev from '../Prodprev/Prodprev'
import  Relateditm from '../Component/Relateditm/Relateditm'
import './Singleproductinfo.css'
function Singleproductinfo() {
    return (
        <div className='Singleproductinfo'>
            <div className="productpage-div7"><Prodprev></Prodprev></div>
            <div className="productpage-div8"><Relateditm></Relateditm></div>
        </div>
    )
}

export default Singleproductinfo
