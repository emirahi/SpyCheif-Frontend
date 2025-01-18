import IBaseModel from "../Base/IBaseModel";
import IBaseResponse from "../Base/IBaseResponse";


export default interface File extends IBaseModel {
    uniqName: string,
    fileName: string,
    remotePath: string
}