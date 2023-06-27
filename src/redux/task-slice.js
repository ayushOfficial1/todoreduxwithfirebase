import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskItems: [],
    open: false,
  },
  reducers: {
    toggleModal(state) {
      state.open = !state.open;
    },
    addTask(state, action) {
      state.taskItems.push({
        task: action.payload,
        id: uuidv4(),
        isDone: false,
      });
    },
    deleteTask(state, action) {
      const id = action.payload;
      state.taskItems = state.taskItems.filter((task) => task.id !== id);
    },

    completeTask(state, action) {
      const id = action.payload;
      const taskIndex = state.taskItems.findIndex((item) => item.id === id);
      if (taskIndex !== -1) {
        state.taskItems[taskIndex].isDone = !state.taskItems[taskIndex].isDone;
      }
    },
  },
});
export const taskActions = taskSlice.actions;
export default taskSlice;
