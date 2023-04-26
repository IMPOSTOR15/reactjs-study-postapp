import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import {publicRoutes, privateRoutes} from '../router'
import { AuthContext } from '../context';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import Loader from './UI/Loader/Loader';
const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loader/>
        
    }
    return (
        
            isAuth
                ?
                <Routes>   
                    {privateRoutes.map(route => 
                        <Route
                            key={route.path}
                            element={route.component}
                            path={route.path}
                            exact={route.exact}
                        />
                    )}
                    <Route path="/login" element={isAuth ? <Navigate to="/posts" /> : <Navigate to="/login"/>}/>
                </Routes> 
                :
                <Routes> 
                    {publicRoutes.map(route => 
                        <Route
                            key={route.path}
                            element={route.component}
                            path={route.path}
                            exact={route.exact}
                        />
                    )}
                    <Route path="/*" element={isAuth ? <Navigate to="/posts" /> : <Navigate to="/login"/>}/>
                </Routes>
                
    );
};

export default AppRouter;