import IBaseResponse from "../../Base/IBaseResponse";
import File from "../../ConCreate/File";


export default interface GetFilesResponse extends IBaseResponse {
    files: File[]
}