
import { FC } from "react";
import { NavbarComponent } from "./NavbarComponent";
import { useModals } from "../../Utils/hooks/modal";
import { BaseModel } from "../../Utils/Modal/BaseModel";
import { ProjectRoute } from "./ProjectRoute";
import { useAppSelector } from "../../StateManager/hooks";
import { ProjectComponent } from "../../Components/Project/ProjectComponent";


export const HomeComponent: FC = () => {
    const modals = useModals();
    const project = useAppSelector(selector => selector.ProjectSlice.active)
    
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            { project == undefined ? <ProjectComponent></ProjectComponent> : <ProjectRoute></ProjectRoute>}
            {modals.length > 0 && <BaseModel />}

        </div>
    );
}
