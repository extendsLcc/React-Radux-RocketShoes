import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return produce(state, (productsDraft) => {
        const { product } = action;
        productsDraft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (productsDraft) => {
        const productIndex = productsDraft.findIndex((product) => product.id === action.productId);
        if (productIndex >= 0) {
          productsDraft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, (productsDraft) => {
        const productIndex = productsDraft.findIndex((product) => product.id === action.productId);
        if (productIndex >= 0) {
          productsDraft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
