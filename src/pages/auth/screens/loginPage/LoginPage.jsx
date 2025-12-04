import Input from "../../../../components/common/input/input";
import Button from "../../../../components/common/button/Button";
import "./LoginPage.css"
import logo from "../../../../assets/logo.jpg"
import { useState,useEffect } from "react";
function LoginPage() {
const initialValues={email:"",password:""};
const[formValues,setFormValues]=useState(initialValues);
const[errors,setErrors]=useState({});
const[isSubmit,setIsSubmit]=useState(false);

const handleChange=(e)=>{
    const { name,value } = e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
};

const handleSubmit=(e)=>{
    e.preventDefault();
   setErrors(validate(formValues)); 
   setIsSubmit(true);
};

useEffect(()=>{
   if (Object.keys(errors).length === 0 && isSubmit){
        console.log(formValues);
   }

},[errors])

const validate= (values)=>{
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!values.email){
        errors.email="email is required";
    } else if(!regex.test(values.email)){
        errors.email="enter a valid email!"    
    }
    if(!values.password){
        errors.password="password is required";
    } else if(values.password.length < 4){
        errors.password="password must be more than 4 characters"
    }else if(values.password.length > 10){
        errors.password="password must be less than 10 characters"
    }
    return errors;
}

    return (
        <div className="login-wrapper">
            <div className="right-part">
                <h1>Hello SaleSkip</h1>
                <p>Skip the repetitive and manual sales-marketing tasks.
                    Get highly productive through automation and save tons 
                    of time.
                </p>
            </div>
            <div className="left-part">
                <div>
                    <h1 className="h-tag">SaleSkip</h1>
                </div>
                <form className="login-ctn" onSubmit={handleSubmit}>
                    <h1>Welcome Back!</h1>
                    <p>don't have an account <a href="#">create new account?</a></p>
                    <div className="email-ctn">
                        <Input
                            type='email'
                            label='E-mail'
                            id='email'
                            name='email'
                            placeholder='Enter your E-mail'
                            value={formValues.email}
                            onChange={handleChange}
                        />
                       <p style={{ color: "red", fontWeight: "bold" }}>{errors.email}</p>
                    </div>
                    <div className="pass-ctn">
                        <Input
                            type='password'
                            label='Password'
                            id='password'
                            name='password'
                            placeholder='Enter your Password'
                             value={formValues.password}
                             onChange={handleChange}
                        />
                       <p style={{ color: "red", fontWeight: "bold" }}>{errors.password}</p>
                    </div>
                    <div className="bt-ctn">
                        <Button
                            label='LoginNow'
                            variant='secondary '
                        />
                    </div>
                    <div className="icon-bt">
                        <Button
                            label='Login with Google'
                            variant='primary'
                            icon={<img src={logo}></img>}
                        />
                    </div>
                    <p style={{ paddingLeft:"20% "}}>forget password <a href="#">click here</a></p>
                </form>
            </div>
        </div>
    );
}
export default LoginPage;