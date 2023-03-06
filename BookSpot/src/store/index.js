import {legacy_createStore as createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import mainReducer from "../reducers";


const store=createStore(
    mainReducer,
    {
       items:[], 
       totalAmount:0
    },
    composeWithDevTools(applyMiddleware(thunk))
    );
export default store;