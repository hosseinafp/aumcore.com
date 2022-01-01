import React,{useEffect} from 'react';
//animations
import AOS from 'aos';
// photos
import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import icon3 from '../../assets/img/icon3.png';
import icon4 from '../../assets/img/icon4.png';
import services from '../../assets/img/services-thumbnail.jpg';
import work from '../../assets/img/work-thumbnail.jpg';
//styles
import '../../assets/css/ZoomStyle.css';

const FunFacts = () => {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
    <>
        <div className='container text-center mt-3 mb-2'>
            <p>
                Aumcore is a global digital marketing agency offering 360° marketing solutions, delivering measurable results across different marketing initiatives from ecommerce and SEO to creative campaigns.
            </p>
            <p className='py-2'>
                As a leading digital agency specializing in strategy and brand building, we’ll help accelerate your online growth and get you where you need to be with eye-catching creatives and measurable marketing campaigns.
            </p>
        </div>
        <div className='container'>
            <p className='h4 text-center'>Fun Facts</p>
            <div className='row justify-content-center'>
                <div data-aos="fade-up" className='col-12 col-md-6 col-lg-3 text-center mt-5 fs-5'>
                    <img alt='' className='element' src={icon1} />
                    <p className='pt-4'>
                    Years of Experience As Leading Digital Agency in NYC
                    </p>
                </div>
                <div data-aos="fade-up" className='col-12 col-md-6 col-lg-3 text-center mt-5 fs-5'>
                    <img alt='' className='element' src={icon2} />
                    <p className='pt-4'>
                    Countries With An Aumcore Office
                    </p>
                </div>
                <div data-aos="fade-up" className='col-12 col-md-6 col-lg-3 text-center mt-5 fs-5'>
                    <img alt='' className='element' src={icon3} />
                    <p className='pt-4'>
                    Languages Collectively Spoken By Our Team
                    </p>
                </div>
                <div data-aos="fade-up" className='col-12 col-md-6 col-lg-3 text-center mt-5 fs-5'>
                    <img alt='' className='element' src={icon4} />
                    <p className='pt-4'>
                    Million Air Miles Earned By Our Team in 2019
                    </p>
                </div>
            </div>
        </div>
        <div className='row w-100 fs-5 mb-5'>
            <div data-aos="fade-up" className='col-12 col-lg-6 text-center px-0 color'>
                <div className='inner'>
                    <img alt='' className='card-img-top' id='images' src={services} />
                </div>
                <div className='row justify-content-netween card-body py-0'>
                  <p className='col-9 text-start'>Sevices we provide</p>
                  <i class="col-3 text-end bi bi-chat-left-dots"></i>
                </div>
            </div>
            <div data-aos="fade-up" className='col-12 col-lg-6 text-center px-0 color'>
                <div className='inner'>
                    <img alt='' className='card-img-top' src={work} />
                </div>
                <div className='row justify-content-netween card-body py-0'>
                   <p className='col-9 text-start'>Example Of Our Work</p>
                    <i class="col-3 text-end bi bi-chat-left-dots"></i>
                </div>
            </div>
        </div>
    </>
    );
};

export default FunFacts;