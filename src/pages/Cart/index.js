import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

function Cart(props) {
    return (
        <Container>
            <ProductTable>
                <thead>
                <tr>
                    <th/>
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <img src="https://via.placeholder.com/350" alt="Tênis"/>
                    </td>
                    <td>
                        <strong>Tênis muito massa</strong>
                        <span>R$129,90</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1"/>
                            </button>
                            <input type="number" readOnly value={1}/>
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1"/>
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>R$129,90</strong>
                    </td>
                    <td>
                        <button type={"button"}>
                            <MdDelete size={20} color="#7159c1"/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type={"button"}>Finalizar Pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$500,00</strong>
                </Total>
            </footer>
        </Container>
    );
}

export default Cart;