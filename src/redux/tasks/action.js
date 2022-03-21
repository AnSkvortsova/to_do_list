import { types } from './types';

export function addTask(task, typeTasks) {
  return {
    type: types.ADD_TASK,
    payload: task,
    typeTasks,
  }
}

export function deleteTask(id, typeTask) {
  return {
    type: types.DELETE_TASK,
    id,
    typeTask,
  }
}