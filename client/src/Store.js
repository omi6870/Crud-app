import { createStore,applyMiddleware,combineReducers } from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from"redux-logger";
import thunk from 'redux-thunk';
import { itemsCreateReducer, itemsDeleteReducer, itemsReducer, itemsUpdateReducer } from './reducers/itemsReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
    // contain reducer
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    itemList:itemsReducer,
    itemCreate:itemsCreateReducer,
    itemUpdate:itemsUpdateReducer,
    itemDelete:itemsDeleteReducer
 
})

const userInfoFromLocalStorage=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null
const initialState ={
  userLogin:{userInfo:userInfoFromLocalStorage}
};

const logger = createLogger();

const Store = createStore(
    reducer,initialState,
  composeWithDevTools(applyMiddleware(logger,thunk)) 
);


export default Store;