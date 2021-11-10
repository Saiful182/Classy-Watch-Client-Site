
import { Form as Frm, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './form.css'

const Form = () => {

    const location = useLocation();
    const history = useHistory()
    const { googleLogin, error, setEmail, setPassword, login, isLoading } = useAuth()
    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }
    const handleLogin = e => {
        e.preventDefault();
        e.target.value = '';
        login(location, history);
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
                        <Frm.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Frm.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Frm.Text>
                    </Frm.Group>

                    <Frm.Group className="mb-3" controlId="FrmBasicPassword">
                        <Frm.Label>Password</Frm.Label>
                        <Frm.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Frm.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Frm >
            }


            <div>
                < h4 > Or login With < Button onClick={handleGoogleLogin} variant="primary" type="submit" >
                    Google
                </Button ></h4 >
                <p>{error}</p>
                <p>New to this site? Please <Link to="/registration">Register</Link></p>
            </div>

        </div>


    );
};

export default Form;