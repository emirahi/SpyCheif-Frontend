import IBaseResponse from "../../Base/IBaseResponse";
import Project from "../../ConCreate/Project";

export default interface GetAllResponse extends IBaseResponse{
    project: Project[];
}