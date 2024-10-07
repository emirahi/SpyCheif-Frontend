import IBaseModel from "../Base/IBaseModel";

export default interface Asset extends IBaseModel {
    assetTypeId:string;
    value: string;
    type: string;
}