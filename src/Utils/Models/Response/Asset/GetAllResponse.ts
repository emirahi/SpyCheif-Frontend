import IBaseResponse from "../../Base/IBaseResponse";
import Asset from "../../ConCreate/Asset";

export default interface GetAllResponse extends IBaseResponse {
    assets: Asset[] | null;
}