import ProjectFetch from "../ApiService/ProjectFetch"
import { Delete, Insert, InsertOfList, SetActive, Update } from "../StateManager/reducer/ProjectSlice"
import store from "../StateManager/store"
import { destoryModal } from "../Utils/hooks/modal"
import AddProjectRequest from "../Utils/Models/Request/Project/AddProjectRequest"
import UpdateProjectRequest from "../Utils/Models/Request/Project/UpdateProjectRequest"
import AddResponse from "../Utils/Models/Response/Project/AddResponse"
import DeleteResponse from "../Utils/Models/Response/Project/DeleteResponse"
import GetAllResponse from "../Utils/Models/Response/Project/GetAllResponse"
import UpdateResponse from "../Utils/Models/Response/Project/UpdateResponse"

const fetch = new ProjectFetch()
const GetAllProjectLogic = () => {
    fetch.GetAllFetch<GetAllResponse>()
    .then(rsp => {
        if (rsp.status && rsp.project !== null) {
            store.dispatch(InsertOfList(rsp.project))
        }
    })
}

const SetActiveLogic = (id:string) => {
    store.dispatch(SetActive(id))
}

const AddProjectLogic = async (addProject: AddProjectRequest) => {
    const resp = await fetch.AddFetch<AddResponse,AddProjectRequest>(addProject)
    if (resp.status) {
        store.dispatch(Insert(resp.project))
        destoryModal()
    }
}

const UpdateProjectLogic = async (updateProject: UpdateProjectRequest) => {
    const resp = await fetch.UpdateFetch<UpdateResponse,UpdateProjectRequest>(updateProject)
    if (resp.status && resp.project != null) {
        store.dispatch(Update(resp.project))
        destoryModal()
    }
}

const DeleteProjectLogic = async (id: string) => {
    const data = await fetch.DeleteFetch<DeleteResponse>(id)
    if (await data.status) {
        store.dispatch(Delete(id))
        destoryModal()
    }
}

export { GetAllProjectLogic, AddProjectLogic, UpdateProjectLogic, DeleteProjectLogic, SetActiveLogic }


