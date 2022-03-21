import { types } from './types';

const initialState ={
  importentUrgentTasks: [],
  importentNotUrgentTasks: [],
  notImportentUrgentTasks: [],
  notImportentNotUrgentTasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      if (action.typeTasks === 'importentUrgent') {
        return {...state, importentUrgentTasks: state.importentUrgentTasks.concat([action.payload])}
      } else if (action.typeTasks === 'importentNotUrgent') {
        return {...state, importentNotUrgentTasks: state.importentNotUrgentTasks.concat([action.payload])}
      } else if (action.typeTasks === 'notImportentUrgent') {
        return {...state, notImportentUrgentTasks: state.notImportentUrgentTasks.concat([action.payload])}
      } else if (action.typeTasks === 'notImportentNotUrgent') {
        return {...state, notImportentNotUrgentTasks: state.notImportentNotUrgentTasks.concat([action.payload])}
      }
      break;
    case types.DELETE_TASK:
      if (action.typeTask === 'importentUrgent') {
        return {...state, importentUrgentTasks: state.importentUrgentTasks.filter(task => task.id !== action.id)};
      }
      if (action.typeTask === 'importentNotUrgent') {
        return {...state, importentNotUrgentTasks: state.importentNotUrgentTasks.filter(task => task.id !== action.id)};
      }
      if (action.typeTask === 'notImportentUrgent') {
        return {...state, notImportentUrgentTasks: state.notImportentUrgentTasks.filter(task => task.id !== action.id)};
      }
      if (action.typeTask === 'notImportentNotUrgent') {
        return {...state, notImportentNotUrgentTasks: state.notImportentNotUrgentTasks.filter(task => task.id !== action.id)};
      }
      break;
    default: return state;
  };
};