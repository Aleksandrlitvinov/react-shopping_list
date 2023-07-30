import React from 'react';
import qs from 'qs';

import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import {selectFilter, setCurrentPage, setFilters} from "../redux/slices/filterSlice";
import {
  getShopProducts,
  fetchProducts,
  selectProductsItems,
  selectProductsStatus, selectShopItems
} from "../redux/slices/productsSlice";

import Shops from "../components/Shops";
import Sort from "../components/Sort";
import ProductBlockSkeleton from "../components/ProductBlock/ProductBlockSkeleton";
import ProductBlock from "../components/ProductBlock/ProductBlock";
import Pagination from "../pagigination";

import {sortList} from "../components/Sort";
import axios from "axios";


const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const items = useSelector(selectProductsItems)
  const shopItems = useSelector(selectShopItems)
  const isLoading = useSelector(selectProductsStatus)
  const {shop, sort, currentPage, searchValue} = useSelector(selectFilter)


  const sortType = sort.sortProperty

  const getTotalProducts = async () => {
    const shopBy = (shop === 'All' || !shop) ? '' : `shop=${shop}`
    const {data} = await axios
      .get(`https://62f79a7bab9f1f8e890019ee.mockapi.io/products?${shopBy}`)
    dispatch(getShopProducts(data.length))
  }

  const getProducts = async () => {

    const searchBy = searchValue ? `${searchValue}` : ''
    const shopBy = (shop === 'All' || !shop) ? '' : `shop=${shop}`
    const sortBy = `sortBy=${sortType}`

    dispatch(fetchProducts({
      searchBy,
      currentPage,
      shopBy,
      sortBy
    }))
    window.scrollTo(0, 0)
  }

  React.useEffect(() => {

    if (!isSearch.current) {

      getProducts()

    }

    isSearch.current = false

  }, [searchValue, currentPage, shop, sortType])

  React.useEffect(() => {

    getTotalProducts()

  }, [shop])

  React.useEffect(() => {

    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)

      dispatch(setFilters({
          ...params,
          sort,
          searchValue
        })
      )
      //isSearch.current = true
    }
  }, [])


  React.useEffect(() => {

    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        shop,
        currentPage,
        search: searchValue,
        order: 'asc'
      })

      navigate(`?${queryString}`)
      console.log(queryString)
    }
    isMounted.current = true
  }, [searchValue, currentPage, shop, sortType])


  const onChangePage = (num) => dispatch(setCurrentPage(num))

  const skeletons = [...new Array(9)].map((_, idx) => <ProductBlockSkeleton key={idx}/>)
  const products = items
    .map(product => <ProductBlock title={product.title} imageUrl={product.imageUrl}
                                  price={product.price} measure={product.measure}
                                  key={product.title}/>)

  const countPages = shopItems / 8
  return (
    <div>
      <div className="content__top">
        <Shops/>
        <Sort/>
      </div>
      <h2 className="content__title">{shop}</h2>
      <div className="content__items">
        {
          isLoading === 'error'
            ? (<div className="content__items-error"><h2>Failed to load products!&#x1F629;
              Try it later</h2></div>)
            : isLoading === 'loading'
              ? skeletons
              : products
        }
      </div>
      {/*<Pagination currentPage={currentPage} onChangePage={onChangePage} countPages={countPages}/>*/}

      <Pagination
        currentPage={currentPage}
        onChangePage={onChangePage}
        countPages={countPages}
        className={countPages === 1 ? 'disabled-btn' : 'active-btn'}
      />


    </div>
  );
};

export default Home;
