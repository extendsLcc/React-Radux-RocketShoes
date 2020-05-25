import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (productsDraft) => {
        const productIndex = productsDraft.findIndex((product) => product.id === action.product.id);

        if (productIndex >= 0) {
          productsDraft[productIndex].amount += 1;
        } else {
          productsDraft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, (productsDraft) => {
        const productIndex = productsDraft.findIndex((product) => product.id === action.id);
        if (productIndex >= 0) {
          productsDraft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
