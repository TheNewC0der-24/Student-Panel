import React from 'react';
import styles from './Library.module.css';

import { TbBrandMeta } from 'react-icons/tb';
import { FaApple, FaAmazon, FaGoogle, FaBuilding, FaFileAlt } from 'react-icons/fa';
import { SiNetflix } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';

import brand from '../../assets/Images/favicon.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import bot from '../../assets/Images/bot.png';
import { Link } from 'react-router-dom';


const Library = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className={`${styles.container} p-3`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <h1>A Complete Preparation Guide For Interviews.</h1>
                            <h5>Preparation is the key!</h5>
                            <p align="justify">
                                This is what exactly this guide will help you with. We have curated a complete preparation guide for you to prepare in a
                                structured manner. choose your tracks and start preparing for your next big interview. Prepare for companies like..
                            </p>
                            <div className={`${styles.brand} fs-1 d-flex gap-2 bg-light p-3`}>
                                <TbBrandMeta />
                                <FaApple />
                                <FaAmazon />
                                <SiNetflix />
                                <FaGoogle />
                            </div>
                        </div>
                        <div className={`${styles.right} col-md-6 m-auto`}>
                            <img className='img-fluid d-flex ms-auto' src={bot} alt="bot" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className='text-dark text-decoration-none' >
                                aCloud
                            </Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">Library</li>
                    </ol>
                </nav>
                <h5 className='fw-bold'>Explore guided path categories</h5>

                <nav className='mt-5'>
                    <div className={`${styles.nav} nav nav-tabs gap-3`} id="nav-tab" role="tablist">
                        <button className={`${styles.navLink} nav-link active`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-dsa" type="button" role="tab" aria-controls="nav-dsa" aria-selected="true">Data structure and algorithms</button>
                        <button className={`${styles.navLink} nav-link`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-ml" type="button" role="tab" aria-controls="nav-ml" aria-selected="false">Data science/machine learning</button>
                        <button className={`${styles.navLink} nav-link`} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-new" type="button" role="tab" aria-controls="nav-new" aria-selected="false">Hot/new tech</button>
                    </div>
                </nav>
                <div className={`${styles.tabContent} tab-content p-3`} id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-dsa" role="tabpanel" aria-labelledby="nav-dsa-tab" tabIndex="0">
                        <div className="container">
                            <h5 className='fw-bold'>Beginner</h5>
                            <Slider {...settings} className="mt-4">
                                <div className='card bg-light'>
                                    <div className='card-body h-100'>
                                        <h5 className='card-title fw-bold'><FaBuilding className="me-2" />Basics Of C++</h5>
                                        <p className='card-text'>If you are wondering how to start programming in the C++ language, here is your ultimate guide for practising and
                                            testing your problem-solving skills. Enrol in this...</p>
                                        <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                        <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Basic Aptitude And Enthusiasm To Learn</strong></p>
                                        <div className='d-grid'>
                                            <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='card h-100 bg-light'>
                                    <div className='card-body'>
                                        <h5 className='card-title fw-bold'><FaBuilding className="me-2" />Basics Of Java</h5>
                                        <p className='card-text'>If you are wondering how to start programming in the JAVA language, here is your ultimate
                                            guide for practising and testing your problem-solving skills. Enrol in...</p>
                                        <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                        <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Basic Aptitude And Enthusiasm To Learn</strong></p>
                                        <div className='d-grid'>
                                            <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='card bg-light'>
                                    <div className='card-body h-100'>
                                        <h5 className='card-title fw-bold'><FaBuilding className="me-2" />Basics Of Python</h5>
                                        <p className='card-text'>If you are wondering how to start programming in the PYTHON language, here is your
                                            ultimate guide for practising and testing your problem-solving skills. Enrol in...</p>
                                        <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                        <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Basic Aptitude And Enthusiasm To Learn</strong></p>
                                        <div className='d-grid'>
                                            <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='card bg-light'>
                                    <div className='card-body h-100'>
                                        <h5 className='card-title fw-bold'><FaBuilding className="me-2" />OOPS in C++</h5>
                                        <p className='card-text'>Know the basics of C++, now looking forward to learn object oriented programming,
                                            to ace your interviews and college tests?Then, this is the perfect track for you as...</p>
                                        <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                        <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Basics of programming like functions, conditionals, loops
                                            in C++, Java or Python</strong></p>
                                        <div className='d-grid'>
                                            <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                        </div>
                                    </div>
                                </div>
                            </Slider>

                            <hr />
                            <h5 className='fw-bold'>Intermediate</h5>
                            {/* <Slider {...settings} className="mt-4"> */}
                            <div className='card w-25 bg-light mt-4'>
                                <div className='card-body'>
                                    <h5 className='card-title fw-bold'><FaBuilding className="me-2" />Data Structures & Algorithms</h5>
                                    <p className='card-text'>If you are wondering how to prepare data structures and algorithms to do well in your programming
                                        interviews, here is your ultimate guide for practising...</p>
                                    <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                    <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Basics of programming like functions, conditionals, loops in
                                        C++, Java or Python</strong></p>
                                    <div className='d-grid'>
                                        <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                    </div>
                                </div>
                            </div>
                            {/* </Slider> */}

                            <hr />
                            <h5 className='fw-bold'>Advanced</h5>
                            {/* <Slider {...settings} className="mt-4"> */}
                            <div className='card w-25 bg-light mt-4'>
                                <div className='card-body'>
                                    <h5 className='card-title fw-bold'><FaBuilding className="me-2" />Competitive Programming</h5>
                                    <p className='card-text'>If you are wondering how to prepare for competitive programming to do well on sites like
                                        codechef, codeforces, here is your ultimate guide for practising...</p>
                                    <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                    <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Basic Knowledge Of Data Structures And Algorithms</strong></p>
                                    <div className='d-grid'>
                                        <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                    </div>
                                </div>
                            </div>
                            {/* </Slider> */}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-ml" role="tabpanel" aria-labelledby="nav-ml-tab" tabIndex="0">
                        <div className="container">
                            <h5 className='fw-bold'>Beginner</h5>
                            <div className='card w-25 bg-light mt-4'>
                                <div className='card-body'>
                                    <h5 className='card-title fw-bold'><FaBuilding className="me-2" />Basics Of Machine Learning</h5>
                                    <p className='card-text'>Machine Learning has quickly evolved from the buzzword to the significantly applied subfields of
                                        Computer Science in the tech industry.Be it facial recognition...</p>
                                    <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                    <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Basics of Python and OOPS in Python</strong></p>
                                    <div className='d-grid'>
                                        <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h5 className='fw-bold'>Advanced</h5>
                            <div className='card w-25 bg-light mt-4'>
                                <div className='card-body'>
                                    <h5 className='card-title fw-bold'><FaBuilding className="me-2" />Data Science</h5>
                                    <p className='card-text'>In today's world , data is the real treasure. And data science combines statistics,
                                        data analysis, and machine learning to analyze data and to extract knowledge an...</p>
                                    <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                    <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Basics of Python, OOPs In Python, Basics Of Machine
                                        Learning</strong></p>
                                    <div className='d-grid'>
                                        <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-new" role="tabpanel" aria-labelledby="nav-new-tab" tabIndex="0">
                        <div className="container">
                            <h5 className='fw-bold'>Beginner</h5>
                            <div className='card w-25 bg-light mt-4'>
                                <div className='card-body'>
                                    <h5 className='card-title fw-bold'><FaBuilding className="me-2" />Blockchain</h5>
                                    <p className='card-text'>With the advent of new cryptocurrencies on an almost daily level, new government policies,
                                        people seeking it as a viable investment option, the hype for th...</p>
                                    <p><FaFileAlt className="me-2" />Earn <strong>Certificate</strong> of completion</p>
                                    <p><BiGitBranch className="me-2" />Pre-requisites: <strong>Enthusiasm to Learn</strong></p>
                                    <div className='d-grid'>
                                        <button className='btn btn-secondary opacity-50'>Start Learning</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">...</div> */}
                </div>
            </div>

            <div className='p-2 bg-dark my-5'>
                <h1 className='text-center text-white'>Thank You for choosing aCLOUD</h1>
            </div>
        </>
    )
}

export default Library;