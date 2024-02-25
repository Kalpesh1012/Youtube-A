import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    addLanguageMenu: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addLanguageMenu } = configSlice.actions;
export default configSlice.reducer;
