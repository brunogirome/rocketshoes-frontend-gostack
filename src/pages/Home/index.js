import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom2.jpg?ts=1584667533&ims=326x"
          alt="tênis"
        />
        <strong>Black Nike Shoes</strong>
        <span>$1112,05</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom2.jpg?ts=1584667533&ims=326x"
          alt="tênis"
        />
        <strong>Black Nike Shoes</strong>
        <span>$1112,05</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom2.jpg?ts=1584667533&ims=326x"
          alt="tênis"
        />
        <strong>Black Nike Shoes</strong>
        <span>$1112,05</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom2.jpg?ts=1584667533&ims=326x"
          alt="tênis"
        />
        <strong>Black Nike Shoes</strong>
        <span>$1112,05</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom2.jpg?ts=1584667533&ims=326x"
          alt="tênis"
        />
        <strong>Black Nike Shoes</strong>
        <span>$1112,05</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
