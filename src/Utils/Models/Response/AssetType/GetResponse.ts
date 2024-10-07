import IBaseResponse from "../../Base/IBaseResponse";
import AssetType from "../../ConCreate/AssetType";

export default interface GetResponse extends IBaseResponse {
    assetType: AssetType | null
}