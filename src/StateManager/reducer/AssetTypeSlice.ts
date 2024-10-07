import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AssetType from "../../Utils/Models/ConCreate/AssetType";
import { useAppDispatch } from "../hooks";
const initialState = {
    AssetTypes: [] as AssetType[]
}

const AssetTypeSlice = createSlice({
    initialState,
    name:"AssetTypeSlice",
    reducers:{
        Insert: (state,action:PayloadAction<AssetType>) => {
            state.AssetTypes = [...state.AssetTypes,action.payload]
        },
        InsertOfList: (state,action:PayloadAction<AssetType[]>) => {
            state.AssetTypes = action.payload
        },
        Update: (state,action:PayloadAction<AssetType>) => {
            debugger;
            const index = state.AssetTypes.findIndex(assetType => assetType.id == action.payload.id)
            const datas = [...state.AssetTypes]
            datas[index].type = action.payload.type
            state.AssetTypes = datas
        },
        Delete: (state,action:PayloadAction<string>) => {
            const assets = state.AssetTypes.filter(assetType => assetType.id != action.payload)
            state.AssetTypes = assets
        }
    }
})
export const { Insert,Delete,InsertOfList,Update } = AssetTypeSlice.actions
export default AssetTypeSlice.reducer