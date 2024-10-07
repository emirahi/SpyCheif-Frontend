import IBaseModel from "../Base/IBaseModel";

export default interface ServiceDatabase extends IBaseModel {
    appName: string;
    databaseName: string;
    collentionName: string;
}