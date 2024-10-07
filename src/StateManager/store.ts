import { configureStore } from "@reduxjs/toolkit";
import AssetSlice from "./reducer/AssetSlice";
import AssetTypeSlice from "./reducer/AssetTypeSlice";
import ServiceDatabaseSlice from "./reducer/ServiceDatabaseSlice";
import ModalSlice from "./utils/ModalSlice";




const store = configureStore({
    reducer:{
        AssetSlice,
        AssetTypeSlice,
        ServiceDatabaseSlice,
        ModalSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;