import { useState, useEffect, } from "react";
import Button from "../../../../components/common/button/Button";
import Input from "../../../../components/common/input/input";
import GoogleIcon from "../../../../assets/google icon.jpg";
import FaceBookIcon from "../../../../assets/facebook.jpg";
import TwitterIcon from "../../../../assets/Twitter.jpg";
import "./SignUp.css";

function SignUp() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [errors, isSubmit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.username) {
            errors.username = "enter a valid username"
        }
        if (!values.email) {
            errors.email = "email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "enter a valid email!"
        }
        if (!values.password) {
            errors.password = "password is required";
        } else if (values.password.length < 4) {
            errors.password = "password must be more than 4 characters"
        } else if (values.password.length > 10) {
            errors.password = "password must be less than 10 characters"
        }
        return errors;
    };

    return (
        <div className="signup-wrapper">
            <div className="right-part">
                <h1>Hello SaleSkip</h1>
                <p>Skip the repetitive and manual sales-marketing tasks.
                    Get highly productive through automation and save tons
                    of time.
                </p>
            </div>
            <div className="left-part">
            <h1>Create Account</h1>
            <div className="icons">
                <img src={GoogleIcon} alt="google"></img>
                <img src={FaceBookIcon} alt="faceBook"></img>
                <img src={TwitterIcon} alt="twitter"></img>
            </div>
            <form className="form-ctn" onSubmit={handleSubmit}>
                <div className="user-ctn">
                    <Input
                        type='text'
                        placeholder='Enter the user name'
                        label='UserName'
                        id='username'
                        name='username'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red", fontWeight: "bold" }}>{errors.username}</p>
                </div>
                <div className="email-ct">
                    <Input
                        type='email'
                        placeholder='Enter the E-mail'
                        label='email'
                        id='email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red", fontWeight: "bold" }}>{errors.email}</p>
                </div>
                <div className="pass-ct">
                    <Input
                        type='password'
                        placeholder='Enter the password'
                        label='password'
                        id='password'
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red", fontWeight: "bold" }}>{errors.password}</p>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                    />
                    <label htmlFor="agree">
                        I agree to <a href="#">Terms</a> and <a href="#">Policy</a>
                    </label>
                </div>

                <div className="button-ctn">
                    <Button
                        label='Signup'
                        variant='secondary'
                    />
                </div>
                <p>Already have an account? <a href="#">Login</a></p>
            </form>
            </div>
        </div>
    );
}
export default SignUp;