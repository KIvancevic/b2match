import './TableLists.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loadCommentsAsync } from './redux/reducers/comments/commentsThunks';
import actions from './redux/reducers/comments/commentsActions'

const TableLists = () => {

  const dispatch = useDispatch();
  const { comments, id } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(loadCommentsAsync())
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
      <ul className="list-group w-75 p-2 ulBackground gap-3">
        <h1 className="text-center text-info text-uppercase letterSpacing">Table of comments</h1>
        {comments && comments.slice(0,6).map((comment) => (
              <li 
                className="list-group-item flex-wrap d-flex flex-column justify-content-center align-items-center pt-3 liTable"
                key={comment.id}
              >

                <p className='fs-4 xs text-5'>username: {comment.name}</p>
                <p className='fs-4 xs fs-5'>e-mail:{comment.email}</p>
                
                  <Link to={`/moreinfo`}>
                    <button type="button" className='hoverA btn-info' onClick={() => dispatch(actions.commentsId(comment.id))}>
                      Show more
                    </button>
                  </Link>
              </li>
        ))}
      </ul>
    </div>
  )
}

export default TableLists;