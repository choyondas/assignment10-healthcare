import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className='banner-img' src="https://i.ibb.co/Pzqz7Zb/ban-1.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div className='posi'>
                                <div >
                                    <h1 className='banner-title'>YOUR DESIRE <span className='title-span'>DESTINATION</span> </h1>
                                    <p>We at Medicare are always fully focused on helping your child and you to overcame any hurdle, whether it's chicken pox or just a seasonal flue.</p>
                                </div>
                                <div className="small-info">

                                    <div className='advice'>
                                        <div className='icon'>
                                            <i class="fas fa-comment-medical"></i>
                                        </div>
                                        <div>
                                            <h5>HEALTHY ADVICES</h5>
                                            <p>Praesent convallis tortor et enim laoreet.</p>
                                        </div>
                                    </div>
                                    <div className='advice'>
                                        <div className='icon'>
                                            <i class="fas fa-phone-volume"></i>
                                        </div>
                                        <div>
                                            <h5>ALWAYS AVAILABLE</h5>
                                            <p>We are here for your support. join us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/JvcrS85/ban-2.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div className='posi'>
                                <div>
                                    <h1 className='banner-title'>YOU AND YOUR <span className='title-span'>DOCTOR </span></h1>
                                    <p>We at Medicare are always fully focused on helping your child and you to overcame any hurdle, whether it's chicken pox or just a seasonal flue.</p>
                                </div>
                                <div className="small-info">

                                    <div className='advice'>
                                        <div className='icon'>
                                            <i class="fas fa-comment-medical"></i>
                                        </div>
                                        <div>
                                            <h5>REGULAR CHECKUPS</h5>
                                            <p>Praesent convallis tortor et enim laoreet.</p>
                                        </div>
                                    </div>
                                    <div className='advice'>
                                        <div className='icon'>
                                            <i class="fas fa-phone-volume"></i>
                                        </div>
                                        <div>
                                            <h5>ALWAYS AVAILABLE</h5>
                                            <p>Praesent convallis tortor et enim laoreet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/k2ym1SV/ban-3.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div className='posi'>
                                <div>
                                    <h1 className='banner-title'>THE <span className='title-span'>RIGHT </span> PEDIATRICIAN</h1>
                                    <p>We at Medicare are always fully focused on helping your child and you to overcame any hurdle, whether it's chicken pox or just a seasonal flue.</p>
                                </div>
                                <div className="small-info">

                                    <div className='advice'>
                                        <div className='icon'>
                                            <i class="fas fa-comment-medical"></i>
                                        </div>
                                        <div>
                                            <h5>HEALTHY ADVICES</h5>
                                            <p>Praesent convallis tortor et enim laoreet.</p>
                                        </div>
                                    </div>
                                    <div className='advice'>
                                        <div className='icon'>
                                            <i class="fas fa-phone-volume"></i>
                                        </div>
                                        <div>
                                            <h5>HEALTHY ADVICES</h5>
                                            <p>Praesent convallis tortor et enim laoreet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;