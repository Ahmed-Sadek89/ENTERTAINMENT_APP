import {ADD_TO_LIKE, REMOVE_FROM_LIKE, CLEAR_LIKE} from './Type';

const likeReducer = (state = [], action) => {
    switch(action.type){
       case ADD_TO_LIKE : 
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

        case REMOVE_FROM_LIKE:
            state = state.filter(item => item.id !== action.id);
            return state;
        //########################

        case CLEAR_LIKE: 
            state =[];
            return state;
        //########################

        default: return state;
    }
}

export default likeReducer;