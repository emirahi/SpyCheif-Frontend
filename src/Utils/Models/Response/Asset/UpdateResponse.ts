import IBaseResponse from "../../Base/IBaseResponse";
import Asset from "../../ConCreate/Asset";

export default interface UpdateResponse extends IBaseResponse {
    asset: Asset;
}