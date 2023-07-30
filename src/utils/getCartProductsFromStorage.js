export const getCartProductsFromStorage = () => {
  const data = localStorage.getItem('cart')
  return data ? JSON.parse(data) : []
}