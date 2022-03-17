import { types } from './types';

const initialState ={
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {...state, tasks: state.tasks.concat([action.payload])}
    default: return state;
  };
};