import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../redux/task-slice";

const Add = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(taskActions.addTask(task));
    dispatch(taskActions.toggleModal());
    setTask("");
  };
  const handleClose = () => {
    dispatch(taskActions.toggleModal());
  };
  return (
    <div className="add-modal">
      <div className="modal-wrapper">
        <div className="input-container">
          <input
            type="text"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
