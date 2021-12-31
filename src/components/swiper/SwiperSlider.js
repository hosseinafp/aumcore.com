import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "./style.css";

import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import slide4 from '../../assets/img/slide4.jpg';

// import Swiper core and required modules
import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);


const SwiperSlider = () => {
    
    return (
            <>
            <div className='text-center display-6'>Digital marketing agency driven by results.</div>
            <Swiper style={{width: '100%',height: '436px'}} 
            direction={'vertical'} slidesPerView={1}  spaceBetween={30} mousewheel={true} pagination={{
                "clickable": true
                }} className="mySwiper mt-5">
                <SwiperSlide>
                    <img className=" position-relative" alt="" src={slide1} />
                    <div class="position-absolute text-white fs-5">
                        <p>
                            Online Web Experience for a legendary high-end audio equipment manufacturer
                        </p>
                        <p>Creative Design to Development on Sitecore Enterprise CMS</p>
                        <button className="btn btn-outline-light">See Case Study</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="position-relative" alt="" src={slide2} />
                    <div class="position-absolute text-white fs-5">
                        <p>
                        A multi-language Magento eCommerce website for a luxury interiors brand
                        </p>
                        <p>Digital Design, UX Development, Magento eCommerce Development</p>
                        <button className="btn btn-outline-light">See Case Study</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="position-relative" alt="" src={slide3} />
                    <div class="position-absolute text-white fs-5">
                        <p>
                        A multi-language Magento eCommerce website for a luxury interiors brand
                        </p>
                        <p>Digital Design, UX Development, Magento eCommerce Development</p>
                        <button className="btn btn-outline-light">See Case Study</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=" position-relative" alt="" src={slide4} />
                    <div class="position-absolute text-white fs-5">
                        <p>
                        Designed and developed an award winning app according to Mashable
                        </p>
                        <p>Digital Design, Mobile App, Platform Development, Marketing Research, UI/Design, UX/Development</p>
                        <button className="btn btn-outline-light">See Case Study</button>
                    </div>
                </SwiperSlide>
            </Swiper>  
        </>
    );
};

export default SwiperSlider;
