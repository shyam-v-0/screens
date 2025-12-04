import "./Login.css"
function AdminPage() {
    return (
        <div className="parent-ctn">
            <div className="auth-lft">
                <h1>Kural</h1>
                <div className="tamil">குரல்</div>
                <p>Your Family's Voice-First AI Life Manager</p>

                <div className="features">
                    <div>Manage your entire family from one dashboard</div>
                    <div>Track expenses and budgets in real-time</div>
                    <div>AI-powered family memory assistance</div>
                </div>
            </div>

            <div className="auth-right">
                <h1>Welcome back</h1>
                <p>sign in to your admin dashboard</p>

                <form className="auth-form">
                    <div className="input-wrapper">
                        <label className="label-ctn">email or phone</label>
                        <input
                            type="text"
                            placeholder="Enter your email or phone"
                        />
                    </div>

                    <div className="input-wrapper">
                        <label className="label-ctn">password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="remember-ctn">
                        <input type="checkbox" />
                        <label>Remember Me</label>
                        <a href="1">Forgot Password?</a>
                    </div>

                    <button
                        type="button"
                        onClick={() => alert("Admin logged in")}
                    >
                        Sign In
                    </button>

                    <h5 className="extra-ctn">------- or continue with -------</h5>

                    <button type="button" className="google-ctn">
                        <img
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                            alt="google logo"
                            className="google-icon"
                        />
                        Continue with Google
                    </button>

                    <div className="last-ctn">
                        <h4>
                            Don't have an account?{" "}
                            <a href="2">create family account</a>
                        </h4>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminPage;
