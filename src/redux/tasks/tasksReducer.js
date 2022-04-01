import { types } from './types';

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {tasks: state.tasks.concat([action.payload])};
    case types.EDIT_TASK:
      return {tasks: state.tasks.map(item => item.id === action.id
        ? {...item, task: action.payload}
        : item)};
    case types.PROPGRESS_TASK:
      return {tasks: state.tasks.map(item => item.id === action.id
        ? {...item, inProgress: !item.inProgress}
        : item)};
    case types.COMPLETE_TASK:
      return {tasks: state.tasks.map(item => item.id === action.id
        ? {...item, isDone: !item.isDone}
        : item)};
    case types.DELETE_TASK:
      return {tasks: state.tasks.filter(task => task.id !== action.id)};
    default: return state;
  };
};