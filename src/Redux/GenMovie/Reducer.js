import {ADD_GENNRES_MOVIE, REMOVE_GENNRES_MOVIE, REMOVE_ALL_GENNRES_MOVIE} from './Type';

const GennresMovieReducer = (state = [], action) => {
    switch(action.type){
        case ADD_GENNRES_MOVIE :
            const isAdded = state.find(item => item.id === action.id);
            state = isAdded ? state.map(item => item.id === action.id ? {
                ...item
            }: item)
            :
            [
                ...state,
                {
                    id: action.id,
                    name: action.name
                },
            ];   
        return state;
        //#############

        case REMOVE_GENNRES_MOVIE: 
            state = state.filter(item => item.id !== action.id); 
            return state;
        //#############

        case REMOVE_ALL_GENNRES_MOVIE : 
            state = [];
            return state;
        //#############
        
        default: return state
    }
}
export default GennresMovieReducer