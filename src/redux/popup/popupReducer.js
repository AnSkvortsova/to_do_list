import { types } from './types';

const initialState = {
  isOpen: false,
  typeTasks: '',
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_POPUP: 
      return {...state, isOpen: true};
    case types.CLOSE_POPUP:
      return {...state, isOpen: false};
    case types.ADD_TYPE_TASKS:
      return {...state, typeTasks: action.typeTasks};
    default: return state;
  }
};