import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  
    employeeListReducer,
  
} from './reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
const reducer = combineReducers({
    employeeList: employeeListReducer,})

    const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store