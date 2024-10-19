import BaseFetch from "./Base/BaseFetch";

export default class ProjectFetch extends BaseFetch {

    constructor(){
        super("http://localhost:5025/api/Project")
    }
}