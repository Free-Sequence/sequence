import { SELECT_CARD } from '../constants/cardConstants';
import cardsArray from '../cards/cardsArray';

const initialState = {
  allCards: cardsArray,
  clickedCard: null,
};

export default function productReducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case SELECT_CARD:
      return {
        ...state,
        clickedCard: data,
      };
    default: {
      return state;
    }
  }
}
