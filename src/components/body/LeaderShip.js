import React,{useEffect} from 'react';
import AOS from 'aos';

import '../../assets/css/ZoomStyle.css';


import laptop from '../../assets/img/end of third party cookies.jpg';
import phone from '../../assets/img/Impact of 5G On Digital Marketing.jpg';
import telegram from '../../assets/img/Telegram sponsored messages.png';

const LeaderShip = () => {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
          duration : 1000
        });
      }, []);
    return (
        <div className='container'>
            <div className='text-center'>
                <p className='h2'>
                    Thought Leadership
                </p>
                <p className='h5'>
                    The Latest Articles From Our Digital Marketing Experts
                </p>
            </div>
            <div className='row justify-content-evenly'>
                <div data-aos="fade-up" class="col-4" style={{width: "18rem"}}>
                    <div className='inner'>
                        <img src={laptop} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">The End of Cookies: What Does It Mean to Advertisers and What Comes Next</h5>
                        <p>December, 13, 2021</p>
                        <p class="card-text">As a marketer, where do you get your most important customer data fro...</p>
                        <a href="/" class="btn btn-danger">Read More</a>
                    </div>
                </div>
                <div data-aos="fade-up" class="col-4" style={{width: "18rem"}}>
                    <div className='inner'>
                        <img src={phone} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Impact of 5G On Digital Marketing</h5>
                        <p>December, 03, 2021</p>
                        <p class="card-text">Previously, interactive ad features were data-intensive and heavy, making it difficult for users...</p>
                        <a href="/" class="btn btn-danger">Read More</a>
                    </div>
                </div>
                <div data-aos="fade-up" class="col-4" style={{width: "18rem"}}>
                    <div className='inner'>
                        <img src={telegram} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Telegram’s Sponsored Messaging Explained</h5>
                        <p>November, 25, 2021</p>
                        <p class="card-text">Sponsored messages on Telegram are the latest social media updates to take the mark...
</p>
                        <a href="/" class="btn btn-danger" style={{bottom:'0px !important'}}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderShip;