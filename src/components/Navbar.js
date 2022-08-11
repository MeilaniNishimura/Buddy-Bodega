import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { login } = useContext(AuthContext)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }

    };

    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        BUDDY BODEGA <i className="fa-solid fa-paw"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Pet Services
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/lostandFound' className='nav-links' onClick={closeMobileMenu}>
                                Lost & Found
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/adopt' className='nav-links' onClick={closeMobileMenu}>
                                Adopt
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/signup' className='nav-links-mobile' onClick={login}>
                                Login
                            </Link>
                            </li>
              

                    </ul>
                    
                    {button && <Button buttonStyle='btn--outline' onClick={login}>Login</Button>}

                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
