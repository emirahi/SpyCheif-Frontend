import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IModalData from "./IModalData"


const initialState = {
    modals: [] as IModalData[],
  };
  
  const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
      Append: (state, action:PayloadAction<IModalData>) => {
        state.modals = [...state.modals, action.payload]
      },
      Destory: (state) => {
          const data = [...state.modals]
          data.pop()
          state.modals = data
      },
      DestoryAll: (state) => {
        state.modals = []
      },
    },
  });
  
  export const { Append, Destory, DestoryAll } = modal.actions;
  export default modal.reducer;