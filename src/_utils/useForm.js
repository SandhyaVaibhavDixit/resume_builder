import { useState, useEffect } from 'react';
import validate from "../_utils/validate";
import { verifyFile } from '../_utils/verifyFile';

const useForm = (callback, dataStructure) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setValues({});
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values, dataStructure));
    setIsSubmitting(true);
  };

  const handleFileChange = (event) => {
    event.persist();
    const file = event.target.files[0];
    const acceptedFileExtension = ['png', 'jpg', 'jpeg', 'gif', 'txt', 'doc', 'docx', 'pdf'];
    if ( file !== undefined && verifyFile(file, acceptedFileExtension)){
        setValues(values => ({ ...values, fileName: file.name, file: file }));
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleFileChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;