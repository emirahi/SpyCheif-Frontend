
import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavbarComponent } from "./NavbarComponent";
import { AssetComponent } from "../../Components/Asset/AssetComponent";
import { useModals } from "../../Utils/hooks/modal";
import { BaseModel } from "../../Utils/Modal/BaseModel";


export const HomeComponent: FC = () => {
    const path = useLocation()
    const modals = useModals();

    return (
        <div>
            <NavbarComponent></NavbarComponent>
            {/* <h1 className="text-black">{path.pathname}</h1> */}
            {path.pathname === "/" ? <AssetComponent></AssetComponent> : <Outlet></Outlet>}
            {modals.length > 0 && <BaseModel />}
            
        </div>
    );
}
