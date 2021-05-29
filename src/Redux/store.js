import { createStore } from 'redux'
import { authenticationReducer } from './reducers/authenticationReducer'
let store = createStore(authenticationReducer);
export default store;