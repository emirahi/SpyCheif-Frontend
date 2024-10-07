import GetAllResponse from "../Utils/Models/Response/Transfer/GetAllResponse";
import GetResponse from "../Utils/Models/Response/Transfer/GetResponse";

const baseUrl = "http://localhost:5025/api/Transfer";
const GetAllService = async (appName:string): Promise<GetAllResponse> => {
    const url = `${baseUrl}?AppName=${appName}`
    const asset = await fetch(url)
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as GetAllResponse
        else if (asset.status == 400)
            return data as GetAllResponse
        return { datas: "", status: false, message: "Bir sorun ile karşılaşıldı" } as GetAllResponse

    } catch (error) {
        if (asset.status == 500)
            return { datas: "", status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetAllResponse
        return { datas: "", status: false, message: "Bir sorun ile karşılaşıldı." } as GetAllResponse
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
        return { data: "", status: false, message: "Bir sorun ile karşılaşıldı" } as GetResponse
    } catch (error) {
        if (asset.status == 500)
            return { data: "", status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetResponse
        return { data: "", status: false, message: "Bir sorun ile karşılaşıldı." } as GetResponse
    }
}

export { GetAllService, GetService }

