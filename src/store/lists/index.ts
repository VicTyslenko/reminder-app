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
    addListItem: (state, action: PayloadAction<ListInfo>) => {
      state.listInfo.push(action.payload);
    },
    setListInfo: (state, action: PayloadAction<ListInfo[]>) => {
      state.listInfo = action.payload;
    },
  },
});

export const { setListInfo, addListItem } = listSlice.actions;
