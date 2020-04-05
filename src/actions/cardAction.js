import { SELECT_CARD, SET_ALL_PRODUCTS } from '../constants/cardConstants';

export const selectCard = (data) => ({
  type: SELECT_CARD,
  data,
});

export const setAllProducts = (data) => ({
  type: SET_ALL_PRODUCTS,
  data,
});
