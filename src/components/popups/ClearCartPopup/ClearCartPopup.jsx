import React from 'react';
import styles from './clear.module.scss'
import {useDispatch} from "react-redux";
import {clearItems} from "../../../redux/slices/cartSlice";

const ClearCartPopup = ({showClear, setShowClear}) => {

  const dispatch = useDispatch()

  const hidePopup = () => {
    setShowClear(false)
  }

  const clearCart = () => {
    dispatch(clearItems())
    hidePopup()
  }

  return (
    <div className={showClear ? styles.layout : styles.layoutHide}>
      <div className={styles.popup}>
        <p className={styles.title}>Do you really want to clear Cart ?</p>
        <div className={styles.buttons}>
          <button className="button" onClick={clearCart}>Yes, I'm sure</button>
          <button className="button button--tomato" onClick={hidePopup}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ClearCartPopup;
