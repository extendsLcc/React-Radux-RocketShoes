import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

function Home(props) {
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

  function handleAddProduct(product) {
    const { dispatch } = props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });

    return undefined;
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>

          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdShoppingCart size={16} color="#fff" />
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>

        </li>
      ))}
    </ProductList>
  );
}

export default connect()(Home);
