import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config/AppConfig';

const GetUser = (props) => {
  const id = props.match.params.id;
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  useEffect(() => {
    loadUser(id);
  }, []);
  const loadUser = async (id) => {
    let result = await axios.get(`${BASE_URL}/users/${id}`);
    console.log(result);
    setUser(result.data);
  }
  return (
    <>
      <Link className="btn btn-info" to="/">Go To Home</Link>
      <h1>Get User: {id}</h1>
      <ul className="list-group">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">User Name: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone Number: {user.phone}</li>
        <li className="list-group-item">User WebSite: {user.website}</li>
      </ul>
    </>
  );
}

export default GetUser;