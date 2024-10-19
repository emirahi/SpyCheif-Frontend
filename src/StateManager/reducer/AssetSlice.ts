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
            debugger;
            state.Assets = [...state.Assets, action.payload]
            console.log("Asset Type Id : ",action.payload.assetTypeId)
            const searchIndex = state.Search.findIndex(search => search.assetTypeId == action.payload.assetTypeId)
            if (searchIndex !== -1){
                state.Search = [...state.Search,action.payload]
            }
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
            const searchIndex = state.Search.findIndex(search => search.id == action.payload.id)
            if (searchIndex != -1){
                state.Search[searchIndex] = data
            }
        },
        Delete: (state, action: PayloadAction<string>) => {
            const assets = state.Assets.filter(asset => asset.id !== action.payload)
            const search = state.Search.filter(asset => asset.id !== action.payload)
            state.Assets = assets
            state.Search = search
        },
        DeleteOfType: (state, action: PayloadAction<string>) => {
            const assets = state.Assets.filter(asset => asset.assetTypeId !== action.payload)
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