import { createSlice } from "@reduxjs/toolkit";
import { getComponentsData } from "../utils";
const componentsData = getComponentsData();

const initialState = {
  zoomlvl: 1.0,
  filteredIds: [...componentsData.map((item) => item.id)],
  devMode: false,
  devData: "example",
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setZoom: (state, action) => {
      state.zoomlvl = action.payload.toFixed(1);
    },
    filterIds: (state, action) => {
      const { text } = action.payload;
      state.filteredIds = componentsData
        .filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
        .map((item) => item.id);
    },
    setDevMode: (state, action) => {
      state.devMode = action.payload;
    },
    setDevData: (state, action) => {
      // console.log(first)
      state.devData = action.payload;
    },
  },
});

export const { setZoom, filterIds, setDevMode, setDevData } = gridSlice.actions;
export default gridSlice.reducer;
