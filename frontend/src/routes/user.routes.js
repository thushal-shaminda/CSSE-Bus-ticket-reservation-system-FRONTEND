import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../components/User/signin";

export default function UserRoutes() {
    return (
        <Routes>
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/user/signup" element={<h1>Sign Up</h1>} /> */}
        </Routes>
    );
    }
