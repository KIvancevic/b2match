import actionTypes from './commentsActionTypes'
import initialState from './commentsInitialState'

const commentsReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case actionTypes.COMMENTS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        comments: null,
        errorMessage: null,
      };
    
    case actionTypes.COMMENTS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: payload,
      };
    
    case actionTypes.COMMENTS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case actionTypes.ADD_ID:
      return {
        ...state,
        isLoading:false,
        id: payload
      }
    
    default:
      return state;
  }
};

export default commentsReducer;