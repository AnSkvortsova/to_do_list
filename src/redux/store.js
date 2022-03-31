import { compose, createStore } from 'redux';
import { rootReducer } from './rootReducer';

function saveToLocalStorage(state) {
  try {
    localStorage.setItem('persistentState', JSON.stringify(state));
  } catch (err) {
    console.log(err);
  };
};

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistentState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    console.log(err);
  };
};

const store = createStore(rootReducer, loadFromLocalStorage(), compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;