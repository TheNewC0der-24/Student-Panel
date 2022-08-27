import React from 'react';
import styles from './Dashboard.module.css';
// import dashboard from '../../assets/Images/dashboard.png';
import img1 from '../../assets/Images/img-1.gif';
import img2 from '../../assets/Images/img-2.gif';
import img3 from '../../assets/Images/img-3.gif';

import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { SiHomebrew } from 'react-icons/si';
import PackName from '../Modal/PackName';

const Dashboard = () => {


    return (
        <>
            <style>
                {`
                    .button {
                         border-radius: 0;
                    }
                `}
            </style>
            <div className="container my-5">
                <div className="row mb-4">
                    <div className="col-md-7 m-auto">
                        <div className={`${styles.card} card h-100`}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://gravatar.com/avatar/21396bf8a2c260311eaca86416ef5db7?s=400&d=mp&r=x" className="img-fluid p-3 rounded-circle d-flex justify-content-center mx-auto" alt="profileImage" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3>
                                            <SiHomebrew />
                                        </h3>
                                        <h3 className='card-title'>Welcome, Username!</h3>
                                        <p>Get familiar with the dashboard, here are some ways to get started.</p>
                                        <Link to="/profile">
                                            <button className='btn btn-dark mt-3'>View Profile</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 m-auto">
                        <div className={`${styles.cardCarousel} card border-0`}>
                            <div className="card-body">
                                <Carousel
                                    autoFocus={true}
                                    emulateTouch={true}
                                    infiniteLoop={true}
                                    showStatus={false}
                                    stopOnHover={true}
                                    showThumbs={false}
                                    autoPlay={true}>
                                    <div>
                                        <img src={img1} className='img-fluid' alt='img-1' />
                                    </div>
                                    <div>
                                        <img src={img2} className='img-fluid' alt='img-2' />
                                    </div>
                                    <div>
                                        <img src={img3} className='img-fluid' alt='img-3' />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-auto">
                    <table className="table table-bordered border-dark text-center mb-5">
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th scope="col">Pack Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Certificate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#packModal" style={{ backgroundColor: "#97a39b", borderColor: "#97a39b" }}>Frontend</button>
                                </td>
                                <td>
                                    <button className='btn btn-warning button'>Pending</button>
                                </td>
                                <td>
                                    <button className='btn btn-link fw-bold'>
                                        <Link to='/certificate'>
                                            Link
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div className="col-md-6">
                        <table className="table table-bordered border-dark text-center mb-5">
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th scope="col">Individual Report</th>
                                    <th scope="col">Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to='/report'>
                                            <button className='btn btn-dark' style={{ backgroundColor: "#97a39b", borderColor: "#97a39b" }}>View Report</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-link fw-bold'>
                                            <Link to='/form'>
                                                Link
                                            </Link>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
            <PackName />
        </>
    )
}

export default Dashboard;