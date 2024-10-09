import AddAssetRequest from "../Utils/Models/Request/Asset/AddAssetRequest";
import SearchAssetRequest from "../Utils/Models/Request/Asset/SearchAssetRequest";
import UpdateAssetRequest from "../Utils/Models/Request/Asset/UpdateAssetRequest";
import AddResponse from "../Utils/Models/Response/Asset/AddResponse";
import DeleteResponse from "../Utils/Models/Response/Asset/DeleteResponse";
import GetAllResponse from "../Utils/Models/Response/Asset/GetAllResponse";
import GetResponse from "../Utils/Models/Response/Asset/GetResponse";
import SearchResponse from "../Utils/Models/Response/Asset/SearchResponse";
import UpdateResponse from "../Utils/Models/Response/Asset/UpdateResponse";



const baseUrl = "http://localhost:5025/api/Asset";
const GetAllService = async (uniq:boolean = false): Promise<GetAllResponse> => {
    const url = `${baseUrl}?uniq=${uniq}`
    const asset = await fetch(url)
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as GetAllResponse
        else if (asset.status == 400)
            return data as GetAllResponse
        return { assets: null, status: false, message: "Bir Sorun ile" } as GetAllResponse

    } catch (error) {
        if (asset.status == 500)
            return { assets: null, status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetAllResponse
        return { assets: null, status: false, message: "Bir sorun ile karşılaşıldı." } as GetAllResponse
    }
}

const SearchService = async (searchAsset:SearchAssetRequest): Promise<SearchResponse> => {
    
    let url = `${baseUrl}/Search?uniq=${searchAsset.uniq}`
    if (searchAsset.AssetTypeId.trim().length > 0)
        url += `&AssetTypeId=${searchAsset.AssetTypeId}`
    if (searchAsset.match.length > 0)
        url += `&match=${searchAsset.match}`

    const asset = await fetch(url)
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as SearchResponse
        else if (asset.status == 400)
            return data as SearchResponse
        return { assets: null, status: false, message: "Bir Sorun ile" } as SearchResponse

    } catch (error) {
        if (asset.status == 500)
            return { assets: null, status: false, message: "Sunucu ile ileşime geçilemiyor." } as SearchResponse
        return { assets: null, status: false, message: "Bir sorun ile karşılaşıldı." } as SearchResponse
    }
}

const GetService = async (id: string): Promise<GetResponse> => {

    const url = `${baseUrl}/Get?id=${id}`;
    const asset = await fetch(url)
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as GetResponse
        else if (asset.status == 400)
            return data as GetResponse
        return { asset: null, status: false, message: "Bir Sorun ile" } as GetResponse
    } catch (error) {
        if (asset.status == 500)
            return { asset: null, status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetResponse
        return { asset: null, status: false, message: "Bir sorun ile karşılaşıldı." } as GetResponse
    }
}

const DeleteService = async (id: string): Promise<DeleteResponse> => {

    const url = `${baseUrl}/Delete`;
    const asset = await fetch(url, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ "id": id }) })
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as DeleteResponse
        else if (asset.status == 400)
            return data as DeleteResponse
        return { status: false, message: "Bir Sorun ile" } as DeleteResponse
    } catch (error) {
        if (asset.status == 500)
            return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as DeleteResponse
        return { status: false, message: "Bir sorun ile karşılaşıldı." } as DeleteResponse
    }
}

const UpdateService = async (updateAsset: UpdateAssetRequest): Promise<UpdateResponse> => {

    const url = `${baseUrl}/Update`;
    const asset = await fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updateAsset) })
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as UpdateResponse
        else if (asset.status == 400)
            return data as UpdateResponse
        return { status: false, message: "Bir Sorun ile" } as UpdateResponse
    } catch (error) {
        if (asset.status == 500)
            return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as UpdateResponse
        return { status: false, message: "Bir sorun ile karşılaşıldı." } as UpdateResponse
    }
}


const AddService = async (addAsset: AddAssetRequest): Promise<AddResponse> => {

    const url = `${baseUrl}/Insert`;
    const asset = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(addAsset) })
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as AddResponse
        else if (asset.status == 400)
            return data as AddResponse
        return { status: false, message: "Bir Sorun ile" } as AddResponse
    } catch (error) {
        if (asset.status == 500)
            return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as AddResponse
        return { status: false, message: "Bir sorun ile karşılaşıldı." } as AddResponse
    }
}



export { GetAllService, SearchService, GetService, AddService, UpdateService, DeleteService }