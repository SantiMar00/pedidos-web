import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from '../services/auth.service'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    let isAuth = true

    let user = AuthService.getCurrentUser()

    if (!user) {
        isAuth = false
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}

export default ProtectedRoute
