import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const AuthGuard = ({children}) => {
    // const user = useSelector((state) => state.user);
    const isAuthenticated = JSON.parse(sessionStorage.getItem('HemrajMahawar'))
    let location = useLocation();

    if(!isAuthenticated?.jwtToken) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default AuthGuard;