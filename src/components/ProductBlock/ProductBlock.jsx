import React from 'react';

import {useSelector, useDispatch} from "react-redux";
import {addCartItem, updateCountValues} from "../../redux/slices/cartSlice";
import ProductCard from "../ProductCard";
import {selectProductByTitle} from "../../redux/slices/productsSlice";


const ProductBlock = ({title, price, imageUrl, measure}) => {

  const dispatch = useDispatch()

  const cartProduct = useSelector(selectProductByTitle(title))

  const addedCount = cartProduct ? cartProduct.count : 0

  const onClickAdd = () => {
    const item = {
      title,
      price,
      imageUrl,
      measure
    }

    dispatch(addCartItem(item))
    dispatch(updateCountValues())
  }

  const [showProductCard, setShowProductCard] = React.useState(false)

  const onClickShowCard = () => {
    setShowProductCard(true)
  }
  const onClickHideCard = () => {
    setShowProductCard(false)
  }

  return (
    <div className="product-block-wrapper">
      <div>
        <ProductCard
          title={title}
          price={price}
          imageUrl={imageUrl}
          measure={measure}
          isShowProductCard={showProductCard}
          onClickHideCard={onClickHideCard}
        />
        <div className="product-block">
          <img
            className="product-block__image"
            src={imageUrl}
            alt="Product"
            onClick={onClickShowCard}
          />
          <h4 className="product-block__title">{title}</h4>
          <div className="product-block__selector">
            <ul>
              <li className="active" key={measure}>{measure}</li>
            </ul>
          </div>
          <div className="product-block__bottom">
            <div className="product-block__price">{price} &euro;</div>
            <button
              className="button button--outline button--add"
              onClick={onClickAdd}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>
            Add to cart
          </span>
              {addedCount > 0 && <i>{addedCount}</i>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
