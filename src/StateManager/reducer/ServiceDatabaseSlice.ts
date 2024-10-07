import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import ServiceDatabase from "../../Utils/Models/ConCreate/ServiceDatabase"


const initialState = {
    ServiceDatabase: [] as ServiceDatabase[],
    Transfer: [] as Object[],
    TransferSelected: [] as any[]
}

const ServiceDatabaseSlice = createSlice({
    initialState,
    name: "ServiceDatabase",
    reducers: {
        Insert: (state, action: PayloadAction<ServiceDatabase>) => {
            state.ServiceDatabase = [...state.ServiceDatabase, action.payload]
        },
        InsertOfList: (state, action: PayloadAction<ServiceDatabase[]>) => {
            state.ServiceDatabase = [...state.ServiceDatabase, ...action.payload]
        },
        Update: (state, action: PayloadAction<ServiceDatabase>) => {
            const index = state.ServiceDatabase.findIndex(service => service.id == action.payload.id)
            const datas = [...state.ServiceDatabase]
            datas[index] = action.payload
            state.ServiceDatabase = datas
        },
        Delete: (state, action: PayloadAction<string>) => {
            const service = state.ServiceDatabase.filter(service => service.id != action.payload)
            state.ServiceDatabase = service
        },
        InsertOfListTransfer: (state, action: PayloadAction<Object[]>) => {
            state.Transfer = action.payload
        },
        InsertTransferSelected: (state, action: PayloadAction<Object>) => {
            state.TransferSelected = [...state.TransferSelected, action.payload]
        },
        RemoveTransferSelected: (state, action: PayloadAction<string>) => {
            const transferSelected = state.TransferSelected.filter(service => service._id != action.payload)
            state.TransferSelected = transferSelected
        }
    }
})

export const { Insert, InsertOfList, InsertOfListTransfer, InsertTransferSelected, Update, Delete, RemoveTransferSelected } = ServiceDatabaseSlice.actions
export default ServiceDatabaseSlice.reducer