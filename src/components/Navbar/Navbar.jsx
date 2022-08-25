import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <style jsx='true'>
                {`
                    .active {
                        color: #6c757d !important;
                        font-weight: bold !important;
                        border-bottom: 3px solid #6c757d !important;
                    }
                `}
            </style>

            <nav className={`${styles.navbar} navbar navbar-expand-lg bg-white sticky-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" to="/">Talent <span className='bg-dark text-white p-2'>Sumo</span></Link>
                    <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            toggle ? <FaTimes className='text-dark' /> : <FaBars className='text-dark' />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        {/* <ul className="navbar-nav mx-5 gap-2 me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/">Dashboard</NavLink>
                            </li>
                        </ul> */}
                        <div className={`${styles.buttons} d-flex ms-auto gap-2`}>
                            <Link onClick={handleClick} className="mt-1" to="/profile">
                                <img
                                    src="https://via.placeholder.com/32"
                                    alt="avatar"
                                    className={styles.avatar}
                                />
                            </Link>
                            <button onClick={() => navigate('/login')} className={`${styles.login} btn btn-outline-secondary`}>Login</button>
                            <button onClick={() => navigate('/register')} className="btn btn-dark">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;