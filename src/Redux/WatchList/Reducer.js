import {ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, CLEAR_WATCHLIST} from './Type';


const watchlistReducer = ( state = [], action) => {
    switch(action.type){
        case ADD_TO_WATCHLIST: 
            const isAdded = state.find(item => item.id === action.id )
            state = isAdded ? state.map(item => item.id === action.id ?
                {...item} : item) 
                : 
                [
                    {
                        id: action.id,
                        contentType: action.contentType,
                        data: action.data,
                    },
                    ...state
                ]
                return state;
        //###################
        
        case REMOVE_FROM_WATCHLIST:
            state = state.filter(item => item.id !== action.id);
            return state;
        //###################

        case CLEAR_WATCHLIST: 
            state =[];
            return state;
        //###################

        default: return state;
    }
}

export default watchlistReducer;