import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryDto } from "./category.model";
import { error } from "console";

export default function IndexCategory(){
    const[categories,setCategories]=useState<CategoryDto[]>([]);
    const[loading,setLoading]=useState<boolean>(true);
    useEffect(()=>{
        fetch('https://localhost:7260/api/Category').then(response=>response.json()).then(data=>{
            setCategories(data);
            setLoading(false);

        }).catch(error=>{
            console.error('error loading category',error);
            setLoading(false);
        })
    })
    
    return(
        <>
        <div className="container">
        <h1>Categories List</h1>
        <div className="d-flex justify-content-end">
         <Link to='/CreateCategory' className="btn btn-info">Create Category</Link>
         </div>
         <div className="mt-2">
            <table className="table table-striped">
                <thead>
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Action
                    </th>
                </thead>
                <tbody>
                    {
                        categories.map((category)=>{
                            return <tr key={category.id}>
                              <td>{category.id}</td>
                              <td>{category.name}</td>
                              <td><Link className="btn btn-primary" to={`/category/edit/${category.id}`}>Edit</Link></td>
                              <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        })
                    }
                    <tr></tr>
                </tbody>
            </table>

         </div>
        </div>
        </>
    )
}