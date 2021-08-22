import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'
import Pic from './bkgr.jpg'
import Pic2 from './as.jpg'
import './ImgSlidefrntpg.css'

SwiperCore.use([Pagination,Navigation,Autoplay])

function ImgSlidefrntpg() {

   const picforslides=[
        {Pic:Pic},
        {Pic:Pic2},{Pic:Pic},
        {Pic:Pic2},]

    
    let frntpgswiper=[]
   
        frntpgswiper.push(

        picforslides.map((image)=>(
            <SwiperSlide>
                <div> <img  src={image.Pic} /></div>
            </SwiperSlide>)))
    
    
    return (
        
        <div className="ImgSlidefrntpg">
         <Swiper
         pagination
         loop={true}
         navigation
         >
             {frntpgswiper}
         </Swiper>
        </div>
    )
}

export default ImgSlidefrntpg
