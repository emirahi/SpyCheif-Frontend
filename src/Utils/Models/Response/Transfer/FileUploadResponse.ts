import IBaseResponse from "../../Base/IBaseResponse";

export default interface FileUploadResponse extends IBaseResponse {
    fileId: string;
    keys: string[];
    values: object[];
}