import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./auth"

function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component{...props} />
                ) : (
                        <Redirect to="/SignIn" />
                    )
            }
        />
    );
}

export default PrivateRoute;