import { createBrowserRouter } from "react-router-dom";
import { HomeComponent } from "./Base/HomeComponent";
import { ServiceApp } from "../Components/Apps/ServiceApp";
import FileImport from "../Components/FileImport/FileImport";


const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeComponent/>,
        children:[
            {
                path:"apps",
                element:<ServiceApp/>
            },
            {
                path:"file-import",
                element:<FileImport/>
            }
        ]
    }
])

export default router