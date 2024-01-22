const getAllProducts = async () => {
  let products = await fetch(
    `${import.meta.env.VITE_REACT_APP_FETCH_DATA_BASE_URL}/products`
  );

  return products;
};

const getAllProductsByCategory = async (category: string) => {
  let products = await fetch(
    `${
      import.meta.env.VITE_REACT_APP_FETCH_DATA_BASE_URL
    }/products/category/${category}`
  );

  return products;
};

export { getAllProducts, getAllProductsByCategory };
