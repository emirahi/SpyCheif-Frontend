import FileUploadResponse from "@/Utils/Models/Response/Transfer/FileUploadResponse";
import Config from "../Utils/Config";
import GetAllResponse from "@/Utils/Models/Response/Transfer/GetAllResponse";
import GetFileResponse from "@/Utils/Models/Response/Transfer/GetFileResponse";
import GetFilesResponse from "@/Utils/Models/Response/Transfer/GetFilesResponse";
import GetResponse from "@/Utils/Models/Response/Transfer/GetResponse";
import FileDeleteResponse from "@/Utils/Models/Response/Transfer/FileDeleteResponse";

export default class ServiceDatabaseFetch {
    baseUrl: string;
    constructor() {
        this.baseUrl = Config.TRANSFER_API_URL;
    }

    GetAllFetch = async (appName: string): Promise<GetAllResponse> => {
        const url = `${this.baseUrl}?AppName=${appName}`
        const rsp = await fetch(url)
        try {
            const data = await rsp.json()
            if (rsp.status === 200)
                return data as GetAllResponse
            else if (rsp.status === 400)
                return data as GetAllResponse
            return { datas: "", status: false, message: "Bir sorun ile karşılaşıldı" } as GetAllResponse

        } catch (error) {
            if (rsp.status === 500)
                return { datas: "", status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetAllResponse
            return { datas: "", status: false, message: "Bir sorun ile karşılaşıldı." } as GetAllResponse
        }
    }

    GetFetch = async (id: string): Promise<GetResponse> => {
        const url = `${this.baseUrl}/Get?id=${id}`;
        const rsp = await fetch(url)
        try {
            const data = await rsp.json()
            if (rsp.status === 200)
                return data as GetResponse
            else if (rsp.status === 400)
                return data as GetResponse
            return { data: "", status: false, message: "Bir sorun ile karşılaşıldı" } as GetResponse
        } catch (error) {
            if (rsp.status === 500)
                return { data: "", status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetResponse
            return { data: "", status: false, message: "Bir sorun ile karşılaşıldı." } as GetResponse
        }
    }

    GetFiles = async (): Promise<GetFilesResponse> => {
        const url = `${this.baseUrl}/GetFiles`;
        const rsp = await fetch(url)
        try {
            const data = await rsp.json()
            if (rsp.status === 200)
                return data as GetFilesResponse
            else if (rsp.status === 400)
                return data as GetFilesResponse
            return { files: [], status: false, message: "Bir sorun ile karşılaşıldı" } as GetFilesResponse
        } catch (error) {
            if (rsp.status === 500)
                return { files: [], status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetFilesResponse
            return { files: [], status: false, message: "Bir sorun ile karşılaşıldı." } as GetFilesResponse
        }
    }

    GetFile = async (id: string): Promise<GetFileResponse> => {
        const url = `${this.baseUrl}/Get?id=${id}`;
        const rsp = await fetch(url)
        try {
            const data = await rsp.json()
            if (rsp.status === 200)
                return data as GetFileResponse
            else if (rsp.status === 400)
                return data as GetFileResponse
            return { status: false, message: "Bir sorun ile karşılaşıldı" } as GetFileResponse
        } catch (error) {
            if (rsp.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as GetFileResponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as GetFileResponse
        }
    }

    FileUpload = async (fileFormData: FormData): Promise<FileUploadResponse> => {
        const url = `${this.baseUrl}/FileUpload`;
        const rsp = await fetch(url, { method: 'POST', body: fileFormData })
        try {
            const data = await rsp.json()
            if (rsp.status === 200)
                return data as FileUploadResponse
            else if (rsp.status === 400)
                return data as FileUploadResponse
            return { status: false, message: "Bir sorun ile karşılaşıldı" } as FileUploadResponse
        } catch (error) {
            if (rsp.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as FileUploadResponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as FileUploadResponse
        }
    }

    FileDelete = async (id : string ): Promise<FileDeleteResponse> => {
        const url = `${this.baseUrl}/FileDelete?id=${id}`;
        const rsp = await fetch(url, { method: 'DELETE' })
        try {
            const data = await rsp.json()
            if (rsp.status === 200)
                return data as FileDeleteResponse
            else if (rsp.status === 400)
                return data as FileDeleteResponse
            return { status: false, message: "Bir sorun ile karşılaşıldı" } as FileDeleteResponse
        } catch (error) {
            if (rsp.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as FileDeleteResponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as FileDeleteResponse
        }
    }
    
}