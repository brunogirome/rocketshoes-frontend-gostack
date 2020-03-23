import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

// Reducers que irão utilizar o Saga
export default function* rootSaga() {
  return yield all([cart]);
}
