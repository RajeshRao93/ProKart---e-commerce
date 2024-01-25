const useAddToCart = (product: any) => {
  var prods = [];
  var productsInCart = localStorage.getItem("productsInCart");

  if (productsInCart) {
    prods = JSON.parse(productsInCart);
  }

  prods.push(product);
  localStorage.setItem("productsInCart", JSON.stringify(prods));
  window.dispatchEvent(new Event("addedToCart"));
};

export { useAddToCart };
