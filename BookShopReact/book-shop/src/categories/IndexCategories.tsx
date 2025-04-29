import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { categoryDTO } from './category.model';
import { Link } from 'react-router-dom';
import { getCategoryURL } from '../endpoint';

export default function IndexCategories() {
    
    const[category,setCategory]=useState<categoryDTO[]>([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState<string|null>(null);
    useEffect(()=>{
      fetchCategories();
    },[]);

    async function fetchCategories()
    {
        try{
            const response=await axios.get<categoryDTO[]>(getCategoryURL);
            setCategory(response.data);
            setLoading(false);
        }
        catch(err)
        {
            console.error(err);
            setError("Failed to fetch Categories");
            setLoading(false);
        }
    };
    if(loading) return<p>Loading Categories</p>   
    if(loading) return<p>Error in Fetching Categories</p>   
    
    return (
        <>
        <h2>Category List</h2>
        <table className='table table-striped'>
         <thead>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
                <th>
                    Actions
                </th>
            </tr>
         </thead>
         <tbody>
            {category.map((category)=>(
             <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <Link to={`/category/edit-category/${category.id}`} className='btn btn-primary'>Edit</Link>
              </td>
             </tr>
            ))}
         </tbody>
        </table>
        </>
    );
}
