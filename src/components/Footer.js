import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join
                </p>
                <p className="footer-subscription-text">
                    This is filler text for the footer element
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
                        <h2>About Us</h2>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/adopt">Adopt</Link>
                        <Link to="/lostandFound">Lost & Found</Link>
                        <Link to="/services">Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
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
                            Buddy Bodega <i className="fa-solid fa-paw"></i>

                        </Link>
                    </div>
                    <div>
                    <small className='website-rights'>Buddy Bodega &copy; 2022</small>
                    </div>
                    <Link to='/' className='social-icon-link facebook'
                    target='_blank'
                    aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link to='/' className='social-icon-link instagram'
                    target='_blank'
                    aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link to='/' className='social-icon-link twitter'
                    target='_blank'
                    aria-label='twitter'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default Footer
