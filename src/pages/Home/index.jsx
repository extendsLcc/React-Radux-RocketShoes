import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import { addToCartRequest } from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

function Home({ dispatch, amount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const responseProducts = await api.get('/products');
      const data = responseProducts.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    })();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>

          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdShoppingCart size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>

        </li>
      ))}
    </ProductList>
  );
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

export default connect(mapStateToProps)(Home);
