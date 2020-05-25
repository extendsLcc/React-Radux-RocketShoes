export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(productId) {
  return {
    type: '@cart/REMOVE',
    productId,
  };
}

export function updateProductAmountFromCart(id, amount) {
  return {
    type: '@cart/UPDATE',
    productId: id,
    amount,
  };
}
