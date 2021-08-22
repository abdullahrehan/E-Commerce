import React, { useState } from 'react'
import {Context} from './Context'

import  Pic2 from './Pics/woman2.jpg'
import  Pic3 from './Pics/woman3.jpg'
import  Pic4 from './Pics/woman4.jpg'
import  Pic5 from './Pics/woman5.jpg'
import  Pic6 from './Pics/woman6.jpg'
import  Pic7 from './Pics/woman7.jpg'
import  Pic8 from './Pics/woman8.jpg'
import  Pic9 from './Pics/woman8.jpg'
import  Pic10 from './Pics/woman10.jpg'
import  Pic11 from './Pics/woman11.jpg'
import  Pic12 from './Pics/woman12.jpg'
import  Pic13 from './Pics/woman13.jpg'
import  Pic14 from './Pics/woman14.jpg'
import  Pic15 from './Pics/woman15.jpg'
import  Pic16 from './Pics/woman16.jpg'
import  Pic17 from './Pics/woman17.jpg'
import  mPic1 from './Pics/man1.jpg'
import  mPic2 from './Pics/man2.jpg'
import  mPic3 from './Pics/man3.jpg'
import  mPic4 from './Pics/man4.jpg'
import  mPic5 from './Pics/man5.jpg'
import  mPic6 from './Pics/man6.jpg'
import  mPic7 from './Pics/man6.jpg'
import  mPic8 from './Pics/man8.jpg'
import  mPic9 from './Pics/man8.jpg'
import  mPic10 from './Pics/man10.jpg'
import  mPic11 from './Pics/man11.jpg'
import  mPic12 from './Pics/man12.jpg'
function Productinfo(props) {

 const [products]=useState([
        {name:"Man Cloth",price:700+'$',status:"New",pic:mPic9,tag:['man','m']},
       {name:"Woman Cloth",price:50+'$',status:"New",pic:Pic10,pic2:Pic17,pic3:Pic4,pic4:Pic4,tag:['woman','w']},
        {name:"Man Cloth ",price:200+'$',status:"New",pic:mPic4,tag:['man']},
        {name:"Woman Cloth",price:200+'$',status:"New",pic:Pic11,pic2:Pic2,pic3:Pic3,pic4:Pic4,tag:['woman']},
        {name:"Woman Cloth",price:700+'$',status:"New",pic:Pic12,pic2:Pic2,tag:['woman']},
        {name:"Woman Cloth",price:120+'$',status:"New",pic:Pic13,tag:['woman']},
        {name:"Man Cloth ",price:50+'$',status:"New",pic:mPic1,tag:['man']},
        {name:"Man Cloth ",price:120+'$',status:"New",pic:mPic5,tag:['man']},
        {name:"Man Cloth ",price:20+'$',status:"New",pic:mPic3,tag:['man']},
        {name:"Woman Cloth",price:40+'$',status:"New",pic:Pic14,tag:['woman']},

        {name:"Man Cloth ",price:200+'$',status:"New",pic:mPic10,tag:['man']},
        {name:"Man Cloth ",price:200+'$',status:"New",pic:mPic12,tag:['man']},
        {name:"Man Cloth ",price:50+'$',status:"New",pic:mPic8,tag:['man']},
        {name:"Woman Cloth",price:35+'$',status:"New",pic:Pic15,tag:['woman']},
        {name:"Woman Cloth ",price:230+'$',status:"New",pic:Pic8,tag:['woman']},
        {name:"Woman Cloth ",price:200+'$',status:"New",pic:Pic2,tag:['woman']},
        
        {name:"Man Cloth ",price:200+'$',status:"New",pic:mPic7,tag:['man']},
        {name:"Man Cloth ",price:20+'$',status:"New",pic:mPic12,tag:['man']},
        {name:"Woman Cloth ",price:200+'$',status:"New",pic:Pic3,tag:['woman']},
        {name:"Woman Cloth ",price:200+'$',status:"New",pic:Pic4,tag:['woman']},
        {name:"Woman Cloth ",price:200+'$',status:"New",pic:Pic5,tag:['woman']},
        {name:"Man Cloth",price:35+'$',status:"New",pic:mPic10,tag:['man']},
        {name:"Man Cloth ",price:200+'$',status:"New",pic:mPic11,tag:['man']},
        {name:"Woman Cloth ",price:200+'$',status:"New",pic:Pic6,tag:['woman']},
        {name:"Woman Cloth ",price:200+'$',status:"New",pic:Pic7,tag:['woman']},
        {name:"Woman Cloth ",price:200+'$',status:"New",pic:Pic15,tag:['woman']},
        
        {name:"Man Cloth",price:700+'$',status:"New",pic:mPic1,tag:['man']},
        {name:"Man Cloth",price:120+'$',status:"New",pic:mPic1,tag:['man']},
        {name:"Woman Cloth ",price:200+'$',status:"New",pic:Pic16,tag:['woman']},

        {name:"Man Cloth",price:40+'$',status:"New",pic:mPic6,tag:['man']},

        {name:"Man Cloth",price:40+'$',status:"New",pic:mPic1,tag:['man']},
        {name:"Man Cloth",price:35+'$',status:"New",pic:mPic1,tag:['man']},
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
