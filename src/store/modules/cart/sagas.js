import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSucess } from './actions';

// O * tem uma função semelhante a do async, porém, com algumas funcionalidades
// extras. O nome dessa feature é 'Generator'
function* addToCart({ id }) {
  // - yield é equivalente ao await
  // - call é um método do redux saga que gerencia outros métodos assíncronos
  //   Detalhe: no call, o primeiro parâmetro é a função que será executada,
  // e os demais são os parâmetros da função que foi passada
  const response = yield call(api.get, `/products/${id}`);

  // O put dispara uma action do Redux
  yield put(addToCartSucess(response.data));
}

// Actions que esse 'middleware' vai escutar
export default all([
  // Take Latest pega apenas outra action igual após a última ter sido
  // concluída, neste caso, apenas após ter sido feita a requisição na api
  //
  // O primeiro parâmetro é a action que queremos ouvir, e o segundo é a que
  // será executada
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
