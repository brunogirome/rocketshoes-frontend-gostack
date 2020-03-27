import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

// O * tem uma função semelhante a do async, porém, com algumas funcionalidades
// extras. O nome dessa feature é 'Generator'
function* addToCart({ id }) {
  // Todo effects do saga precisa de um yield
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Product quantity out of stock.');
    return;
  }

  if (productExists) {
    // Lembrando que o put dispara actions do Redux. Essas actions foram
    // programadas em: /src/store/modules/cart/actions.js, e são importadas
    // e disparadas aqui no put
    yield put(updateAmountSuccess(id, amount));
  } else {
    // - yield é equivalente ao await
    // - call é um método do redux saga que gerencia outros métodos assíncronos
    //   Detalhe: no call, o primeiro parâmetro é a função que será executada,
    // e os demais são os parâmetros da função que foi passada
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    // O put dispara uma action do Redux
    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  // Se amount for menor que zero, para a function
  if (amount <= 0) return;

  // Chamada api verficando o estoque
  const stock = yield call(api.get, `/stock/${id}`);

  // Quantidade em estoque
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Product quantity out of stock.');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

// Actions que esse 'middleware' vai escutar
export default all([
  // Take Latest pega apenas outra action igual após a última ter sido
  // concluída, neste caso, apenas após ter sido feita a requisição na api
  //
  // O primeiro parâmetro é a action que queremos ouvir, e o segundo é a que
  // será executada
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
