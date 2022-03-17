import { combineReducers } from 'redux';
import { popupReducer } from './popup/popupReducer';
import { tasksReducer } from './tasks/tasksReducer';

export const rootReducer = combineReducers({
  popup: popupReducer,
  tasks: tasksReducer,
});