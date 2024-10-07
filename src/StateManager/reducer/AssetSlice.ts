import { autoBatchEnhancer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Asset from "../../Utils/Models/ConCreate/Asset";


const initialState = {
    Assets: [] as Asset[],
    Search: [] as Asset[]
}

const AssetSlice = createSlice({
    initialState,
    name: "AssetSlice",
    reducers: {
        Insert: (state, action: PayloadAction<Asset>) => {
            state.Assets = [...state.Assets, action.payload]
        },
        InsertOfList: (state, action: PayloadAction<Asset[]>) => {
            state.Assets = action.payload
        },
        Update: (state, action: PayloadAction<Asset>) => {
            const index = state.Assets.findIndex(asset => asset.id == action.payload.id)
            const data = state.Assets[index]
            data.value = action.payload.value
            data.type = action.payload.type
            data.assetTypeId = action.payload.assetTypeId
            data.updatedDate = new Date().toISOString()
        },
        Delete: (state, action: PayloadAction<string>) => {
            console.log("Reducer Asset - Delete before : ", state.Assets);
            const assets = state.Assets.filter(asset => asset.id !== action.payload)
            console.log("Reducer Asset - Delete : ", assets);
            state.Assets = assets
        },
        DeleteOfType: (state, action: PayloadAction<string>) => {
            debugger;
            console.log("Reducer Asset - Delete before : ", state.Assets);
            const assets = state.Assets.filter(asset => asset.assetTypeId !== action.payload)
            console.log("Reducer Asset - Delete : ", assets);
            state.Assets = assets
        },
        InsertSearch: (state, action: PayloadAction<Asset>) => {
            state.Search = [...state.Assets, action.payload]
        },
        InsertOfListSearch: (state, action: PayloadAction<Asset[]>) => {
            state.Search = action.payload
        },
        ClearSearch: (state) => {
            state.Search = []
        }
    }
})

export const { Insert, InsertOfList, InsertSearch, InsertOfListSearch, Delete, DeleteOfType, Update } = AssetSlice.actions
export default AssetSlice.reducer