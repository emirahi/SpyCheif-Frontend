import Config from "../Utils/Config";
import BaseFetch from "./Base/BaseFetch";

export default class ServiceDatabaseFetch extends BaseFetch {

    constructor() {
        super(Config.SERVICE_DATABASE_API_URL)
    }

}

