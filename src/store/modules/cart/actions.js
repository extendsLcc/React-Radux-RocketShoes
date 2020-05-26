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

export function updateProductAmountFromCartRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    productId: id,
    amount,
  };
}

export function updateProductAmountFromCartSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    productId: id,
    amount,
  };
}
