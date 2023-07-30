import React from 'react';
import CartEmpty from "../components/CartBlock/CartEmpty";
import CartFull from "../components/CartBlock/CartFull";

import {useSelector} from "react-redux";

const Cart = () => {

  const cartProducts = useSelector(state => state.cart.cartProducts)

  return (
    <div className="container container--cart">
      {
        cartProducts.length ? <CartFull/> : <CartEmpty/>
      }
    </div>
  );
};

export default Cart;
