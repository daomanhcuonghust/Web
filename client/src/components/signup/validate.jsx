export default function validate(values) {
    let errors = {}
 
    if(!values.name){
        errors.name = 'name is required';
    }
    
    if(!values.email){
        errors.email = 'email is required';
    }
    else
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "email address is invalid";
    }

    if(!values.password){
        errors.password = "password is required";
    }
    else if(values.password.length<6){
        errors.password = "password is too short";
    }
    if(!values.password2){
        errors.password2 = "password is required";
    }
    else if(values.password !== values.password2){
        errors.password2 = "password do not match";
    }
    if(!values.form_confirm){
        errors.form_confirm = "you need to aggree with the terms";
    }
    return errors;
}