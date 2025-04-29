import { useState } from "react"
import { CategoryDto, CreateCategoryDto } from "./category.model"
import { useNavigate } from "react-router-dom"

export default function CreateCategory(){
    const[newCategory,setNewCategory]=useState<CreateCategoryDto>({name:''})
    const navigate= useNavigate();
    const handleSubmit= async(event:React.FormEvent)=>{
        event.preventDefault();
        if(newCategory.name.trim()=='')
        {
            return;
        }
        try{
            const response= await fetch('https://localhost:7260/api/Category',
            {
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(newCategory)
            }
        );
        if(response.ok)
        {
            setNewCategory({name:''});
            navigate('/category');
        }
        else{
            console.error('failed');
        }
        }
        catch(error){
            console.error('error');
        }
    };
    return(
        <>
        <div className="container">
        <h1>Create Category</h1>
        <div className="mt-2">
          <form onSubmit={handleSubmit}>
            <div className="FormGroup">
             <label className="FormControl">Name:</label>
             <input className="FormControl" value={newCategory.name}
             onChange={(e)=>setNewCategory({name:e.target.value})}
             required/>
            </div>
            <div className="FormGroup">
             <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        </div>

        </>
    )
}