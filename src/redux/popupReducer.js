import { types } from './types';

const initialState = {
  isOpen: false,
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_POPUP: 
      return {isOpen: true};
    case types.CLOSE_POPUP:
      return {isOpen: false};
    default: return state;
  }
};