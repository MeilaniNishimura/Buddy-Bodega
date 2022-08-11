import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe
                </p>
                <p className="footer-subscription-text">
                    Sign up to subscribe to our email newsletter
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Email" className="footer-input"></input>
                        <Button buttonStyle="btn--outline">Sign Up</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2><a href='/'>About Us</a></h2>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/adopt">Adopt</Link>
                        <Link to="/lostandFound">Lost & Found</Link>
                        <Link to="/services">Services</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            BUDDY BODEGA <i className="fa-solid fa-paw"></i>

                        </Link>
                    </div>
                    <div>
                    <small className='website-rights'>BUDDY BODEGA &copy; 2022</small>
                    </div>
                    <a href='https://www.facebook.com/' className='social-icon-link facebook'
                    target='_blank'
                    aria-label='Facebook'>
                    <i className='fab fa-facebook-f'></i></a>
                    
                    <a to='https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530334509&extra_1=s|c|547348909654|e|instagram%20%27|&placement=&creative=547348909654&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530334509%26adgroupid%3D126262421974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9026837%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjworiXBhDJARIsAMuzAuz_ZPg8paw14FdWpjR7DJ-uEnzXDuIFAjb1KjuT8nfxv9heU6yUt6saAhNREALw_wcB' className='social-icon-link instagram'
                    target='_blank'
                    aria-label='Instagram'>
                        <i className='fab fa-instagram'></i></a>
                    
                    <a to='https://twitter.com/?lang=en' className='social-icon-link twitter'
                    target='_blank'
                    aria-label='twitter'>
                        <i className='fab fa-twitter'></i></a>
                    
                    
                </div>
            </section>

        </div>
    )
}

export default Footer
