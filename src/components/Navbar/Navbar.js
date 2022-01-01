import React from 'react';
//photos
import logo from '../../assets/img/aum-logo.png';
import usa from '../../assets/img/usa.jpg';
import fr from '../../assets/img/fr.jpg';
//styles
import '../../assets/css/navStyle.css';

const Navbar = () => {
    return (
        <div className='sticky-top bg-light navbar-light pt-2 autohide'>
                <div class="container-fluid d-md-none">
                    <div className='row justify-content-between mx-0'>
                        <div className='col-6'>
                            <a class="navbar-brand" href="/"><img alt='' src={logo} style={{widows:'3vw'}} /></a>
                        </div>
                        <div className='col-6'>
                                <div className='row'>
                                    <div className='col-9 order-md-1 row justify-content-end px-4'>
                                        <div className='col-1 p-0'>
                                            <img alt='' style={{width:'20px' }} src={usa} />US
                                        </div>
                                        <div className='col-1 px-4'>
                                            <img alt='' style={{width:'20px' }} src={fr} />FR
                                        </div>
                                    </div>
                                    
                        <div className='col-3'>
                            <button class="mx-2 navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" style={{border:'none'}}>
                                <span class=" navbar-toggler-icon"></span>
                            </button>
                            
                        </div>
                        </div>
                        </div>
                        <div class="collapse navbar-collapse " id="navbarText">
                                <ul class="navbar-nav me-auto text-center mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">HOME</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">SERVICES</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/">WORK</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/">ABOUT</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/">BLOG</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/">CAREERS</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/">CONTANT</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            <div className='d-none d-md-block'>
                <div className='row justify-content-end pe-5 d-block text-end'>
                    <span className='color'>
                        <img alt='' style={{width:'30px' }} src={usa} />US
                    </span>
                    <span className='color'>
                        <img alt='' style={{width:'30px' }} src={fr} />FR
                    </span>
                </div>
                <div className='row justify-content-between mx-1'>
                    <div className='col-2 align-self-center'>
                        <img alt='' src={logo} style={{paddingLeft:'10px'}} />
                    </div>
                    <div className='col-10'>
                        <section class="text-dark text-end me-5" style={{justifyContent:'end'}}>
                            <nav class="cl-effect" style={{paddingRight: '40px'}}>
                                <a href="#"><span className="hoverColor text-danger" data-hover="HOME">HOME</span></a>
                                <a href="#"><span className="hoverColor" data-hover="SETVICES">SERVICES</span></a>
                                <a href="#"><span className="hoverColor" data-hover="WORK">WORK</span></a>
                                <a href="#"><span className="hoverColor" data-hover="ABOUT">ABOUT</span></a>
                                <a href="#"><span className="hoverColor" data-hover="BLOG">BLOG</span></a>
                                <a href="#"><span className="hoverColor" data-hover="CARRERS">CARRERS</span></a>
                                <a href="#"><span className="hoverColor" data-hover="CONTANT">CONTANT</span></a>
                            </nav>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;