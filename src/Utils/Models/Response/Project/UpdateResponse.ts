import IBaseResponse from "../../Base/IBaseResponse";
import Project from "../../ConCreate/Project";

export default interface UpdateResponse extends IBaseResponse {
    project:Project;
}