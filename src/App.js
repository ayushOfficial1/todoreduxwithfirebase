import Add from "./components/Add";
import List from "./components/List";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "./redux/task-slice";
function App() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.task.open);
  const handleAdd = () => {
    dispatch(taskActions.toggleModal());
  };
  const handleClear = () => {
    dispatch(taskActions.clearAll());
  };
  return (
    <div className="main-container">
      {open && <Add />}
      <div className="todo-list">
        <div className="add-container">
          <button onClick={handleAdd}>Add Task</button>
        </div>
        <div className="list-container">
          <List />{" "}
        </div>
        <div className="clear-all">
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
