import React from 'react';
import { MdShoppingCart } from "react-icons/md";

import { ProductList } from './styles'

function Home(props) {
    return (
        <ProductList>
            <li>
                <img src="https://via.placeholder.com/350" alt="Tênis"/>
                <strong>Lorem ipsum dolor</strong>
                <span>R$120,00</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color={"#fff"}></MdShoppingCart>
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>

            </li>
            <li>
                <img src="https://via.placeholder.com/350" alt="Tênis"/>
                <strong>Lorem ipsum dolor</strong>
                <span>R$120,00</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color={"#fff"}></MdShoppingCart>
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>

            </li>
            <li>
                <img src="https://via.placeholder.com/350" alt="Tênis"/>
                <strong>Lorem ipsum dolor</strong>
                <span>R$120,00</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color={"#fff"}></MdShoppingCart>
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>

            </li>
            <li>
                <img src="https://via.placeholder.com/350" alt="Tênis"/>
                <strong>Lorem ipsum dolor</strong>
                <span>R$120,00</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color={"#fff"}></MdShoppingCart>
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>

            </li>
            <li>
                <img src="https://via.placeholder.com/350" alt="Tênis"/>
                <strong>Lorem ipsum dolor</strong>
                <span>R$120,00</span>

                <button type="button">
                    <div>
                        <MdShoppingCart size={16} color={"#fff"}></MdShoppingCart>
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>

            </li>
        </ProductList>
    );
}

export default Home;