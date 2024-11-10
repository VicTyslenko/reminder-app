import { InitialStateProps, ModalWindowMeta } from "./models";
import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: InitialStateProps = {
  isOpen: false,
  children: null,
  controls: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    setModalWindow: {
      prepare(payload: ReactNode, meta?: ModalWindowMeta) {
        return { payload, meta: { ...meta } };
      },

      reducer: (state, action: PayloadAction<ReactNode, string, ModalWindowMeta>) => {
        state.isOpen = true;
        state.children = action.payload;
        state.controls = action.meta.controls;
      },
    },
    closeModalWindow: (state) => {
      state.isOpen = false;
      state.children = null;
    },
  },
});

export const { setModalWindow, closeModalWindow } = modalSlice.actions;
