import File from "@/Utils/Models/ConCreate/File";
import FileUploadResponse from "@/Utils/Models/Response/Transfer/FileUploadResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    FileUpload: {} as FileUploadResponse,
    Keys: [] as string[],
    Values: [] as object[],
    Files: [] as File[]
}

const TransferSlice = createSlice({
    initialState,
    name: "TransferSlice",
    reducers: {
        InsertOfFile: (state, action:PayloadAction<FileUploadResponse>) => {
            state.FileUpload = action.payload;
            state.Keys = action.payload.keys;
            state.Values = action.payload.values;
        },
        InsertOfFiles: (state, action:PayloadAction<File[]>) => {
            state.Files = action.payload;
        },
        ClearOfFile: (state) => {
            state.FileUpload = {} as FileUploadResponse;
            state.Keys = [];
            state.Values = [];
        }
    }
})

export const { InsertOfFile, InsertOfFiles, ClearOfFile } = TransferSlice.actions
export default TransferSlice.reducer

