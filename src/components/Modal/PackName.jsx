import React from 'react';

const PackName = () => {
    return (
        <>
            <div className="modal fade" id="packModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Pack Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='card border-0 bg-light'>
                                <div className="card-body">
                                    <h6>Pack Name : pack name</h6>
                                    <h6>Pack ID : pack id</h6>
                                    <h6>Associated Test ID : associated test id</h6>
                                    <h6>Corresponding Title : corresponding title</h6>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackName;