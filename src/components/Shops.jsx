import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setShopName, setCurrentPage, selectFilterShop, setSearchValue} from "../redux/slices/filterSlice";

const shops = ['All', 'Carrefour', 'Masterino', 'Dolphin']

const Shops = () => {

  const dispatch = useDispatch()
  const activeShopTitle = useSelector(selectFilterShop)
  const changeShop = (shopName) => {
    dispatch(setShopName(shopName))
    dispatch(setCurrentPage(1))
    dispatch(setSearchValue(''))
  }

  return (
    <div className="shops">
      <ul>
        {
          shops.map((shopTitle) => <li
              className={shopTitle === activeShopTitle ? 'active' : ''}
              key={shopTitle}
              onClick={() => changeShop(shopTitle)}
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
