import React from "react";
import ListItems from "./ListItems";
import { useSelector } from "react-redux";

const List = () => {
  const taskItems = useSelector((state) => state.task.taskItems);
  return (
    <div>
      {taskItems.map((task) => (
        <ListItems
          task={task.task}
          key={task.id}
          id={task.id}
          isDone={task.isDone}
        />
      ))}
    </div>
  );
};

export default List;
