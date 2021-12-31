import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import laptop from '../../assets/img/end of third party cookies.jpg';
import digital from '../../assets/img/digital-agency.png';
import expertise from '../../assets/img/expertise.png';
import google from '../../assets/img/google-partner.png';
import magento from '../../assets/img/magento-partner.jpg';
import sitecore from '../../assets/img/sitecore-partner.jpg';
import tia from '../../assets/img/tia.png';
import upcity from '../../assets/img/upcity.png';


const Comments = () => {
    return (
        <div className='container text-center'>
            <p className='h3 py-4'>What Our Clients Are Saying</p>
            <Swiper className=' border border-5 rounded p-5 border-danger'
            spaceBetween={300}
            slidesPerView={1}
            breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween:250
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 120
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10
                }
              }
            }
            >
            <SwiperSlide>
            <div class="text-center col-4" style={{width: "35rem"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="text-center col-4" style={{width: "35rem"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="text-center col-4" style={{width: "35rem"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="text-center col-4" style={{width: "35rem"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="text-center col-4" style={{width: "35rem"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    
                </div>
                </div>
            </SwiperSlide>
            </Swiper>

            <p className='h3 pt-4'>Excellence Recognized</p>
            <p className='h6 pt-1 pb-5'>We're an Award Winning Digital Marketing Agency</p>
            <Swiper
                // spaceBetween={50}
                // slidesPerView={1}
                // Responsive breakpoints
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 5,
                      spaceBetween: 15
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 7,
                      spaceBetween: 10
                    }
                  }
                }
            loop={true}
            // spaceBetween={50}
            // slidesPerView={5}
            className='py-5'
            >
            <SwiperSlide>
                <img  alt='' src={digital} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='' src={expertise} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='' src={google} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='' src={magento} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='' src={sitecore} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='' src={tia} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='' src={upcity} />
            </SwiperSlide>
            
            
            
            </Swiper>
            
        </div>

    );
};

export default Comments;