// import axios from 'axios';

export function addToBasket(choice) {
  return {
    type: 'ADD_TO_BASKET',
    payload: { choice },
  };
}
export function removeFromBasket(choice) {
  return {
    type: 'REMOVE_FROM_BASKET',
    payload: { choice },
  };
}
export function selectUser(user) {
  return {
    type: 'SELECT_USER',
    payload: { user },
  };
}
