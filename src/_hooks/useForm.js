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

  const onSubmit = (e) => {
    if (e) e.preventDefault();

    const errors = validate(values, formInputs);

    setErrors(errors);
    setIsSubmitting(true);
  };

  const onFileChange = (e) => {
    e.persist();
    
    const file = e.target.files[0];
    const acceptedFileExtensions = ['png', 'jpg', 'jpeg', 'gif', 'txt', 'doc', 'docx', 'pdf'];
    
    if ( file !== undefined && verifyFile(file, acceptedFileExtensions)){
        setValues(values => ({ ...values, fileName: file.name, file: file }));
    }
  };

  const onChange = (e) => {
    e.persist();
    
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
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