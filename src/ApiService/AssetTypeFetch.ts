import BaseFetch from "./Base/BaseFetch";

export default class AssetTypeFetch extends BaseFetch {

    constructor() {
        super("http://localhost:5025/api/AssetType")
    }

}

