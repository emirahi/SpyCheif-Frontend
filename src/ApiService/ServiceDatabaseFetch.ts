import BaseFetch from "./Base/BaseFetch";

export default class ServiceDatabaseFetch extends BaseFetch {

    constructor() {
        super("http://localhost:5025/api/ServiceDatabase")
    }

}

