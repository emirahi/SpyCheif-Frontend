import { AddService, DeleteService, GetAllService, SearchService, UpdateService } from "../ApiService/AssetFetch"
import { useAppDispatch } from "../StateManager/hooks"
import { Delete, Insert, InsertOfList, InsertOfListSearch, Update } from "../StateManager/reducer/AssetSlice"
import store from "../StateManager/store"
import { destoryModal } from "../Utils/hooks/modal"
import Asset from "../Utils/Models/ConCreate/Asset"
import AddAssetRequest from "../Utils/Models/Request/Asset/AddAssetRequest"
import SearchAssetRequest from "../Utils/Models/Request/Asset/SearchAssetRequest"
import UpdateAssetRequest from "../Utils/Models/Request/Asset/UpdateAssetRequest"


const GetAllAssetLogic = () => {
    GetAllService()
        .then(rsp => {
            console.log("AllAssetComponent - GetAll", rsp)
            if (rsp.assets !== null) {
                store.dispatch(InsertOfList(rsp.assets))
            }
        })
}

const SearchAssetLogic = (searchAsset: SearchAssetRequest) => {
    debugger;
    if (searchAsset.AssetTypeId.trim().length > 0 || searchAsset.match.length > 0)
        SearchService(searchAsset)
            .then(rsp => {
                if (rsp.assets !== null)
                    store.dispatch(InsertOfListSearch(rsp.assets))
                else
                    store.dispatch(InsertOfListSearch([]))
            })
    else
        store.dispatch(InsertOfListSearch([]))

}

const AddAssetLogic = async (addAsset: AddAssetRequest) => {
    const resp = await AddService(addAsset)
    if (resp.status) {
        store.dispatch(Insert(resp.asset))
    }
}

const UpdateAssetLogic = async (assetTypeName: string, updateAsset: UpdateAssetRequest) => {
    const resp = await UpdateService(updateAsset)
    if (resp.status) {
        store.dispatch(Update({ id: updateAsset.id, value: updateAsset.value, assetTypeId: updateAsset.id, type: assetTypeName } as Asset))
        destoryModal()
    }
}

const DeleteAssetLogic = async (id: string) => {
    const data = await DeleteService(id)
    if (await data.status) {
        store.dispatch(Delete(id))
        destoryModal()
    }
}

export { GetAllAssetLogic, SearchAssetLogic, AddAssetLogic, UpdateAssetLogic, DeleteAssetLogic }