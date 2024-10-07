import IBaseResponse from "../../Base/IBaseResponse";
import Asset from "../../ConCreate/Asset";

export default interface AddResponse extends IBaseResponse {
    asset:Asset
}