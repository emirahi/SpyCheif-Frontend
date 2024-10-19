
import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AssetComponent } from "../../Components/Asset/AssetComponent";
import { useAppSelector } from "../../StateManager/hooks";

export const ProjectRoute: FC = () => {
    const path = useLocation()
    return (
        <div>
            { path.pathname == "/" ? <AssetComponent></AssetComponent> : <Outlet></Outlet>}
        </div>
    );
}
