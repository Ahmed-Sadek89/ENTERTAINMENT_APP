import {ADD_TO_DISLIKE, REMOVE_FROM_DISLIKE, CLEAR_DISLIKE} from './Type';

const disLikeReducer = (state = [], action) => {
    switch(action.type){
       case ADD_TO_DISLIKE : 
            const isAdded = state.find(item => item.id === action.id)
            state = isAdded ? state.map(item => item.id === action.id ? 
                {...item} : item) :
                [
                    {
                        id: action.id,
                        contentType: action.contentType,
                        data: action.data
                    },
                    ...state
                ];
            return state;
        //########################

        case REMOVE_FROM_DISLIKE:
            state = state.filter(item => item.id !== action.id);
            return state;
        //########################

        case CLEAR_DISLIKE: 
            state =[];
            return state;
        //########################

        default: return state;
    }
}

export default disLikeReducer;