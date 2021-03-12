import React,{Component} from "react";
import useForm from "./useForm";
import validate from "./validate"
import { ReactComponent as ReactImg } from "./img.svg";
const SignUpForm = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);

    return (
        <div className="parent">
            <div className="child1">
                <form className="form" onSubmit={handleSubmit}>
                    <h1 className="text">Sign up</h1>
                    <h2 className="text">create your own ToDoList</h2>
                    <div className = 'form-input'>
                        <input type ='text' 
                        className='form-input'
                        name='name'    
                        placeholder="Name"
                        value = {values.name}
                        onChange = {handleChange}/>
                        {errors.name && <p>{errors.name}</p>}
                        {!errors.name && <p> </p>}
                    </div>
                    <div className = 'form-input'>
                        <input type ='text' 
                        className='form-input'
                        name = 'email'
                        placeholder="Email"
                        value = {values.email}
                        onChange = {handleChange}/>
                        {errors.email && <p>{errors.email}</p>}
                        {!errors.email && <p> </p>}
                    </div>
                    <div className = 'form-input'> 
                        <input type ='password' className='form-input' 
                        name = 'password'
                        placeholder="Password"
                        value = {values.password}
                        onChange = {handleChange}/>
                        {errors.password && <p>{errors.password}</p>}
                        {!errors.password && <p> </p>}
                    </div>
                    <div className = 'form-input'>
                        <input type ='password' className='form-input' 
                        name = 'password2'
                        placeholder="Confirm password"
                        value = {values.password2}
                        onChange = {handleChange}/>
                        {errors.password2 && <p>{errors.password2}</p>}
                        {!errors.password2 && <p> </p>}
                    </div>
                    <div className = 'form-input'>
                        <input type = 'radio' name = 'form_confirm' value="true"  onChange = {handleChange}></input>
                        <label htmlFor = 'form-confirm' className='form-label'>I have read and agreed with the <a href="#">terms</a> of ToDoList</label>
                        {errors.form_confirm && <p>{errors.form_confirm}</p>}
                        {!errors.form_confirm && <p> </p>}
                    </div>
                        <button className='form-submit'><h1>Submit</h1></button>                    
                </form>
            </div>

            <div className="child2">
                <ReactImg className="React_Img" />
            </div>
        </div>
    )
}

export default SignUpForm;