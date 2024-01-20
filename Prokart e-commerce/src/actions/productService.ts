const getAllProducts = async () => {
  let products = await fetch(
    `${import.meta.env.VITE_REACT_APP_FETCH_DATA_BASE_URL}/products`
  );

  return products;
};

export default getAllProducts;
