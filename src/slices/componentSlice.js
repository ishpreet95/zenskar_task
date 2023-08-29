import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  grid: [],
};

const ComponentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    addComponent: (state, action) => {
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
      const { id, x, y, zoomlvl } = action.payload;
      const multiplier = 25 * zoomlvl;
      const index = state.grid.findIndex((item) => item.id === id);
      state.grid[index].x = Math.round(x / multiplier) * Number(multiplier);
      state.grid[index].y = Math.round(y / multiplier) * Number(multiplier);
    },
    setWidth: (state, action) => {
      const { id, width } = action.payload;
      const index = state.grid.findIndex((item) => item.id === id);
      state.grid[index].width = width;
    },
    clear: (state) => {
      state.grid = [];
      localStorage.setItem("grid", JSON.stringify(state.grid));
    },
    resize: (state, action) => {
      const width = action.payload.width;
      for (const item of state.grid) {
        if (item.x < 0) {
          item.x = 0;
        } else if (item.x + item.width > width) {
          item.x = width - item.width;
        }
      }
    },
    clone: (state, action) => {
      state.grid = action.payload.grid;
    },
  },
});

export const { addComponent, moveComponent, setWidth, resize, clear, clone } =
  ComponentSlice.actions;
export default ComponentSlice.reducer;
