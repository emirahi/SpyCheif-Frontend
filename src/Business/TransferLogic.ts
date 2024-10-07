import { GetAllService } from "../ApiService/TransferFetch"
import { InsertOfListTransfer, InsertTransferSelected, RemoveTransferSelected } from "../StateManager/reducer/ServiceDatabaseSlice"
import store from "../StateManager/store"


const GetAllTransferLogic = async (appName: string) => {
    const rsp = await GetAllService(appName)
    try {
        const convert = JSON.parse(rsp.datas)
        console.log("Transfer Convert : ", convert, typeof (convert))
        store.dispatch(InsertOfListTransfer(convert))
    }
    catch { }

}

const TransferSelectedLogic = (transfer:Object,create:boolean) => {
    if (create)
        store.dispatch(InsertTransferSelected(transfer))
    else
        store.dispatch(RemoveTransferSelected((transfer as {_id:string})._id))
}

export { GetAllTransferLogic, TransferSelectedLogic }