import React from "react";
import styles from './Welcome.module.css';
import { useNavigate } from "react-router-dom";

import welcome from "../../assets/Images/welcome.svg"

const Welcome = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/work')
  }

  return (
    <>
      <div className={`${styles.container} container my-5`}>
        <div className="row">
          <div className={`${styles.left} col-md-4`}>
            <img className="img-fluid m-auto" src={welcome} alt="welcome" />
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h3 className="mb-3">Welcome!</h3>
              <p align="justify">This interaction is designed to provide you a simulated experience.</p>
              <div className="d-grid">
                <button onClick={handleNext} className="btn btn-dark rounded-5 my-3" style={{ backgroundColor: "#97a39b", border: "#97a39b" }}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
