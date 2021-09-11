import {ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, CLEAR_WATCHLIST} from './Type';

export const add_to_watchlist = (id, contentType, data) => {
    return{
        type: ADD_TO_WATCHLIST,
        id, 
        contentType, 
        data
    }
}

export const remove_from_watchlist = (id) => {
    return{
        type: REMOVE_FROM_WATCHLIST,
        id
    }
}

export const clear_watchlist = () => {
    return{
        type: CLEAR_WATCHLIST
    }
}