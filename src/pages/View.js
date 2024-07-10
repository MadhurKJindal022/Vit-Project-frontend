import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import "../styles/View.css";

function View() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/getusers")
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
      .delete("http://localhost:4000/users/deleteuser/" + id)
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


  const updateData = (id) => {
    const user = users.find((user) => user._id === id);
    setSelectedUser(user);
  };

  const handleUpdateSubmit = (event) => {
  event.preventDefault();
  axios
    .put("http://localhost:4000/users/updateuser/" + selectedUser._id, selectedUser)
    .then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        alert("User updated successfully");
        window.location.reload();
      } else {
        Promise.reject();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({
      ...selectedUser,
      [name]: value,
    });
  };


  const display = (data) => {
    return data.map((user) => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.phone}</td>
        <td>{user.petId}</td>
        <td>{user.petName}</td>
        <td>{user.adoptionConfirm ? "Yes" : "No"}</td>
        <td>{user.address}</td>
        <td>
          <button
            onClick={() => {
              deleteData(user._id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              updateData(user._id);
            }}
          >
            Update
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <Layout>
      <h1>View Page</h1>
      <table>
        <thead>
          <tr>
            <th>_Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone No</th>
            <th>Pet Id</th>
            <th>Pet Name</th>
            <th>Adoption Confirm</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{display(users)}</tbody>
      </table>
      {selectedUser && (
  <div className="update-form">
    <h2>Update User</h2>
    <form onSubmit={handleUpdateSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={selectedUser.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={selectedUser.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={selectedUser.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={selectedUser.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Pet Id:
        <input
          type="text"
          name="petId"
          value={selectedUser.petId}
          onChange={handleChange}
        />
      </label>
      <label>
        Pet Name:
        <input
          type="text"
          name="petName"
          value={selectedUser.petName}
          onChange={handleChange}
        />
      </label>
      <label>
        Adoption Confirm:
        <input
          type="checkbox"
          name="adoptionConfirm"
          checked={selectedUser.adoptionConfirm}
          onChange={(e) =>
            handleChange({ target: { name: "adoptionConfirm", value: e.target.checked } })
          }
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={selectedUser.address}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  </div>
)}
    </Layout>
  );
}

export default View;
