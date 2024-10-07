import ServiceDatabase from "../Utils/Models/ConCreate/ServiceDatabase";
import AddServiceDatabaseRequest from "../Utils/Models/Request/ServiceDatabase/AddServiceDatabaseRequest";
import UpdateServiceDatabaseRequest from "../Utils/Models/Request/ServiceDatabase/UpdateServiceDatabaseRequest";
import AddResponse from "../Utils/Models/Response/ServiceDatabase/AddResponse";
import DeleteResponse from "../Utils/Models/Response/ServiceDatabase/DeleteResponse";
import GetAllResponse from "../Utils/Models/Response/ServiceDatabase/GetAllResponse";
import GetResponse from "../Utils/Models/Response/ServiceDatabase/GetResponse";
import UpdateResponse from "../Utils/Models/Response/ServiceDatabase/UpdateResponse";


const baseUrl = "http://localhost:5025/api/ServiceDatabase";
const GetAllService = async (): Promise<GetAllResponse> => {

    const serviceDatabase = await fetch(baseUrl)
    try {
        const data = await serviceDatabase.json()
        if (serviceDatabase.status == 200)
            return data as GetAllResponse
        else if (serviceDatabase.status == 400)
            return data as GetAllResponse
        return { serviceDatabases: [], status: false, message: "Bir Sorun ile" } as GetAllResponse

    } catch (error) {
        if (serviceDatabase.status == 500)
            return { serviceDatabases: [], status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetAllResponse
        return { serviceDatabases: [], status: false, message: "Bir sorun ile karşılaşıldı." } as GetAllResponse
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
        return { serviceDatabase: null, status: false, message: "Bir Sorun ile" } as GetResponse
    } catch (error) {
        if (asset.status == 500)
            return { serviceDatabase: null, status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetResponse
        return { serviceDatabase: null, status: false, message: "Bir sorun ile karşılaşıldı." } as GetResponse
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
        return { status: false, message: "Bir sorun ile karşılaşıldı" } as DeleteResponse
    } catch (error) {
        if (asset.status == 500)
            return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as DeleteResponse
        return { status: false, message: "Bir sorun ile karşılaşıldı." } as DeleteResponse
    }
}

const UpdateService = async (updateAssetType: UpdateServiceDatabaseRequest): Promise<UpdateResponse> => {

    const url = `${baseUrl}/Update`;
    const asset = await fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updateAssetType) })
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as UpdateResponse
        else if (asset.status == 400)
            return data as UpdateResponse
        return { status: false, message: "Bir sorun ile karşılaşıldı" } as UpdateResponse
    } catch (error) {
        if (asset.status == 500)
            return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as UpdateResponse
        return { status: false, message: "Bir sorun ile karşılaşıldı." } as UpdateResponse
    }
}


const AddService = async (addAssetType: AddServiceDatabaseRequest): Promise<AddResponse> => {

    const url = `${baseUrl}/Insert`;
    const asset = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(addAssetType) })
    try {
        const data = await asset.json()
        if (asset.status == 200)
            return data as AddResponse
        else if (asset.status == 400)
            return data as AddResponse
        return { status: false, message: "Bir sorun ile karşılaşıldı" } as AddResponse
    } catch (error) {
        if (asset.status == 500)
            return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as AddResponse
        return { status: false, message: "Bir sorun ile karşılaşıldı." } as AddResponse
    }
}


export { GetAllService, GetService, AddService, UpdateService, DeleteService }

