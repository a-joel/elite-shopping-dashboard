import { createStore } from 'redux';
import { changeReducer } from './reducer';
const store = createStore(changeReducer);

export default store