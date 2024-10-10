
export default class BaseFetch {
    public baseUrl: string = "";
    constructor(url: string) {
        this.baseUrl = url;
    }

    GetUrl(){
        return this.baseUrl
    }

    async GetAllFetch<Tresponse>() {

        const asset = await fetch(this.baseUrl)
        try {
            const data = await asset.json()
            if (asset.status === 200)
                return data as Tresponse
            else if (asset.status === 400)
                return data as Tresponse
            return { status: false, message: "Bir Sorun ile" } as Tresponse

        } catch (error) {
            if (asset.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as Tresponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as Tresponse
        }
    }

    async GetFetch<Tresponse>(id: string) {
        const url = `${this.baseUrl}/Get?id=${id}`;
        const asset = await fetch(url)
        try {
            const data = await asset.json()
            if (asset.status === 200)
                return data as Tresponse
            else if (asset.status === 400)
                return data as Tresponse
            return { status: false, message: "Bir Sorun ile" } as Tresponse
        } catch (error) {
            if (asset.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as Tresponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as Tresponse
        }
    }

    async DeleteFetch<Tresponse>(id: string) {
        const url = `${this.baseUrl}/Delete`;
        const asset = await fetch(url, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ "id": id }) })
        try {
            const data = await asset.json()
            if (asset.status === 200)
                return data as Tresponse
            else if (asset.status === 400)
                return data as Tresponse
            return { status: false, message: "Bir Sorun ile" } as Tresponse
        } catch (error) {
            if (asset.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as Tresponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as Tresponse
        }
    }

    async AddFetch<Tresponse, Tbody>(content: Tbody) {
        const url = `${this.baseUrl}/Insert`;
        const asset = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) })
        try {
            const data = await asset.json()
            if (asset.status === 200)
                return data as Tresponse
            else if (asset.status === 400)
                return data as Tresponse
            return { status: false, message: "Bir Sorun ile" } as Tresponse
        } catch (error) {
            if (asset.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as Tresponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as Tresponse
        }
    }

    async UpdateFetch<Tresponse, Tbody>(content: Tbody) {
        const url = `${this.baseUrl}/Update`;
        const asset = await fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) })
        try {
            const data = await asset.json()
            if (asset.status === 200)
                return data as Tresponse
            else if (asset.status === 400)
                return data as Tresponse
            return { status: false, message: "Bir Sorun ile" } as Tresponse
        } catch (error) {
            if (asset.status === 500)
                return { status: false, message: "Sunucu ile ileşime geçilemiyor." } as Tresponse
            return { status: false, message: "Bir sorun ile karşılaşıldı." } as Tresponse
        }
    }

}

