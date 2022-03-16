import commentsService from '../../../services/comments'
import actions from './commentsActions'

export const loadCommentsAsync = () => (dispatch) => {
  dispatch(actions.commentsLoadStart());

  commentsService.getAllComments()
    .then(response => dispatch(actions.commentsLoadSuccess(response.data)))
    .catch(error => dispatch(actions.commentsLoadError(error.message)));
}