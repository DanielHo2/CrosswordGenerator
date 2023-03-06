import React, {useState, useEffect} from "react";
import RobotImg from "../../assets/img/robot.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { googleLogin, useGoogleLogin, googleLogout, GoogleLogin } from '@react-oauth/google';
import * as z from "zod";
import axios from 'axios';
import { loginStore } from './Store/authSlice';

const formSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "password must be at least 6 characters")
})

function Login(props) {

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        const token = user.access_token;
                        dispatch(loginStore({token}));
                        localStorage.setItem("authToken", user.access_token);
                        navigate("/", {replace: false});
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
    }
    //const { setUser } = props;
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    //create login handler
    const loginHandler = (data) => {

    };

    // const responseGoogle = (res) => {
    //     console.log('Failed');
    // }
    
    // const successLogin = () => {
    //     console.log('success');
    //     navigate("/", {replace: true});
    // }

    return (
        <>
            {/* Login Section  */}
            <section className="login">
                <div className="container">
                    <div className="about-box">
                        <h2>Login to your Account</h2>
                        <button onClick={() => login()}>Login with Google</button>
                        {/* <GoogleLogin
                            onSuccess={successLogin}
                            onFailure={responseGoogle}
                        /> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
