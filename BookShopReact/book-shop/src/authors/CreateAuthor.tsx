import React from 'react';
import AuthorForm from './AuthorForms';
import { authorCreationDTO } from './author.model';

export default function CreateAuthor() {
    async function AddAuthor(author:authorCreationDTO)
     {
        
    }
    return (
        <>
        <AuthorForm model={{name:'',dateOfBirth:undefined}} onSubmit={async values=>await AddAuthor(values)}/>
        </>
    );
}
