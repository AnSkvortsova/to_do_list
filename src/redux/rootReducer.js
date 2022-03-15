import { combineReducers } from 'redux';
import { popupReducer } from './popupReducer';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({
  popup: popupReducer,
  tasks: tasksReducer,
});