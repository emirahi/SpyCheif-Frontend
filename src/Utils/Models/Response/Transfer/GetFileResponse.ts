import IBaseResponse from "../../Base/IBaseResponse";

export default interface GetFileResponse extends IBaseResponse {
    file: File
}