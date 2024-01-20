const getCategories = () => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_FETCH_DATA_BASE_URL}/products/categories`
  );
};

export default getCategories;
