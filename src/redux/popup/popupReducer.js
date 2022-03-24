import { types } from './types';

const initialState = {
  isAddOpen: false,
  isEditOpen: false,
  typeTasks: '',
  oldTask: '',
  oldId: '',
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_ADD_POPUP: 
      return {...state, isAddOpen: true};
    case types.OPEN_EDIT_POPUP: 
      return {...state, isEditOpen: true};
    case types.CLOSE_POPUP:
      return {isAddOpen: false, isEditOpen: false, typeTasks: '', oldTask: '', oldId: ''};
    case types.ADD_TYPE_TASKS:
      return {...state, typeTasks: action.typeTasks};
    case types.SET_OLD_TASK:
      return {...state, oldTask: action.oldTask, oldId: action.oldId};
    default: return state;
  };
};