import actionTypes from './commentsActionTypes'

const commentsLoadStart = () => ({
  type: actionTypes.COMMENTS_LOAD_START,
});

const commentsLoadSuccess = (comments) => ({
  type: actionTypes.COMMENTS_LOAD_SUCCESS,
  payload: comments,
});

const commentsLoadError = (errorMessage) => ({
  type: actionTypes.COMMENTS_LOAD_ERROR,
  payload: errorMessage,
});

const commentsId = (id) => ({
  type: actionTypes.ADD_ID,
  payload: id
})

export default {
  commentsLoadStart,
  commentsLoadSuccess,
  commentsLoadError,
  commentsId,
}