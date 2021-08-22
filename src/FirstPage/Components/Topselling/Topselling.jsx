import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'
import './Topselling.css'
import Pic from './Pics/shirt1.jpg'
import Pic2 from './Pics/shirt2.jpg'
import Pic4 from './Pics/shirt4.jpg'
import Pic5 from './Pics/shirt5.jpg'
import Pic7 from './Pics/shirt7.jpg'
import Pic9 from './Pics/shirt9.jpg'

import Pic10 from './Pics/woman1.jpg'
import Pic11 from './Pics/woman7.jpg'
import Pic12 from './Pics/woman9.jpg'
import Pic13 from './Pics/woman4.jpg'
import Pic14 from './Pics/woman42.jpg'
import Pic15 from './Pics/woman2.jpg'
import Pic16 from './Pics/woman3.jpg'


SwiperCore.use([Pagination,Navigation,Autoplay])

let imges=[
    {image:Pic},
    {image:Pic2},
    {image:Pic9},
    {image:Pic4},
    {image:Pic5},
    {image:Pic7},
    {image:Pic9},


]
let imges2=[
    {image:Pic10},
    {image:Pic11},
    {image:Pic12},
    {image:Pic13},
    {image:Pic14},
    {image:Pic16},
    {image:Pic15},

]

function Topselling() {

    let topsellingslides=[];
    imges.map((imge)=>(topsellingslides.push(
    
    <SwiperSlide className='swiperslde'>
         <div> <img  src={imge.image} /></div>
     </SwiperSlide>

    )))
    

    let topsellingslides2=[];
    imges2.map((imge)=>(topsellingslides2.push(
    
    <SwiperSlide className='swiperslde'>
         <div> <img  src={imge.image} /></div>
     </SwiperSlide>

    )))

    return (
     
    <div className='topsellingslidesdiv'>
        <div>
         
        </div>
  <div className='topsellingsliderdiv'>
        
         <Swiper
        slidesPerView='6'
        slidesPerGroup="6"
        spaceBetween='1'
        navigation>
   
        {topsellingslides}
   
        </Swiper>
        
        <div className='as'>
            <h4 >Popular Products Men</h4>
            <a href='#'>Shop now</a>
        </div>
    
    </div>

    <div className='topsellingsliderdiv2'>
        
        <Swiper
       slidesPerView='6'
       slidesPerGroup="6"
       spaceBetween='1'
       navigation>
  
       {topsellingslides2}
  
       </Swiper>
       
       <div className='as'>
           <h4 >Popular Products Women</h4>
           <a href='#'>Shop now</a>
       </div>
   
   </div>




        </div>
         
    )
}

export default Topselling

