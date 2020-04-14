import { SELECT_CARD, CARDS } from '../constants/cardConstants';

const initialState = {
  allCards: CARDS,
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
