import { Field, useFormikContext } from 'formik';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import "./MarkDownField.css";

export default function MarkDownfield(props:MarkDownFieldProps) {
    const{values}=useFormikContext<any>();
    return (
        <>
        <div className="mb-3 mark-down-outer">
          <div>
            <Field as="textarea" name={props.field} className="form-textarea"/>
          </div>
        </div>
        <div>
            <label>{props.display}</label>
            <div className="markdown-inner">
               <ReactMarkdown>{values[props.field]}</ReactMarkdown>
            </div>
        </div>
        </>
    );
}
interface MarkDownFieldProps {
    field:string;
    display:string;
}