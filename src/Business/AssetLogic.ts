import AddResponse from "@/Utils/Models/Response/Asset/AddResponse"
import AssetFetch from "../ApiService/AssetFetch"
import { Delete, Insert, InsertOfList, InsertOfListSearch, Update } from "../StateManager/reducer/AssetSlice"
import store from "../StateManager/store"
import { destoryModal } from "../Utils/hooks/modal"
import Asset from "../Utils/Models/ConCreate/Asset"
import AddAssetRequest from "../Utils/Models/Request/Asset/AddAssetRequest"
import SearchAssetRequest from "../Utils/Models/Request/Asset/SearchAssetRequest"
import UpdateAssetRequest from "../Utils/Models/Request/Asset/UpdateAssetRequest"
import GetAllResponse from "../Utils/Models/Response/Asset/GetAllResponse"
import UpdateResponse from "@/Utils/Models/Response/Asset/UpdateResponse"
import DeleteResponse from "@/Utils/Models/Response/Asset/DeleteResponse"


const fetch = new AssetFetch();
const GetAllAssetLogic = (uniq:boolean = false) => {
    fetch.GetAllFetch<GetAllResponse>(uniq)
        .then(rsp => {
            console.log("AllAssetComponent - GetAll", rsp)
            if (rsp.assets !== null) {
                store.dispatch(InsertOfList(rsp.assets))
            }
        })
}

const SearchAssetLogic = (searchAsset: SearchAssetRequest) => {
    if (searchAsset.AssetTypeId.trim().length > 0 || searchAsset.match.length > 0)
        fetch.SearchService(searchAsset)
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
    const resp = await fetch.AddFetch<AddResponse,AddAssetRequest>(addAsset)
    if (resp.status) {
        store.dispatch(Insert(resp.asset))
    }
}

const UpdateAssetLogic = async (assetTypeName: string, updateAsset: UpdateAssetRequest) => {
    const resp = await fetch.UpdateFetch<UpdateResponse,UpdateAssetRequest>(updateAsset)
    if (resp.status) {
        store.dispatch(Update({ id: updateAsset.id, value: updateAsset.value, assetTypeId: updateAsset.id, type: assetTypeName } as Asset))
        destoryModal()
    }
}

const DeleteAssetLogic = async (id: string) => {
    const data = await fetch.DeleteFetch<DeleteResponse>(id)
    if (await data.status) {
        store.dispatch(Delete(id))
        destoryModal()
    }
}

export { GetAllAssetLogic, SearchAssetLogic, AddAssetLogic, UpdateAssetLogic, DeleteAssetLogic }