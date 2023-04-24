import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostidPage from '../pages/PostidPage';
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route exact path="/posts/:id" element={<PostidPage/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="/" element={<Posts/>}/>
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;