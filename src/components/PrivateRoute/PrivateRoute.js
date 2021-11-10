import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const spinnerStyle = {
        position: "fixed", top: "10%", left: "50%"
    };
    const { user, isLoading } = useAuth();
    if (isLoading) {

        return <Spinner style={spinnerStyle} animation="border" variant="dark" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>
                )}
        >
        </Route >
    );
};

export default PrivateRoute;