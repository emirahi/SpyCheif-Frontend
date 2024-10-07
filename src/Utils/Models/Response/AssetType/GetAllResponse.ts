import IBaseResponse from "../../Base/IBaseResponse";
import AssetType from "../../ConCreate/AssetType";

export default interface GetAllResponse extends IBaseResponse {
    assetTypes:AssetType[] | null
}