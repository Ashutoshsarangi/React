import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../../config/AppConfig';

const AddUser = (props) => {
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
  const saveUser = async (event) => {
    event.preventDefault();
    // console.log('post User', user);
    let result = await axios.post(BASE_URL + '/users', user);
    if (result.status === 201) {
      console.log('result', result);
      props.history.push('/');
    }
  }
  return (
    <>
      <Jumbotron>
        <h1>Add User</h1>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="name" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="username" placeholder="Enter User Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="email" placeholder="Enter User Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="phone" placeholder="Enter User Phone Number" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => changeHandler(event)} id="website" placeholder="Enter User WebSite" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(event) => saveUser(event)}>Submit</button>
        </form>
      </Jumbotron>
    </>
  );
}

export default AddUser;