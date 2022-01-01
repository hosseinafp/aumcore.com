import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//photos
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
            spaceBetween={50}
            slidesPerView={1}
            >
            <SwiperSlide>
                <div style={{textAlign:'-webkit-center',width: "100%"}}>
                    <div class="text-center" style={{textAlign:'-webkit-center',width: "55vw",marginRight:'0px'}}>
                        <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                        <div class="card-body">                            
                            <p class="card-text" style={{fontSize:'3vh'}}>As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                            <h5 class="card-title">Vaishali Banner</h5>
                            <p class="card-text">Director Of Marketing , Davis & Company</p>
                                
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{textAlign:'-webkit-center',width: "100%"}}>
            <div class="text-center col-4" style={{width: "55vw"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" style={{fontSize:'3vh'}} >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    
                </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{textAlign:'-webkit-center',width: "100%"}}>
            <div class="text-center col-4" style={{width: "55vw"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" style={{fontSize:'3vh'}} >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    
                </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{textAlign:'-webkit-center',width: "100%"}}>
            <div class="text-center col-4" style={{width: "55vw"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" style={{fontSize:'3vh'}} >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{textAlign:'-webkit-center',width: "100%"}}>
            <div class="text-center col-4" style={{width: "55vw"}}>
                <img src={laptop} class="rounded-circle" style={{width:'102px',display: "inline",height:'102px'}} alt="..."/>
                <div class="card-body">
                    
                    <p class="card-text" style={{fontSize:'3vh'}} >As a marketer, where do you get your most important customer data froAs a marketer, where do you get your most important customer data fro...</p>
                    <h5 class="card-title">Vaishali Banner</h5>
                    <p class="card-text">Director Of Marketing , Davis & Company</p>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            </Swiper>

            <p className='h3 pt-4'>Excellence Recognized</p>
            <p className='h6 pt-1 pb-5'>We're an Award Winning Digital Marketing Agency</p>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // Responsive breakpoints
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 120
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 40
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 120
                    },
                    840: {
                        slidesPerView: 4,
                        spaceBetween: 80,
                      },
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
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

    );
};

export default Comments;