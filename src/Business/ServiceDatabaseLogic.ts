import { AddService, DeleteService, GetAllService, UpdateService } from "../ApiService/ServiceDatabaseFetch"
import { Delete, Insert, InsertOfList, Update } from "../StateManager/reducer/ServiceDatabaseSlice"
import store from "../StateManager/store"
import { destoryModal } from "../Utils/hooks/modal"
import ServiceDatabase from "../Utils/Models/ConCreate/ServiceDatabase"
import AddServiceDatabaseRequest from "../Utils/Models/Request/ServiceDatabase/AddServiceDatabaseRequest"
import UpdateServiceDatabaseRequest from "../Utils/Models/Request/ServiceDatabase/UpdateServiceDatabaseRequest"


const GetAllServiceDatabaseLogic = () => {
    const number = store.getState().ServiceDatabaseSlice.ServiceDatabase.length
    if (number === 0)
        GetAllService()
            .then(rsp => {
                if (rsp.status) {
                    store.dispatch(InsertOfList(rsp.serviceDatabases))
                }
            })
}

const AddServiceDatabaseLogic = async (addServiceDatabase: AddServiceDatabaseRequest) => {
    const resp = await AddService(addServiceDatabase)
    if (resp.status) {
        store.dispatch(Insert(resp.serviceDatabase))
        destoryModal()
    }
}

const UpdateServiceDatabaseLogic = async (updateServiceDatabase: UpdateServiceDatabaseRequest) => {
    const resp = await UpdateService(updateServiceDatabase)
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
    const data = await DeleteService(id)
    if (await data.status) {
        store.dispatch(Delete(id))
        destoryModal()
    }
}

export { GetAllServiceDatabaseLogic, AddServiceDatabaseLogic, UpdateServiceDatabaseLogic, DeleteServiceDatabaseLogic }

