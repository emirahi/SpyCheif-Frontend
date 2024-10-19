import IBaseModel from "../Base/IBaseModel";

export default interface Project extends IBaseModel {
    projectName: string;
    description: string;
}