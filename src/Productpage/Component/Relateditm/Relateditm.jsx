import React,{useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'
import './Relateditm.css'
import Pic from './Bag.png'                                                       
import ContextCart from '../../CartContextjs'                                 


SwiperCore.use([Pagination,Navigation,Autoplay])

let imges=[
    {image:Pic},
 
    {image:Pic},
    {image:Pic},
     {image:Pic}, {image:Pic},
     {image:Pic},
   


]

function Watchlist() {
    const {state}=useContext(ContextCart)

    let topsellingslides=[];
    imges.map((imge)=>(topsellingslides.push(
    
    <SwiperSlide className='swiperslde'>
         <div> <img className='related-item-img' src={imge.image} /></div>
     </SwiperSlide>

    )))

    return (<>
        
        <div className='Watchlist-maindiv'>
            <div className='watclist-header-div'><h2>Related Items</h2></div>
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
    </>)
}

export default Watchlist
