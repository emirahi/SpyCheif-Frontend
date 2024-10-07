import IBaseResponse from "../../Base/IBaseResponse";
import AssetType from "../../ConCreate/AssetType";

export default interface AddResponse extends IBaseResponse {
    assetType:AssetType
}