import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config/AppConfig';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Need to Call the API
    loadUser();
  }, []);

  const loadUser = async () => {
    let users = await axios.get(BASE_URL + '/users');
    setUsers(users.data.reverse());
    console.log(users);
  }
  const deleteUser = async (id) => {
    await axios.delete(`${BASE_URL}/users/${id}`);
    loadUser();
  }

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {
              return (
                <tr>
                  <th >{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn mr-2 btn-primary" to={`/users/${user.id}`}>View</Link>
                    <Link className="btn mr-2 btn-info" to={`/users/edit/${user.id}`}> Edit</Link>
                    <Link className="btn mr-2 btn-danger" to="" onClick={() => deleteUser(user.id)}> Delete</Link>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default Home;