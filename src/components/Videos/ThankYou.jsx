import React from 'react';
import styles from './ThankYou.module.css';

import thankyou from "../../assets/Images/thankyou.svg"

const ThankYou = () => {
    return (
        <>
            <div className={`${styles.container} container mt-5 mb-5`}>
                <div className="row">
                    <div className={`${styles.left} col-md-4`}>
                        <img className='img-fluid m-auto' src={thankyou} alt="ThankYou" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h3 className='mb-3'>Thank you!</h3>
                            <p align="justify">
                                The interaction is now complete. This will now be analyzed by our AI models (and coaches/HR managers, if applicable). You or your administrator will receive a detailed feedback on the same within next 72 hours.
                            </p>
                            <p className='mt-4 text-dark'>Now you can close this window!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou;