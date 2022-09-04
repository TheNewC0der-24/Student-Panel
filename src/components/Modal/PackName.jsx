import React from 'react';

import { Link } from 'react-router-dom';

const PackName = () => {
    return (
        <>
            <div className="modal fade modal-xl" id="packModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Experience Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='card border-0 bg-light'>
                                <div className="card-body">
                                    <h6>Experience Name : Relationship Manager in a Bank</h6>
                                    <h6>Organization : Talent Sumo</h6>
                                    <div className='d-flex justify-content-end ms-auto'>
                                        <h6>Expert Talk : <button className='btn btn-dark btn-sm'>View Media</button></h6>
                                    </div>
                                    <table className="table table-bordered text-center mt-3">
                                        <thead className='table-secondary'>
                                            <tr>
                                                <th scope="col">Experience Type</th>
                                                <th scope="col">Interaction</th>
                                                <th scope="col">Answer Bot</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Feedback Report</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ backgroundColor: "#282a2d", color: "#fff" }}>Preview <span className='badge bg-danger'>Free</span></td>
                                                <td>Bank Sales preview</td>
                                                <td>
                                                    <Link to="/form" target="_blank">
                                                        <Link to="/form" target="_blank">
                                                            <button className='btn btn-dark'>Try This !</button>
                                                        </Link>
                                                    </Link>
                                                </td>
                                                <td className='fw-bold text-danger'>Not Started</td>
                                                <td>Not Generated</td>
                                            </tr>
                                            <tr>
                                                <td style={{ backgroundColor: "#5f6368", color: "#fff" }} rowSpan={2}>Virtual Exp</td>
                                                <td>Audio - Customer account opening assistance</td>
                                                <td>
                                                    <Link to="/form" target="_blank">
                                                        <button className='btn btn-dark'>Try This !</button>
                                                    </Link>
                                                </td>
                                                <td className='fw-bold text-warning'>In Progress</td>
                                                <td>Not Generated</td>
                                            </tr>
                                            <tr>
                                                <td>Video - Branch sales presentation</td>
                                                <td>
                                                    <Link to="/form" target="_blank">
                                                        <button className='btn btn-dark'>Try This !</button>
                                                    </Link>
                                                </td>
                                                <td className='fw-bold text-success'>Completed</td>
                                                <td>
                                                    <Link to='/report' target="_blank">
                                                        <button className='btn btn-dark' style={{ backgroundColor: "#97a39b", borderColor: "#97a39b" }}>Available</button>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ backgroundColor: "#80868b", color: "#fff" }}>Certification</td>
                                                <td>MCQ Test - Selling in Bank</td>
                                                <td>
                                                    <Link to="/form" target="_blank">
                                                        <button className='btn btn-dark'>Try This !</button>
                                                    </Link>
                                                </td>
                                                <td className='fw-bold text-danger'>Not Started</td>
                                                <td>Not Generated</td>
                                            </tr>
                                            <tr>
                                                <td style={{ backgroundColor: "#b2bcc0", color: "#fff" }} rowSpan={2}>Interview</td>
                                                <td>Audio - Sales associate DBC Bank</td>
                                                <td>
                                                    <Link to="/form" target="_blank">
                                                        <button className='btn btn-dark'>Try This !</button>
                                                    </Link>
                                                </td>
                                                <td className='fw-bold text-danger'>Not Started</td>
                                                <td>Not Generated</td>
                                            </tr>
                                            <tr>
                                                <td>Audio - Relational manager Vana Bank</td>
                                                <td>
                                                    <Link to="/form" target="_blank">
                                                        <Link to="/form" target="_blank">
                                                            <button className='btn btn-dark'>Try This !</button>
                                                        </Link>
                                                    </Link>
                                                </td>
                                                <td className='fw-bold text-danger'>Not Started</td>
                                                <td>Not Generated</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <h6>Associated Test ID : associated test id</h6>
                                    <h6>Corresponding Title : corresponding title</h6> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackName;