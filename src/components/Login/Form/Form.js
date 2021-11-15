import React, { useState } from 'react';
import { Form as Frm, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './form.css'
import { GoogleLoginButton } from "react-social-login-buttons";
const Form = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory()
    const { googleLogin, error, login, isLoading } = useAuth()
    console.log(loginData);
    const handleOnBlur = e => {
        const field = e.target.type;
        const value = e.target.value;
        const newLogInData = { ...loginData }
        newLogInData[field] = value;
        setLoginData(newLogInData);
    }
    const handleLogin = e => {
        e.preventDefault();
        e.target.value = '';
        login(loginData.email, loginData.password, location, history);
    }
    const handleGoogleLogin = e => {
        e.preventDefault();
        googleLogin(location, history);
    }
    return (

        <div className="form-container">{isLoading &&
            < Spinner animation="border" variant="dark" />
        }
            {!isLoading &&
                < Frm onSubmit={handleLogin} >
                    <Frm.Group className="mb-3" controlId="FrmBasicEmail">
                        <Frm.Label>Email address</Frm.Label>
                        <Frm.Control onBlur={handleOnBlur} type="email" placeholder="Enter email" />

                    </Frm.Group>

                    <Frm.Group className="mb-3" controlId="FrmBasicPassword">
                        <Frm.Label>Password</Frm.Label>
                        <Frm.Control onBlur={handleOnBlur} type="password" placeholder="Password" />
                    </Frm.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Frm >
            }
            <div>
                < h4 > Or </h4 >
                <GoogleLoginButton onClick={handleGoogleLogin} />
                <p style={{ 'color': 'red' }} >{error}</p>
                <p>New to this site? Please <Link to="/registration">Register</Link></p>
            </div>

        </div>


    );
};

export default Form;