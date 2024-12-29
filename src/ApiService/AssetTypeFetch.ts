import Config from "../Utils/Config";
import BaseFetch from "./Base/BaseFetch";

export default class AssetTypeFetch extends BaseFetch {

    constructor() {
        super(Config.ASSET_TYPE_API_URL)
    }

}

