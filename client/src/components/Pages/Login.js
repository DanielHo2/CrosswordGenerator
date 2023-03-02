import React from "react";
import RobotImg from "../../assets/img/robot.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "password must be at least 6 characters")
})

function Login(props) {

    const { setUser } = props;
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    //create login handler
    const loginHandler = (data) => {

    };

    return (
        <>
            {/* Login Section  */}
            <section class="login">
                <div class="container">
                    <div class="about-box">
                        <h2>Login to your Account</h2>
                        <div classname="login-form">
                            <form onSubmit={handleSubmit(loginHandler)}>
                                <div className="email-login">
                                    <label htmlFor="email">
                                        {" "}
                                        <b>Email</b>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="name@abc.com"
                                        {...register("email")}
                                    />
                                    {errors.email && <p className="text-danger">{errors.email?.message}</p>}
                                    <label htmlFor="psw">
                                        <b>Password</b>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="8+ (a, A, 1, #)"
                                        {...register("password")}
                                    />
                                    {errors.password && <p className="text-danger">{errors.password?.message}</p>}
                                </div>
                                <button type="submit" className="btn-green">Login</button>
                                <br></br>
                                <Link className="signup__link" to="/signup">
                                    Create an Account
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
