import React from 'react';
import emptyCart from "../../assets/img/empty-cart.png";
import {Link} from "react-router-dom";

const CartEmpty = () => {

  return (

    <div className="cart cart--empty">
      <h2>Cart is empty <span className="cart--empty__emoji">😕</span></h2>
      <p>
        You probably haven't ordered any products yet.<br/>
        To order products, back to the main page.
      </p>
      <img src={emptyCart} alt="Empty cart"/>
      <Link to="/" className="button button--black">
        <span>Back to Main</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
