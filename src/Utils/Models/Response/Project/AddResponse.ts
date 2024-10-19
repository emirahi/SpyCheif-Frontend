import IBaseResponse from "../../Base/IBaseResponse";
import Project from "../../ConCreate/Project";

export default interface AddResponse extends IBaseResponse {
    project:Project
}