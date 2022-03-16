import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadCommentsAsync } from './redux/reducers/comments/commentsThunks';

function ShowMore() {

  const dispatch = useDispatch();
  const { comments, id } = useSelector((state) => state.comments);


  useEffect(() => {
    dispatch(loadCommentsAsync())
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
      <ul className="list-group w-75 p-2 ulBackground gap-3">
        <h1 className="text-center text-info text-uppercase letterSpacing">More info about clicked user</h1>
        {comments && comments.filter(comment => comment.id === id).map(filteredComment => (
          <li 
            className="list-group-item flex-wrap d-flex justify-content-between align-items-center pt-3 liTableShowMore"
            key={filteredComment.id}
            >
              <p className='fs-4 xs text-5'>Username: {filteredComment.name}</p>
              <p className='fs-5 xs fs-6 '>Email: {filteredComment.email}</p>
              <p className='fs-4 xs fs-5'>Body: {filteredComment.body}</p>
              <p className='fs-5 xs fs-6'>Id: {filteredComment.id}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowMore

