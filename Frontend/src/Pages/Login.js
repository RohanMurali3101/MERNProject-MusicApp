import React, { useState } from 'react';
import Layout from "../Components/Layout";
import "../Styles/SignUp.css";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let inputObj = { username, password };
        let url = "http://localhost:4000/users/login";

        axios
            .post(url, inputObj)
            .then((res) => {
                if (res.status === 200) {
                    alert("Login Successful");
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Login Failed");
            });
    }

    return (
        <Layout>
          <center>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Login" />
            </form>
          </center>
        </Layout>
    )
}

export default Login;
