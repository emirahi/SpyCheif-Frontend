import GetAllResponse from "@/Utils/Models/Response/Transfer/GetAllResponse"
import TransferFetch from "../ApiService/TransferFetch"
import { InsertOfListTransfer, InsertTransferSelected, RemoveTransferSelected } from "../StateManager/reducer/ServiceDatabaseSlice"
import store from "../StateManager/store"
import { InsertOfFile, InsertOfFiles } from "../StateManager/reducer/TransferSlice"

const fetch = new TransferFetch()
const GetAllTransferLogic = async (appName: string) => {
    const rsp = await fetch.GetAllFetch(appName)
    try {
        if (rsp.status) {
            const convert = JSON.parse(rsp.datas)
            console.log("Transfer Convert : ", convert, typeof (convert))
            store.dispatch(InsertOfListTransfer(convert))
        }
    }
    catch { }

}

const TransferSelectedLogic = (transfer: Object, create: boolean) => {
    if (create)
        store.dispatch(InsertTransferSelected(transfer))
    else
        store.dispatch(RemoveTransferSelected((transfer as { _id: string })._id))
}

const TransferFileUploadLogic =  async (file: FormData) => {
    const rsp = await fetch.FileUpload(file)
    try{
        if(rsp.status){
            store.dispatch(InsertOfFile(rsp))
        }
    }
    catch{}
}

const TransferGetFilesLogic = async () => {
    const rsp = await fetch.GetFiles()
    try {
        if (rsp.status) {
            store.dispatch(InsertOfFiles(rsp.files))
        }
    }
    catch { }

}


export { GetAllTransferLogic, TransferSelectedLogic, TransferGetFilesLogic, TransferFileUploadLogic as TransferFileUpload }