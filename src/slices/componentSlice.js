import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grid: [],
};

export const selectListByType = (state, type) => {
  switch (type) {
    case "noStatus":
      return state.todos.noStatus;
    case "upcoming":
      return state.todos.upcoming;
    case "inProgress":
      return state.todos.inProgress;
    case "completed":
      return state.todos.completed;
    default:
      return [];
  }
};

const ComponentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      console.log(action);
      const { id, type, x, y } = action.payload;
      state.grid.push({
        id,
        type,
        x,
        y,
      });
    },
    moveComponent: (state, action) => {
      // console.log(action.payload);
      const { id, x, y } = action.payload;
      const index = state.grid.findIndex((item) => item.id === id);
      state.grid[index].x = Math.ceil(x / 25) * 25;
      state.grid[index].y = Math.ceil(y / 25) * 25;
    },
  },
});

export const { addComponent, moveComponent } = ComponentSlice.actions;
export default ComponentSlice.reducer;
