import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { type InitialState, ListInfo } from "./models";

const initialState: InitialState = {
  listInfo: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,

  reducers: {
    setListInfo: (state, action: PayloadAction<ListInfo[]>) => {
      state.listInfo = action.payload;
    },
  },
});

export const { setListInfo } = listSlice.actions;

