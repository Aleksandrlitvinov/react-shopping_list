import React from 'react';
import styles from "./unavailablePopup.module.scss";

const UnavailablePopup = ({showPopup, setShowPopup}) => {


  const hidePopup = () => {
    setShowPopup(false)
  }
  return (
    <div className={showPopup ? styles.layout : styles.layoutHide}>
      <div className={styles.popup}>
        <p className={styles.title}>Sorry, this option temporarily is unavailable!</p>
        <div className={styles.buttons}>
          <button className="button button--tomato" onClick={hidePopup}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default UnavailablePopup;
