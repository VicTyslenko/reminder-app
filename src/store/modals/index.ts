import { InitialStateProps } from "./models";
import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: InitialStateProps = {
  isOpen: false,
  children: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    setModalWindow: {
      prepare(payload: ReactNode) {
        return { payload };
      },

      reducer: (state, action: PayloadAction<ReactNode>) => {
        state.isOpen = true;
        state.children = action.payload;
      },
    },
    closeModalWindow: (state) => {
      state.isOpen = false;
      state.children = null;
    },
  },
});

export const { setModalWindow, closeModalWindow } = modalSlice.actions;
