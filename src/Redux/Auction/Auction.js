
// for Add item to cart
export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload :product

}
} 
// for  Delete item to cart
export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload :product

}
} 
// Add a product to the wishlist
export const addToWishlist = (product) => {
  return {
    type: "ADDIT",
    payload: product,
  };
};

// Remove a product from the wishlist
export const removeFromWishlist = (product) => {
  return {
    type: "DELIT",
    payload: product,
  };
};

