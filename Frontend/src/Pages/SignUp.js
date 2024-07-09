import React, { useState } from "react";
import Layout from "../Components/Layout";
import "../Styles/SignUp.css";
import axios from "axios";
function SignUp() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    let inputObj = {name,username,email,mobile,password};
    let url = "https://mernproject-musicapp-backend.onrender.com/users/createUser";
    axios
      .post(url, inputObj)
      .then((res) => {
        if (res.status === 200) {
          alert("User Created Successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <center>
        <h1>SignUp page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Mobile"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </center>
    </Layout>
  );
}
//useState() and useEffect() : react hooks
// react hooks helps us to use class based components into functional components
export default SignUp;
