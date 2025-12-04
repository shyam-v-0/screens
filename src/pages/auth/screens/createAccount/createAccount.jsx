import Button from "../../../../components/common/button/Button";
import Input from "../../../../components/common/input/input";
import "./createAccount.css";
function CreateAccount() {
    return (
        <div className="parent-ctn">
        <div className="create-ctn">
            <div className="left-ctn">
                
              <h1>Kural</h1>  
              <div className="tamil">குரல்</div>
              <p>Create your family account and start organizing together</p>
              <div className="features">
                <div>Secure and private family data</div>
                <div>Sync across mobile & web</div>
                <div>Tamil,Hindi,Telugu & English support</div>
              </div>
            </div>
            <div className="right-ctn">
                <div className="auth-form">
                    <h2>Create Account</h2>
                    <p>Start your family journey with kural</p>
                    <form className="form-ctn">
                        <div className="f-ctn">
                            <Input
                                type="text"
                                name="text"
                                placeholder="e.g.,The Sharma Family"
                                label="Family Name"
                            />
                        </div>
                        <div className="name-ctn">
                            <Input
                                type="text"
                                name="text"
                                placeholder="enter your full name"
                                label="Your Name"
                            />
                        </div>
                        <div className="e-ctn">
                            <Input
                                type="email"
                                name="email"
                                placeholder="enter your email"
                                label="Email"
                            />
                        </div>
                        <div className="phone-ctn">
                            <Input
                                type="tel"
                                name="tel"
                                placeholder="enter phone Number"
                                label="Phone Number"
                            />
                        </div>
                        <div className="pass-ctn">
                            <Input
                                type="password"
                                name="password"
                                placeholder="create a strong password"
                                label="Password"
                            />
                        </div>
                        <div className="checkbox-ctn">
                            <label className="form-checkbox">
                                <input type="checkbox" />
                                <span>
                                    I agree to the <a href="#" className="form-link">Terms of Service</a> and
                                    <a href="#" className="form-link">Privacy Policy</a>
                                </span>
                            </label>
                        </div>


                        <div className="b-ctn">
                            <Button
                                label="Create Account"
                            />
                        </div>
                        <div className="footer">
                            <p>Already have an account? <a href="#">signin</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
export default CreateAccount;