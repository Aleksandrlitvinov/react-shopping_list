import React from 'react';
import styles from './remove.module.scss'
import {removeCartItem, updateCountValues} from "../../../redux/slices/cartSlice";
import {useDispatch} from "react-redux";

const RemoveCartProduct = ({showRemove, setShowRemove, title, imageUrl}) => {

  const dispatch = useDispatch()

  const hidePopup = () => {
    setShowRemove(false)
  }

  const removeItem = () => {
    dispatch(removeCartItem(title))
    dispatch(updateCountValues())
    hidePopup()

  }

  return (
    <div className={showRemove ? styles.layout : styles.layoutHide}>
      <div className={styles.popup}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={imageUrl}
            alt="Product"
          />
        </div>
        <p className={styles.title}>Do you really want to remove - </p>
        <p className={styles.productTitle}>{title} ?</p>
        <div className={styles.buttons}>
          <button
            className="button"
            onClick={removeItem}
          >
            Yes
          </button>
          <button
            className="button button--tomato"
            onClick={hidePopup}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveCartProduct;
