import { types } from './types';

export function addTask(task) {
  return {
    type: types.ADD_TASK,
    payload: task
  }
}

export function deleteTask(id) {
  return {
    type: types.DELETE_TASK,
    id,
  }
}