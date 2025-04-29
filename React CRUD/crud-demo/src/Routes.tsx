import { RouteObject } from "react-router-dom";
import Category from "./IndexCategory";
import Book from "./Book";
import Home from "./Home";
import IndexCategory from "./IndexCategory";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";

const routes:RouteObject[]=[
    {
    path:'/',element:<Home/>
    },
    {
    path:'/category',element:<IndexCategory/>
    },
    {
    path:'/CreateCategory',element:<CreateCategory/>
    },
    {
    path:'/category/edit:id',element:<EditCategory/>
    },
]
export default routes