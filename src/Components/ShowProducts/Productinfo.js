import React, { useState } from 'react'
import {Context} from './Context'
import  Pic from './bag2.jpg'
import  Pic2 from './Pics/cyber.jpg'
import  Pic3 from './Pics/arlo.jpg'
import  Pic4 from './Pics/logitect.jpg'
import  Pic5 from './Pics/sofa.jpg'
import  Pic6 from './Pics/earports.jpg'
import  Pic7 from './Pics/joystick.jpg'
import  Pic8 from './Pics/scope.jpg'
import  Pic9 from './Pics/sofa.jpg'

function Productinfo(props) {

 const [products]=useState([
        {name:"Bag",price:50+"$",status:"New",pic:Pic},
        {name:"Cyber-Computer",price:200+"$",status:"New",pic:Pic2},
        {name:"Erlo",price:20+"$",status:"New",pic:Pic3},
        {name:"Logi-Tech",price:700+"$",status:"New",pic:Pic4},
        {name:"Sofa",price:120+"$",status:"New",pic:Pic5},
        {name:"Ear-ports",price:40+"$",status:"New",pic:Pic6},
        {name:"Joy-stick",price:35+"$",status:"New",pic:Pic7},
        {name:"Scope",price:230+"$",status:"New",pic:Pic8},
        {name:"bag78",price:200+"$",status:"New",pic:Pic2},
        {name:"bag76",price:200+"$",status:"New",pic:Pic3},
        {name:"bag76",price:200+"$",status:"New",pic:Pic4},
        {name:"bag76",price:200+"$",status:"New",pic:Pic5},
        {name:"bag76",price:200+"$",status:"New",pic:Pic6},
        {name:"bag76",price:200+"$",status:"New",pic:Pic7},
        {name:"bag76",price:200+"$",status:"New",pic:Pic8},
        {name:"bag76",price:200+"$",status:"New",pic:Pic},
    ])

    return (
        <div>           
            <Context.Provider value={[...products]}>
            {props.children}
            </Context.Provider>           
        </div>
    )
}

export default Productinfo
