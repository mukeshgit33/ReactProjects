import React from 'react';
import { categoryCreationDTO } from './category.model';
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '../utilities/Button';
import TextField from '../utilities/TextField';
import axios from 'axios'; // Import axios for making the API request

export default function CategoryForm({ model, onSubmit }: CategoryformProps) {

    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required("Category name is required").min(3, "At least 3 characters"),
    });

    // Handle form submission
    const handleSubmit = async (values: categoryCreationDTO, actions: FormikHelpers<categoryCreationDTO>) => {
        try {
            // Example API call using axios
            const response = await axios.post('your-api-endpoint-here', values);
            console.log('API Response:', response.data);
            
            // If needed, you can pass the response to your `onSubmit` function
            onSubmit(values, actions);
        } catch (error) {
            console.error('API error:', error);
            actions.setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={model}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} // Call handleSubmit here
        >
            {({ isSubmitting }) => (
                <form>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Category Name:</label>
                        <Field
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Category Name"
                            className="form-control"
                        />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    <button
                        className="btn btn-primary"
                        disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            )}
        </Formik>
    );
}

interface CategoryformProps {
    model: categoryCreationDTO;
    onSubmit(values: categoryCreationDTO, action: FormikHelpers<categoryCreationDTO>): void;
}
