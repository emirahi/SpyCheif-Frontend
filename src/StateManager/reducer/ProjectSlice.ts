import Project from "@/Utils/Models/ConCreate/Project"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const activeStorage = localStorage.getItem("project")
const initialState : { projects: Project[], active:null | Project}= {
    projects: [] as Project[],
    active:  activeStorage !== null ? JSON.parse(activeStorage) : null
}

const projectSlice = createSlice({
    initialState,
    name: "Project",
    reducers: {
        Insert: (state, action: PayloadAction<Project>) => {
            state.projects = [...state.projects, action.payload]
        },
        InsertOfList: (state, action: PayloadAction<Project[]>) => {
            state.projects = action.payload
        },
        Update: (state, action: PayloadAction<Project>) => {
            const index = state.projects.findIndex(project => project.id == action.payload.id)
            const data = state.projects[index]
            data.projectName = action.payload.projectName
            data.description = action.payload.description
            data.updatedDate = new Date().toISOString()
        },
        Delete: (state, action: PayloadAction<string>) => {
            const project = state.projects.filter(project => project.id != action.payload)
            state.projects = project
        },
        SetActive: (state, action: PayloadAction<string>) => {
            const project = state.projects.find(project => project.id === action.payload)
            if (project){
                localStorage.setItem("project",JSON.stringify(project))
                state.active = project
            }
        }
    }
})

export const { Insert, InsertOfList, Update, Delete, SetActive } = projectSlice.actions
export default projectSlice.reducer