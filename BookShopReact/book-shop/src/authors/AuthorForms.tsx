import React from 'react';
import { authorCreationDTO } from './author.model';
import { Formik, FormikHelpers } from 'formik';
import TextField from '../utilities/TextField';
import DateField from '../forms/DateField';
import MarkDownfield from '../forms/MarkDownfield';

export default function AuthorForm(props:authorFormProps) {
    return (
        <>
        <Formik initialValues={props.model} onSubmit={props.onSubmit}>
            {(formikProps)=>(
                <form>
                    {/* <TextField field="name" display="Name"/> */}
                    <DateField field="dateOfBirth" display="Date Of Birth"/>
                    <MarkDownfield display="Author Biography" field="biography"/>
                    <button type="submit" disabled={formikProps.isSubmitting}>Save Changes</button>

                </form>
            )}
        </Formik>
        </>
    );
}
interface authorFormProps
{
model:authorCreationDTO;
onSubmit(values:authorCreationDTO,action:FormikHelpers<authorCreationDTO>):void;
}
