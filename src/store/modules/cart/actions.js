export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCESS',
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
