// import React from 'react';
import { categoryCreationDTO } from './category.model';
import axios from 'axios';
import { postCategoryURL } from '../endpoint';
import CategoryForm from './CategoryForm';
import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import { string } from 'yup';

export default function CreateCategory() 
{
    console.log("Component Loaded");
    const initialModel:categoryCreationDTO={name:''};
//    const[errors,setErrors]=useState<string[]>([]);

const navigate=useNavigate();
const handleSubmit= async(
    values:categoryCreationDTO,
    actions:FormikHelpers<categoryCreationDTO>
)=>{    
    try{
        
        const response= await axios.post(postCategoryURL,values);
        console.log("Category Created Successfully",response.data);
        actions.setSubmitting(false);
        navigate("/");
    }
    catch(err)
    {
        console.error("error creating history",err);
        actions.setSubmitting(false);
    }

}
 return (
        <>
        <CategoryForm model={initialModel} onSubmit={handleSubmit}/> 
        </>
    );
}
