import IBaseResponse from "../../Base/IBaseResponse";
import ServiceDatabase from "../../ConCreate/ServiceDatabase";

export default interface AddResponse extends IBaseResponse {
    serviceDatabase:ServiceDatabase
}