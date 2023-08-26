import { createSlice } from "@reduxjs/toolkit";
import { getComponentsData } from "../utils";
const componentsData = getComponentsData();

const initialState = {
  zoomlvl: 1,
  filteredIds: [...componentsData.map((item) => item.id)],
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setZoom: (state, action) => {
      state.zoomlvl = action.payload;
    },
    filterIds: (state, action) => {
      const { text } = action.payload;
      state.filteredIds = componentsData
        .filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
        .map((item) => item.id);
    },
  },
});

export const { setZoom, filterIds } = gridSlice.actions;
export default gridSlice.reducer;
