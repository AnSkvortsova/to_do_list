import { types } from './types';

export function addTask(task) {
  return {
    type: types.ADD_TASK,
    payload: task,
  };
};

export function editTask(task, id) {
  return {
    type: types.EDIT_TASK,
    payload: task,
    id,
  };
};

export function progressTask(id) {
  return {
    type: types.PROPGRESS_TASK,
    id,
  };
};

export function completeTask(id) {
  return {
    type: types.COMPLETE_TASK,
    id,
  };
};

export function deleteTask(id) {
  return {
    type: types.DELETE_TASK,
    id,
  };
};
