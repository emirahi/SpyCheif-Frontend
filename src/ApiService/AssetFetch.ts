import SearchAssetRequest from "@/Utils/Models/Request/Asset/SearchAssetRequest";
import GetAllResponse from "../Utils/Models/Response/Asset/GetAllResponse";
import BaseFetch from "./Base/BaseFetch";
import SearchResponse from "@/Utils/Models/Response/Asset/SearchResponse";

export default class AssetFetch extends BaseFetch {

    constructor() {
        super("http://localhost:5025/api/Asset")
    }

    async SearchService(searchAsset:SearchAssetRequest): Promise<SearchResponse> {
    
        let url = `${super.GetUrl()}/Search?uniq=${searchAsset.uniq}`
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

    override async GetAllFetch<GetAllResponse>(uniq: boolean = false): Promise<GetAllResponse> {
        debugger;
        const url = `${super.GetUrl()}?uniq=${uniq}`
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


}
