import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../redux/task-slice";

const ListItems = ({ task, id, isDone }) => {
  const dispatch = useDispatch();

  const [decoration, setDecoration] = useState("");
  const [text, setText] = useState("To-Do");

  useEffect(() => {
    isDone
      ? setDecoration("line-through") 
      : setDecoration("none");
    isDone ? setText("To-Do") : setText("Completed");
  }, [isDone]);

  const handleDelete = () => {
    dispatch(taskActions.deleteTask(id));
  };

  const handleComplete = () => {
    dispatch(taskActions.completeTask(id));
  };
  return (
    <div className="task-container">
      <div className="task" style={{ textDecoration: decoration }}>
        {task}
      </div>
      <div className="btn-container">
        <button onClick={handleComplete}>{text}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ListItems;
