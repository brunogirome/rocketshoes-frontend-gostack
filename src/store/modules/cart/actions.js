// Relacionado ao Redux-Saga:
// Essa primeira function faz o redux-saga buscar os dados na api, e então,
// dentro do método do saga, é disparado o 'addToCartSucess'
export function addToCartRequest(id) {
  return { type: '@cart/ADD_REQUEST', id };
}

export function addToCartSuccess(product) {
  return { type: '@cart/ADD_SUCCESS', product };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
