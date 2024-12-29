import Config from "../Utils/Config";
import BaseFetch from "./Base/BaseFetch";

export default class ProjectFetch extends BaseFetch {

    constructor(){
        super(Config.PROJECT_API_URL)
    }
}