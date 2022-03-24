import { types } from './types';

export function openAddPopup() {
  return {
    type: types.OPEN_ADD_POPUP
  }
};

export function openEditPopup() {
  return {
    type: types.OPEN_EDIT_POPUP
  }
};

export function closePopup() {
  return {
    type: types.CLOSE_POPUP
  }
};

export function addTypeTasks(typeTasks) {
  return {
    type: types.ADD_TYPE_TASKS,
    typeTasks,
  }
};

export function setOldTask(oldTask, oldId) {
  return {
    type: types.SET_OLD_TASK,
    oldTask,
    oldId,
  }
};
