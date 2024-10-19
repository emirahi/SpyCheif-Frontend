import IBaseResponse from "../../Base/IBaseResponse";
import Project from "../../ConCreate/Project";

export default interface GetResponse extends IBaseResponse {
    project: Project | null
}