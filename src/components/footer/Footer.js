import React from 'react';

import logo from '../../assets/img/aum-logo-small-white.png';

const Footer = () => {
    return (
        <div className='mt-5 bg-dark p-3 px-5 text-center'>
            <div className='row'>
                <div className='col-12 col-md-4 order-3 order-md-1 my-3 align-self-center'>
                    <div>
                    <img alt='' src={logo} className='d-none d-md-block' />
                    </div>
                    <div className='text-white row justify-content-center justify-content-md-start' style={{fontSize: '12px'}}>
                        <p className='col-auto'>©2021 Aumcore, LLC. Privacy </p>|
                        <a className='col-auto text-white' style={{ textDecoration: 'none' }} href='#'> term </a>|
                        <a className='col-auto text-white' style={{ textDecoration: 'none' }} href='#'> sitemap</a>
                    </div>
                </div>
                <div className='col-12 col-md-5 order-1 order-md-2 text-white my-3 align-self-center'>
                    <div style={{fontSize: '20px'}}>Subscribe To Us</div>
                    <div className='row justify-content-center '>
                        <div className='col-auto align-self-center'>
                            <input type='email' className='form-control form-control-sm ' placeholder='email@domain.com' /> 
                        </div>
                        <div className='col-auto align-self-center'>
                            <i class="bi bi-arrow-right-square text-white fs-3"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 order-2 order-md-3 text-white text-center text-md-end align-self-center'>
                    <div style={{fontSize: '20px'}}>Connect With Us</div>                        
                        <div className='justify-content-center'>
                            <i class="mx-1 bi bi-linkedin"></i>
                            <i class="mx-1 bi bi-facebook"></i>
                            <i class="mx-1 bi bi-twitter"></i>
                            <i class="mx-1 bi bi-whatsapp"></i>
                            <i class="mx-1 bi bi-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;