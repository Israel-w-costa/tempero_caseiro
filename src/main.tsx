import {  createBrowserRouter, RouterProvider} from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import Inicio from "./pages/Inicio/index.tsx";
import Recipal from "./pages/Recipal/index.tsx";

const router = createBrowserRouter ([
  {path:"/",element:<App/>},
  {path:"pages/Recipal/:id", element :<Recipal/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
