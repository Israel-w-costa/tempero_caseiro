import {  createBrowserRouter, RouterProvider} from "react-router-dom"
import App from '../../App.tsx'
import Recipal from "../../pages/Recipals/index.tsx";
import PageNotFound from "../../pages/PageNotFound/index.tsx";
import Sobre from "../../pages/Sobre/index.tsx";

export default function MainRouter () {
    const router = createBrowserRouter ([
  {path:"/",element:<App/>},
  {path:"pages/Recipal/:id", element :<Recipal/>},
  {path:"*", element :<PageNotFound/>},
  {path:"pages/sobre", element :<Sobre/>},
])
    
    return  <RouterProvider router={router}/>
    
}