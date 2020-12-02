import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [active, setActive] = useState('')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('Home');
        else if (currentURL.endsWith('/projects'))
            setActive('Portfolio')
        else if (currentURL.endsWith('/resume'))
            setActive('Profile')
        else if (currentURL.endsWith('/about'))
            setActive('About')
        else if (currentURL.endsWith('/contact'))
            setActive('Contact')

    }, [active])

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>

            <div className="navbar__items">
                {active !== 'Home' &&
                    <Link to="/">
                        <div className="navbar__item" onClick={() => setActive('Contact')}>Home</div>
                    </Link>
                }
                {active !== 'Profile' &&
                    <Link to="/resume">
                        <div className="navbar__item" onClick={() => setActive('Resume')}>Profile</div>
                    </Link> 
                }

                {active !== 'Portfolio' &&
                    <Link to="/projects">
                        <div className="navbar__item" onClick={() => setActive('Projects')}>Portfolio</div>
                    </Link>
                }
                {active !== 'About' &&
                    <Link to="/about">
                        <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                    </Link>
                }
                {active !== 'Contact' &&
                    <Link to="/contact">
                        <div className="navbar__item" onClick={() => setActive('Contact')}>Contact</div>
                    </Link>
                }
            </div>

        </div>
    );
};

export default Navbar;