import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

import brand from '../../assets/Images/brand.png';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <nav className={`${styles.navbar} navbar navbar-expand-lg bg-white sticky-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" to="/">
                        {/* <span className='bg-dark text-white p-2'>A</span>cloud */}
                        <img src={brand} alt="brand" width={150} className='img-fluid' />
                    </Link>
                    <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            toggle ? <FaTimes className='text-dark' /> : <FaBars className='text-dark' />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
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