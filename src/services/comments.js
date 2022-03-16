import apiClient from "../helper/apiClient";

class CommentService {
  getAllComments = () => apiClient().get("comments")
}

export default new CommentService();