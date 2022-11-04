import React from 'react';
import { Link } from "react-router-dom";

function Register() {
    return (
        <><div className="sign">
            <h1>Signup</h1>
        </div><div>
                <main className="box">
                    <form>
                        <div className="inputBox">
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email" id="Email" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name" id="Name"
                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Password"> Password</label>
                            <input type="password" name="Password" id="Password"

                                required />
                        </div>
                        <button type="submit" name="" style={{ float: "center" }}>Signup</button>
                        <h3>
                            <div className="inputBox" to="/login" style={{ float: "center" }}>Already signed up? Login now!</div>
                        </h3>


                    </form>

                </main>

                <footer>
                </footer>
            </div></>
    );
}

export default Register;