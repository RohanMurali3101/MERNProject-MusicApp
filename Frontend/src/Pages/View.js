import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";

function View() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("https://mernproject-musicapp-backend.onrender.com/users/getUsers")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteData = (id) => {
    axios
      .delete(`https://mernproject-musicapp-backend.onrender.com/users/deleteUser/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("User deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const display = (data) => {
    return data.map((user) => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td>{user.password}</td>
        <td>
          <button onClick={() => deleteData(user._id)}>Delete</button>
          <button onClick={() => setEditingUser(user)}>Update</button>
        </td>
      </tr>
    ));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    axios
      .put(`https://mernproject-musicapp-backend.onrender.com/users/updateUser/${editingUser._id}`, formData)
      .then((res) => {
        console.log(res.data);
        alert("User updated successfully");
        setEditingUser(null);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderUpdateForm = () => {
    if (editingUser) {
      return (
        <div>
          <h2>Update User</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleUpdate}>Update User</button>
        </div>
      );
    }
    return null;
  };

  return (
    <Layout>
      <center>
        <h1>View Page</h1>
        {renderUpdateForm()}
        <table>
          <thead>
            <tr>
              <th>_Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{display(users)}</tbody>
        </table>
      </center>
    </Layout>
  );
}

export default View;
