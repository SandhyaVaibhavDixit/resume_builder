import { useState, useEffect } from 'react';
import validate from "../_utils/validate";
import { verifyFile } from '../_utils/verifyFile';

const useForm = (callback, formInputs) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
  }, [errors, isSubmitting, values, callback]);

  const onSubmit = (event) => {
    if (event) event.preventDefault();

    const errors = validate(values, formInputs);

    setErrors(errors);
    setIsSubmitting(true);
  };

  const onFileChange = (event) => {
    event.persist();
    
    const file = event.target.files[0];
    const acceptedFileExtension = ['png', 'jpg', 'jpeg', 'gif', 'txt', 'doc', 'docx', 'pdf'];
    
    if ( file !== undefined && verifyFile(file, acceptedFileExtension)){
        setValues(values => ({ ...values, fileName: file.name, file: file }));
    }
  };

  const onChange = (event) => {
    event.persist();
    
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    onChange,
    onFileChange,
    onSubmit,
    values,
    errors,
  }
};

export default useForm;