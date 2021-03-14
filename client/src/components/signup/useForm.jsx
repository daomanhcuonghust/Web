import {useState,useEffect, useCallback} from'react';
const useForm = (callback,validate) =>{
    const [values ,setValues] = useState({
        name:"",
        email:"",
        password:"",
        password2:"",
        form_confirm:""
    });

    const[errors, setErrors] = useState({});
    const[isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    useEffect(
        () => {
            if(Object.keys(errors).length === 0 && isSubmitting){
                callback();
            }
        },
        [errors]
    );
    return{handleChange,values,handleSubmit,errors};
};
export default  useForm;
