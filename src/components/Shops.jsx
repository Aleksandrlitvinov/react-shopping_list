import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilterShop, setShopName} from "../redux/slices/filterSlice";

const shops = ['All', 'Carrefour', 'Masterino', 'Dolphin']

const Shops = () => {

  const dispatch = useDispatch()
  const activeShopTitle = useSelector(selectFilterShop)

  return (
    <div className="shops">
      <ul>
        {
          shops.map((shopTitle) => <li
              className={shopTitle === activeShopTitle ? 'active' : ''}
              key={shopTitle}
              onClick={() => dispatch(setShopName(shopTitle))}
            >
              {shopTitle}
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Shops;
