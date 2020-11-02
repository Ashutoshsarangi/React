import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../../config/AppConfig';

const EditUser = (props) => {
  const id = props.match.params.id;
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  const changeHandler = (event) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value
    });
  }
  useEffect(() => {
    loadUser(id);
  }, []);
  const loadUser = async (id) => {
    let result = await axios.get(`${BASE_URL}/users/${id}`);
    console.log(result);
    setUser(result.data);
  }
  const updateUser = async (event) => {
    event.preventDefault();
    // console.log('post User', user);
    let result = await axios.put(`${BASE_URL}/users/${id}`, user);
    if (result.status === 200) {
      console.log('result', result);
      props.history.push('/');
    }
  }
  return (
    <>
      <Jumbotron>
        <h1>Edit User</h1>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="name" placeholder="Enter Name" value={user.name} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="username" placeholder="Enter User Name" value={user.username} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="email" placeholder="Enter User Email" value={user.email} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="phone" placeholder="Enter User Phone Number" value={user.phone} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="website" placeholder="Enter User WebSite" value={user.website} />
          </div>
          <button type="submit" className="btn btn-warning btn-lg btn-block" onClick={(event) => updateUser(event)}>Update User</button>
        </form>
      </Jumbotron>
    </>
  );
}

export default EditUser;