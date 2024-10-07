import IBaseResponse from "../../Base/IBaseResponse";
import ServiceDatabase from "../../ConCreate/ServiceDatabase";

export default interface GetAllResponse extends IBaseResponse {
    serviceDatabases:ServiceDatabase[]
}