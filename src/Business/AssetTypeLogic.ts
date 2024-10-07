import { AddService, DeleteService, GetAllService, UpdateService } from "../ApiService/AssetTypeFetch"
import { DeleteOfType } from "../StateManager/reducer/AssetSlice"
import { Delete, Insert, InsertOfList, Update } from "../StateManager/reducer/AssetTypeSlice"
import store from "../StateManager/store"
import { destoryModal } from "../Utils/hooks/modal"
import AssetType from "../Utils/Models/ConCreate/AssetType"
import AddAssetTypeRequest from "../Utils/Models/Request/AssetType/AddAssetTypeRequest"
import UpdateAssetTypeRequest from "../Utils/Models/Request/AssetType/UpdateAssetTypeRequest"

const GetAllAssetTypeLogic = () => {
    const number = store.getState().AssetTypeSlice.AssetTypes.length
    if (number === 0)
        GetAllService()
            .then(rsp => {
                if (rsp.status && rsp.assetTypes !== null) {
                    store.dispatch(InsertOfList(rsp.assetTypes))
                }
            })
}

const AddAssetTypeLogic = async (addAssetType: AddAssetTypeRequest) => {
    const resp = await AddService(addAssetType)
    if (resp.status) {
        store.dispatch(Insert(resp.assetType))
        destoryModal()
    }
}

const UpdateAssetTypeLogic = async (updateAssetType: UpdateAssetTypeRequest) => {
    const resp = await UpdateService(updateAssetType)
    if (resp.status) {
        store.dispatch(Update({ id: updateAssetType.id, type: updateAssetType.typeName } as AssetType))

        destoryModal()
    }
}

const DeleteAssetTypeLogic = async (id: string) => {
    const data = await DeleteService(id)
    if (await data.status) {
        store.dispatch(Delete(id))
        store.dispatch(DeleteOfType(id))
        destoryModal()
    }
}

export { GetAllAssetTypeLogic, AddAssetTypeLogic, UpdateAssetTypeLogic, DeleteAssetTypeLogic }