import IBaseResponse from "../../Base/IBaseResponse";
import ServiceDatabase from "../../ConCreate/ServiceDatabase";

export default interface GetResponse extends IBaseResponse {
    serviceDatabase: ServiceDatabase | null
}