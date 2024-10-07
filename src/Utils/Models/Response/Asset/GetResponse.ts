import IBaseResponse from "../../Base/IBaseResponse";
import Asset from "../../ConCreate/Asset";

export default interface GetResponse extends IBaseResponse {
    asset: Asset | null;
}