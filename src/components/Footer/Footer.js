import React from 'react';
import './Footer.css'
import logo2 from '../../images/logo/logo.png'
const Footer = () => {
    return (
        <div>
            <div className='footer-back'>
                <div className='row footer-div'>
                    <div className="col-lg-4 col-md-6 col-12 inside-footer">
                        <img width='80px' src={logo2} alt="" />
                        <span className='logo-name'>HEALTH CARE</span>
                        <p><small>Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis tincidunt. Integer quis erat dictum, placerat massa non, bibendum ante. Duis aliquet tellus magna, quis egestas enim vulputate sed. Phasellus in dui malesuada, lacinia urna sed.</small></p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 inside-footer">
                        <h5>Recent Posts</h5>
                        <div className='recent'>
                            <div>
                                <img width='100px' className='me-2' src="https://www.managingip.com/Media/images/managing-ip/summer-2021/LexOrbis2.jpg" alt="" />
                            </div>
                            <div>
                                <small className='small-name'>OCTOBER 18, 2020</small>
                                <p>2020 Best USA Hospitals and Clinics</p>
                            </div>
                        </div>
                        <div className='recent'>
                            <div>
                                <img width='100px' className='me-2' src="https://www.aluminiumtrading.co.za/wp-content/uploads/2020/04/medical.jpg" alt="" />
                            </div>
                            <div>
                                <small className='small-name'>SEPTEMBER 22, 2015</small>
                                <p>Are drugs the best solution?</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12 inside-footer">
                        <h5>Our services</h5>
                        <p>
                            <small>Appointments</small>
                        </p>
                        <p><small>Working hours</small></p>
                        <p><small>Cost calculator</small></p>

                        <p><small>Procedures</small></p>
                        <p> <small>Special offers</small></p>
                        <p><small>Testimonials</small></p>
                    </div>

                </div>

            </div>
            <div className='copy-right'>
                <div className='inside-copy'>
                    <p>Copyright by Choyon Das. All rights reserved.</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;