import GetAllResponse from "@/Utils/Models/Response/ServiceDatabase/GetAllResponse"
import ServiceDatabaseFetch from "../ApiService/ServiceDatabaseFetch"
import { Delete, Insert, InsertOfList, Update } from "../StateManager/reducer/ServiceDatabaseSlice"
import store from "../StateManager/store"
import { destoryModal } from "../Utils/hooks/modal"
import ServiceDatabase from "../Utils/Models/ConCreate/ServiceDatabase"
import AddServiceDatabaseRequest from "../Utils/Models/Request/ServiceDatabase/AddServiceDatabaseRequest"
import UpdateServiceDatabaseRequest from "../Utils/Models/Request/ServiceDatabase/UpdateServiceDatabaseRequest"
import AddResponse from "@/Utils/Models/Response/ServiceDatabase/AddResponse"
import UpdateResponse from "@/Utils/Models/Response/ServiceDatabase/UpdateResponse"
import DeleteResponse from "@/Utils/Models/Response/ServiceDatabase/DeleteResponse"


const fetch = new ServiceDatabaseFetch()
const GetAllServiceDatabaseLogic = () => {
    const number = store.getState().ServiceDatabaseSlice.ServiceDatabase.length
    if (number === 0)
        fetch.GetAllFetch<GetAllResponse>()
            .then(rsp => {
                if (rsp.status) {
                    store.dispatch(InsertOfList(rsp.serviceDatabases))
                }
            })
}

const AddServiceDatabaseLogic = async (addServiceDatabase: AddServiceDatabaseRequest) => {
    const resp = await fetch.AddFetch<AddResponse,AddServiceDatabaseRequest>(addServiceDatabase)
    if (resp.status) {
        store.dispatch(Insert(resp.serviceDatabase))
        destoryModal()
    }
}

const UpdateServiceDatabaseLogic = async (updateServiceDatabase: UpdateServiceDatabaseRequest) => {
    const resp = await fetch.UpdateFetch<UpdateResponse,UpdateServiceDatabaseRequest>(updateServiceDatabase)
    if (resp.status) {
        store.dispatch(Update({
            id: updateServiceDatabase.id,
            appName: updateServiceDatabase.appName,
            collentionName: updateServiceDatabase.collectionName,
            databaseName: updateServiceDatabase.databaseName
         } as ServiceDatabase))

        destoryModal()
    }
}

const DeleteServiceDatabaseLogic = async (id: string) => {
    const data = await fetch.DeleteFetch<DeleteResponse>(id)
    if (await data.status) {
        store.dispatch(Delete(id))
        destoryModal()
    }
}

export { GetAllServiceDatabaseLogic, AddServiceDatabaseLogic, UpdateServiceDatabaseLogic, DeleteServiceDatabaseLogic }

