import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.tittle} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  // Reduce: faz que com um vetor retorne apenas um valor tradando os dados
  // do mesmo
  // - amount: valor que será retornado. Ele é iniciado pelo valor que vai como
  // segundo parâmetro da função
  // - product: valor da item atual do array
  //
  // Detalhe: amount[product.id] é uma maneira de atribuir uma chave a um item
  // do objeto como um número, exemplo:
  //
  // const Yumi = { id: 13, name: 'Yumi'};
  // Yumi[7] = 'Key as value';
  //
  // Neste caso, objeto Yumi receberá uma propriedade "7" com o valor
  // 'Key as value'. Se eu tentar acessar Yumi[7], vou receber a tal string
  // como retorno
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
