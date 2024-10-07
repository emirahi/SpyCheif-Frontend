import IBaseResponse from "../../Base/IBaseResponse";
import Asset from "../../ConCreate/Asset";

export default interface SearchResponse extends IBaseResponse {
    assets: Asset[] | null
}