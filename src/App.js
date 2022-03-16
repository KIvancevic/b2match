import { useEffect } from "react";
import TableLists from './TableLists'
import ShowMore from "./ShowMore";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentsAsync } from './redux/reducers/comments/commentsThunks';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const dispatch = useDispatch();
  const { comments, id } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(loadCommentsAsync())
  }, []);

  return (
    <Router>
        <div>
          <Routes>

            <Route path={`/moreinfo`} element={<ShowMore lists={comments} />} />

            <Route path="/" element={<TableLists lists={comments} />} />

          </Routes>
        </div>

    </Router>

  );
}

export default App;
