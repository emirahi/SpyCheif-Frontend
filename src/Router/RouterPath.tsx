import { createBrowserRouter } from "react-router-dom";
import { HomeComponent } from "./Base/HomeComponent";
import { ServiceApp } from "../Components/Apps/ServiceApp";


const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeComponent/>,
        children:[
            {
                path:"apps",
                element:<ServiceApp/>
            }
        ]
    }
])

export default router