// tools
//import { combineReducers, createStore, applyMiddleware } from "redux";
//import {composeWithDevTools} from 'redux-devtools-extension';
//import logger from 'redux-logger';
import { combineReducers, createStore } from "redux";
// reducers
import GennresMovieReducer from './GenMovie/Reducer';
import watchlistReducer from './WatchList/Reducer';
import likeReducer from './Like/Reducer';
import disLikeReducer from './Dislike/Reducer';

const rootReducer = combineReducers({
    gennres: GennresMovieReducer,
    watchlist: watchlistReducer,
    like: likeReducer,
    disLike: disLikeReducer
});

const loadStore = () => {
    try{
        const state = localStorage.getItem('root') ? localStorage.getItem('root') : [];
        if(state !== null) {
            return JSON.parse(state)
        }
    }catch{
        //error
    }
}
const saveState = (state) => {
    localStorage.setItem('root', JSON.stringify(state))
}

//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
export const store = createStore(rootReducer, loadStore())

store.subscribe(() => {
    saveState(store.getState())
})
