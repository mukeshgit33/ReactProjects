import CreateAuthor from "./authors/CreateAuthor";
import IndexAuthor from "./authors/IndexAuthor";
import { RouteObject, Routes } from "react-router-dom";
import Home from "./home/Home";
import CreateCategory from "./categories/CreateCategory";
import EditCategory from "./categories/EditCategory";
import IndexCategories from "./categories/IndexCategories";

const routes:RouteObject[]=[
    {path:'/',element:<Home/>}, 
    {path:'category/create',element:<CreateCategory/>},
    {path:'authors',element:<IndexAuthor/>},
    {path:'authors/create',element:<CreateAuthor/>},
    {path:'category/edit-category/:id',element:<EditCategory/>},
    {path:'category',element:<IndexCategories/>},
]

export default routes;