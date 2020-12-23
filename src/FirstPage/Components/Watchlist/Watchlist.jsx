import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'
import './Watchlist.css'
import Pic from './Bag.png'                                                       
                                                       


SwiperCore.use([Pagination,Navigation,Autoplay])

let imges=[
    {image:Pic},
 
    {image:Pic},
    {image:Pic},
     {image:Pic}, {image:Pic},
     {image:Pic},
   


]

function Watchlist() {

    let topsellingslides=[];
    imges.map((imge)=>(topsellingslides.push(
    
    <SwiperSlide className='swiperslde2'>
         <div> <img  src={imge.image} /></div>
     </SwiperSlide>

    )))

    return (
        <div className='Watchlist-maindiv'>
            <div className='watclist-header-div'><h2>Your WatchList</h2></div>
             <div className='Watchlist-sliderdiv'>
                    <Swiper
                    slidesPerView='6'
                    slidesPerGroup="6"
                    spaceBetween='1'
                    navigation>

                        {topsellingslides}
                
                    </Swiper>
             </div>
             <hr></hr>
        </div>
    )
}

export default Watchlist
