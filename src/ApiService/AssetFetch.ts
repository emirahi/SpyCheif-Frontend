
import SearchAssetRequest from "@/Utils/Models/Request/Asset/SearchAssetRequest";
import BaseFetch from "./Base/BaseFetch";
import Config from "../Utils/Config";
import SearchResponse from "@/Utils/Models/Response/Asset/SearchResponse";
import InsertOfListResponse from "@/Utils/Models/Response/Transfer/InsertOfListResponse";

export default class AssetFetch extends BaseFetch {

    constructor() {
        super(Config.ASSET_API_URL)
    }

    async SearchService(searchAsset: SearchAssetRequest): Promise<SearchResponse> {
        
        let url = `${super.GetUrl()}/Search`
        const asset = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(searchAsset) })
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

    override async GetAllFetch<GetAllResponse>(projectId: string | null = null, uniq: boolean = false): Promise<GetAllResponse> {

        if (projectId === null)
            throw new Error("");

        const url = `${super.GetUrl()}?projectId=${projectId}&uniq=${uniq}`
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

    InsertOfList = async (file: any): Promise<InsertOfListResponse> => {
        const url = `${this.baseUrl}/InsertOfList`;
        const formData = new FormData();
        formData.append('file', file);
        const rsp = await fetch(url, { method: 'POST', body: formData })
        try {
            const data = await rsp.json()
            if (rsp.status === 200)
                return data as InsertOfListResponse
            else if (rsp.status === 400)
                return data as InsertOfListResponse
            return { status: false, message: "Bir sorun ile karşılaşıldı" } as InsertOfListResponse
        } catch (error) {
            if (rsp.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as InsertOfListResponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as InsertOfListResponse
        }
    }

    
}
